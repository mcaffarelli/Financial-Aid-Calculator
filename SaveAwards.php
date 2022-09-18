<!DOCTYPE html>
<?php session_start(); 

 if (isset($_SESSION['user'])){
     
$EMP_NUM1 = $_SESSION['user'] ;

 }
        
        ?>
<html>
<head>
<meta charset="utf-8"/>
<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Saved Awards</title>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
<link rel="stylesheet" type="text/css" id="applicationStylesheet" href="SavedAwards9.css"/>
<script id="applicationScript" type="text/javascript" src="SavedAwards1.js"></script>

</head>
<body>
    
     <?php
         
            $server_name = "localhost";
            $db_name = "capstone";
            $user_name = "mcaffarelli";
            $password = "Apple";
            
            $mysqli = new mysqli($server_name, $user_name, $password, $db_name);
           
           $sql = "SELECT * FROM student WHERE EMP_NUM = '".$EMP_NUM1."' ORDER BY DATE DESC;";
           $result = $mysqli->query($sql);
           $result1 = $mysqli->query($sql);
               
           $mysqli->close();
      
          $rows1 = [];
          
        while($row1=$result1->fetch_assoc())
        {
            $rows1[] = $row1;
        }
        
        
 
       ?>   
           
           
     
    
   <div id="SavedAwards">
       
       <button  type="button" onclick="readText2(this.form)" >    
	<svg class="gradRectangle_t">
		<rect id="gradRectangle_t" rx="20" ry="20" x="0" y="0" width="96" height="29">
		</rect>
        <div id="VIEWSAVEDAWARDS">
		<span>Back</span>
             
	</div>
                
          </svg></button>
	 
       
	<svg class="loginTopRectangle">
		<rect id="loginTopRectangle" rx="0" ry="0" x="0" y="0" width="1918" height="153">
		</rect>
	</svg>
	<img id="imageNationalUniversity" src="imageNationalUniversity.png" srcset="imageNationalUniversity.png 1x, imageNationalUniversity@2x.png 2x">
	 	
	 
        <table class="table table-hover" id = "box">
            <thead>
            <tr >
                <th scope="col">Student Id </th> 
                <th scope="col">Employee ID</th>
                <th scope="col">Grade Level</th>   
                <th scope="col">LP Start Date</th>
                <th scope="col">LP  End Date</th>
                <th scope="col">Credits/Weeks</th>
                <th scope="col">COA</th>
                <th scope="col">Unsubsidized</th>
                <th scope="col">Subsidized</th>   
                <th scope="col">Pell</th>
                <th scope="col">Teach</th>
                <th scope="col">Date</th>
                
            </tr>
            </thead><tbody >
            <?php while($rows=$result->fetch_assoc()){?>
            
            <tr > 
                
                <td><?php echo $rows['STUDENT_ID']; ?></td>
                <td><?php echo $rows['EMP_NUM'];?></td>
                <td><?php echo $rows['GRADE_LEVEL'];?></td>
                <td><?php echo $rows['LPSD'];?></td>
                <td><?php echo $rows['LPED'];?></td>
                <td><?php echo $rows['CREDITS_WEEKS'];?></td>
                <td><?php echo $rows['COA'];?></td>
                <td><?php echo $rows['UNSUB_AMOUNT'];?></td>
                <td><?php echo $rows['SUB_AMOUNT'];?></td>
                <td><?php echo $rows['PELL_AMOUNT'];?></td>
                <td><?php echo $rows['TEACH_AMOUNT'];?></td>
                <td><?php echo $rows['DATE'];?></td>
                
            </tr>
            <?php
            }
            
            
            ?>
        </tbody >
        </table>
        <?php
       echo "<div  id = 'Search_Student_ID_d'> Total Awards Completed: ".count($rows1)." <div>";
       
       ?> 
<form Name "myForm" Method="GET">
<input type="text" id="search" class="Rectangle_1">
<input type="button"  onmousedown="doSearch(document.getElementById('search').value, 'yellow')" value="Find" id="Search1"  >

                
                <div id="Search_Student_ID_">
                    <span>Search Page Contents:&nbsp; </span><br/>
                    <p style="font-style: italic; font-size:16px; ">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(Refresh to Clear)&nbsp; </p>
	</div>

   <script type='text/javascript'>

function doSearch(text, backgroundColor) {
  if (window.find && window.getSelection) {
    document.designMode = "on";
    var sel = window.getSelection();
    sel.collapse(document.body, 0);
    while (window.find(text)) {
      document.execCommand("HiliteColor", false, backgroundColor);
      sel.collapseToEnd();
    }
    document.designMode = "off";
  }
}
  </script>
	
        
        
        
</div>
    
   
   <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
</body>
</html>