<?php

namespace App\Tests\Service;

use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;
use Doctrine\ORM\EntityManagerInterface;

use App\Service\TicketGenerator;

class TicketGeneratorTest extends KernelTestCase {
    public function testGeneratesCorrectNumTickets(): void {
        self::bootKernel();
        $container = static::getContainer();
        $em = $container->get(EntityManagerInterface::class);
        $avatars = $this->getAvatars();
        $fauxDataPath = $container->getParameter('app.faux_ticket_data_path');

        $generator = new TicketGenerator($em, $avatars, $fauxDataPath);
        $numTickets = 20;
        $ticketCnt = count($generator->generate($numTickets));
        $this->assertEquals($numTickets, $ticketCnt,
            "Expected $numTickets tickets, got $ticketCnt"
        );
    }

    public function testMakesValidSubmittedDate(): void {
        self::bootKernel();
        $container = static::getContainer();
        $em = $container->get(EntityManagerInterface::class);
        $avatars = $this->getAvatars();
        $fauxDataPath = $container->getParameter('app.faux_ticket_data_path');

        $generator = new TicketGenerator($em, $avatars, $fauxDataPath);
        $submitted = $generator->makeSubmitted();

        $start = new \DateTime();
        $start->setTimestamp(TicketGenerator::START_DATE_RANGE);

        $end = new \DateTime();
        $end->setTimestamp(TicketGenerator::END_DATE_RANGE);

        $this->assertGreaterThan($start, $submitted, 'Expected submitted date to be after min start date');
        $this->assertLessThan($end, $submitted, 'Expected submitted date to be before max start date');
    }

    /**
     * @return string[] 
     */
    private function getAvatars(): array {
        return [
            'storm_trooper.jpg',
            'carl.jpg',
            'give_him_the_stick.jpg',
            'meatwad.jpg',
            'bridge_four.jpg',
            'mandalorian.jpg',
            'michael_bolton.jpg',
            'destiny.jpg',
            'krusty.jpg'
        ];
    }
}
