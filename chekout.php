<?php
include 'dbconfig.php';
session_start();

if (!isset($_SESSION['user_id'])) {
    echo "Please log in to complete the purchase.";
    exit;
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $user_id = $_SESSION['user_id'];
    $product_ids = implode(",", $_POST['product_ids']);
    $total = $_POST['total'];

    $stmt = $conn->prepare("INSERT INTO orders (user_id, product_ids, total) VALUES (?, ?, ?)");
    $stmt->bind_param("isd", $user_id, $product_ids, $total);

    if ($stmt->execute()) {
        echo "Order placed successfully!";
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
    $conn->close();
}
?>
