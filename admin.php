<?php
include 'dbconfig.php';

$result = $conn->query("SELECT * FROM products");

while ($row = $result->fetch_assoc()) {
    echo "Product: " . $row['name'] . " - Price: $" . $row['price'] . "<br>";
}

$conn->close();
