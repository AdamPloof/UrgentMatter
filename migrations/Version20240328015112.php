<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Insert urgencies
 */
final class Version20240328015112 extends AbstractMigration
{
    public function getDescription(): string
    {
        return 'Insert urgency entities';
    }

    public function up(Schema $schema): void
    {
        $urgencies = [
            ['description' => 'Utterly inconsequential'],
            ['description' => 'Urgent'],
            ['description' => 'Really urgent'],
            ['description' => 'Extremely urgent'],
            ['description' => 'Ludicriously urgent'],
            ['description' => 'Absolutely freakin\' nuclear critically urgent'],
            ['description' => 'HAAAAAAALLLLLLPPPPPP!!!!'],
        ];

        foreach ($urgencies as $urgency) {
            $this->addSql('INSERT INTO urgency (description) VALUES (:description)', $urgency);
        }
    }

    public function down(Schema $schema): void
    {
        $this->addSql('DELETE FROM urgency WHERE id > 0');
    }
}
