<?php

namespace App\Service;

use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\AbstractNormalizer;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;

use App\Entity\Ticket;

class TicketSerializer {
    private Serializer $serializer;
    private array $context;

    public function __construct() {
        $normalizer = new ObjectNormalizer();
        $encoder = new JsonEncoder();
        $this->serializer = new Serializer([$normalizer], [$encoder]);

        $stringifyDate = function (\DateTime $date): string {
            return $date->format('m/d/Y');
        };

        $this->context = [
            AbstractNormalizer::IGNORED_ATTRIBUTES => [
                'tickets',
                'lazyObjectState'
            ],
            AbstractNormalizer::CALLBACKS => [
                'submitted' => $stringifyDate
            ]
        ];
    }

    /**
     * @param Ticket|Ticket[] $tickets can either be a single ticket or an array of them
     * @return string the serialized ticket(s)
     */
    public function serialize(Ticket|array $tickets): string {
        return $this->serializer->serialize($tickets, 'json', $this->context);
    }
}