<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8"/>
<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Student Selection</title>
<link rel="stylesheet" type="text/css" id="applicationStylesheet" href="StudentSelection2.css"/>
<script id="applicationScript" type="text/javascript" src="StudentSelection1.js"></script>
</head>
<body>
<div id="StudentSelection">
    <form Name"myForm" Method="GET">
        
       <div id="Password">
		<span>Please Select Student Grade Level</span>
	</div>
        
        
         <button class ="btn" type="button" onclick="readText2(this.form)" > 
	<svg class="gradRectangle">
		<rect  id="gradRectangle" rx="20" ry="20" x="0" y="0" width="261" height="67">
		</rect>
        <div id="GRADUATE">
		<span>GRADUATE</span>
	</div></svg></button>
             
             
             
      <button class ="btn" type="button" onclick="readText1(this.form)" >        
	<svg class="undergradRectangle">
		<rect id="undergradRectangle" rx="20" ry="20" x="0" y="0" width="261" height="67">
		</rect>
        <div id="UNDERGRADUATE">
		<span>UNDERGRADUATE</span>
        </div></svg> </button>
          
          
          
     <button class ="btn" type="button" onclick="readText3(this.form)" >      
	<svg class="credRectangle">
		<rect id="credRectangle" rx="20" ry="20" x="0" y="0" width="261" height="67">
		</rect>
        <div id="CREDENTIAL">
		<span>CREDENTIAL</span>
        </div></svg></button>
	
	
	
	<svg class="loginTopRectangle">
		<rect id="loginTopRectangle" rx="0" ry="0" x="0" y="0" width="1920" height="153">
		</rect>
	</svg>
	<img id="imageNationalUniversity" src="imageNationalUniversity.png" srcset="imageNationalUniversity.png 1x, imageNationalUniversity@2x.png 2x">
		
	<svg class="loginBottomRectangle">
		<rect id="loginBottomRectangle" rx="0" ry="0" x="0" y="0" width="1920" height="90">
		</rect>
	</svg>
        
        
      <button class ="btn" type="button" onclick="readText4(this.form)" >    
	<svg class="gradRectangle_t">
		<rect id="gradRectangle_t" rx="20" ry="20" x="0" y="0" width="261" height="67">
		</rect>
        <div id="VIEWSAVEDAWARDS">
		<span>VIEW SAVED AWARDS</span>
	</div>
          </svg></button>
	
    </form>
    
</div>
</body>
</html>