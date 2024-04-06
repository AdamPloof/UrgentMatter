<?php

namespace App\Service;

/**
 * A poor man's CAPTCHA.
 * 
 * Verifies that ticket submitters at least know John
 */
class AntiBot {
    private array $keys;

    public function __construct(array $keys) {
        $this->keys = array_map([$this, 'normalizeKey'], $keys);
    }

    /**
     * Checkes whether the submitted anti-bot key matches
     * one of the configured keys. Like I said, poor man's CAPTCHA.
     * 
     * @param string $challenge the value submitted to the antibot field in the TicketType form 
     * @return bool 
     */
    public function isBot(string $challenge): bool {
        $isBot = true;
        $cleanChallenge = $this->normalizeKey($challenge);
        foreach ($this->keys as $key) {
            if ($cleanChallenge === $key) {
                $isBot = false;
                break;
            }
        }

        return $isBot;
    }

    /**
     * Remove all whitespace, actually remove anything except [a-zA-Z]
     * 
     * @param string $key 
     * @return string 
     */
    private function normalizeKey(string $key): string {
        $clean = preg_replace('/\W+/', '', $key);

        return strtolower($clean);
    }
}