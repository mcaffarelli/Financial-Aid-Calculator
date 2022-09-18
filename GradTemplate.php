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
<title>Graduate Template</title>
<link rel="stylesheet" type="text/css" id="applicationStylesheet" href="Graduate_Template2.css"/>
<script id="applicationScript" type="text/javascript" src="Graduate_Template2.js"></script>
</head>
<body>
<div id="Graduate_Template">
    
    
    <form Name"myForm" Method="GET" >
	<svg class="loginTopRectangle">
		<rect id="loginTopRectangle" rx="0" ry="0" x="0" y="0" width="1920" height="153">
		</rect>
	</svg>
	<img id="imageNationalUniversity" src="imageNationalUniversity.png" srcset="imageNationalUniversity.png 1x, imageNationalUniversity@2x.png 2x">
		
	<svg class="loginBottomRectangle">
		<rect id="loginBottomRectangle" rx="0" ry="0" x="0" y="0" width="1920" height="90">
		</rect>
	</svg>
    
	<div id="Student_ID">
		<span>Student ID</span>
        
        
        
	</div>
	<input type = "text" id = "inputs" NAME="inputbox1" VALUE="" id = "test" class="studentIDRec" tabindex="1">
        
		<rect  id="studentIDRec"  rx="5" ry="5" x="0" y="0" width="257" height="31">
		</rect>
	
	<div id="Loan_Period_Start_Date">
		<span>Loan Period Start Date</span>
	</div>
	<input type = "text" id = "inputs" NAME="inputbox2" class="LpSdRec" tabindex="2">
		<rect id="LpSdRec" rx="5" ry="5" x="0" y="0" width="257" height="31">
		</rect>
	
	<div id="Loan_Period_End_Date">
		<span>Loan Period End Date</span>
	</div>
	<input type = "text" id = "inputs" NAME="inputbox3" class="LpEdRec" tabindex="3">
		<rect id="LpEdRec" rx="5" ry="5" x="0" y="0" width="257" height="31">
		</rect>
	
	<div id="n_st_Disbursement_Term">
		<span>1st Disbursement Term</span>
	</div>
	<input type = "text" id = "inputs" NAME="inputbox4" class="firstDisbTermRec" tabindex="4">
		<rect id="firstDisbTermRec" rx="5" ry="5" x="0" y="0" width="257" height="31">
		</rect>
	
	<div id="n_nd_Disbursement_Term">
		<span>2nd Disbursement Term</span>
	</div>
	<input type = "text" id = "inputs" NAME="inputbox5" class="secondDisbTermRec" tabindex="5">
		<rect id="secondDisbTermRec" rx="5" ry="5" x="0" y="0" width="257" height="31">
		</rect>
	
	<div id="LP_-_CreditsWeeks">
		<span>LP - Credits/Weeks</span>
	</div>
	<input type = "text" id = "inputs" NAME="inputbox6" class="creditsWeeksRec"tabindex="6">
		<rect id="creditsWeeksRec" rx="5" ry="5" x="0" y="0" width="257" height="31">
		</rect>
	
	<div id="C_-_Codes">
		<span>C - Codes (No/Input Text) </span>
	</div>
	<input type = "text" id = "inputs" NAME="inputbox10" class="cCodesRec" tabindex="10">
		<rect id="cCodesRec" rx="5" ry="5" x="0" y="0" width="257" height="31">
		</rect>
	
	<div id="Grad_Plus">
		<span>Grad Plus (No/Input Text) </span>
	</div>
	<input type = "text" id = "inputs" NAME="inputbox11" class="gradPlusRec"tabindex="11">
		<rect id="gradPlusRec" rx="5" ry="5" x="0" y="0" width="257" height="31">
		</rect>
	
	<div id="Valid_ECMPN">
		<span>EC/MPN  &nbsp (Yes/Input Text)</span>
	</div>
	<input type = "text" id = "inputs" NAME="inputbox12" class="mpnRec" tabindex="12">
		<rect id="mpnRec" rx="5" ry="5" x="0" y="0" width="257" height="31">
		</rect>
	
	<div id="Program">
		<span>Program</span>
	</div>
	<input type = "text" id = "inputs" NAME="inputbox7" class="programRec" tabindex="7">
		<rect id="programRec" rx="5" ry="5" x="0" y="0" width="257" height="31">
		</rect>
	
	<div id="Plan_TEACH">
		<span>Plan (TEACH)</span>
	</div>
	<input type = "text" id = "inputs" NAME="inputbox8" class="planRec" tabindex="8">
		<rect id="planRec" rx="5" ry="5" x="0" y="0" width="257" height="31">
		</rect>
	
	<div id="Sub-Plan_TEACH">
		<span>Sub-Plan (TEACH)</span>
	</div>
	<input type = "text" id = "inputs" NAME="inputbox9" class="subPlanRec" tabindex="9">
		<rect id="subPlanRec" rx="5" ry="5" x="0" y="0" width="257" height="31">
		</rect>
	
	<div id="Total_Credits_BUDGET">
		<span>Total Credits (BUDGET)</span>
	</div>
	<input type = "text" id = "inputs" NAME="inputbox14" class="totalCreditsRec" tabindex="14">
		<rect id="totalCreditsRec" rx="5" ry="5" x="0" y="0" width="257" height="31">
		</rect>
	
	<div id="Tuition_Rate_BUDGET">
		<span>Tuition Rate (BUDGET)</span>
	</div>
	<input type = "text" id = "inputs" NAME="inputbox15" class="tuitionRateRec" tabindex="15">
		<rect id="tuitionRateRec" rx="5" ry="5" x="0" y="0" width="257" height="31">
		</rect>
	
	<div id="All_Resources_BUDGET" >
		<span>All Resources (BUDGET)</span>
	</div>
	<input type = "text" id = "inputs" NAME="inputbox16" class="resourceRec" tabindex="16">
		<rect id="resourceRec" rx="5" ry="5" x="0" y="0" width="257" height="31">
		</rect>
	
	<div id="NSLDS_Aggregate_Limit">
		<span>NSLDS Aggregate Limit</span>
	</div>
	<input type = "text" id = "inputs" NAME="inputbox13" class="aggLimitRec" tabindex="13">
		<rect id="aggLimitRec" rx="5" ry="5" x="0" y="0" width="257" height="31">
		</rect>
	
    
     <button  type="button" onclick="readText(this.form)" tabindex="17">
	<svg class="calculateRec">
        
		<rect  id="calculateRec" rx="20" ry="20" x="0" y="0" width="261" height="67">
		</rect>
        
	<div   id="CREDENTIAL">
		<span>CALCULATE</span>
	</div></svg></button>
    
        
    //--------------------------------------------------------------------------------------------------
    //--------------------------------------------------------------------------------------------------
        <div class="container my-4">  

