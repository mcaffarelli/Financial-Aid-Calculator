<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8"/>
<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Proration Tool</title>
<link rel="stylesheet" type="text/css" id="applicationStylesheet" href="ProrationTool2.css"/>
    
<script id="applicationScript" type="text/javascript" src="ProrationTool.js"></script>
    
    </head>
   <body>
       <div>
 <div id="tool">   
        <h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Proration Tool</h2>
       <form name = "myForm" id = "myForm" method="post"  onsubmit="return false">
 <div> <label for="amount">Loan Amount&nbsp;&nbsp;&nbsp;&nbsp;</label>
           <input size = "10" class="input" type="text" id="loan" name="amount"></div>
  <div> <label for="units"> Units&nbsp &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;</label>
           <input  type="text" size = "10" class="input" id="units" name="units"></div>
  <br>

           
  
           <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="submit" id = "button" value="Submit" onClick = "getdata()"></div>
           <br>
           
           
           <div id = "orange">
           <div style="float:left;">&nbsp;&nbsp &nbsp;&nbsp; New Amount:&nbsp;&nbsp;&nbsp;</div>
           <div id = "newamount"style="float:left;"></div></div>
            <br>
               <br>
            <br>
            <br>   
           
           
       
</form>
     
        </div>
           
   
           
           
           
           
           
       
    <table class="calculator" >
        
        
  <tr>
    <td colspan="3"> <input class="display-box" type="text" id="result" disabled /> </td>
 
    <!-- clearScreen() function clears all the values -->
    <td> <input type="button" style="margin-right:5px; margin-left:5px;" value="C" onclick="clearScreen()" id="btn" /> </td>
  </tr>
  <tr>
    <!-- display() function displays the value of clicked button -->
    <td> <input class = "stlye" type="button" value="1" onclick="display('1')" /> </td>
    <td> <input class = "stlye" type="button" value="2" onclick="display('2')" /> </td>
    <td> <input class = "stlye" type="button" value="3" onclick="display('3')" /> </td>
    <td> <input class = "stlye" type="button" value="/" style="margin-right:5px; margin-left:5px;" onclick="display('/')" /> </td>
  </tr>
  <tr>
    <td> <input class = "stlye" type="button" value="4" onclick="display('4')" /> </td>
    <td> <input class = "stlye" type="button" value="5" onclick="display('5')" /> </td>
    <td> <input class = "stlye" type="button" value="6" onclick="display('6')" /> </td>
    <td> <input class = "stlye" type="button" value="-" style="margin-right:5px; margin-left:5px;" onclick="display('-')" /> </td>
  </tr>
  <tr>
    <td> <input class = "stlye" type="button" value="7" onclick="display('7')" /> </td>
    <td> <input class = "stlye" type="button" value="8" onclick="display('8')" /> </td>
    <td> <input class = "stlye" type="button" value="9" onclick="display('9')" /> </td>
    <td> <input class = "stlye" type="button" value="+" style="margin-right:5px; margin-left:5px;" onclick="display('+')" /> </td>
  </tr>
  <tr>
    <td> <input class = "stlye" type="button" value="." onclick="display('.')" /> </td>
    <td> <input class = "stlye" type="button" value="0" onclick="display('0')" /> </td>
 
    <!-- calculate() function evaluates the mathematical expression -->
    <td> <input class = "stlye" type="button" value="=" onclick="calculate()" id="btn" /> </td>
    <td> <input class = "stlye" type="button" value="*" style="margin-right:5px; margin-left:5px;" onclick="display('*')" /> </td>
  </tr>
</table>
       
       
 
<script type="text/javascript" src="script.js"></script>
   
 <img id="imageNationalUniversity" src="imageNationalUniversity.png" srcset="imageNationalUniversity.png 1x, imageNationalUniversity@2x.png 2x">
       <svg class="loginBottomRectangle">
		<rect id="loginBottomRectangle" rx="0" ry="0" x="0" y="0" width="1920" height="90">
		</rect>
	</svg>
	<svg class="loginTopRectangle">
		<rect id="loginTopRectangle" rx="0" ry="0" x="0" y="0" width="1918" height="153">
		</rect>
	</svg>
</body>
 

</html>