<?php

namespace App\Form\Type;

use Symfony\Component\Form\AbstractType;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

use App\Entity\Ticket;
use App\Entity\Urgency;

class TicketType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('submitter', TextType::class, [
                'label' => 'Name',
                'help' => 'Your name'
            ])
            ->add('email', EmailType::class, [
                'label' => 'Email',
                'help' => 'Your email if you\'d like to stay in touch',
                'required' => false
            ])
            ->add('subject', TextType::class, [
                'label' => 'Subject',
            ])
            ->add('body',  TextareaType::class, [
                'label' => 'Description',
                'help' => 'A farewell message for John',
                'attr' => [
                    'rows' => 8,
                ],
            ])
            ->add('avatar', HiddenType::class, [
                'empty_data' => 'default.jpg',
            ])
            ->add('urgency', EntityType::class, [
                'label' => 'Urgency',
                'class' => Urgency::class,
                'choice_label' => 'description'
            ])
            ->add('antibot', TextType::class, [
                'label' => 'Challenge: where does John work?',
                'label_attr' => [
                    'class' => 'form-challenge'
                ],
                'mapped' => false,
                'help' => "Prove you're not a robot by entering the place where John works (for a little longer)"
            ])
            ->add('save', SubmitType::class, [
                'label' => 'Submit'
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void {
        $resolver->setDefaults([
            'data_class' => Ticket::class
        ]);
    }
}
