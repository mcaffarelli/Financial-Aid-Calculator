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
<title>Credential Template</title>
<link rel="stylesheet" type="text/css" id="applicationStylesheet" href="Credential_Template2.css"/>
<script id="applicationScript" type="text/javascript" src="Credential_Template2.js"></script>
</head>
<body>
<div id="Credential_Template">
    <form Name"myForm" Method="GET">
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
        <input type = "text"   id = "inputs" NAME="inputbox1" VALUE="" id = "test" class="studentIDRec" tabindex="1">
	
		<rect id="studentIDRec" rx="5" ry="5" x="0" y="0" width="257" height="31">
		</rect>
	
	<div id="Loan_Period_Start_Date">
		<span>Loan Period Start Date</span>
	</div>
        <input type = "text" id = "inputs" NAME="inputbox2" class="LpSdRec" tabindex="2">
	
		
	
	<div id="Loan_Period_End_Date">
		<span>Loan Period End Date</span>
	</div>
        <input type = "text" id = "inputs" NAME="inputbox3" class="LpEdRec" id="LpEdRec" tabindex="3">
	
		
	
	<div id="n_st_Disbursement_Term">
		<span>1st Disbursement Term</span>
	</div>
	<input type = "text" id = "inputs" NAME="inputbox4" class="firstDisbTermRec"  id="firstDisbTermRec" tabindex="4">
		
	
	<button  type="button" onclick="readText(this.form)" tabindex="17">
	<svg class="calculateRec">
        
		<rect  id="calculateRec" rx="20" ry="20" x="0" y="0" width="261" height="67">
		</rect>
        
	<div   id="CREDENTIAL">
		<span>CALCULATE</span>
	</div></svg></button>
	<div id = "middle"> 
	<svg class="costOfAttendanceRec">
		<rect id="costOfAttendanceRec" rx="20" ry="20" x="0" y="0" width="495" height="210">
		</rect>
	</svg>
	<div id="Cost_of_Attendance">
		<span>Cost of Attendance</span>
	</div>
	<div class="coaRec">
		<rect id="coaRec" rx="5" ry="5" x="0" y="0" width="129" height="31">
		</rect>
	</div>
	<div id="Books">
		<span>Books</span>
	</div>
	<div class="booksRec"  >
		<rect id="booksRec" rx="5" ry="5" x="0" y="0" width="131" height="31">
		</rect>
	</div>
	<div id="Loan_Fee">
		<span>Loan Fee</span>
	</div>
	<div class="loanFeeRec">
		<rect id="loanFeeRec" rx="5" ry="5" x="0" y="0" width="128.5" height="31">
		</rect>
	</div>
	<div id="Living">
		<span>Living</span>
	</div>
	<div class="livingRec">
		<rect id="livingRec" rx="5" ry="5" x="0" y="0" width="129" height="31">
		</rect>
	</div>
	<div id="Tuition">
		<span>Tuition</span>
	</div>
	<div class="tuitionRec">
		<rect id="tuitionRec" rx="5" ry="5" x="0" y="0" width="128.5" height="31">
		</rect>
	</div>
	<svg class="aggLimitRec">
		<rect id="aggLimitRec" rx="20" ry="20" x="0" y="0" width="495" height="100">
		</rect>
	</svg>
	<div id="SUB_Agg_Left">
		<span>SUB Agg Left</span>
	</div>
	<div class="aggLimitTB">
		<rect id="aggLimitTB" rx="5" ry="5" x="0" y="0" width="129" height="31">
		</rect>
	</div>
	<svg class="awardRec">
		<rect id="awardRec" rx="20" ry="20" x="0" y="0" width="495" height="126">
		</rect>
	</svg>
	<div id="Subsidized_Loan_Award">
		<span>Subsidized Loan Award</span>
	</div>
        <input type = "text"   id = "inputs" NAME="inputbox15" VALUE="" id = "test" class="unsubLAward" tabindex="15">
	
	<div id="Unsubsidized_Loan_Award">
		<span>Unsubsidized Loan Award</span>
	</div>
        
        <input  input type = "text" id = "inputs" NAME="inputbox16" VALUE="" id = "test"  tabindex="18"  class="teachAward">
		<rect id="teachAward" rx="5" ry="5" x="0" y="0" width="143" height="40">
		</rect>
        
	</div> 
        <div id = "right">  
	<div class="noteRectangle">
		<rect id="noteRectangle" rx="20" ry="20" x="0" y="0" width="676" height="169">
		</rect>
	</div>
	<svg class="awardRecTwo">
		<rect id="awardRecTwo" rx="20" ry="20" x="0" y="0" width="711" height="145">
		</rect>
	</svg>
	<div id="Subsidized_Loan">
		<span>Subsidized Loan</span>
	</div>
	<div class="ituRec">
		<rect id="ituRec" rx="5" ry="5" x="0" y="0" width="100" height="40">
		</rect>
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
		<rect id="dprec" rx="5" ry="5" x="0" y="0" width="100" height="40">
		</rect>
	</div>
	<div class="sprec">
		<rect id="sprec" rx="5" ry="5" x="0" y="0" width="100" height="40">
		</rect>
	</div>
	<div id="Unsubsidized_Loan">
		<span>Unsubsidized Loan</span>
	</div>
	<div class="itemTypeTeach">
		<rect id="itemTypeTeach" rx="5" ry="5" x="0" y="0" width="100" height="40">
		</rect>
	</div>
	<div class="dispPlanTeach">
		<rect id="dispPlanTeach" rx="5" ry="5" x="0" y="0" width="100" height="40">
		</rect>
	</div>
	<div class="splitCodeTeach">
		<rect id="splitCodeTeach" rx="5" ry="5" x="0" y="0" width="100" height="40">
		</rect>
	</div>
            
            
            
            
        <button  type="submit"  >     
	<svg class="saveAwardRec">
		<rect id="saveAwardRec" rx="20" ry="20" x="0" y="0" width="261" height="67">
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
	
	<div id="Program">
		<span>Program</span>
	</div>
	<input type = "text" id = "inputs" NAME="inputbox7" class="programRec" tabindex="7">
		<rect id="programRec" rx="5" ry="5" x="0" y="0" width="257" height="31">
		</rect>
	
	<div id="C_-_Codes">
		<span>C - Codes (No/Input Text)</span>
	</div>
	<input type = "text" id = "inputs" NAME="inputbox8" class="cCodesRec" tabindex="8">
		<rect id="cCodesRec" rx="5" ry="5" x="0" y="0" width="257" height="31">
		</rect>
	
	<div id="Valid_ECMPN">
		<span>EC/MPN (Yes/Input Text)</span>
	</div>
	<input type = "text" id = "inputs" NAME="inputbox9" class="gradPlusRec"tabindex="9">
		<rect id="gradPlusRec" rx="5" ry="5" x="0" y="0" width="257" height="31">
		</rect>
	
	<div id="NSLDS_Subsidized">
		<span>NSLDS Subsidized</span>
	</div>
	<input type = "text" id = "inputs" NAME="inputbox10" class="mpnRec" tabindex="10">
		<rect id="mpnRec" rx="5" ry="5" x="0" y="0" width="257" height="31">
		</rect>
	
	<div id="NSLDS_Combined">
		<span>NSLDS Combined</span>
	</div>
        <input type = "text" id = "inputs" NAME="inputbox11" class="aggLimitRec_b" tabindex="11">
	
		<rect id="aggLimitRec_b" rx="5" ry="5" x="0" y="0" width="257" height="31">
		</rect>
	
	<div id="Total_Credits_BUDGET">
		<span>Total Credits (BUDGET)</span>
	</div>
	
        <input type = "text" id = "inputs" NAME="inputbox13" class="totalCreditsRec" tabindex="13">
		<rect id="totalCreditsRec" rx="5" ry="5" x="0" y="0" width="257" height="31">
		</rect>
	<input type = "text" id = "inputs" NAME="inputbox12" class="tuitionRateRec" tabindex="12">
	
		<rect id="tuitionRateRec" rx="5" ry="5" x="0" y="0" width="257" height="31">
		</rect>
	
        <input type = "text" id = "inputs" NAME="inputbox14" class="resourceRec" tabindex="14">
	
		<rect id="resourceRec" rx="5" ry="5" x="0" y="0" width="257" height="31">
		</rect>
	
	<div id="Tuition_Rate_BUDGET">
		<span>Tuition Rate (BUDGET)</span>
	</div>
	<div id="All_Resources_BUDGET">
		<span>All Resources (BUDGET)</span>
	</div>
        <div id = "middle1"> 
	<i class="bi bi-calculator"></i>
   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calculator" id ="calc" onclick="window.open('ProrationTool.php');" viewBox="0 0 16 16">
  <path d="M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"/>
  <path d="M4 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-2zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-4z"/>
