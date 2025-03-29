<?php
include 'dbconfig.php';
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    $stmt = $conn->prepare("SELECT id, password FROM users WHERE username = ?");
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $stmt->store_result();
    $stmt->bind_result($id, $hashed_password);
    $stmt->fetch();

    if ($stmt->num_rows > 0) {
        if (password_verify($password, $hashed_password)) { // Password verification
            $_SESSION['user_id'] = $id;
            echo "Login successful!";
            header("Location: index.html"); // Redirect to home page or dashboard
            exit();
        } else {
            echo "❌ Invalid credentials. (Password Incorrect)";
        }
    } else {
        echo "❌ Invalid credentials. (User Not Found)";
    }

    $stmt->close();
    $conn->close();
}
?>
