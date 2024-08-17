<?php

namespace App\Controller\Comun;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class BaseController extends AbstractController
{
    public function FormatoCOP($numero, $decimales): string
    {
        try {
            $numero = empty($numero) ? 0 : $numero;
            return "$ " . number_format((float)$numero, $decimales, '.', ',');
        } catch (\Exception $ex) {
        }
    }

    public function FormatoNumerico($numero, $decimales): string
    {
        try {
            $numero = empty($numero) ? 0 : $numero;
            return number_format((float)$numero, $decimales, '.', ',');
        } catch (\Exception $ex) {
        }
    }
}
