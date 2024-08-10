<?php
header('Content-Type: application/json');
include 'db.php';

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $sql = "SELECT * FROM statistics";
    $result = $conn->query($sql);
    $statistics = [];

    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            $statistics[] = $row;
        }
    }
    echo json_encode($statistics);
} elseif ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    $player = $data['player'];
    $matches_played = $data['matches_played'];
    $goals = $data['goals'];
    $assists = $data['assists'];
    $yellow_cards = $data['yellow_cards'];
    $red_cards = $data['red_cards'];
    $sql = "INSERT INTO statistics (player, matches_played, goals, assists, yellow_cards, red_cards) VALUES ('$player', $matches_played, $goals, $assists, $yellow_cards, $red_cards)";
    if ($conn->query($sql) === TRUE) {
        echo json_encode(['id' => $conn->insert_id]);
    } else {
        echo json_encode(['error' => $conn->error]);
    }
}

$conn->close();
?>