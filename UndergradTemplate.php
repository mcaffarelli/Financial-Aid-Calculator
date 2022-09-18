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
<title>Undergraduate Template</title>
<link rel="stylesheet" type="text/css" id="applicationStylesheet" href="Undergraduate_Template3.css"/>
<script id="applicationScript" type="text/javascript" src="Undergraduate_Template2.js"></script>
</head>
<body>
<div id="Undergraduate_Template">
    <form Name"myForm" Method="GET"> 
	<svg class="loginTopRectangle">
		<rect id="loginTopRectangle" rx="0" ry="0" x="0" y="0" width="1920" height="91">
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
        <input type = "text"   id = "inputs" NAME="inputbox2" VALUE="" id = "test" class="LpSdRec" tabindex="2">
	
		<rect id="LpSdRec" rx="5" ry="5" x="0" y="0" width="257" height="31">
		</rect>
	
	<div id="Loan_Period_End_Date">
		<span>Loan Period End Date</span>
	</div>
        <input type = "text"   id = "inputs" NAME="inputbox3" VALUE="" id = "test" class="LpEdRec" tabindex="3">
	
		<rect id="LpEdRec" rx="5" ry="5" x="0" y="0" width="257" height="31">
		</rect>
	
	<div id="n_st_Disbursement_Term">
		<span>1st Disbursement Term</span>
	</div>
        <input type = "text"   id = "inputs" NAME="inputbox4" VALUE="" id = "test" class="firstDisbTermRec" tabindex="4">
	
		<rect id="firstDisbTermRec" rx="5" ry="5" x="0" y="0" width="257" height="31">
		</rect>
	
    
     <div >
    <button   type="button" onclick="readText(this.form)" >
    
	<svg class="calculateRec">
		<rect id="calculateRec" rx="20" ry="20" x="0" y="0" width="261" height="67">
		</rect>
	
	<div id="Calculate">
		<span>CALCULATE</span>
        </div></svg></button></div>
        
        <div id= "middle">
	<svg class="costOfAttendanceRec">
		<rect id="costOfAttendanceRec" rx="20" ry="20" x="0" y="0" width="495" height="210">
		</rect>
	</svg>
	<div id="Cost_of_Attendance">
		<span>Cost of Attendance</span>
	</div>
	<div class="coaRec">
		<rect id="coaRec" rx="5" ry="5" x="0" y="0" width="129" height="25">
		</rect>
	</div>
	<div id="Books">
		<span>Books</span>
	</div>
	<div class="booksRec" >
		<rect id="booksRec" rx="5" ry="5" x="0" y="0" width="131" height="25">
		</rect>
	</div>
	<div id="Loan_Fee">
		<span>Loan Fee</span>
	</div>
	<div class="loanFeeRec">
		<rect id="loanFeeRec" rx="5" ry="5" x="0" y="0" width="128.5" height="25">
		</rect>
	</div>
	<div id="Living">
		<span>Living</span>
	</div>
	<div class="livingRec" id="livingRec">
		<rect  rx="5" ry="5" x="0" y="0" width="129" height="25">
		</rect>
	</div>
	<div id="Tuition">
		<span>Tuition</span>
	</div>
	<div class="tuitionRec">
		<rect id="tuitionRec" rx="5" ry="5" x="0" y="0" width="128.5" height="25">
		</rect>
	</div>
	<svg class="aggLimitRec">
		<rect id="aggLimitRec" rx="20" ry="20" x="0" y="0" width="495" height="130">
		</rect>
	</svg>
	<div id="SUB_Agg_Left">
		<span>SUB Agg Left</span>
	</div>
	<div class="subAggLimitRec">
		<rect id="subAggLimitRec" rx="5" ry="5" x="0" y="0" width="129" height="25">
		</rect>
	</div>
	<svg class="awardRec">
		<rect id="awardRec" rx="20" ry="20" x="0" y="0" width="495" height="122">
		</rect>
	</svg>
	<div id="Subsidized_Loan_Award">
		<span>Subsidized Loan Award</span>
	</div>
     <input type = "text"   id = "inputs" NAME="inputbox19" VALUE="" id = "test" class="subAward" id="subAward" tabindex="19">
	
		<rect id="subAward" rx="5" ry="5" x="0" y="0" width="129" height="27">
		</rect>
	
	<div id="Unsubsidized_Loan_Award">
		<span>Unsubsidized Loan Award</span>
	</div>
             <input type = "text"   id = "inputs" NAME="inputbox20" VALUE="" id = "test" class="unsubAward"  id="unsubAward" tabindex="20">
	
		<rect id="unsubAward" rx="5" ry="5" x="0" y="0" width="129" height="26">
		</rect>
	</div>
    <div id = "right">
	<div class="noteRectangle">
		<rect id="noteRectangle" rx="20" ry="20" x="0" y="0" width="706" height="200">
		</rect>
	</div>
	<svg class="awardRecTwo">
		<rect id="awardRecTwo" rx="20" ry="20" x="0" y="0" width="711" height="185">
		</rect>
	</svg>
	<div id="Subsidized_Loan">
		<span>Subsidized Loan</span>
	</div>
	<div class="subIT">
		<rect id="subIT" rx="5" ry="5" x="0" y="0" width="100" height="40">
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
	<div class="subDP">
		<rect id="subDP" rx="5" ry="5" x="0" y="0" width="100" height="40">
		</rect>
	</div>
	<div class="subSC">
		<rect id="subSC" rx="5" ry="5" x="0" y="0" width="100" height="40">
		</rect>
	</div>
	<div id="Unsubsidized_Loan">
		<span>Unsubsidized Loan</span>
	</div>
	<div class="unsubIT">
		<rect id="unsubIT" rx="5" ry="5" x="0" y="0" width="100" height="40">
		</rect>
	</div>
	<div class="unsubDP">
		<rect id="unsubDP" rx="5" ry="5" x="0" y="0" width="100" height="40">
		</rect>
	</div>
	<div class="unsubSC">
		<rect id="unsubSC" rx="5" ry="5" x="0" y="0" width="100" height="40">
		</rect>
	</div>
        
        
        
        
      <button   type="submit"  >   
	<svg class="saveAwardRec">
		<rect id="saveAwardRec" rx="20" ry="20" x="0" y="0" width="261" height="67">
		</rect>
	
	<div id="SaveAward">
		<span>SAVE AWARD</span>
        </div></svg></button>
        </div>
         <button   type="button" onclick="readText2(this.form)" > 
	<svg class="newAwardRectangle">
		<rect id="newAwardRectangle" rx="20" ry="20" x="0" y="0" width="261" height="67">
		</rect>
	
	<div id="newAward">
		<span>NEW AWARD</span>
        </div></svg></button>
             
	<div id="n_nd_Disbursement_Term">
		<span>2nd Disbursement Term</span>
	</div>
        <input type = "text"   id = "inputs" NAME="inputbox5" VALUE="" id = "test" class="secondDisbTermRec" tabindex="5">
	
		<rect id="secondDisbTermRec" rx="5" ry="5" x="0" y="0" width="257" height="31">
		</rect>
	
	<div id="LP_-_CreditsWeeks">
		<span>LP - Credits/Weeks</span>
	</div>
        <input type = "text"   id = "inputs" NAME="inputbox6" VALUE="" id = "test" class="creditsWeeksRec" tabindex="6">
	
		<rect id="creditsWeeksRec" rx="5" ry="5" x="0" y="0" width="257" height="31">
		</rect>
	
	<div id="Program">
		<span>Program</span>
	</div>
        <input type = "text"   id = "inputs" NAME="inputbox9" VALUE="" id = "test" class="programRec" tabindex="9">
	
		<rect id="programRec" rx="5" ry="5" x="0" y="0" width="257" height="31">
		</rect>
	
	<div id="C_-_Codes">
		<span>C - Codes (No/Input Text)</span>
	</div>
        <input type = "text"   id = "inputs" NAME="inputbox10" VALUE="" id = "test" class="cCodesRec" tabindex="10">
	
		<rect id="cCodesRec" rx="5" ry="5" x="0" y="0" width="257" height="31">
		</rect>
	
	<div id="ECMPN">
		<span>EC/MPN (Yes/Input Text)</span>
	</div>
        <input type = "text"   id = "inputs" NAME="inputbox11" VALUE="" id = "test" class="ecMpnRec" tabindex="11">
	
		<rect id="ecMpnRec" rx="5" ry="5" x="0" y="0" width="257" height="31">
		</rect>
	
	<div id="NSLDS_Subsidized">
		<span>NSLDS Subsidized</span>
	</div>
        <input type = "text"   id = "inputs" NAME="inputbox12" VALUE="" id = "test" class="nsldsSUB" tabindex="12">
	
		<rect id="nsldsSUB" rx="5" ry="5" x="0" y="0" width="257" height="31">
		</rect>
	
	<div id="NSLDS_Combined">
		<span>NSLDS Combined</span>
	</div>
        <input type = "text"   id = "inputs" NAME="inputbox13" VALUE="" id = "test" class="NSLDScombined" tabindex="13">
	
		<rect id="NSLDScombined" rx="5" ry="5" x="0" y="0" width="257" height="31">
		</rect>
	
	<div id="Total_Credits_BUDGET">
		<span>Total Credits (BUDGET)</span>
	</div>
          <input type = "text"   id = "inputs" NAME="inputbox17" VALUE="" id = "test" class="tuitionRateRec" tabindex="17">
	
		<rect id="tuitionRateRec" rx="5" ry="5" x="0" y="0" width="257" height="31">
		</rect>
	
         <input type = "text"   id = "inputs" NAME="inputbox16" VALUE="" id = "test" class="totalCreditsRec" tabindex="16">
	
		<rect id="totalCreditsRec" rx="5" ry="5" x="0" y="0" width="257" height="31">
		</rect>
	
        <input type = "text"   id = "inputs" NAME="inputbox18" VALUE="" id = "test" class="resourceRec" tabindex="18">
	
		<rect id="resourceRec" rx="5" ry="5" x="0" y="0" width="257" height="31">
		</rect>
	
	<div id="Tuition_Rate_BUDGET">
		<span>Tuition Rate (BUDGET)</span>
	</div>
	<div id="All_Resources_BUDGET">
		<span>All Resources (BUDGET)</span>
	</div><div id = "middle1">
    
   <i class="bi bi-calculator"></i>
   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calculator" id ="calc" onclick="window.open('ProrationTool.php');" viewBox="0 0 16 16">
  <path d="M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"/>
  <path d="M4 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-2zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-4z"/>
