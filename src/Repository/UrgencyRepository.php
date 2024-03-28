<?php

namespace App\Repository;

use App\Entity\Urgency;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Urgency>
 *
 * @method Urgency|null find($id, $lockMode = null, $lockVersion = null)
 * @method Urgency|null findOneBy(array $criteria, array $orderBy = null)
 * @method Urgency[]    findAll()
 * @method Urgency[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UrgencyRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Urgency::class);
    }

    //    /**
    //     * @return Urgency[] Returns an array of Urgency objects
    //     */
    //    public function findByExampleField($value): array
    //    {
    //        return $this->createQueryBuilder('u')
    //            ->andWhere('u.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->orderBy('u.id', 'ASC')
    //            ->setMaxResults(10)
    //            ->getQuery()
    //            ->getResult()
    //        ;
    //    }

    //    public function findOneBySomeField($value): ?Urgency
    //    {
    //        return $this->createQueryBuilder('u')
    //            ->andWhere('u.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->getQuery()
    //            ->getOneOrNullResult()
    //        ;
    //    }
}
