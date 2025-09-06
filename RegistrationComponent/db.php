<?php
$host = "localhost";   // MySQL server
$user = "root";        // MySQL username
$pass = "";            // MySQL password (default empty for XAMPP)
$db   = "workerfinder"; // Database name

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    die("❌ Connection failed: " . $conn->connect_error);
}
?>
