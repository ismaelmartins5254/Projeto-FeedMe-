<?php

include_once ('conexao.php');

$nome = $_POST['Digite seu nome'];

$data = $POST['dataRes'];

$horario = $POST['hora'];

$sql_reseva = "INSERT INTO tb_usuarios (Digite se nome_usu, dataRes_usu, hora_usu values ('$nome ','$data', '$horario'))";

$reserva = new mysqli_stmt($conector,$sql_reseva);



mysqli_close($conector);



?>