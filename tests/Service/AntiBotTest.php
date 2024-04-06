<?php

namespace App\Tests\Service;

use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;

use App\Service\AntiBot;

class AntiBotTest extends KernelTestCase {
    public function testIsBot(): void {
        $antibot = new AntiBot($this->getKeys());
        $challenges = ['some other place', 'dingo\'s', 'junk\'s place'];
        foreach ($challenges as $challenge) {
            $this->assertTrue(
                $antibot->isBot($challenge),
                "Expected challenge: $challenge to fail bot check"
            );
        }
    }

    public function testIsNotBot(): void {
        $antibot = new AntiBot($this->getKeys());
        $challenges = ['  foo    bar', 'theDININGROOM', 'monks cafe  '];
        foreach ($challenges as $challenge) {
            $this->assertFalse(
                $antibot->isBot($challenge),
                "Expected challenge: $challenge to pass bot check"
            );
        }
    }

    private function getKeys(): array {
        return [
            'foo bar',
            'the dining room',
            "Monk's cafe"
        ];
    }
}
