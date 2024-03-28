<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240328020544 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE ticket ADD COLUMN submitted DATETIME NOT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TEMPORARY TABLE __temp__ticket AS SELECT id, urgency_id, submitter, email, subject, body, avatar FROM ticket');
        $this->addSql('DROP TABLE ticket');
        $this->addSql('CREATE TABLE ticket (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, urgency_id INTEGER NOT NULL, submitter VARCHAR(80) NOT NULL, email VARCHAR(255) DEFAULT NULL, subject VARCHAR(255) NOT NULL, body CLOB NOT NULL, avatar VARCHAR(80) DEFAULT NULL, CONSTRAINT FK_97A0ADA34D44979A FOREIGN KEY (urgency_id) REFERENCES urgency (id) NOT DEFERRABLE INITIALLY IMMEDIATE)');
        $this->addSql('INSERT INTO ticket (id, urgency_id, submitter, email, subject, body, avatar) SELECT id, urgency_id, submitter, email, subject, body, avatar FROM __temp__ticket');
        $this->addSql('DROP TABLE __temp__ticket');
        $this->addSql('CREATE INDEX IDX_97A0ADA34D44979A ON ticket (urgency_id)');
    }
}
