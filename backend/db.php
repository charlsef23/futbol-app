<?php
$servername = "localhost";
$username = "root";
$password = ""; // Cambia esto si tienes una contraseña para el usuario root
$dbname = "futbol";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>