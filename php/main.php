<?php

echo "Nome Completo: ".$_POST['nome']." ".$_POST['sobre'];

echo "<br><br>Data de Nascimento: ".$_POST['data'];

if (isset($_POST['sexo'])) {
    echo("<br><br>Sexo: ".$_POST['sexo']);
}

echo "<br><br>Telefone: ".$_POST['telefone'];

echo "<br><br>CPF: ".$_POST['cpf']; 

echo "<br><br>Endereço: ".$_POST['endereco'];

echo "<br><br>Email: ".$_POST['email'];

echo "<br><br>Senha: ".$_POST['senha'];

echo "<br><br>Username: ".$_POST['login'];

echo "<br><br>Áreas de Interesse: ";
if(isset($_POST['ex'])){
    echo "<br>- Exatas";
}
if(isset($_POST['ch'])){
    echo "<br>- Ciências Humanas";
}
if(isset($_POST['cn'])){
    echo "<br>- Ciências da Natureza";
}
if(isset($_POST['lc'])){
    echo "<br>- Liguagens e Códigos";
}

?>