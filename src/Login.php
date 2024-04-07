<?php

session_start(); // Démarre la session

// Vérifie si les données du formulaire ont été envoyées
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Vérifie si les champs email et password existent et ne sont pas vides
    if (isset($_POST["email"]) && isset($_POST["password"]) && !empty($_POST["email"]) && !empty($_POST["password"])) {
        
        // Inclure le fichier de connexion à la base de données
        require_once('database.php');
        
        // Récupère les données du formulaire
        $email = $_POST["email"];
        $password = $_POST["password"];

        // Connexion à la base de données
        $database = new Database('nom_de_votre_base_de_donnees');
        $conn = $database->getConnection();

        // Échapper les données d'entrée pour éviter les injections SQL (facultatif mais recommandé)
        $email = $conn->real_escape_string($email);
        $password = $conn->real_escape_string($password);

        // Requête pour vérifier les informations d'identification de l'utilisateur
        $query = "SELECT * FROM users WHERE email='$email' AND password='$password'";
        $result = $conn->query($query);

        // Vérifie si l'utilisateur existe dans la base de données
        if ($result->num_rows == 1) {
            // L'utilisateur est authentifié, créez une session pour stocker ses informations
            $_SESSION["user"] = $email;
            // Retourne une réponse JSON pour indiquer que la connexion est réussie
            http_response_code(200);
            echo json_encode(array("message" => "Connexion réussie"));
            exit();
        } else {
            // Identifiants incorrects, retourne une réponse JSON avec un message d'erreur
            http_response_code(401);
            echo json_encode(array("message" => "Identifiants incorrects"));
            exit();
        }
    } else {
        // Les champs email et password ne sont pas complets, retourne une réponse JSON avec un message d'erreur
        http_response_code(400);
        echo json_encode(array("message" => "Veuillez remplir tous les champs"));
        exit();
    }
} else {
    // Si la méthode de requête n'est pas POST, retourne une réponse JSON avec un message d'erreur
    http_response_code(405);
    echo json_encode(array("message" => "Méthode non autorisée"));
    exit();
}

?>