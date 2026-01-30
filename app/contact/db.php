<?php
// db.php - Database connection file
$servername = "localhost";  // Replace with your server name
$username = "root";         // Replace with your MySQL username
$password = "";             // Replace with your MySQL password
$dbname = "globalfire";      // Replace with your database name

// Create a connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} else {
    echo "Connection successful"; // Connection is successful
}

// Optional: Close the connection if you're done with it
// $conn->close();
?>
