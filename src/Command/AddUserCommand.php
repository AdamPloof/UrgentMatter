<?php

namespace App\Command;

use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;
use Symfony\Component\Console\Helper\QuestionHelper;
use Symfony\Component\Console\Question\Question;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Doctrine\ORM\EntityManagerInterface;

use App\Entity\User;

#[AsCommand(
    name: 'app:add-user',
    description: 'Add or update a user',
)]
class AddUserCommand extends Command
{
    private EntityManagerInterface $em;
    private UserPasswordHasherInterface $hasher;

    public function __construct(EntityManagerInterface $em, UserPasswordHasherInterface $hasher) {
        parent::__construct();

        $this->em = $em;
        $this->hasher = $hasher;
    }

    protected function configure(): void
    {
        $this->addArgument('username', InputArgument::OPTIONAL, 'The name of the user to add or update');
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);
        /** @var QuestionHelper $helper */
        $helper = $this->getHelper('question');
        $username = $input->getArgument('username');
        if (!$username) {
            $userQuestion = new Question('Enter a username:');
            $username = $helper->ask($input, $output, $userQuestion);
        }

        $user = $this->em->getRepository(User::class)->findOneBy(['username' => $username]);
        $roles = [];
        if ($user !== null) {
            $io->note("Found existing user: $username");
            $successType = 'UPDATED';
            $passwordQuestion = new Question('Enter NEW password:');
        } else {
            $user = new User();
            $user->setUsername($username);
            $successType = 'CREATED';
            $passwordQuestion = new Question('Enter password:');
            $roles[] = 'ROLE_USER';
        }

        /** @var User $user */

        $passwordQuestion->setHidden(true);
        $password = $helper->ask($input, $output, $passwordQuestion);
        $hashed = $this->hasher->hashPassword($user, $password);
        $user->setPassword($hashed);

        $adminQuestion = new Question('Is this user an admin?');
        $isAdmin = $helper->ask($input, $output, $adminQuestion);
        if ($isAdmin) {
            $roles[] = 'ROLE_ADMIN';
        }

        $user->setRoles($roles);

        $this->em->persist($user);
        $this->em->flush();
        $io->success("User: $username $successType");

        return Command::SUCCESS;
    }
}
