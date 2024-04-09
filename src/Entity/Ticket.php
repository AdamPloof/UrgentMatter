<?php

namespace App\Entity;

use App\Repository\TicketRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: TicketRepository::class)]
class Ticket
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 80)]
    private ?string $submitter = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $email = null;

    #[ORM\Column(length: 255)]
    private ?string $subject = null;

    #[ORM\Column(type: Types::TEXT)]
    private ?string $body = null;

    #[ORM\Column(length: 80, nullable: true)]
    private ?string $avatar = null;

    #[ORM\ManyToOne(inversedBy: 'tickets')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Urgency $urgency = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE)]
    private ?\DateTimeInterface $submitted = null;

    private bool $isFaux = false;
    private bool $hasPrev = false;
    private bool $hasNext = false;

    // Note: don't actually use this to set IDs of Tickets that will
    // be persisted to the database. This is just so that we can
    // set the ID of faux Tickets.
    public function setId(int $id): static {
        $this->id = $id;

        return $this;
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getSubmitter(): ?string
    {
        return $this->submitter;
    }

    public function setSubmitter(string $submitter): static
    {
        $this->submitter = $submitter;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(?string $email): static
    {
        $this->email = $email;

        return $this;
    }

    public function getSubject(): ?string
    {
        return $this->subject;
    }

    public function setSubject(string $subject): static
    {
        $this->subject = $subject;

        return $this;
    }

    public function getBody(): ?string
    {
        return $this->body;
    }

    public function setBody(string $body): static
    {
        $this->body = $body;

        return $this;
    }

    public function getAvatar(): ?string
    {
        return $this->avatar;
    }

    public function setAvatar(?string $avatar): static
    {
        $this->avatar = $avatar;

        return $this;
    }

    public function getUrgency(): ?Urgency
    {
        return $this->urgency;
    }

    public function setUrgency(?Urgency $urgency): static
    {
        $this->urgency = $urgency;

        return $this;
    }

    public function getSubmitted(): ?\DateTimeInterface
    {
        return $this->submitted;
    }

    public function setSubmitted(\DateTimeInterface $submitted): static
    {
        $this->submitted = $submitted;

        return $this;
    }

    public function isFaux(): bool {
        return $this->isFaux;
    }

    public function setIsFaux(bool $isFaux): void {
        $this->isFaux = $isFaux;
    }

    public function hasPrev(): bool {
        return $this->hasPrev;
    }

    public function setHasPrev(bool $hasPrev): void {
        $this->hasPrev = $hasPrev;
    }

    public function hasNext(): bool {
        return $this->hasNext;
    }

    public function setHasNext(bool $hasNext): void {
        $this->hasNext = $hasNext;
    }
}
