<?php

namespace App\Entity\UnicabOrg;

use App\Repository\UnicabOrg\CargaProfesorRepository;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\ORM\Mapping\Table;
use Doctrine\ORM\Mapping\Entity;

//#[ORM\Entity(repositoryClass: CargaProfesorRepository::class)]
#[Entity]
#[Table(name: 'carga_profesor')]
class CargaProfesor
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(name:'id_profesor', nullable: true)]
    private ?int $id_profesor = null;

    #[ORM\Column(name:'id_grado', nullable: true)]
    private ?int $id_grado = null;

    #[ORM\Column(name:'id_materia', nullable: true)]
    private ?int $id_materia = null;

    #[ORM\Column(name:'id_empleado', nullable: true)]
    private ?int $id_empleado = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getIdProfesor(): ?int
    {
        return $this->id_profesor;
    }

    public function setIdProfesor(int $id_profesor): static
    {
        $this->id_profesor = $id_profesor;

        return $this;
    }

    public function getIdGrado(): ?int
    {
        return $this->id_grado;
    }

    public function setIdGrado(int $id_grado): static
    {
        $this->id_grado = $id_grado;

        return $this;
    }

    public function getIdMateria(): ?int
    {
        return $this->id_materia;
    }

    public function setIdMateria(int $id_materia): static
    {
        $this->id_materia = $id_materia;

        return $this;
    }

    public function getIdEmpleado(): ?int
    {
        return $this->id_empleado;
    }

    public function setIdEmpleado(int $id_empleado): static
    {
        $this->id_empleado = $id_empleado;

        return $this;
    }
}
