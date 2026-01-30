<?php

header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: *"); // Allow all origins for testing purposes

error_reporting(E_ALL);
ini_set('display_errors', 1);

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "globalfire";

// Create a connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    echo json_encode(["success" => false, "message" => "Connection failed: " . $conn->connect_error]);
    exit;
}

// Handle GET requests to fetch clients
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $result = $conn->query("SELECT name, email, location FROM clients");

    if ($result->num_rows > 0) {
        $clients = $result->fetch_all(MYSQLI_ASSOC);
        echo json_encode($clients);
    } else {
        echo json_encode([]); // Return an empty array if no clients found
    }
}

// Handle POST requests to add a new client
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    // Validate the required fields
    if (empty($data['name']) || empty($data['email']) || empty($data['location'])) {
        echo json_encode(["success" => false, "message" => "All fields are required."]);
        exit;
    }

    // Prepare the data for insertion using prepared statements
    $stmt = $conn->prepare("INSERT INTO clients (name, email, location) VALUES (?, ?, ?)");
    if ($stmt === false) {
        echo json_encode(["success" => false, "message" => "SQL Prepare Error: " . $conn->error]);
        exit;
    }

    $stmt->bind_param("sss", $data['name'], $data['email'], $data['location']); // "sss" means all three parameters are strings

    // Execute the statement
    if (!$stmt->execute()) {
        error_log("Execute failed: (" . $stmt->errno . ") " . $stmt->error);
        echo json_encode(["success" => false, "message" => "SQL Error: " . $stmt->error]);
    } else {
        echo json_encode(["success" => true, "message" => "Client added successfully."]);
    }

    $stmt->close(); // Close the statement
}

// Close the database connection
$conn->close();
?>