</svg> 
    
    
    <div >
	<button   type="button" onclick="myFunction1(this.form)" >
    
	<svg class="calculateRec_ch">
		<rect id="calculateRec_ch" rx="20" ry="20" x="0" y="0" width="261" height="67">
		</rect>
	
	<div id="CREDENTIAL">
		<span>ACCEPT AWARD</span>
	</div></svg></button>	</div>
        
        
        
	<div id="Combined_Agg_Left">
		<span>Combined Agg Left</span>
	</div>
	<div class="combinedAggLimitRec">
		<rect id="combinedAggLimitRec" rx="5" ry="5" x="0" y="0" width="129" height="25">
		</rect>
	</div>
	<svg class="awardRec_cl">
		<rect id="awardRec_cl" rx="20" ry="20" x="0" y="0" width="495" height="124">
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
	<div class="subEligiblity">
		<rect id="subEligiblity" rx="5" ry="5" x="0" y="0" width="129" height="25">
		</rect>
	</div>
	<div class="unsubEligiblity">
		<rect id="unsubEligiblity" rx="5" ry="5" x="0" y="0" width="129" height="25">
		</rect>
	</div>
	<div class="combinedEligiblity">
		<rect id="combinedEligiblity" rx="5" ry="5" x="0" y="0" width="129" height="25">
		</rect>
	</div></div>
	<div id="IND_Student_YESNO">
		<span>IND Student (Yes/No)</span>
	</div>
        <input type = "text"   id = "inputs" NAME="inputbox7" VALUE="" id = "test" class="INDDEPstudent" tabindex="7">
	
		<rect id="INDDEPstudent" rx="5" ry="5" x="0" y="0" width="257" height="31">
		</rect>
	
	<div id="Number_of_Units_Taken">
		<span>Number of Units Taken</span>
	</div>
        <input type = "text"   id = "inputs" NAME="inputbox8" VALUE="" id = "test" class="numberofUnitsTakenRec" tabindex="8">
	
		<rect id="numberofUnitsTakenRec" rx="5" ry="5" x="0" y="0" width="257" height="31">
		</rect>
	
	<div id="Prorated_EFC_BUDGET">
		<span>Prorated EFC (BUDGET)</span>
	</div>
        <input type = "text"   id = "inputs" NAME="inputbox14" VALUE="" id = "test" class="proratedEFCRec" tabindex="14">
	
		<rect id="proratedEFCRec" rx="5" ry="5" x="0" y="0" width="257" height="31">
		</rect>
	
	<div id="Primary_EFC_BUDGET">
		<span>Primary EFC (BUDGET)</span>
	</div>
        <input type = "text"   id = "inputs" NAME="inputbox15" VALUE="" id = "test" class="primaryEFCrec" tabindex="15">
	
		<rect id="primaryEFCrec" rx="5" ry="5" x="0" y="0" width="257" height="31">
		</rect>
	
    
    <div id ="middle3">
	<svg class="aggLimitRec_c">
		<rect id="aggLimitRec_c" rx="10" ry="10" x="0" y="0" width="495" height="41">
		</rect>
	</svg>
	<div id="Pell_Elgibility_Primary_EFC">
		<span>Pell Elgibility (Primary EFC)</span>
	</div>
	<div class="pellEligRec">
		<rect id="pellEligRec" rx="5" ry="5" x="0" y="0" width="129" height="25">
		</rect>
	</div>
	<div id="Grade_Level">
		<span>Grade Level</span>
	</div>
	<div class="gradeLevelRec">
		<rect id="gradeLevelRec" rx="5" ry="5" x="0" y="0" width="129" height="25">
		</rect>
	</div>
	<div id="Pell_Grant_Award">
		<span>Pell Grant Award</span>
	</div>
        <input type = "text"   id = "inputs" NAME="inputbox21" VALUE="" id = "test" class="pellAward" tabindex="21">
	
		<rect id="pellAward" rx="5" ry="5" x="0" y="0" width="129" height="25">
		</rect>
	</div>
    <div id ="right1">
	<div id="Pell_Grant">
		<span>Pell Grant</span>
	</div>
	<div class="pellIT" id="pellIT">
		<rect id="pellIT" rx="5" ry="5" x="0" y="0" width="100" height="40">
		</rect>
	</div>
	<div class="pellDP" id="pellDP">
		<rect id="pellDP" rx="5" ry="5" x="0" y="0" width="100" height="40">
		</rect>
	</div>
	<div class="pellSC" id="pellSC">
		<rect id="pellSC" rx="5" ry="5" x="0" y="0" width="100" height="40">
		</rect>
	</div>
        </div> </form> 
