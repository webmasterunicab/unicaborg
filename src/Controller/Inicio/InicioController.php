<?php

namespace App\Controller\Inicio;

use App\Entity\UnicabOrg\CargaProfesor;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Doctrine\ORM\EntityManagerInterface;
use Exception;

class InicioController extends AbstractController
{
    private readonly EntityManagerInterface $em;

    public function __construct(EntityManagerInterface $em) 
    {
        //parent::__construct($OpcionesPerfilesColRepository, $SyslogColRepository);
        $this->em = $em;
    }

    #[Route('/inicio', name: 'app_inicio')]
    public function index(): Response
    {
        try {
            //$cargaProfesor = $this->em->getRepository(CargaProfesor::class)->findAll();
            $cargaProfesor = $this->em->getRepository(CargaProfesor::class)->findBy(['id_empleado' => 21]);
            if ($cargaProfesor == null) {
                $cargaProfesor = [];
            }
            //dd($cargaProfesor);
            // $cargaProfesorFinal = array();
            // foreach ($cargaProfesor as $registro) {
            //     $cargaProfesorTransformado = $registro;
            //     $cargaProfesorTransformado = array(
            //         "id_grado" => $registro["id_grado"],
            //         "id_materia" => $registro["id_materia"],
            //         "id_empleado" => $registro["id_empleado"]
            //     );
            //     $cargaProfesorFinal[] = $cargaProfesorTransformado;
            // }
        }
        catch (Exception $e) {
            $resultado = $e;            
        }        
        
        return $this->render('inicio/index.html.twig', [
            'controller_name' => 'InicioController',
            'cargaProfesor' => $cargaProfesor
        ]);
    }
}
