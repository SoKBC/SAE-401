<?php

class Database{
	
	private $host  = 'localhost';
    private $user  = 'root';
    private $password   = "root";
    private $databaseName  = ""; 
    
	function __construct($databaseName)
	{
		$this->databaseName = $databaseName;
	}

    public function getConnection(){		
		$conn = new mysqli($this->host, $this->user, $this->password, $this->databaseName);
		if($conn->connect_error){
			die("Error failed to connect to MySQL: " . $conn->connect_error);
		} else {
			return $conn;
		}
    }   
}


?>