<p>Built with <a target="_blank" href="https://mdbootstrap.com/docs/standard/">Material Design for Bootstrap</a> - free and powerful Bootstrap UI KIT</p>

  <a class="btn btn-primary me-2" href="https://mdbootstrap.com/docs/standard/getting-started/installation/" target="_blank" role="button">Download MDB UI KIT <i class="fas fa-download ms-2"></i></a>
  <a class="btn btn-danger me-2" target="_blank" href="https://mdbootstrap.com/docs/standard/" role="button">Learn more</a>
  <a class="btn btn-success me-2" target="_blank" href="https://mdbootstrap.com/docs/standard/getting-started/" role="button">Tutorials</a>
  <a class="btn btn-dark me-2" target="_blank" href="https://github.com/mdbootstrap/mdb-ui-kit" role="button">GitHub <i class="fab fa-github ms-2"></i></a>

  <hr class="mb-5"/>  



    
        
    
    
    <div  id ="middle">
	<svg class="costOfAttendanceRec">
		<rect id="costOfAttendanceRec" rx="20" ry="20" x="0" y="0" width="442" height="236">
		</rect>
	</svg>
	<div id="Cost_of_Attendance">
		<span>Cost of Attendance</span>
	</div>
	<div class="coaRec">
		<div id = "COATB"></div>
	</div>
	<svg class="costOfAttendanceRec_bm">
		<rect id="costOfAttendanceRec_bm" rx="20" ry="20" x="0" y="0" width="442" height="63">
		</rect>
	</svg>
	<div id="Teach_Eligibility">
		<span>Teach Eligible</span>
	</div>
	<div class="coaRec_bo">
		<div id = "TeachEligTB"></div>
	</div>
	<div id="Books">
		<span>Books</span>
	</div>
	<div class="booksRec" >
         <div id = "booksTB"></div>
	</div>
	<div id="Loan_Fee">
		<span>Loan Fee</span>
	</div>
	<div class="loanFeeRec">
		<div id = "LF"></div>
	</div>
	<div id="Living">
		<span>Living</span>
	</div>
	<div class="livingRec">
		<div id = "LivingTB"></div>
	</div>
	<div id="Tuition">
		<span>Tuition</span>
	</div>
	<div class="tuitionRec">
		<div id = "TuitionTB"></div>
	</div>
	<svg class="aggLimitRec_bx">
		<rect id="aggLimitRec_bx" rx="20" ry="20" x="0" y="0" width="442" height="70">
		</rect>
	</svg>
	<div id="Agg_Limit_Left">
		<span>Aggregate Limit Left</span>
	</div>
	<div class="aggLimitTB">
            <div id="aggLimitTB" ></div>
	</div>
	<svg class="awardRec">
		<rect id="awardRec" rx="20" ry="20" x="0" y="0" width="495" height="137">
		</rect>
	</svg>
	<div id="Unsubsidized_Loan_Award">
		<span>Unsubsidized Loan Award</span>
         
	</div>
       
	<input  input type = "text" id = "inputs" NAME="inputbox17" VALUE="" id = "test"  tabindex="17" class="unsubLAward">
		<rect id="unsubLAward" rx="5" ry="5" x="0" y="0" width="143" height="40">
		</rect>
	
	<div id="Teach_Grant_Award">
		<span>Teach Grant Award</span>
	</div>
	<input  input type = "text" id = "inputs" NAME="inputbox18" VALUE="" id = "test"  tabindex="18"  class="teachAward">
		<rect id="teachAward" rx="5" ry="5" x="0" y="0" width="143" height="40">
		</rect>
        
        <div >
            
   <i class="bi bi-calculator"></i>
   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calculator" id ="calc" onclick="window.open('ProrationTool.php');" viewBox="0 0 16 16">
  <path d="M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"/>
  <path d="M4 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-2zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-4z"/>
