<?php
$servername = "localhost";
$username = "root";    // Change if different
$password = "";        // Change if different
$dbname = "ecommerce";  // Make sure your database name is correct

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
