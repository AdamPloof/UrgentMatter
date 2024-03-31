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

    private int $currentId;
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

        // Setting current ID to something reasonably high so that we can be sure the
        // IDs don't conflict with real tickets
        $this->currentId = 10000;
    }

    /**
     * @param int $numTickets the number of tickets to generate
     * @return Ticket[] a collection of tickets
     */
    public function generate(int $numTickets): array {
        $tickets = [];
        for ($i = 0; $i < $numTickets; $i++) {
            $tickets[] = $this->buildTicket();
        }

        return $tickets;
    }

    public function buildTicket(): Ticket {
        $ticket = new Ticket();
        $ticket->setId($this->currentId);

        $fauxData = $this->fauxTicketData[array_rand($this->fauxTicketData)];
        $ticket->setSubmitted($this->makeSubmitted());
        $ticket->setSubmitter($fauxData['submitter']);
        $ticket->setEmail($fauxData['email']);
        $ticket->setAvatar($this->makeAvatar());
        // $ticket->setSubject($fauxData['subject']);
        // $ticket->setBody($fauxData['body']);

        $ticket->setSubject("Test subject IT request");
        $ticket->setBody("Test body my printer is not printing server is down.");

        $ticket->setUrgency($this->makeUrgency());

        $this->currentId++;

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

        return json_decode(file_get_contents($dataPath), true);
    }
}
