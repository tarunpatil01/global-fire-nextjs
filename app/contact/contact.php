<?php
// Set CORS headers to allow the React app to access this resource
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

// Database connection details
$servername = "localhost";
$username = "root";  // Use your database username
$password = "";  // Use your database password
$dbname = "globalfire";  // Use your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die(json_encode(["success" => false, "message" => "Connection failed: " . $conn->connect_error]));
}

// Handle POST request to insert data
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get the input data (name, email, phone, message)
    $name = isset($_POST['name']) ? $conn->real_escape_string($_POST['name']) : null;
    $email = isset($_POST['email']) ? $conn->real_escape_string($_POST['email']) : null;
    $phone = isset($_POST['phone']) ? $conn->real_escape_string($_POST['phone']) : null;
    $message = isset($_POST['message']) ? $conn->real_escape_string($_POST['message']) : null;

    // Simple validation
    if ($name && $email && $message) {
        // Insert into database
        $sql = "INSERT INTO contacts (name, email, phone, message) VALUES ('$name', '$email', '$phone', '$message')";
        
        if ($conn->query($sql) === TRUE) {
            echo json_encode(["success" => true, "message" => "Message sent successfully!"]);
        } else {
            echo json_encode(["success" => false, "message" => "Error: " . $conn->error]);
        }
    } else {
        echo json_encode(["success" => false, "message" => "Missing required fields."]);
    }
    
    // Exit after insert operation
    exit();
}

// Query to fetch data from the 'contacts' table for GET requests
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $sql = "SELECT id, name, email, phone, message FROM contacts";
    $result = $conn->query($sql);
    
    $contacts = [];
    
    if ($result->num_rows > 0) {
        // Loop through the results and add them to the $contacts array
        while($row = $result->fetch_assoc()) {
            $contacts[] = $row;
        }
        // Send the data as a JSON response
        echo json_encode($contacts);
    } else {
        echo json_encode([]);  // Return an empty array if no data is found
    }
}

// Close the database connection
$conn->close();
?>
