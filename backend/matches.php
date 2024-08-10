<?php
header('Content-Type: application/json');
include 'db.php';

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $sql = "SELECT * FROM matches";
    $result = $conn->query($sql);
    $matches = [];

    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            $matches[] = $row;
        }
    }
    echo json_encode($matches);
} elseif ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    $date = $data['date'];
    $teams = $data['teams'];
    $score = $data['score'];
    $status = $data['status'];
    $sql = "INSERT INTO matches (date, teams, score, status) VALUES ('$date', '$teams', '$score', '$status')";
    if ($conn->query($sql) === TRUE) {
        echo json_encode(['id' => $conn->insert_id]);
    } else {
        echo json_encode(['error' => $conn->error]);
    }
} elseif ($_SERVER['REQUEST_METHOD'] === 'PUT') {
    parse_str(file_get_contents("php://input"), $data);
    $id = $data['id'];
    $status = $data['status'];
    $sql = "UPDATE matches SET status='$status' WHERE id=$id";
    if ($conn->query($sql) === TRUE) {
        echo json_encode(['message' => 'Record updated']);
    } else {
        echo json_encode(['error' => $conn->error]);
    }
}

$conn->close();
?>