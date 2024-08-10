<?php
header('Content-Type: application/json');
include 'db.php';

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $sql = "SELECT * FROM news";
    $result = $conn->query($sql);
    $news = [];

    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            $news[] = $row;
        }
    }
    echo json_encode($news);
} elseif ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    $title = $data['title'];
    $content = $data['content'];
    $sql = "INSERT INTO news (title, content) VALUES ('$title', '$content')";
    if ($conn->query($sql) === TRUE) {
        echo json_encode(['id' => $conn->insert_id]);
    } else {
        echo json_encode(['error' => $conn->error]);
    }
}

$conn->close();
?>