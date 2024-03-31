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
        ]);
    }

    #[Route('/service-board/fetch/{id}', name: 'service_board_fetch', requirements: ['id' => '\d+'])]
    public function fetch(
        EntityManagerInterface $em,
        TicketSerializer $serializer,
        int $id
    ): Response {
        $ticket = $em->getRepository(Ticket::class)->find($id);
        if (!$ticket) {
            $response = new Response(json_encode([
                    'error' => "Ticket not found for id: $id"
                ]),
                400,
                ['Content-Type' => 'application/json']
            );
        } else {
            $response = new Response(
                $serializer->serialize($ticket),
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
}
