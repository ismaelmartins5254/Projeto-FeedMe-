<?php
//
$servidor = "localhost";
$usuario = "root";
$senha = "";

$banco = "reserva";
//
try {

    $conector = mysqli_conect($servidor,$usuario,$senha,$banco);

    echo "Sua reserva foi feita com sucesso";

} catch (\Throwable $th) {
    echo "Reserva nao concluida" . $th;
}

//





?>