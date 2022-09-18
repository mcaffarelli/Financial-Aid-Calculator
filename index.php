<!DOCTYPE html>
<?php
session_start();

?>
<html>
<head>
<meta charset="utf-8"/>
<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Login Page</title>
<link rel="stylesheet" type="text/css" id="applicationStylesheet" href="Login_Page2.css"/>
<script id="applicationScript" type="text/javascript" src="Login_Page2.js"></script>
</head>
<body class="container">
<div id="Login_Page" >
    
         
     
    <form Name = "myForm" id ="myForm" Method="GET" >
        
   
	
        <input type = "text" id = "inputs" NAME="inputbox1" VALUE="" id = "inputbox1" class="usernameRectangle" tabindex="1">
		<rect id="usernameRectangle" rx="10" ry="10" x="0" y="0" width="509" height="73">
		</rect>
	
	     
        
	
	<div id="Username">
		<span>Please Enter Employee ID To Begin:</span>
	</div>
	<div id="Password">
		<span>Welcome to National University's Financial Aid Awarding Calculator!</span>
	</div>
                
              
                        
        <span class ="btn" type="button" onclick="readText(myForm)" > 
             
	<svg class="signInRectangle">
		<rect  id="signInRectangle" rx="10" ry="10" x="0" y="0" width="400" height="85">
		</rect>
	
	<div id="Sign_In">
            
		<span>Continue</span>
        </div></svg> </span> 
	<svg class="loginBottomRectangle">
		<rect id="loginBottomRectangle" rx="0" ry="0" x="0" y="0" width="1920" height="90">
		</rect>
	</svg>
	<svg class="loginTopRectangle">
		<rect id="loginTopRectangle" rx="0" ry="0" x="0" y="0" width="1918" height="153">
		</rect>
	</svg>
	<img id="imageNationalUniversity" src="imageNationalUniversity.png" srcset="imageNationalUniversity.png 1x, imageNationalUniversity@2x.png 2x">
        
    
        
    </form>
  
    
    
    
<?php
         
          
            $server_name = "localhost";
            $db_name = "capstone";
            $user_name = "mcaffarelli";
            $password = "Apple";
            
            $mysqli = new mysqli($server_name, $user_name, $password, $db_name);
           
           
            
            
              if (is_numeric($_GET['inputbox1'])){
                  
               
               
                
             
                  
             $EMP_NUM = $_GET['inputbox1'];
             
             $_SESSION['user'] = $EMP_NUM;
            
            
                    
                
            $new_post_query= "INSERT INTO `counselor` (`EMP_NUM`) VALUES ('".$EMP_NUM."')";
              
              
              $mysqli->query($new_post_query);}
              
              
                       
            
           
              
            ?>
   
    
    
</div>
</body>
</html>