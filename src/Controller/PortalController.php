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
use App\Service\AntiBot;

class PortalController extends AbstractController {
    #[Route('/', name: 'index')]
    public function index(): Response {
        return $this->render('index.html.twig', [
            'foo' => 'foo',
        ]);
    }

    #[Route('/portal', name: 'portal', methods: ['GET', 'POST'])]
    public function portal(
        Request $request,
        EntityManagerInterface $em,
        AntiBot $antibot
    ): Response {
        $ticket = new Ticket();
        $form = $this->createForm(TicketType::class, $ticket);

        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $challenge = $form->get('antibot')->getData();
            if ($antibot->isBot($challenge)) {
                $this->addFlash(
                    'danger',
                    'Incorrect answer for anti-bot challenge. Please try again.'
                );

                return $this->render('portal.html.twig', [
                    'form' => $form,
                    'avatars' => $this->getParameter('app.avatars')
                ]);        
            }


            /** @var Ticket $ticket */
            $ticket = $form->getData();

            $submitted = new \DateTime();
            $ticket->setSubmitted($submitted);
            $em->persist($ticket);
            $em->flush();

            return $this->redirectToRoute('ticket_submitted', [
                'submitter' => $ticket->getSubmitter()
            ]);
        }

        return $this->render('portal.html.twig', [
            'form' => $form,
            'avatars' => $this->getParameter('app.avatars')
        ]);
    }

    #[Route('/portal/ticket-submitted', name: 'ticket_submitted')]
    public function ticketSubmitted(Request $request): Response {
        $submitter = $request->query->get('submitter', '');

        return $this->render('ticket_submitted.html.twig', [
            'title' => 'Urgent Matter - Ticket Submitted',
            'submitter' => $submitter
        ]);
    }
}
