<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Doctrine\ORM\EntityManagerInterface;

use App\Entity\Ticket;
use App\Entity\Urgency;
use App\Form\Type\TicketType;

class PortalController extends AbstractController {
    #[Route('/', name: 'index')]
    public function index(): Response {
        return $this->render('index.html.twig', [
            'foo' => 'foo',
        ]);
    }

    #[Route('/portal', name: 'portal', methods: ['GET', 'POST'])]
    public function portal(Request $request, EntityManagerInterface $em): Response {
        $ticket = new Ticket();
        $form = $this->createForm(TicketType::class, $ticket);

        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            /** @var Ticket $ticket */
            $ticket = $form->getData();
            $submitted = new \DateTime();
            $ticket->setSubmitted($submitted);
            $em->persist($ticket);
            $em->flush();

            return $this->redirectToRoute('ticket_submitted', [
                'title' => 'Urgent Matter - Portal',
                'ticketId' => $ticket->getId()
            ]);
        }

        $avatars = $this->getParameter('app.avatars');

        return $this->render('portal.html.twig', [
            'form' => $form,
            'avatars' => $avatars
        ]);
    }

    // TODO: people shouldn't be able to navigate to this unless they submitted the ticket.
    //       Maybe check that there's a cookie set?
    #[Route('/portal/ticket-submitted/{ticketId}', name: 'ticket_submitted', requirements: ['ticketId' => '\d+'])]
    public function ticketSubmitted(EntityManagerInterface $em, int $ticketId): Response {
        /** @var Ticket $ticket */
        $ticket = $em->getRepository(Ticket::class)->find($ticketId);
        if (!$ticket) {
            $this->addFlash('danger', 'There was an error submiting your ticket. Sorry, IT problems!');
            $this->redirectToRoute('portal');
        }

        return $this->render('ticket_submitted.html.twig', [
            'title' => 'Urgent Matter - Ticket Submitted',
            'ticketId' => $ticket->getId(),
            'submitter' => $ticket->getSubmitter()
        ]);
    }
}