</svg>  
	<button   type="button" onclick="myFunction1(this.form)" >
        
	<svg  class="awardButton">
		<rect  id="awardButton" rx="20" ry="20" x="0" y="0" width="261" height="67">
		</rect>
	
      
	<div id="acceptaward">
		<span>ACCEPT AWARD</span>
               
          </div></svg></button>	</div>
        
        

    </div>  
           
    
    
    //-----------------------------------------------------------------------------------
    //-----------------------------------------------------------------------------------
    
    
    
    
<div id = "right">
    
	<div class="noteRectangle">
        <div id = "Note"></div>
		
    </div>
	<svg class="awardRecTwo">
		<rect id="awardRecTwo" rx="20" ry="20" x="0" y="0" width="748" height="145">
		</rect>
	</svg>
 
	<div id="Unsubsidized_Loan">
		<span>Unsubsidized Loan</span>
	</div>
	
		
    <div class="ituRec">
        <div id = "ituRec"></div>
		
    </div>
	
	<div id="Item_Type">
		<span>Item Type</span>
	</div>
	<div id="Disb_Plan">
		<span>Disb Plan</span>
	</div>
	<div id="Split_Code">
		<span>Split Code</span>
	</div>
	
	<div class="dprec">
        <div id = "dprec"></div>
		
    </div>	
	
		
    
    <div class="sprec">
        <div id = "sprec"></div>
		
    </div>
	<div id="Teach_Grant">
		<span>Teach Grant</span>
	</div>
	
    
    <div class="itemTypeTeach">
        <div id = "itemTypeTeach"></div>
		
    </div>
		
	 
    <div class="dispPlanTeach">
        <div id = "dispPlanTeach"></div>
		
    </div>
		
	
		<div class="splitCodeTeach">
        <div id = "splitCodeTeach"></div>
		
    </div>
    
    <button  type="button" onclick="readText(this.form)" tabindex="17">
	<svg class="calculateRec">
        
		<rect  id="calculateRec" rx="20" ry="20" x="0" y="0" width="261" height="67">
		</rect>
        
	<div   id="CREDENTIAL">
		<span>CALCULATE</span>
	</div></svg></button>
    
    
    
    <button  class = "apple" type="submit"  >
	<svg class="saveAwardRec">
		<rect id="saveAwardRec" rx="20" ry="20" x="0" y="0" width="250" height="67">
		</rect>
	
	<div id="SaveAward">
		<span>SAVE AWARD</span>
	</div></svg></button>
    
        </div>
    <button  type="button" onclick="readText2(this.form)" >
	<svg class="newAwardRectangle">
		<rect  id="newAwardRectangle" rx="20" ry="20" x="0" y="0" width="261" height="67">
		</rect>
	
	<div id="newAward">
		<span>NEW AWARD</span>
	</div></svg></button>
        </form>
    
    <?php
         
            $server_name = "localhost";
            $db_name = "capstone";
            $user_name = "mcaffarelli";
            $password = "Apple";
            
            $mysqli = new mysqli($server_name, $user_name, $password, $db_name);
           
           //if student id = '' then student id = "N/A" else do this
         
          
          
           
           
            //Works - just consider changing everything else to varchar
              if ((isset($_GET['inputbox18'])) || (isset($_GET['inputbox18']))){
               
             
                  
                 
            $COA = '';   
            
            
            
            if(isset($_GET['inputbox16']) && is_numeric($_GET['inputbox16'])){
                $resoruces = $_GET['inputbox16'];
            }else
            {
               $resoruces = 0; 
            }
             
             
             //COA Calculation
    if((is_numeric($_GET['inputbox14'])) && (is_numeric($_GET['inputbox15'])) && (isset($_GET['inputbox14'])) && (isset($_GET['inputbox15']))){
       
     $loanFeesPerUnit = 24;
     $booksPerUnit = 28;
     $livingPerUnit = 730;
     $totalUnits = $_GET['inputbox14']/4.5;
     $totalUnitsLoanFees = $_GET['inputbox14'] * $loanFeesPerUnit;
     $totalUnitsBooks = $_GET['inputbox14'] * $booksPerUnit;
     $totalUnitsLiving = $_GET['inputbox14'] * $livingPerUnit;
     $totalUnitsTuition = $totalUnits * $_GET['inputbox15'];
     $costOfAttendance = ($totalUnitsLoanFees + $totalUnitsBooks + $totalUnitsLiving + $totalUnitsTuition) - $resoruces;
             
       $COA = $costOfAttendance;                      
      } 
    
      
      
      
           $STUDENT_ID = $_GET['inputbox1'];
           $LPSD = $_GET['inputbox2']; 
           $LPED = $_GET['inputbox3'];
           $UNSUB = $_GET['inputbox17'];
           $CREDITS_WEEKS = $_GET['inputbox6'];       
        
           $TEACH = $_GET['inputbox18'];
           $SUB = 'N/A';
           $PELL = 'N/A';
           $GRADE_LEVEL = 'GRADUATE';
                  
             
               
             
              
             
             
              
                  
              $new_post_query= "INSERT INTO `student` (`STUDENT_ID`, `EMP_NUM`, `GRADE_LEVEL`, `LPSD`, `LPED`, `CREDITS_WEEKS`, `COA`, `UNSUB_AMOUNT`, `SUB_AMOUNT`, `PELL_AMOUNT`, `TEACH_AMOUNT`, `DATE`) VALUES ('".$STUDENT_ID."', '".$EMP_NUM1."', '".$GRADE_LEVEL."', '".$LPSD."', '".$LPED."', '".$CREDITS_WEEKS."', '".$COA."', '".$UNSUB."', '".$SUB."', '".$PELL."', '".$TEACH."', current_timestamp())";
              
              $mysqli->query($new_post_query);}
              
             unset($COA); 
             unset($costOfAttendance); 
             unset($STUDENT_ID); 
             unset($LPSD); 
             unset($LPED); 
             unset($UNSUB); 
             unset($CREDITS_WEEKS); 
             unset($TEACH); 
             unset($PELL); 
             unset($GRADE_LEVEL); 
             unset($resoruces); 
            unset($newResources); 
           
              
            ?>
</div>
</body>
</html>