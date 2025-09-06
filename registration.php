<?php
include 'db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $role     = $_POST['role'];
    $fullname = $_POST['fullname'];
    $email    = $_POST['email'];
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT);
    $contact  = $_POST['contact'];

    // Upload folder
    $uploadDir = "uploads/";
    if (!file_exists($uploadDir)) mkdir($uploadDir, 0777, true);

    function uploadFile($fileKey, $uploadDir) {
        if (!empty($_FILES[$fileKey]['name'])) {
            $targetFile = $uploadDir . time() . "_" . basename($_FILES[$fileKey]['name']);
            if (move_uploaded_file($_FILES[$fileKey]['tmp_name'], $targetFile)) {
                return $targetFile;
            }
        }
        return null;
    }

    // Employer uploads
    $permit     = uploadFile('permit', $uploadDir);
    $employerID = uploadFile('employer_id', $uploadDir);

    // Worker uploads
    $workerID   = uploadFile('worker_id', $uploadDir);
    $clearance  = uploadFile('clearance', $uploadDir);

    // Worker/Employer fields
    $skills     = $_POST['skills'] ?? null;
    $address    = $_POST['address'] ?? null;
    $experience = $_POST['experience'] ?? null;
    $company    = $_POST['company'] ?? null;
    $location   = $_POST['location'] ?? null;

    // Insert query
    $sql = "INSERT INTO users 
        (role, fullname, email, password, contact, company, location, permit, employer_id_file, skills, address, experience, worker_id_file, clearance) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

    $stmt = $conn->prepare($sql);
    $stmt->bind_param(
        "ssssssssssssss",
        $role, $fullname, $email, $password, $contact,
        $company, $location, $permit, $employerID,
        $skills, $address, $experience, $workerID, $clearance
    );

    if ($stmt->execute()) {
        echo "<h2 style='color:green;'>✅ Registration successful!</h2>";
        echo "<a href='login.html'>Go to Login</a>";
    } else {
        echo "<h2 style='color:red;'>❌ Error: " . $stmt->error . "</h2>";
    }

    $stmt->close();
    $conn->close();
}
?>