</svg> 
	
              <div >
	<button   type="button" onclick="myFunction1(this.form)" >
         
	<svg  class="calculateRec_cg">
		<rect  id="calculateRec_cg" rx="20" ry="20" x="0" y="0" width="261" height="67">
		</rect>
	
      
	<div id="CREDENTIAL_ch">
		<span>ACCEPT AWARD</span>
          </div></svg></button>	</div>
	<div id="Combined_Agg_Left">
		<span>Combined Agg Left</span>
	</div>
	<div class="aggLimitTB_cj">
		<rect id="aggLimitTB_cj" rx="5" ry="5" x="0" y="0" width="129" height="31">
		</rect>
	</div>
	<svg class="awardRec_ck">
		<rect id="awardRec_ck" rx="20" ry="20" x="0" y="0" width="495" height="128">
		</rect>
	</svg>
	<div id="Subsidized_Elgibility">
		<span>Subsidized Elgibility</span>
	</div>
	<div id="Unsubsidized_Elgibility">
		<span>Unsubsidized Elgibility</span>
	</div>
	<div id="Combined_Elgibility">
		<span>Combined Elgibility</span>
	</div>
	<div class="unsubLAward_co">
		<rect id="unsubLAward_co" rx="5" ry="5" x="0" y="0" width="129" height="31">
		</rect>
	</div>
	<div class="unsubLAward_cp">
		<rect id="unsubLAward_cp" rx="5" ry="5" x="0" y="0" width="129" height="31">
		</rect>
	</div>
	<div class="unsubLAward_cq">
		<rect id="unsubLAward_cq" rx="5" ry="5" x="0" y="0" width="129" height="31">
		</rect>
	</div></div>
                
                </form>  
                <?php
         
            $server_name = "localhost";
            $db_name = "capstone";
            $user_name = "mcaffarelli";
            $password = "Apple";
            
            $mysqli = new mysqli($server_name, $user_name, $password, $db_name);
           
           //if student id = '' then student id = "N/A" else do this
         
          
          
           
           
            //Works - just consider changing everything else to varchar
              if ((isset($_GET['inputbox15'])) || (isset($_GET['inputbox16']))){
               
             
                  
                 
            $COA = '';   
            
            
            
            if(isset($_GET['inputbox14']) && is_numeric($_GET['inputbox14'])){
                $resoruces = $_GET['inputbox14'];
            }else
            {
               $resoruces = 0; 
            }
             
             
             //COA Calculation
    if((is_numeric($_GET['inputbox12'])) && (is_numeric($_GET['inputbox13'])) && (isset($_GET['inputbox12'])) && (isset($_GET['inputbox13']))){
       
     $loanFeesPerUnit = 3;
     $booksPerUnit = 28;
     $livingPerUnit = 730;
     $totalUnits = $_GET['inputbox12']/4.5;
     $totalUnitsLoanFees = $_GET['inputbox12'] * $loanFeesPerUnit;
     $totalUnitsBooks = $_GET['inputbox12'] * $booksPerUnit;
     $totalUnitsLiving = $_GET['inputbox12'] * $livingPerUnit;
     $totalUnitsTuition = $totalUnits * $_GET['inputbox13'];
     $costOfAttendance = ($totalUnitsLoanFees + $totalUnitsBooks + $totalUnitsLiving + $totalUnitsTuition) - $resoruces;
             
       $COA = $costOfAttendance;                      
      } 
    
      
      
      
           $STUDENT_ID = $_GET['inputbox1'];
           $LPSD = $_GET['inputbox2']; 
           $LPED = $_GET['inputbox3'];
           $UNSUB = $_GET['inputbox16'];
           $CREDITS_WEEKS = $_GET['inputbox6'];       
        
           $TEACH = 'N/A';
           $SUB = $_GET['inputbox15'];
           $PELL = 'N/A';
           $GRADE_LEVEL = 'CREDENTIAL';
                  
             
               
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
             unset($SUB); 
           
              
            ?>
</div>
</body>
</html>