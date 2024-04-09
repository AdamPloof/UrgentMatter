<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Attribute\Route;
use Doctrine\ORM\EntityManagerInterface;

use App\Entity\Ticket;
use App\Service\TicketGenerator;
use App\Service\TicketSerializer;

class ServiceBoardController extends AbstractController {
    #[Route('/service-board', name: 'service_board')]
    public function serviceBoard(): Response {
        return $this->render('service_board.html.twig', [
            'title' => 'Urgent Matter - Service Board',
            'disable_flash_msgs' => true
        ]);
    }

    #[Route('/demo/service-board', name: 'service_board_demo')]
    public function serviceBoardDemo(): Response {
        return $this->render('service_board.html.twig', [
            'title' => 'Urgent Matter - Service Board',
            'disable_flash_msgs' => true,
            'demo_mode' => true
        ]);
    }
    
    #[Route('/service-board/view/{id}', name: 'view_ticket', requirements: ['id' => '\d+'])]
    public function viewTicket(int $id): Response {
        return $this->render('ticket.html.twig', [
            'title' => 'Urgent Matter - Ticket',
            'ticket_id' => $id,
            'disable_flash_msgs' => true
        ]);
    }

    #[Route('/demo/service-board/view/{id}', name: 'view_ticket_demo', requirements: ['id' => '\d+'])]
    public function viewTicketDemo(int $id): Response {
        return $this->render('ticket.html.twig', [
            'title' => 'Urgent Matter - Ticket',
            'ticket_id' => $id,
            'demo_mode' => true,
            'disable_flash_msgs' => true
        ]);
    }

    #[Route('/service-board/fetch/{id}', name: 'service_board_fetch', requirements: ['id' => '\d+'])]
    public function fetch(
        EntityManagerInterface $em,
        TicketSerializer $serializer,
        int $id
    ): Response {
        $ticketRepo = $em->getRepository(Ticket::class);

        /** @var Ticket $ticket */
        $ticket = $ticketRepo->find($id);
        if (!$ticket) {
            $response = new Response(json_encode([
                    'error' => "Ticket not found for id: $id"
                ]),
                400,
                ['Content-Type' => 'application/json']
            );
        } else {
            $prevTicket = $ticketRepo->find($id - 1);
            $ticket->setHasPrev($prevTicket ? true : false);

            $nextTicket = $ticketRepo->find($id + 1);
            $ticket->setHasNext($nextTicket ? true : false);

            $content = [
                'ticket' => json_decode($serializer->serialize([$ticket]), true)[0],
            ];
            $response = new Response(
                json_encode($content),
                200,
                ['Content-Type' => 'application/json']
            );
        }

        return $response;
    }

    #[Route('/service-board/fetch-all', name: 'service_board_fetch_all')]
    public function fetchAll(EntityManagerInterface $em, TicketSerializer $serializer): Response {
        $tickets = $em->getRepository(Ticket::class)->findAll();
        $response = new Response(
            $serializer->serialize($tickets),
            200,
            ['Content-Type' => 'application/json']
        );

        return $response;
    }

    #[Route('/service-board/generate/{num}', name: 'service_board_generate', requirements: ['num' => '\d+'])]
    public function generate(
        TicketSerializer $serializer,
        TicketGenerator $generator,
        int $num
    ): Response {
        $tickets = $generator->generate($num);
        $response = new Response(
            $serializer->serialize($tickets),
            200,
            ['Content-Type' => 'application/json']
        );

        return $response;
    }

    #[Route('/service-board/generate-one/{id}', name: 'service_board_generate_one', requirements: ['id' => '\d+'])]
    public function generateOne(
        TicketSerializer $serializer,
        TicketGenerator $generator,
        int $id = 0
    ): Response {
        /** @var Ticket $ticket */
        $ticket = $generator->generateOne($id);
        $ticket->setHasPrev(true);
        $ticket->setHasNext(true);
        $response = new Response(
            $serializer->serialize(['ticket' => $ticket]),
            200,
            ['Content-Type' => 'application/json']
        );

        return $response;
    }
}
