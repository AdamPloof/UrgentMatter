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

            return $this->redirectToRoute('index');
        }

        $avatars = $this->getParameter('app.avatars');

        return $this->render('portal.html.twig', [
            'form' => $form,
            'avatars' => $avatars
        ]);
    }
}