<?php
         
            $server_name = "localhost";
            $db_name = "capstone";
            $user_name = "mcaffarelli";
            $password = "Apple";
            
            $mysqli = new mysqli($server_name, $user_name, $password, $db_name);
           
           //if student id = '' then student id = "N/A" else do this
         
          
          
           
           
            
              if ((isset($_GET['inputbox19'])) || (isset($_GET['inputbox20'])) || (isset($_GET['inputbox21']))){
               
             
                  
                  
               
            
             $COA = '';   
            
            
            
            if(isset($_GET['inputbox18']) && is_numeric($_GET['inputbox18'])){
                $resoruces = $_GET['inputbox18'];
            }else
            {
               $resoruces = 0; 
            }
             
             
             //COA Calculation
    if((is_numeric($_GET['inputbox16'])) && (is_numeric($_GET['inputbox17'])) && (isset($_GET['inputbox16'])) && (isset($_GET['inputbox17']))){        
    
     $loanFeesPerUnit = 3;
     $booksPerUnit = 28;
     $livingPerUnit = 730;
     $totalUnits = $_GET['inputbox16']/4.5;
     $totalUnitsLoanFees = $_GET['inputbox16'] * $loanFeesPerUnit;
     $totalUnitsBooks = $_GET['inputbox16'] * $booksPerUnit;
     $totalUnitsLiving = $_GET['inputbox16'] * $livingPerUnit;
     $totalUnitsTuition = $totalUnits * $_GET['inputbox17'];
     $costOfAttendance = ($totalUnitsLoanFees + $totalUnitsBooks + $totalUnitsLiving + $totalUnitsTuition) - $resoruces;
             
       $COA = $costOfAttendance;                      
      }
      
      //Grade Level Calculation
       $GRADE_LEVEL = '';
    
    
    
    
    if($_GET['inputbox8'] <= 35)
        {
            $GRADE_LEVEL = '1ST YEAR';
         
        }
     else if($_GET['inputbox8'] >= 36 && $_GET['inputbox8'] <= 71)
        {
            $GRADE_LEVEL = '2ND YEAR';
          
        }
     else if($_GET['inputbox8'] >= 72 && $_GET['inputbox8'] <= 107)
        {
            $GRADE_LEVEL = '3RD YEAR';
         
        }
    else if($_GET['inputbox8'] >= 108 )
        {
            $GRADE_LEVEL = '4TH YEAR';
         
        }
   
      
      
      
           $STUDENT_ID = $_GET['inputbox1'];
           $LPSD = $_GET['inputbox2']; 
           $LPED = $_GET['inputbox3'];
           $UNSUB = $_GET['inputbox20'];
           $CREDITS_WEEKS = $_GET['inputbox6'];       
           $TEACH = 'N/A';
           $SUB = $_GET['inputbox19'];
           $PELL = $_GET['inputbox21'];
           
                  
             
               
             
              
             
             
              
                  
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