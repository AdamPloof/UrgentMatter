<?php

namespace App\Service;

use Doctrine\ORM\EntityManagerInterface;

use App\Entity\Ticket;
use App\Entity\Urgency;

/**
 * A service for generate dummy tickets used for both demo mode
 * and the not-assigned-to-me Queues of the ServiceBoard
 */
class TicketGenerator {
    // Date ranges used to pick random dates between for submitted dates
    const START_DATE_RANGE = 1672531200; // 2023-01-01
    const END_DATE_RANGE = 1712534400; // 2024-04-08

    private array $fauxTicketData;
    private array $avatars;
    private EntityManagerInterface $em;

    public function __construct(
        EntityManagerInterface $em,
        array $avatars,
        string $fauxTicketDataPath
    ) {
        $this->em = $em;
        $this->avatars = $avatars;
        $this->fauxTicketData = $this->readFauxData($fauxTicketDataPath);
    }

    /**
     * @param int $numTickets the number of tickets to generate
     * @return Ticket[] a collection of tickets
     */
    public function generate(int $numTickets): array {
        $tickets = [];
        for ($i = 0; $i < $numTickets; $i++) {
            $fauxData = $this->pop();
            if (!$fauxData) {
                break;
            }

            $tickets[] = $this->buildTicket($fauxData);
        }

        return $tickets;
    }

    /**
     * @param int $numTickets the number of tickets to generate
     * @return Ticket[] a collection of tickets
     */
    public function generateOne(?int $ticketId = null): Ticket {
        return $this->buildTicket($this->pop($ticketId));
    }

    public function buildTicket(array $fauxData): Ticket {
        $ticket = new Ticket();
        $ticket->setId($fauxData['id']);
        $ticket->setSubmitted($this->makeSubmitted());
        $ticket->setSubmitter($fauxData['submitter']);
        $ticket->setEmail($fauxData['email']);
        $ticket->setAvatar($this->makeAvatar());
        $ticket->setSubject($fauxData['subject']);
        $ticket->setBody($fauxData['body']);
        $ticket->setUrgency($this->makeUrgency());
        $ticket->setIsFaux(true);

        return $ticket;
    }

    public function makeSubmitted(): \DateTimeInterface {
        $randTimestamp = rand(self::START_DATE_RANGE, self::END_DATE_RANGE);
        $submitted = new \DateTime();
        $submitted->setTimestamp($randTimestamp);

        return $submitted;
    }

    public function makeAvatar(): string {
        return $this->avatars[array_rand($this->avatars)];
    }

    public function makeUrgency(): Urgency {
        $urgencies = $this->em->getRepository(Urgency::class)->findAll();

        return $urgencies[array_rand($urgencies)];
    }

    private function readFauxData(string $dataPath): array {
        if (!file_exists($dataPath)) {
            throw new \Exception('Could not locate mock ticket data file');
        }

        $ticketData = json_decode(file_get_contents($dataPath), true);
        
        return array_filter($ticketData, function ($t) {
            return strlen($t['subject']) > 0 && strlen($t['body']) > 0;
        });
    }

    /**
     * Pull a faux ticket out of the dataset so that we don't generate duplicates
     * 
     * @param null|int $id the id of the faux data to use
     * @return null|array the ticket data or null if we're out of tickets in the dataset
     */
    private function pop(?int $id = null): ?array {
        if (empty($this->fauxTicketData)) {
            return null;
        }

        $fauxData = [];
        if ($id !== null ) {
            // IDs are sorted so this could be done with a faster search. Just sayin'
            foreach ($this->fauxTicketData as $idx => $ticketData) {
                if ($ticketData['id'] == $id) {
                    $fauxData = $ticketData;
                    unset($this->fauxTicketData[$idx]);
                    break;
                }
            }
        }

        if (empty($fauxData)) {
            $idx = array_rand($this->fauxTicketData);
            $fauxData = $this->fauxTicketData[$idx];
            unset($this->fauxTicketData[$idx]);
        }
        
        return $fauxData;
    }
}
