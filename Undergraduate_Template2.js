///////////////////////////////////////
// INITIALIZATION
///////////////////////////////////////

/**
 * Functionality for scaling, showing by media query, and navigation between multiple pages on a single page. 
 * Code subject to change.
 **/

function readText1 (form) {
    
    window.location.href='SaveAwards.php'
    
     
}
function readText2 (form) {
    
     window.location.href='StudentSelection.php'
    
    
}


function readText (form) {
    
    
    
    //Make middle part appear   
        document.getElementById("middle").style.display = "block";
        document.getElementById("middle1").style.display = "block";
    document.getElementById("middle3").style.display = "block";
    
    
    //Inputs
     var studentId = form.inputbox1.value;
     var loanPeriodStartDate = form.inputbox2.value;
     var loanPeriodEndDate = form.inputbox3.value;
     
     var creditsWeeks = form.inputbox6.value;
     var indStudent = form.inputbox7.value;
     var numberOfUnitsTaken = form.inputbox8.value;
     var program = form.inputbox9.value;
     var cCodes = form.inputbox10.value;
     var ecMpn = form.inputbox11.value;
     var nsldsSub = form.inputbox12.value;
     nsldsSub = nsldsSub.replace(/\$|,/g, '');
     var nsldsCombined = form.inputbox13.value;
     nsldsCombined = nsldsCombined.replace(/\$|,/g, '');
     var proratedEFC = form.inputbox14.value;
     proratedEFC = proratedEFC.replace(/\$|,/g, '');
     var primaryEFC = form.inputbox15.value;
     primaryEFC = primaryEFC.replace(/\$|,/g, '');
     var totalCredits = form.inputbox16.value;
     var tuitionRate = form.inputbox17.value;
     tuitionRate = tuitionRate.replace(/\$|,/g, '');
     var allResources = form.inputbox18.value;
     allResources = allResources.replace(/\$|,/g, '');
     
    var subLoanAward = form.inputbox19.value;
     subLoanAward = subLoanAward.replace(/\$|,/g, '');
     
    var unsubLoanAward = form.inputbox20.value;
     unsubLoanAward = unsubLoanAward.replace(/\$|,/g, '');
     
    var pellGrantAward = form.inputbox21.value;
     pellGrantAward = pellGrantAward.replace(/\$|,/g, '');
    
    //Assign By ID
    
    
   //document.getElementById('booksRec').innerHTML = studentId;
   //document.getElementById('loanFeeRec').innerHTML = loanPeriodStartDate;
   //document.getElementById('livingRec').innerHTML = loanPeriodEndDate;
   //document.getElementById('tuitionRec').innerHTML = firstDispTerm;
   //document.getElementById('coaRec').innerHTML = secondDispTerm;
   //document.getElementById('gradeLevelRec').innerHTML = creditsWeeks;
   //document.getElementById('subAggLimitRec').innerHTML = indStudent;
   //document.getElementById('combinedAggLimitRec').innerHTML = numberOfUnitsTaken;
   //document.getElementById('pellEligRec').innerHTML = program;
   //document.getElementById('subEligiblity').innerHTML = cCodes;
   //document.getElementById('unsubEligiblity').innerHTML = ecMpn;
   //document.getElementById('combinedEligiblity').innerHTML = nsldsSub;
   //document.getElementById('subIT').innerHTML = nsldsCombined;
   //document.getElementById('subDP').innerHTML = proratedEFC;
   //document.getElementById('subSC').innerHTML = primaryEFC;
   //document.getElementById('unsubIT').innerHTML = totalCredits;
   //document.getElementById('unsubDP').innerHTML = tuitionRate;
   //document.getElementById('unsubSC').innerHTML = allResources;
   //document.getElementById('pellIT').innerHTML = subLoanAward;
   //document.getElementById('pellDP').innerHTML = unsubLoanAward;
   //document.getElementById('pellSC').innerHTML = pellGrantAward;
   //document.getElementById('noteRectangle').innerHTML = "asdasd";
    
    
    
    //COA Calculation
    var dollarUSLocale = Intl.NumberFormat('en-US');
    var dollarIndianLocale = Intl.NumberFormat('en-IN');
    var loanFeesPerUnit = 3;
    var booksPerUnit = 28;
    var livingPerUnit = 730;
    var totalUnits = totalCredits/4.5;
    var totalUnitsLoanFees = totalCredits * loanFeesPerUnit;
    var totalUnitsBooks = totalCredits * booksPerUnit;
    var totalUnitsLiving = totalCredits * livingPerUnit;
    var totalUnitsTuition = totalUnits * tuitionRate;
    var costOfAttendance = (totalUnitsLoanFees + totalUnitsBooks + totalUnitsLiving + totalUnitsTuition) - Math.abs(allResources);
    
    if(isNaN(totalCredits) || isNaN(tuitionRate) || isNaN(allResources) ){
        document.getElementById('booksRec').innerHTML = "Enter # (BUDGET)"
        document.getElementById("booksRec").style.fontSize = "19px";
        
        document.getElementById('loanFeeRec').innerHTML = "Enter # (BUDGET)" 
        document.getElementById("loanFeeRec").style.fontSize = "19px";
        
        document.getElementById('livingRec').innerHTML = "Enter # (BUDGET)"
        document.getElementById("livingRec").style.fontSize = "19px";
       
        document.getElementById('tuitionRec').innerHTML = "Enter # (BUDGET)"
        document.getElementById("tuitionRec").style.fontSize = "19px";
         
        document.getElementById('coaRec').innerHTML = "N/A";
       document.getElementById("coaRec").style.color = "red";
        
   }
    else{
       
        document.getElementById("booksRec").style.fontSize = "23px";
        document.getElementById("loanFeeRec").style.fontSize = "23px";
         document.getElementById("livingRec").style.fontSize = "23px";
        document.getElementById("tuitionRec").style.fontSize = "23px";
        
    document.getElementById('booksRec').innerHTML = "$" + dollarUSLocale.format(totalUnitsBooks);
    document.getElementById('loanFeeRec').innerHTML = "$" +  dollarUSLocale.format(totalUnitsLoanFees);
    document.getElementById('livingRec').innerHTML = "$" + dollarUSLocale.format(totalUnitsLiving);
    document.getElementById('tuitionRec').innerHTML = "$" + dollarUSLocale.format(totalUnitsTuition);
    document.getElementById('coaRec').innerHTML = "$" + dollarUSLocale.format(costOfAttendance);
    }
    
   
    
     if (costOfAttendance < 0) {
      
        document.getElementById("coaRec").style.color = "red";
        
        
    }else if((costOfAttendance > 0))   {
        document.getElementById("coaRec").style.color = "green";
        
    }
    
    //---------------------------------------------------------
    //---------------------------------------------------------
    
    //Agg Limit Calculation
    
    var dependancyStatus = "";
    var subaggregateLimit = 0;
    var unsubaggregateLimit = 0;
    var combinedaggreateLimit =0;
    
   
    var upperCase = indStudent.replace(/\s/g,'')
    var upperCase2 = upperCase.toUpperCase();
    
     
    if (upperCase2 === "YES"){
        
        dependancyStatus = true;
    }
     else if (upperCase2 === "NO"){
        
        dependancyStatus = false;
    }
     else if (upperCase2 === ""){
        document.getElementById('subAggLimitRec').innerHTML = "" ;
        document.getElementById('combinedAggLimitRec').innerHTML = "" ;
    }
    else  {
        document.getElementById('subAggLimitRec').innerHTML = "'Yes/No'-Ind Student" ;
        document.getElementById("subAggLimitRec").style.fontSize = "17px";
        document.getElementById("subAggLimitRec").style.color = "red";
        
    
         document.getElementById('combinedAggLimitRec').innerHTML = "'Yes/No'-Ind Student" ;
        document.getElementById("combinedAggLimitRec").style.fontSize = "17px";
        document.getElementById("combinedAggLimitRec").style.color = "red";
        }
    
  if (dependancyStatus === true){
      
       subaggregateLimit = 23000;
       unsubaggregateLimit = 34500;
       combinedaggreateLimit = 57500;
      var subagglimitLeft1 = subaggregateLimit - nsldsSub;
      var combinedaggreateLimit1 = combinedaggreateLimit - nsldsCombined;

    document.getElementById('subAggLimitRec').innerHTML = "$" + dollarUSLocale.format(subagglimitLeft1);
    document.getElementById('combinedAggLimitRec').innerHTML = "$" + dollarUSLocale.format(combinedaggreateLimit1);
      document.getElementById("subAggLimitRec").style.fontSize = "23px";
        document.getElementById("combinedAggLimitRec").style.color = "darkblue";
        document.getElementById("subAggLimitRec").style.color = "darkblue";
        document.getElementById("combinedAggLimitRec").style.fontSize = "23px";
      
      
      
  }
    else if (dependancyStatus === false){
        
         subaggregateLimit = 23000;
         unsubaggregateLimit = 8000
         combinedaggreateLimit = 31000;
        var subagglimitLeft1 = subaggregateLimit - nsldsSub;
 var combinedaggreateLimit1 = combinedaggreateLimit - nsldsCombined;

    document.getElementById('subAggLimitRec').innerHTML = "$" + dollarUSLocale.format(subagglimitLeft1);
    document.getElementById('combinedAggLimitRec').innerHTML = "$" + dollarUSLocale.format(combinedaggreateLimit1);
        document.getElementById("subAggLimitRec").style.fontSize = "23px";
        document.getElementById("combinedAggLimitRec").style.color = "darkblue";
        document.getElementById("subAggLimitRec").style.color = "darkblue";
        document.getElementById("combinedAggLimitRec").style.fontSize = "23px";
        
    }
    
    
     if (combinedaggreateLimit1 < 0) {
      
        document.getElementById("combinedAggLimitRec").style.color = "red";
        document.getElementById("combinedAggLimitRec").style.fontWeight = "700";
        
        
    }else  if (combinedaggreateLimit1 >= 0) {
        document.getElementById("combinedAggLimitRec").style.color = "green";
        document.getElementById("combinedAggLimitRec").style.fontWeight = "700";
       
    }
    
    if (subagglimitLeft1 < 0) {
      
        document.getElementById("subAggLimitRec").style.color = "red";
        document.getElementById("subAggLimitRec").style.fontWeight = "700";
        
        
    }else  if (subagglimitLeft1 >= 0) {
        document.getElementById("subAggLimitRec").style.color = "green";
        document.getElementById("subAggLimitRec").style.fontWeight = "700";
       
    }
    
    
    
    
    
   if(isNaN(nsldsSub) || isNaN(nsldsCombined) ){
        document.getElementById('subAggLimitRec').innerHTML = "(Enter NSLDS #)";
        
        document.getElementById('combinedAggLimitRec').innerHTML = "(Enter NSLDS #)";
       document.getElementById("combinedAggLimitRec").style.fontSize = "17px";
        document.getElementById("combinedAggLimitRec").style.color = "red";
       document.getElementById("subAggLimitRec").style.fontSize = "17px";
        document.getElementById("subAggLimitRec").style.color = "red";
        }
     
   
     //---------------------------------------------------------
    //---------------------------------------------------------
 
     // Pell Eligibility
    var pell = primaryEFC;
    
    if (pell <= 0)
    {
        pell = 6895;
    }
    else if(pell >= 1 && pell <= 100) 
    {
         pell = 6845;
    }
    else if(pell >= 101 && pell <= 200) 
    {
         pell = 6745;
    }
    else if(pell >= 201 && pell <= 300) 
    {
         pell = 6645;
    }
    else if(pell >= 301 && pell <= 400) 
    {
         pell = 6545;
    }
    else if(pell >= 401 && pell <= 500) 
    {
         pell = 6445;
    }
    else if(pell >= 501 && pell <= 600) 
    {
         pell = 6345;
    }
    else if(pell >= 601 && pell <= 700) 
    {
         pell = 6245;
    }
    else if(pell >= 701 && pell <= 800) 
    {
         pell = 6145;
    }
    else if(pell >= 801 && pell <= 900) 
    {
         pell = 6045;
    }
    else if(pell >= 901 && pell <= 1000) 
    {
         pell = 5945;
    }
    else if(pell >= 1001 && pell <= 1100) 
    {
         pell = 5845;
    }
    else if(pell >= 1101 && pell <= 1200) 
    {
         pell = 5745;
    }
    else if(pell >= 1201 && pell <= 1300) 
    {
         pell = 5645;
    }
    else if(pell >= 1301 && pell <= 1400) 
    {
         pell = 5545;
    }
    else if(pell >= 1401 && pell <= 1500) 
    {
         pell = 5445;
    }
    else if(pell >= 1501 && pell <= 1600) 
    {
         pell = 5345;
    }
    else if(pell >= 1601 && pell <= 1700) 
    {
         pell = 5245;
    }
    else if(pell >= 1701 && pell <= 1800) 
    {
         pell = 5145;
    }
    else if(pell >= 1801 && pell <= 1900) 
    {
         pell = 5045;
    }
    else if(pell >= 1901 && pell <= 2000) 
    {
         pell = 4945;
    }
    else if(pell >= 2001 && pell <= 2100) 
    {
         pell = 4845;
    }
    else if(pell >= 2101 && pell <= 2200) 
    {
         pell = 4745;
    }
    else if(pell >= 2201 && pell <= 2300) 
    {
         pell = 4645;
    }
    else if(pell >= 2301 && pell <= 2400) 
    {
         pell = 4545;
    }
    else if(pell >= 2401 && pell <= 2500) 
    {
         pell = 4445;
    }
    else if(pell >= 2501 && pell <= 2600) 
    {
         pell = 4345;
    }
    else if(pell >= 2601 && pell <= 2700) 
    {
         pell = 4245;
    }
    else if(pell >= 2701 && pell <= 2800) 
    {
         pell = 4145;
    }
    else if(pell >= 2801 && pell <= 2900) 
    {
         pell = 4045;
    }
    else if(pell >= 2901 && pell <= 3000) 
    {
         pell = 3945;
    }
    else if(pell >= 3001 && pell <= 3100) 
    {
         pell = 3845;
    }
    else if(pell >= 3101 && pell <= 3200) 
    {
         pell = 3745;
    }
    else if(pell >= 3201 && pell <= 3300) 
    {
         pell = 3645;
    }
    else if(pell >= 3301 && pell <= 3400) 
    {
         pell = 3545;
    }
    else if(pell >= 3401 && pell <= 3500) 
    {
         pell = 3445;
    }
    else if(pell >= 3501 && pell <= 3600) 
    {
         pell = 3345;
    }
    else if(pell >= 3601 && pell <= 3700) 
    {
         pell = 3245;
    }
    else if(pell >= 3701 && pell <= 3800) 
    {
         pell = 3145;
    }
    else if(pell >= 3801 && pell <= 3900) 
    {
         pell = 3045;
    }
    else if(pell >= 3901 && pell <= 4000) 
    {
         pell = 2945;
    }
    else if(pell >= 4001 && pell <= 4100) 
    {
         pell = 2845;
    }
    else if(pell >= 4101 && pell <= 4200) 
    {
         pell = 2745;
    }
    else if(pell >= 4201 && pell <= 4300) 
    {
         pell = 2645;
    }
    else if(pell >= 4301 && pell <= 4400) 
    {
         pell = 2545;
    }
    else if(pell >= 4401 && pell <= 4500) 
    {
         pell = 2445;
    }
    else if(pell >= 4501 && pell <= 4600) 
    {
         pell = 2345;
    }
    else if(pell >= 4601 && pell <= 4700) 
    {
         pell = 2245;
    }
    else if(pell >= 4701 && pell <= 4800) 
    {
         pell = 2145;
    }
    else if(pell >= 4801 && pell <= 4900) 
    {
         pell = 2045;
    }
    else if(pell >= 4901 && pell <= 5000) 
    {
         pell = 1945;
    }
    
    else if(pell >= 5001 && pell <= 5100) 
    {
         pell = 1845;
    }
    
    else if(pell >= 5101 && pell <= 5200) 
    {
         pell = 1745;
    }
    
    else if(pell >= 5201 && pell <= 5300) 
    {
         pell = 1645;
    }
    else if(pell >= 5301 && pell <= 5400) 
    {
         pell = 1545;
    }
    
    else if(pell >= 5401 && pell <= 5500) 
    {
         pell = 1445;
    }
    
    else if(pell >= 5501 && pell <= 5600) 
    {
         pell = 1345;
    }
    
    else if(pell >= 5601 && pell <= 5700) 
    {
         pell = 1245;
    }
    
    else if(pell >= 5701 && pell <= 5800) 
    {
         pell = 1145;
    }
    
    else if(pell >= 5801 && pell <= 5900) 
    {
         pell = 1045;
    }
    else if(pell >= 5901 && pell <= 6000) 
    {
         pell = 945;
    }
     else if(pell >= 6001 && pell <= 6100) 
    {
         pell = 845;
    }
     else if(pell >= 6101 && pell <= 6200) 
    {
         pell = 745;
    }
     else if(pell >= 6201 && pell <= 6206) 
    {
         pell = 692;
    }
    else if(pell >= 6207) 
    {
         pell = 0;
    }
    
    if(primaryEFC === "" ) 
    {
         pell = 0;
    }
    
    
    if(primaryEFC === ""){
       document.getElementById('pellEligRec').innerHTML = "";
       }
    else if(isNaN(primaryEFC)){
        document.getElementById('pellEligRec').innerHTML = "Enter Primary EFC #"
        document.getElementById("pellEligRec").style.fontSize = "17px";
        document.getElementById("pellEligRec").style.color = "red";
    }
    else {
        document.getElementById('pellEligRec').innerHTML = "$"  + dollarUSLocale.format(pell);}
    
    if (pell > 0) {
        document.getElementById("pellEligRec").style.color = "green";
        document.getElementById("pellEligRec").style.fontSize = "23px";
       
    }
    else if (pell <= 0){
        document.getElementById("pellEligRec").style.color = "red";
        document.getElementById("pellEligRec").style.fontSize = "23px";
       
    }
    
    
     //document.getElementById('subEligiblity').innerHTML = cCodes;
   //document.getElementById('unsubEligiblity').innerHTML = ecMpn;
   //document.getElementById('combinedEligiblity').innerHTML = nsldsSub;
    
    var proratedEFC1 = form.inputbox14.value;
    proratedEFC1 = proratedEFC1.replace(/\$|,/g, '');
    var totalCredits1 = form.inputbox16.value;
    var allResources1 = form.inputbox18.value;
    allResources1 = allResources1.replace(/\$|,/g, '');
    var tuitionRate3 = form.inputbox17.value;
     tuitionRate3 = tuitionRate3.replace(/\$|,/g, '');
    //COA Calculation
    
     //COA Calculation for sub eligiblity
   
    var loanFeesPerUnit1 = 3;
    var booksPerUnit1 = 28;
    var livingPerUnit1 = 730;
    var totalUnits1 = totalCredits1/4.5;
    var totalUnitsLoanFees1 = totalCredits1 * loanFeesPerUnit1;
    var totalUnitsBooks1 = totalCredits1 * booksPerUnit1;
    var totalUnitsLiving1 = totalCredits1 * livingPerUnit1;
    var totalUnitsTuition1 = totalUnits1 * tuitionRate3;
    var costOfAttendance2 = (totalUnitsLoanFees1 + totalUnitsBooks1 + totalUnitsLiving1 + totalUnitsTuition1) - Math.abs(allResources1);
    
      var totalSubsidizedElig = (costOfAttendance2 - proratedEFC1)

      
    
     //---------------------------------------------------------
    //---------------------------------------------------------
    //Grade Level
    
    
    
    var gradeLevel1 = "";
    
    
    if(numberOfUnitsTaken === "" )
        {
            gradeLevel1 = ""
            document.getElementById('gradeLevelRec').innerHTML = gradeLevel1;
        document.getElementById("gradeLevelRec").style.fontSize = "23px";
        document.getElementById("gradeLevelRec").style.color = "darkblue";;
        }
    
    else if(numberOfUnitsTaken <= 35)
        {
            gradeLevel1 = "1st Year";
            document.getElementById('gradeLevelRec').innerHTML = gradeLevel1;
        document.getElementById("gradeLevelRec").style.fontSize = "23px";
        document.getElementById("gradeLevelRec").style.color = "darkblue";;
        }
     else if(numberOfUnitsTaken >= 36 && numberOfUnitsTaken <= 71)
        {
            gradeLevel1 = "2nd Year";
            document.getElementById('gradeLevelRec').innerHTML = gradeLevel1;
        document.getElementById("gradeLevelRec").style.fontSize = "23px";
        document.getElementById("gradeLevelRec").style.color = "darkblue";;
        }
     else if(numberOfUnitsTaken >= 72 && numberOfUnitsTaken <= 107)
        {
            gradeLevel1 = "3rd Year";
            document.getElementById('gradeLevelRec').innerHTML = gradeLevel1;
        document.getElementById("gradeLevelRec").style.fontSize = "23px";
        document.getElementById("gradeLevelRec").style.color = "darkblue";;
        }
    else if(numberOfUnitsTaken >= 108 )
        {
            gradeLevel1 = "4th Year";
            document.getElementById('gradeLevelRec').innerHTML = gradeLevel1;
        document.getElementById("gradeLevelRec").style.fontSize = "23px";
        document.getElementById("gradeLevelRec").style.color = "darkblue";;
        }
    else if(isNaN(numberOfUnitsTaken)){
        
        document.getElementById('gradeLevelRec').innerHTML = "Enter # Of Units"
        document.getElementById("gradeLevelRec").style.fontSize = "17px";
        document.getElementById("gradeLevelRec").style.color = "red";;
    }
    
    //---------------------------------------------------------
    //---------------------------------------------------------   
    
    
    // LOAN AWARDS
    var sub0 = "";
    var unsub0 = "";
    var combined0 = "";
    
    var Owed = costOfAttendance2 - pell;
    
    
    if(dependancyStatus == true && gradeLevel1 === "1st Year")
    {
                    
            sub0 = 3500;
            unsub0 = 6000; 
            combined0 = 9500;
              
           
        //max sub comparison 
        
            if(sub0 <= totalSubsidizedElig)
                {
                    sub0 = sub0;
                }
            if (sub0 > totalSubsidizedElig)
                {
                    sub0 = totalSubsidizedElig;
                }
            if (totalSubsidizedElig <= 0)
                {
                    sub0 = 0;
                }
                                              
            
        // sub agg limit comparison
             
           if(sub0 <= subagglimitLeft1)
                {
                    sub0 = sub0;
                    
                }
            if (sub0 > subagglimitLeft1)
                {
                     sub0 = subagglimitLeft1;
                         
                   
                }
        
        
         //combined agg limit comparison
        
             
             if(sub0 <= combinedaggreateLimit1)
                {
                    sub0 = sub0;
                    
                }
            if (sub0 > combinedaggreateLimit1)
                {
                     sub0 = combinedaggreateLimit1;
                         
                   
                }
        
        //COA calculation
            if(sub0 <= Owed)
                {
                    sub0 = sub0;
                    
                }
            if (sub0 > Owed)
                {
                     sub0 = Owed;
                        
                   
                }
         if (sub0 < 0)
                {
                     sub0 = 0;
                        
                   
                }
        //sub works up to this point
        
        
        
        //unsub combined agge
        
        
         if(combined0 <= combinedaggreateLimit1)
                {
                   
                    unsub0 = combined0 - sub0;
                    
                }
            if (combined0 > combinedaggreateLimit1)
                {
                     combined0 = combinedaggreateLimit1;
                      unsub0 = combined0 - sub0;   
                   
                }
        
        var Owed2 = costOfAttendance2 - pell - sub0;
        
        if(Owed2 <= combined0)
            {
                unsub0 = Owed2;
            }
        if(Owed2 > combined0)
            {
                unsub0 = combined0 - sub0;
            }
        
         if (unsub0 < 0)
                {
                     unsub0 = 0;
                   
                }
        
        
        if(isNaN(costOfAttendance)){
            unsub0 = "";
            sub0 = "";
            combined0 = "";
        }
        
        combined0 = unsub0 +sub0;
                        
               document.getElementById('subEligiblity').innerHTML = "$" + dollarUSLocale.format(sub0); 
               document.getElementById('unsubEligiblity').innerHTML = "$" + dollarUSLocale.format(unsub0);
               document.getElementById('combinedEligiblity').innerHTML = "$" + dollarUSLocale.format(combined0);
        
    
    }
    
     if(dependancyStatus == true && gradeLevel1 === "2nd Year")
    {
                    
            sub0 = 4500;
            unsub0 = 6000; 
            combined0 = 10500;
              
           
        //max sub comparison 
        
            if(sub0 <= totalSubsidizedElig)
                {
                    sub0 = sub0;
                }
            if (sub0 > totalSubsidizedElig)
                {
                    sub0 = totalSubsidizedElig;
                }
            if (totalSubsidizedElig <= 0)
                {
                    sub0 = 0;
                }
                                              
            
        // sub agg limit comparison
             
           if(sub0 <= subagglimitLeft1)
                {
                    sub0 = sub0;
                    
                }
            if (sub0 > subagglimitLeft1)
                {
                     sub0 = subagglimitLeft1;
                         
                   
                }
        
        
         //combined agg limit comparison
        
             
             if(sub0 <= combinedaggreateLimit1)
                {
                    sub0 = sub0;
                    
                }
            if (sub0 > combinedaggreateLimit1)
                {
                     sub0 = combinedaggreateLimit1;
                         
                   
                }
        
        //COA calculation
            if(sub0 <= Owed)
                {
                    sub0 = sub0;
                    
                }
            if (sub0 > Owed)
                {
                     sub0 = Owed;
                        
                   
                }
         if (sub0 < 0)
                {
                     sub0 = 0;
                        
                   
                }
        //sub works up to this point
        
        
        
        //unsub combined agge
        
        
         if(combined0 <= combinedaggreateLimit1)
                {
                   
                    unsub0 = combined0 - sub0;
                    
                }
            if (combined0 > combinedaggreateLimit1)
                {
                     combined0 = combinedaggreateLimit1;
                      unsub0 = combined0 - sub0;   
                   
                }
        
        var Owed2 = costOfAttendance2 - pell - sub0;
        
        if(Owed2 <= combined0)
            {
                unsub0 = Owed2;
            }
        if(Owed2 > combined0)
            {
                unsub0 = combined0 - sub0;
            }
        
         if (unsub0 < 0)
                {
                     unsub0 = 0;
                   
                }
        
        
        if(isNaN(costOfAttendance)){
            unsub0 = "";
            sub0 = "";
            combined0 = "";
        }
        
        combined0 = unsub0 +sub0;
                        
               document.getElementById('subEligiblity').innerHTML = "$" + dollarUSLocale.format(sub0); 
               document.getElementById('unsubEligiblity').innerHTML = "$" + dollarUSLocale.format(unsub0);
               document.getElementById('combinedEligiblity').innerHTML = "$" + dollarUSLocale.format(combined0);
        
    
    }
    if(dependancyStatus == true && gradeLevel1 === "3rd Year")
    {
                    
            sub0 = 5500;
            unsub0 = 7000; 
            combined0 = 12500;
              
           
        //max sub comparison 
        
            if(sub0 <= totalSubsidizedElig)
                {
                    sub0 = sub0;
                }
            if (sub0 > totalSubsidizedElig)
                {
                    sub0 = totalSubsidizedElig;
                }
            if (totalSubsidizedElig <= 0)
                {
                    sub0 = 0;
                }
                                              
            
        // sub agg limit comparison
             
           if(sub0 <= subagglimitLeft1)
                {
                    sub0 = sub0;
                    
                }
            if (sub0 > subagglimitLeft1)
                {
                     sub0 = subagglimitLeft1;
                         
                   
                }
        
        
         //combined agg limit comparison
        
             
             if(sub0 <= combinedaggreateLimit1)
                {
                    sub0 = sub0;
                    
                }
            if (sub0 > combinedaggreateLimit1)
                {
                     sub0 = combinedaggreateLimit1;
                         
                   
                }
        
        //COA calculation
            if(sub0 <= Owed)
                {
                    sub0 = sub0;
                    
                }
            if (sub0 > Owed)
                {
                     sub0 = Owed;
                        
                   
                }
         if (sub0 < 0)
                {
                     sub0 = 0;
                        
                   
                }
        //sub works up to this point
        
        
        
        //unsub combined agge
        
        
         if(combined0 <= combinedaggreateLimit1)
                {
                   
                    unsub0 = combined0 - sub0;
                    
                }
            if (combined0 > combinedaggreateLimit1)
                {
                     combined0 = combinedaggreateLimit1;
                      unsub0 = combined0 - sub0;   
                   
                }
        
        var Owed2 = costOfAttendance2 - pell - sub0;
        
        if(Owed2 <= combined0)
            {
                unsub0 = Owed2;
            }
        if(Owed2 > combined0)
            {
                unsub0 = combined0 - sub0;
            }
        
         if (unsub0 < 0)
                {
                     unsub0 = 0;
                   
                }
        
        
        if(isNaN(costOfAttendance)){
            unsub0 = "";
            sub0 = "";
            combined0 = "";
        }
        
        combined0 = unsub0 +sub0;
                        
               document.getElementById('subEligiblity').innerHTML = "$" + dollarUSLocale.format(sub0); 
               document.getElementById('unsubEligiblity').innerHTML = "$" + dollarUSLocale.format(unsub0);
               document.getElementById('combinedEligiblity').innerHTML = "$" + dollarUSLocale.format(combined0);
        
    
    }
    if(dependancyStatus == true && gradeLevel1 === "4th Year")
    {
                    
            sub0 = 5500;
            unsub0 = 7000; 
            combined0 = 12500;
              
           
        //max sub comparison 
        
            if(sub0 <= totalSubsidizedElig)
                {
                    sub0 = sub0;
                }
            if (sub0 > totalSubsidizedElig)
                {
                    sub0 = totalSubsidizedElig;
                }
            if (totalSubsidizedElig <= 0)
                {
                    sub0 = 0;
                }
                                              
            
        // sub agg limit comparison
             
           if(sub0 <= subagglimitLeft1)
                {
                    sub0 = sub0;
                    
                }
            if (sub0 > subagglimitLeft1)
                {
                     sub0 = subagglimitLeft1;
                         
                   
                }
        
        
         //combined agg limit comparison
        
             
             if(sub0 <= combinedaggreateLimit1)
                {
                    sub0 = sub0;
                    
                }
            if (sub0 > combinedaggreateLimit1)
                {
                     sub0 = combinedaggreateLimit1;
                         
                   
                }
        
        //COA calculation
            if(sub0 <= Owed)
                {
                    sub0 = sub0;
                    
                }
            if (sub0 > Owed)
                {
                     sub0 = Owed;
                        
                   
                }
         if (sub0 < 0)
                {
                     sub0 = 0;
                        
                   
                }
        //sub works up to this point
        
        
        
        //unsub combined agge
        
        
         if(combined0 <= combinedaggreateLimit1)
                {
                   
                    unsub0 = combined0 - sub0;
                    
                }
            if (combined0 > combinedaggreateLimit1)
                {
                     combined0 = combinedaggreateLimit1;
                      unsub0 = combined0 - sub0;   
                   
                }
        
        var Owed2 = costOfAttendance2 - pell - sub0;
        
        if(Owed2 <= combined0)
            {
                unsub0 = Owed2;
            }
        if(Owed2 > combined0)
            {
                unsub0 = combined0 - sub0;
            }
        
         if (unsub0 < 0)
                {
                     unsub0 = 0;
                   
                }
        
        
        if(isNaN(costOfAttendance)){
            unsub0 = "";
            sub0 = "";
            combined0 = "";
        }
        
        combined0 = unsub0 +sub0;
                        
               document.getElementById('subEligiblity').innerHTML = "$" + dollarUSLocale.format(sub0); 
               document.getElementById('unsubEligiblity').innerHTML = "$" + dollarUSLocale.format(unsub0);
               document.getElementById('combinedEligiblity').innerHTML = "$" + dollarUSLocale.format(combined0);
        
    
    }
    
    
    if(dependancyStatus == false && gradeLevel1 === "1st Year")
    {
                    
            sub0 = 3500;
            unsub0 = 2000; 
            combined0 = 5500;
              
           
        //max sub comparison 
        
            if(sub0 <= totalSubsidizedElig)
                {
                    sub0 = sub0;
                }
            if (sub0 > totalSubsidizedElig)
                {
                    sub0 = totalSubsidizedElig;
                }
            if (totalSubsidizedElig <= 0)
                {
                    sub0 = 0;
                }
                                              
            
        // sub agg limit comparison
             
           if(sub0 <= subagglimitLeft1)
                {
                    sub0 = sub0;
                    
                }
            if (sub0 > subagglimitLeft1)
                {
                     sub0 = subagglimitLeft1;
                         
                   
                }
        
        
         //combined agg limit comparison
        
             
             if(sub0 <= combinedaggreateLimit1)
                {
                    sub0 = sub0;
                    
                }
            if (sub0 > combinedaggreateLimit1)
                {
                     sub0 = combinedaggreateLimit1;
                         
                   
                }
        
        //COA calculation
            if(sub0 <= Owed)
                {
                    sub0 = sub0;
                    
                }
            if (sub0 > Owed)
                {
                     sub0 = Owed;
                        
                   
                }
         if (sub0 < 0)
                {
                     sub0 = 0;
                        
                   
                }
        //sub works up to this point
        
        
        
        //unsub combined agge
        
        
         if(combined0 <= combinedaggreateLimit1)
                {
                   
                    unsub0 = combined0 - sub0;
                    
                }
            if (combined0 > combinedaggreateLimit1)
                {
                     combined0 = combinedaggreateLimit1;
                      unsub0 = combined0 - sub0;   
                   
                }
        
        var Owed2 = costOfAttendance2 - pell - sub0;
        
        if(Owed2 <= combined0)
            {
                unsub0 = Owed2;
            }
        if(Owed2 > combined0)
            {
                unsub0 = combined0 - sub0;
            }
        
         if (unsub0 < 0)
                {
                     unsub0 = 0;
                   
                }
        
        
        if(isNaN(costOfAttendance)){
            unsub0 = "";
            sub0 = "";
            combined0 = "";
        }
        
        combined0 = unsub0 +sub0;
                        
               document.getElementById('subEligiblity').innerHTML = "$" + dollarUSLocale.format(sub0); 
               document.getElementById('unsubEligiblity').innerHTML = "$" + dollarUSLocale.format(unsub0);
               document.getElementById('combinedEligiblity').innerHTML = "$" + dollarUSLocale.format(combined0);
        
    
    }
    
    if(dependancyStatus == false && gradeLevel1 === "2nd Year")
    {
                    
            sub0 = 4500;
            unsub0 = 2000; 
            combined0 = 6500;
              
           
        //max sub comparison 
        
            if(sub0 <= totalSubsidizedElig)
                {
                    sub0 = sub0;
                }
            if (sub0 > totalSubsidizedElig)
                {
                    sub0 = totalSubsidizedElig;
                }
            if (totalSubsidizedElig <= 0)
                {
                    sub0 = 0;
                }
                                              
            
        // sub agg limit comparison
             
           if(sub0 <= subagglimitLeft1)
                {
                    sub0 = sub0;
                    
                }
            if (sub0 > subagglimitLeft1)
                {
                     sub0 = subagglimitLeft1;
                         
                   
                }
        
        
         //combined agg limit comparison
        
             
             if(sub0 <= combinedaggreateLimit1)
                {
                    sub0 = sub0;
                    
                }
            if (sub0 > combinedaggreateLimit1)
                {
                     sub0 = combinedaggreateLimit1;
                         
                   
                }
        
        //COA calculation
            if(sub0 <= Owed)
                {
                    sub0 = sub0;
                    
                }
            if (sub0 > Owed)
                {
                     sub0 = Owed;
                        
                   
                }
         if (sub0 < 0)
                {
                     sub0 = 0;
                        
                   
                }
        //sub works up to this point
        
        
        
        //unsub combined agge
        
        
         if(combined0 <= combinedaggreateLimit1)
                {
                   
                    unsub0 = combined0 - sub0;
                    
                }
            if (combined0 > combinedaggreateLimit1)
                {
                     combined0 = combinedaggreateLimit1;
                      unsub0 = combined0 - sub0;   
                   
                }
        
        var Owed2 = costOfAttendance2 - pell - sub0;
        
        if(Owed2 <= combined0)
            {
                unsub0 = Owed2;
            }
        if(Owed2 > combined0)
            {
                unsub0 = combined0 - sub0;
            }
        
         if (unsub0 < 0)
                {
                     unsub0 = 0;
                   
                }
        
        
        if(isNaN(costOfAttendance)){
            unsub0 = "";
            sub0 = "";
            combined0 = "";
        }
        
        combined0 = unsub0 +sub0;
                        
               document.getElementById('subEligiblity').innerHTML = "$" + dollarUSLocale.format(sub0); 
               document.getElementById('unsubEligiblity').innerHTML = "$" + dollarUSLocale.format(unsub0);
               document.getElementById('combinedEligiblity').innerHTML = "$" + dollarUSLocale.format(combined0);
        
    
    }
    if(dependancyStatus == false && gradeLevel1 === "3rd Year")
    {
                    
            sub0 = 5500;
            unsub0 = 2000; 
            combined0 = 7500;
              
           
        //max sub comparison 
        
            if(sub0 <= totalSubsidizedElig)
                {
                    sub0 = sub0;
                }
            if (sub0 > totalSubsidizedElig)
                {
                    sub0 = totalSubsidizedElig;
                }
            if (totalSubsidizedElig <= 0)
                {
                    sub0 = 0;
                }
                                              
            
        // sub agg limit comparison
             
           if(sub0 <= subagglimitLeft1)
                {
                    sub0 = sub0;
                    
                }
            if (sub0 > subagglimitLeft1)
                {
                     sub0 = subagglimitLeft1;
                         
                   
                }
        
        
         //combined agg limit comparison
        
             
             if(sub0 <= combinedaggreateLimit1)
                {
                    sub0 = sub0;
                    
                }
            if (sub0 > combinedaggreateLimit1)
                {
                     sub0 = combinedaggreateLimit1;
                         
                   
                }
        
        //COA calculation
            if(sub0 <= Owed)
                {
                    sub0 = sub0;
                    
                }
            if (sub0 > Owed)
                {
                     sub0 = Owed;
                        
                   
                }
         if (sub0 < 0)
                {
                     sub0 = 0;
                        
                   
                }
        //sub works up to this point
        
        
        
        //unsub combined agge
        
        
         if(combined0 <= combinedaggreateLimit1)
                {
                   
                    unsub0 = combined0 - sub0;
                    
                }
            if (combined0 > combinedaggreateLimit1)
                {
                     combined0 = combinedaggreateLimit1;
                      unsub0 = combined0 - sub0;   
                   
                }
        
        var Owed2 = costOfAttendance2 - pell - sub0;
        
        if(Owed2 <= combined0)
            {
                unsub0 = Owed2;
            }
        if(Owed2 > combined0)
            {
                unsub0 = combined0 - sub0;
            }
        
         if (unsub0 < 0)
                {
                     unsub0 = 0;
                   
                }
        
        
        if(isNaN(costOfAttendance)){
            unsub0 = "";
            sub0 = "";
            combined0 = "";
        }
        
        combined0 = unsub0 +sub0;
                        
               document.getElementById('subEligiblity').innerHTML = "$" + dollarUSLocale.format(sub0); 
               document.getElementById('unsubEligiblity').innerHTML = "$" + dollarUSLocale.format(unsub0);
               document.getElementById('combinedEligiblity').innerHTML = "$" + dollarUSLocale.format(combined0);
        
    
    }
    if(dependancyStatus == false && gradeLevel1 === "4th Year")
    {
                    
            sub0 = 5500;
            unsub0 = 2000; 
            combined0 = 7500;
              
           
        //max sub comparison 
        
            if(sub0 <= totalSubsidizedElig)
                {
                    sub0 = sub0;
                }
            if (sub0 > totalSubsidizedElig)
                {
                    sub0 = totalSubsidizedElig;
                }
            if (totalSubsidizedElig <= 0)
                {
                    sub0 = 0;
                }
                                              
            
        // sub agg limit comparison
             
           if(sub0 <= subagglimitLeft1)
                {
                    sub0 = sub0;
                    
                }
            if (sub0 > subagglimitLeft1)
                {
                     sub0 = subagglimitLeft1;
                         
                   
                }
        
        
         //combined agg limit comparison
        
             
             if(sub0 <= combinedaggreateLimit1)
                {
                    sub0 = sub0;
                    
                }
            if (sub0 > combinedaggreateLimit1)
                {
                     sub0 = combinedaggreateLimit1;
                         
                   
                }
        
        //COA calculation
            if(sub0 <= Owed)
                {
                    sub0 = sub0;
                    
                }
            if (sub0 > Owed)
                {
                     sub0 = Owed;
                        
                   
                }
         if (sub0 < 0)
                {
                     sub0 = 0;
                        
                   
                }
        //sub works up to this point
        
        
        
        //unsub combined agge
        
        
         if(combined0 <= combinedaggreateLimit1)
                {
                   
                    unsub0 = combined0 - sub0;
                    
                }
            if (combined0 > combinedaggreateLimit1)
                {
                     combined0 = combinedaggreateLimit1;
                      unsub0 = combined0 - sub0;   
                   
                }
        
        var Owed2 = costOfAttendance2 - pell - sub0;
        
        if(Owed2 <= combined0)
            {
                unsub0 = Owed2;
            }
        if(Owed2 > combined0)
            {
                unsub0 = combined0 - sub0;
            }
        
         if (unsub0 < 0)
                {
                     unsub0 = 0;
                   
                }
        
        
        if(isNaN(costOfAttendance)){
            unsub0 = "";
            sub0 = "";
            combined0 = "";
        }
        
        combined0 = unsub0 +sub0;
                        
               document.getElementById('subEligiblity').innerHTML = "$" + dollarUSLocale.format(sub0); 
               document.getElementById('unsubEligiblity').innerHTML = "$" + dollarUSLocale.format(unsub0);
               document.getElementById('combinedEligiblity').innerHTML = "$" + dollarUSLocale.format(combined0);
        
    
    }
    
    //Formatting for Loan Awards
    
    if (sub0 <= 0) {
      
        document.getElementById("subEligiblity").style.color = "red";
        
        
    }else if((sub0 > 0))   {
        document.getElementById("subEligiblity").style.color = "green";
        
        
        
    }
    
    
     if (unsub0 <= 0) {
      
        document.getElementById("unsubEligiblity").style.color = "red";
        
        
    }else if((unsub0 > 0))   {
        document.getElementById("unsubEligiblity").style.color = "green";
        
        
        
    }
    
     if (combined0 <= 0) {
      
        document.getElementById("combinedEligiblity").style.color = "red";
        
        
    }else if((combined0 > 0))   {
        document.getElementById("combinedEligiblity").style.color = "green";
        
        
        
    }
    //Formatting for Loan Awards
    
    
}

function myFunction1(form) {
    document.getElementById("right").style.display = "block";
document.getElementById("right1").style.display = "block";

//Split Codes

    var subLoanAward = form.inputbox19.value;
     var unsubLoanAward = form.inputbox20.value;
     var pellGrantAward = form.inputbox21.value; 
    
    subLoanAward = subLoanAward.replace(/\$|,/g, '');
    unsubLoanAward = unsubLoanAward.replace(/\$|,/g, '');
   pellGrantAward = pellGrantAward.replace(/\$|,/g, '');
    
    var firstDispTerm = form.inputbox4.value;
     var secondDispTerm = form.inputbox5.value;
    
    
    //split codes
    var julySC = "A";
    var augustSC = "B";
    var septemberSC = "C";
    var octoberSC = "D";
    var novemberSC = "E";
    var decemberSC = "F";
    var januarySC = "G";
    var febSC = "H";
    var marchSC = "I";
    var aprilSC = "J";
    var maySC = "K";
    var juneSC = "L";
    var july24SC = "M";
    var august24SC = "N";
    var september24SC = "O";
    var october24SC = "P";
    var november24SC = "Q";
    var december24SC = "R";
    var january24SC = "S";
    var feb24SC = "T";
    var march24SC = "U";
    var april24SC = "V";
    var may24SC = "W";
    var june24SC = "X";
    
    //disp plans
    var julyD = "1";
    var augustD = "2";
    var septemberD = "3";
    var octoberD = "4";
    var novemberD = "E";
    var decemberD = "F";
    var januaryD = "G";
    var febD = "H";
    var marchD = "I";
    var aprilD = "J";
    var mayD = "K";
    var juneD = "L";
    
    // Pell Disp Plans
     var PjulyD = "GO";
    var PaugustD = "GP";
    var PseptemberD = "GQ";
    var PoctoberD = "GR";
    var PnovemberD = "GS";
    var PdecemberD = "GT";
    var PjanuaryD = "GU";
    var PfebD = "GV";
    var PmarchD = "GW";
    var PaprilD = "GX";
    var PmayD = "GY";
    var PjuneD = "GZ";
    
    //item types
    var unsub = "3430";
     var sub1 = "3400";
    var pell1 = "1000";
    
    var upperCaseA = firstDispTerm.replace(/\s/g,'')
    var upperCase2A = upperCaseA.toUpperCase();
    
    var secondUpperA = secondDispTerm.replace(/\s/g,'')
    var secondOneA = secondUpperA.toUpperCase();
      
    
    
   
    
    //Disbursement plan and split code 
    if  (subLoanAward === ''){
    document.getElementById('subIT').innerHTML = "";
    document.getElementById('subDP').innerHTML = "";
    document.getElementById('subSC').innerHTML = "";
        
    } 
    else if (subLoanAward !== ''){
        
        document.getElementById('subIT').innerHTML = sub1 ; 
        
        if(upperCase2A === '2207'){
           document.getElementById('subDP').innerHTML = "L" + julyD ; 
        }
         else if(upperCase2A === '2208'){
           document.getElementById('subDP').innerHTML = "L" + augustD ; 
        }
        else if(upperCase2A === '2209'){
           document.getElementById('subDP').innerHTML = "L" + septemberD ; 
        }
        else if(upperCase2A === '2210'){
           document.getElementById('subDP').innerHTML = "L" + octoberD ; 
        }
        else if(upperCase2A === '2211'){
           document.getElementById('subDP').innerHTML = "L" + novemberD ; 
        }
        else  if(upperCase2A === '2212'){
           document.getElementById('subDP').innerHTML = "L" + decemberD ; 
        }
        else if(upperCase2A === '2301'){
           document.getElementById('subDP').innerHTML = "L" + januaryD ; 
        }
         else if(upperCase2A === '2302'){
           document.getElementById('subDP').innerHTML = "L" + febD ; 
        }
        else if(upperCase2A === '2303'){
           document.getElementById('subDP').innerHTML = "L" + marchD ; 
        }
        else  if(upperCase2A === '2304'){
           document.getElementById('subDP').innerHTML = "L" + aprilD ; 
        }
        else if(upperCase2A === '2305'){
           document.getElementById('subDP').innerHTML = "L" + mayD ; 
        }
        else  if(upperCase2A === '2306'){
           document.getElementById('subDP').innerHTML = "L" + juneD ; 
        }
        else if(upperCase2A === ''){
        
        document.getElementById('subDP').innerHTML = "";}
       
        else{
            document.getElementById('subDP').innerHTML = "N/A Term" ; 
        }
        
        
        var splitCode;
        
        if(upperCase2A === '2207'){
           splitCode = julySC;            
        }
        else if(upperCase2A === '2208'){
           splitCode = augustSC;            
        }
        else if(upperCase2A === '2209'){
           splitCode = septemberSC;            
        }
        else if(upperCase2A === '2210'){
           splitCode = octoberSC;            
        }
        else if(upperCase2A === '2211'){
           splitCode = novemberSC;            
        }
        else if(upperCase2A === '2212'){
           splitCode = decemberSC;            
        }
        else if(upperCase2A === '2301'){
           splitCode = januarySC;            
        }
        else if(upperCase2A === '2302'){
           splitCode = febSC;            
        }
        else if(upperCase2A === '2303'){
           splitCode = marchSC;            
        }
       else  if(upperCase2A === '2304'){
           splitCode = aprilSC;            
        }
         else if(upperCase2A === '2305'){
           splitCode = maySC;            
        }
        else if(upperCase2A === '2306'){
           splitCode = juneSC;            
        }
        else if(upperCase2A === '2307'){
           splitCode = july24SC;            
        }
        else if(upperCase2A === '2308'){
           splitCode = august24SC;            
        }
        else if(upperCase2A === '2309'){
           splitCode = september24SC;            
        }
        else if(upperCase2A === '2310'){
           splitCode = october24SC;            
        }
        else if(upperCase2A === '2311'){
           splitCode = november24SC;            
        }
        else if(upperCase2A === '2312'){
           splitCode = december24SC;            
        }
        else if(upperCase2A === '2401'){
           splitCode = january24SC;            
        }
        else if(upperCase2A === '2402'){
           splitCode = feb24SC;            
        }
        else if(upperCase2A === '2403'){
           splitCode = march24SC;            
        }
        else if(upperCase2A === '2404'){
           splitCode = april24SC;            
        }
        else if(upperCase2A === '2405'){
           splitCode = may24SC;            
        }
        else if(upperCase2A === '2406'){
           splitCode = june24SC;            
        }
        else if(upperCase2A === ''){
        
        splitCode = "" ;}
         else{
            splitCode = "1" ; 
        }
        
        
        //second split code
        
         var splitCode3;
        
        if(secondOneA === '2207'){
           splitCode3 = julySC;            
        }
        else if(secondOneA === '2208'){
           splitCode3 = augustSC;            
        }
        else if(secondOneA === '2209'){
           splitCode3 = septemberSC;            
        }
        else if(secondOneA === '2210'){
           splitCode3 = octoberSC;            
        }
        else if(secondOneA === '2211'){
           splitCode3 = novemberSC;            
        }
        else if(secondOneA === '2212'){
           splitCode3 = decemberSC;            
        }
        else if(secondOneA === '2301'){
           splitCode3 = januarySC;            
        }
        else if(secondOneA === '2302'){
           splitCode3 = febSC;            
        }
        else if(secondOneA === '2303'){
           splitCode3 = marchSC;            
        }
       else  if(secondOneA === '2304'){
           splitCode3 = aprilSC;            
        }
         else if(secondOneA === '2305'){
           splitCode3 = maySC;            
        }
        else if(secondOneA === '2306'){
           splitCode3 = juneSC;            
        }
        else if(secondOneA === '2307'){
           splitCode3 = july24SC;            
        }
        else if(secondOneA === '2308'){
           splitCode3 = august24SC;            
        }
        else if(secondOneA === '2309'){
           splitCode3 = september24SC;            
        }
        else if(secondOneA === '2310'){
           splitCode3 = october24SC;            
        }
        else if(secondOneA === '2311'){
           splitCode3 = november24SC;            
        }
        else if(secondOneA === '2312'){
           splitCode3 = december24SC;            
        }
        else if(secondOneA === '2401'){
           splitCode3 = january24SC;            
        }
        else if(secondOneA === '2402'){
           splitCode3 = feb24SC;            
        }
        else if(secondOneA === '2403'){
           splitCode3 = march24SC;            
        }
        else if(secondOneA === '2404'){
           splitCode3 = april24SC;            
        }
        else if(secondOneA === '2405'){
           splitCode3 = may24SC;            
        }
        else if(secondOneA === '2406'){
           splitCode3 = june24SC;            
        }
        else if(secondOneA === ''){
        
        splitCode3 = "" ;}
         else{
            splitCode3 = "1" ; 
        }
        
        if  (splitCode === "1" || splitCode3 === "1"){
            document.getElementById('subSC').innerHTML = "N/A Term"; 
        }else{
        
        document.getElementById('subSC').innerHTML = splitCode + splitCode3;
        }
      
    }
    
 
    
    if  (unsubLoanAward === ''){
    document.getElementById('unsubIT').innerHTML = "";
    document.getElementById('unsubDP').innerHTML = "";
    document.getElementById('unsubSC').innerHTML = "";
        
    } 
    else if (unsubLoanAward !== ''){
        
        document.getElementById('unsubIT').innerHTML = unsub ; 
        
        if(upperCase2A === '2207'){
           document.getElementById('unsubDP').innerHTML = "L" + julyD ; 
        }
         else if(upperCase2A === '2208'){
           document.getElementById('unsubDP').innerHTML = "L" + augustD ; 
        }
        else if(upperCase2A === '2209'){
           document.getElementById('unsubDP').innerHTML = "L" + septemberD ; 
        }
        else if(upperCase2A === '2210'){
           document.getElementById('unsubDP').innerHTML = "L" + octoberD ; 
        }
        else if(upperCase2A === '2211'){
           document.getElementById('unsubDP').innerHTML = "L" + novemberD ; 
        }
        else  if(upperCase2A === '2212'){
           document.getElementById('unsubDP').innerHTML = "L" + decemberD ; 
        }
        else if(upperCase2A === '2301'){
           document.getElementById('unsubDP').innerHTML = "L" + januaryD ; 
        }
         else if(upperCase2A === '2302'){
           document.getElementById('unsubDP').innerHTML = "L" + febD ; 
        }
        else if(upperCase2A === '2303'){
           document.getElementById('unsubDP').innerHTML = "L" + marchD ; 
        }
        else  if(upperCase2A === '2304'){
           document.getElementById('unsubDP').innerHTML = "L" + aprilD ; 
        }
        else if(upperCase2A === '2305'){
           document.getElementById('unsubDP').innerHTML = "L" + mayD ; 
        }
        else  if(upperCase2A === '2306'){
           document.getElementById('unsubDP').innerHTML = "L" + juneD ; 
        }
        else if(upperCase2A === ''){
        
        document.getElementById('unsubDP').innerHTML = "";}
       
        else{
            document.getElementById('unsubDP').innerHTML = "N/A Term" ; 
        }
        
        
        
        
        if(upperCase2A === '2207'){
           splitCode = julySC;            
        }
        else if(upperCase2A === '2208'){
           splitCode = augustSC;            
        }
        else if(upperCase2A === '2209'){
           splitCode = septemberSC;            
        }
        else if(upperCase2A === '2210'){
           splitCode = octoberSC;            
        }
        else if(upperCase2A === '2211'){
           splitCode = novemberSC;            
        }
        else if(upperCase2A === '2212'){
           splitCode = decemberSC;            
        }
        else if(upperCase2A === '2301'){
           splitCode = januarySC;            
        }
        else if(upperCase2A === '2302'){
           splitCode = febSC;            
        }
        else if(upperCase2A === '2303'){
           splitCode = marchSC;            
        }
       else  if(upperCase2A === '2304'){
           splitCode = aprilSC;            
        }
         else if(upperCase2A === '2305'){
           splitCode = maySC;            
        }
        else if(upperCase2A === '2306'){
           splitCode = juneSC;            
        }
        else if(upperCase2A === '2307'){
           splitCode = july24SC;            
        }
        else if(upperCase2A === '2308'){
           splitCode = august24SC;            
        }
        else if(upperCase2A === '2309'){
           splitCode = september24SC;            
        }
        else if(upperCase2A === '2310'){
           splitCode = october24SC;            
        }
        else if(upperCase2A === '2311'){
           splitCode = november24SC;            
        }
        else if(upperCase2A === '2312'){
           splitCode = december24SC;            
        }
        else if(upperCase2A === '2401'){
           splitCode = january24SC;            
        }
        else if(upperCase2A === '2402'){
           splitCode = feb24SC;            
        }
        else if(upperCase2A === '2403'){
           splitCode = march24SC;            
        }
        else if(upperCase2A === '2404'){
           splitCode = april24SC;            
        }
        else if(upperCase2A === '2405'){
           splitCode = may24SC;            
        }
        else if(upperCase2A === '2406'){
           splitCode = june24SC;            
        }
        else if(upperCase2A === ''){
        
        splitCode = "" ;}
         else{
            splitCode = "1" ; 
        }
        
        
        
        
         
        
        if(secondOneA === '2207'){
           splitCode3 = julySC;            
        }
        else if(secondOneA === '2208'){
           splitCode3 = augustSC;            
        }
        else if(secondOneA === '2209'){
           splitCode3 = septemberSC;            
        }
        else if(secondOneA === '2210'){
           splitCode3 = octoberSC;            
        }
        else if(secondOneA === '2211'){
           splitCode3 = novemberSC;            
        }
        else if(secondOneA === '2212'){
           splitCode3 = decemberSC;            
        }
        else if(secondOneA === '2301'){
           splitCode3 = januarySC;            
        }
        else if(secondOneA === '2302'){
           splitCode3 = febSC;            
        }
        else if(secondOneA === '2303'){
           splitCode3 = marchSC;            
        }
       else  if(secondOneA === '2304'){
           splitCode3 = aprilSC;            
        }
         else if(secondOneA === '2305'){
           splitCode3 = maySC;            
        }
        else if(secondOneA === '2306'){
           splitCode3 = juneSC;            
        }
        else if(secondOneA === '2307'){
           splitCode3 = july24SC;            
        }
        else if(secondOneA === '2308'){
           splitCode3 = august24SC;            
        }
        else if(secondOneA === '2309'){
           splitCode3 = september24SC;            
        }
        else if(secondOneA === '2310'){
           splitCode3 = october24SC;            
        }
        else if(secondOneA === '2311'){
           splitCode3 = november24SC;            
        }
        else if(secondOneA === '2312'){
           splitCode3 = december24SC;            
        }
        else if(secondOneA === '2401'){
           splitCode3 = january24SC;            
        }
        else if(secondOneA === '2402'){
           splitCode3 = feb24SC;            
        }
        else if(secondOneA === '2403'){
           splitCode3 = march24SC;            
        }
        else if(secondOneA === '2404'){
           splitCode3 = april24SC;            
        }
        else if(secondOneA === '2405'){
           splitCode3 = may24SC;            
        }
        else if(secondOneA === '2406'){
           splitCode3 = june24SC;            
        }
        else if(secondOneA === ''){
        
        splitCode3 = "" ;}
         else{
            splitCode3 = "1" ; 
        }
        
        if  (splitCode === "1" || splitCode3 === "1"){
            document.getElementById('unsubSC').innerHTML = "N/A Term"; 
        }else{
        
        document.getElementById('unsubSC').innerHTML = splitCode + splitCode3;
        }
      
    }
    
  
    
    
    if  (pellGrantAward === ''){
    document.getElementById('pellIT').innerHTML = "";
    document.getElementById('pellDP').innerHTML = "";
    document.getElementById('pellSC').innerHTML = "";
        
    } 
    if (pellGrantAward !== ''){
        
        document.getElementById('pellIT').innerHTML = pell1 ; 
        
        if(upperCase2A === '2207'){
           document.getElementById('pellDP').innerHTML = PjulyD ; 
        }
         else if(upperCase2A === '2208'){
           document.getElementById('pellDP').innerHTML = PaugustD ; 
        }
        else if(upperCase2A === '2209'){
           document.getElementById('pellDP').innerHTML =  PseptemberD ; 
        }
        else if(upperCase2A === '2210'){
           document.getElementById('pellDP').innerHTML = PoctoberD ; 
        }
        else if(upperCase2A === '2211'){
           document.getElementById('pellDP').innerHTML =  PnovemberD ; 
        }
        else  if(upperCase2A === '2212'){
           document.getElementById('pellDP').innerHTML =  PdecemberD ; 
        }
        else if(upperCase2A === '2301'){
           document.getElementById('pellDP').innerHTML = PjanuaryD ; 
        }
         else if(upperCase2A === '2302'){
           document.getElementById('pellDP').innerHTML = PfebD ; 
        }
        else if(upperCase2A === '2303'){
           document.getElementById('pellDP').innerHTML =  PmarchD ; 
        }
        else  if(upperCase2A === '2304'){
           document.getElementById('pellDP').innerHTML =  PaprilD ; 
        }
        else if(upperCase2A === '2305'){
           document.getElementById('pellDP').innerHTML = PmayD ; 
        }
        else  if(upperCase2A === '2306'){
           document.getElementById('pellDP').innerHTML = PjuneD ; 
        }
        else if(upperCase2A === ''){
        
        document.getElementById('pellDP').innerHTML = "";}
       
        else{
            document.getElementById('pellDP').innerHTML = "N/A Term" ; 
        }
        
        
        
        
        if(upperCase2A === '2207'){
           splitCode = julySC;            
        }
        else if(upperCase2A === '2208'){
           splitCode = augustSC;            
        }
        else if(upperCase2A === '2209'){
           splitCode = septemberSC;            
        }
        else if(upperCase2A === '2210'){
           splitCode = octoberSC;            
        }
        else if(upperCase2A === '2211'){
           splitCode = novemberSC;            
        }
        else if(upperCase2A === '2212'){
           splitCode = decemberSC;            
        }
        else if(upperCase2A === '2301'){
           splitCode = januarySC;            
        }
        else if(upperCase2A === '2302'){
           splitCode = febSC;            
        }
        else if(upperCase2A === '2303'){
           splitCode = marchSC;            
        }
       else  if(upperCase2A === '2304'){
           splitCode = aprilSC;            
        }
         else if(upperCase2A === '2305'){
           splitCode = maySC;            
        }
        else if(upperCase2A === '2306'){
           splitCode = juneSC;            
        }
        else if(upperCase2A === '2307'){
           splitCode = july24SC;            
        }
        else if(upperCase2A === '2308'){
           splitCode = august24SC;            
        }
        else if(upperCase2A === '2309'){
           splitCode = september24SC;            
        }
        else if(upperCase2A === '2310'){
           splitCode = october24SC;            
        }
        else if(upperCase2A === '2311'){
           splitCode = november24SC;            
        }
        else if(upperCase2A === '2312'){
           splitCode = december24SC;            
        }
        else if(upperCase2A === '2401'){
           splitCode = january24SC;            
        }
        else if(upperCase2A === '2402'){
           splitCode = feb24SC;            
        }
        else if(upperCase2A === '2403'){
           splitCode = march24SC;            
        }
        else if(upperCase2A === '2404'){
           splitCode = april24SC;            
        }
        else if(upperCase2A === '2405'){
           splitCode = may24SC;            
        }
        else if(upperCase2A === '2406'){
           splitCode = june24SC;            
        }
        else if(upperCase2A === ''){
        
        splitCode = "" ;}
         else{
            splitCode = "1" ; 
        }
        
        
        
        
         
        
        if(secondOneA === '2207'){
           splitCode3 = julySC;            
        }
        else if(secondOneA === '2208'){
           splitCode3 = augustSC;            
        }
        else if(secondOneA === '2209'){
           splitCode3 = septemberSC;            
        }
        else if(secondOneA === '2210'){
           splitCode3 = octoberSC;            
        }
        else if(secondOneA === '2211'){
           splitCode3 = novemberSC;            
        }
        else if(secondOneA === '2212'){
           splitCode3 = decemberSC;            
        }
        else if(secondOneA === '2301'){
           splitCode3 = januarySC;            
        }
        else if(secondOneA === '2302'){
           splitCode3 = febSC;            
        }
        else if(secondOneA === '2303'){
           splitCode3 = marchSC;            
        }
       else  if(secondOneA === '2304'){
           splitCode3 = aprilSC;            
        }
         else if(secondOneA === '2305'){
           splitCode3 = maySC;            
        }
        else if(secondOneA === '2306'){
           splitCode3 = juneSC;            
        }
        else if(secondOneA === '2307'){
           splitCode3 = july24SC;            
        }
        else if(secondOneA === '2308'){
           splitCode3 = august24SC;            
        }
        else if(secondOneA === '2309'){
           splitCode3 = september24SC;            
        }
        else if(secondOneA === '2310'){
           splitCode3 = october24SC;            
        }
        else if(secondOneA === '2311'){
           splitCode3 = november24SC;            
        }
        else if(secondOneA === '2312'){
           splitCode3 = december24SC;            
        }
        else if(secondOneA === '2401'){
           splitCode3 = january24SC;            
        }
        else if(secondOneA === '2402'){
           splitCode3 = feb24SC;            
        }
        else if(secondOneA === '2403'){
           splitCode3 = march24SC;            
        }
        else if(secondOneA === '2404'){
           splitCode3 = april24SC;            
        }
        else if(secondOneA === '2405'){
           splitCode3 = may24SC;            
        }
        else if(secondOneA === '2406'){
           splitCode3 = june24SC;            
        }
        else if(secondOneA === ''){
        
        splitCode3 = "" ;}
         else{
            splitCode3 = "1" ; 
        }
        
        if  (splitCode === "1" || splitCode3 === "1"){
            document.getElementById('pellSC').innerHTML = "N/A Term"; 
        }else{
        
        document.getElementById('pellSC').innerHTML = splitCode + splitCode3;
        }
      
    }
    
   
    
    
    
    
    
    
   
    //Note
    
    //-------------------------------------------------------------------------------------
    //-------------------------------------------------------------------------------------
    //Note
   
     
     
     
   
     
     
     
    
     var subLoanAward = form.inputbox19.value;
     subLoanAward = subLoanAward.replace(/\$|,/g, '');
     
    var unsubLoanAward = form.inputbox20.value;
     unsubLoanAward = unsubLoanAward.replace(/\$|,/g, '');
     
    var pellGrantAward = form.inputbox21.value;
     pellGrantAward = pellGrantAward.replace(/\$|,/g, '');
    
    
   
    var loanPeriodStartDate = form.inputbox2.value;
     var loanPeriodEndDate = form.inputbox3.value;
    var creditsWeeks = form.inputbox6.value;
    var tuitionRate = form.inputbox17.value;
    var program = form.inputbox9.value;
    var costofAttendance1 = document.getElementById('coaRec').innerHTML;
    var aggs1 = document.getElementById('combinedAggLimitRec').innerHTML;
     var nsldsCombined = form.inputbox13.value;
    
     
    nsldsAggLimit1 = nsldsCombined.replace(/\$|,/g, '');
     
    var cCodes = form.inputbox10.value;
    var cCodes1 = form.inputbox10.value;
    var cCodesupperCase = cCodes.replace(/\s/g,'')
    var upperCase2 = cCodesupperCase.toUpperCase();
    
    var mpnEC = form.inputbox11.value;
    var mpnEC1 = form.inputbox11.value;
    var mpnUpperCase = mpnEC.replace(/\s/g,'')
    var mpnUpperCase2 = mpnUpperCase.toUpperCase();
    
    
    
    

    
    if (unsubLoanAward !== '' && subLoanAward !== '' && pellGrantAward !== ''){
    
   
    
        
         if (upperCase2 === "NO"){
            upperCase2 = "No C Codes."

        }
            else if (upperCase2 === ""){
            upperCase2 = ""

        }
            else {
             upperCase2 = cCodes1;
                
               
                
            

        }
        
        if(mpnUpperCase2 === "YES"){
                mpnUpperCase2 = "Valid ED/MPN Staff Loan, No OVLP. Award Letter ready to be sent, loan originated."
                
            }
            else if(mpnUpperCase2 === ""){
                
                mpnUpperCase2 = ""
            }
            else{
                 mpnUpperCase2 = mpnEC1;
                

                
            
            }
        
        
       
        
        
         var extra = prompt('Please Enter Any Additional Information:');
            
        if(extra === null){
            extra = "";
        }
        
        
    var dollarUSLocale = Intl.NumberFormat('en-US');
    var dollarIndianLocale = Intl.NumberFormat('en-IN');
        
        if(isNaN(unsubLoanAward)){
            unsubLoanAward = "";
        }
        if(isNaN(pellGrantAward)){
            pellGrantAward = "";
        }
        if(isNaN(subLoanAward)){
            subLoanAward = "";
        }
        if(isNaN(tuitionRate)){
            tuitionRate = "";
        }
        if(isNaN(nsldsAggLimit1)){
            nsldsAggLimit1 = "";
        }
        
        
       var note = "Packaged awards for " + "Unsubsidized Loan $" + dollarUSLocale.format(unsubLoanAward) + " & Subsidized Loan $" + dollarUSLocale.format(subLoanAward) + " & Pell Grant $" + dollarUSLocale.format(pellGrantAward) + ". AY (1) begins " + loanPeriodStartDate + ", Total Credits/Weeks: " + creditsWeeks + ", " + "Program: "+ program + ". " + "Tuition Rate $" + dollarUSLocale.format(tuitionRate) +". COA: " + costofAttendance1 + ". " + upperCase2 + " NSLDS borrowed $" + dollarUSLocale.format(nsldsAggLimit1) + ". " + aggs1 + " until aggregate limits reached. " + mpnUpperCase2  + " " + extra + " " + "Ready to Disburse."; 
        
        
    
    }
    else if (unsubLoanAward === '' && subLoanAward === '' && pellGrantAward === ''){
    
    var note = "" ;}
    else if (unsubLoanAward === '' && subLoanAward === '' && pellGrantAward !== ''){
    
   
    
        
         if (upperCase2 === "NO"){
            upperCase2 = "No C Codes."

        }
            else if (upperCase2 === ""){
            upperCase2 = ""

        }
            else {
             upperCase2 = cCodes1;
                
               
                
            

        }
        
        if(mpnUpperCase2 === "YES"){
                mpnUpperCase2 = "Valid ED/MPN Staff Loan, No OVLP. Award Letter ready to be sent, loan originated."
                
            }
            else if(mpnUpperCase2 === ""){
                
                mpnUpperCase2 = ""
            }
            else{
                 mpnUpperCase2 = mpnEC1;
                

                
            
            }
        
        
       
        
        
         var extra = prompt('Please Enter Any Additional Information:');
            
        if(extra === null){
            extra = "";
        }
        
        
    var dollarUSLocale = Intl.NumberFormat('en-US');
    var dollarIndianLocale = Intl.NumberFormat('en-IN');
        
        
        if(isNaN(pellGrantAward)){
            pellGrantAward = "";
        }
            if(isNaN(tuitionRate)){
            tuitionRate = "";
        }
        if(isNaN(nsldsAggLimit1)){
            nsldsAggLimit1 = "";
        }
        
        
       var note = "Packaged awards for " + "Pell Grant $" + dollarUSLocale.format(pellGrantAward) + ". AY (1) begins " + loanPeriodStartDate + ", Total Credits/Weeks: " + creditsWeeks + ", " + "Program: "+ program + ". " + "Tuition Rate $" + dollarUSLocale.format(tuitionRate) +". COA: " + costofAttendance1 + ". " + upperCase2 + " NSLDS borrowed $" + dollarUSLocale.format(nsldsAggLimit1) + ". " + aggs1 + " until aggregate limits reached. " + mpnUpperCase2  + " " + extra + " " + "Ready to Disburse."; 
        
  
    
    }
    else if (unsubLoanAward === '' && subLoanAward !== '' && pellGrantAward !== ''){
    
   
    
        
         if (upperCase2 === "NO"){
            upperCase2 = "No C Codes."

        }
            else if (upperCase2 === ""){
            upperCase2 = ""

        }
            else {
             upperCase2 = cCodes1;
                
               
                
            

        }
        
        if(mpnUpperCase2 === "YES"){
                mpnUpperCase2 = "Valid ED/MPN Staff Loan, No OVLP. Award Letter ready to be sent, loan originated."
                
            }
            else if(mpnUpperCase2 === ""){
                
                mpnUpperCase2 = ""
            }
            else{
                 mpnUpperCase2 = mpnEC1;
                

                
            
            }
        
        
       
        
        
         var extra = prompt('Please Enter Any Additional Information:');
            
        if(extra === null){
            extra = "";
        }
        
        
    var dollarUSLocale = Intl.NumberFormat('en-US');
    var dollarIndianLocale = Intl.NumberFormat('en-IN');
        
        
        if(isNaN(pellGrantAward)){
            pellGrantAward = "";
        }
            if(isNaN(tuitionRate)){
            tuitionRate = "";
        }
         if(isNaN(subLoanAward)){
            subLoanAward = "";
        }
        if(isNaN(nsldsAggLimit1)){
            nsldsAggLimit1 = "";
        }
        
        
       var note = "Packaged awards for " + "Subsidized Loan $" + dollarUSLocale.format(subLoanAward) + " &" +" Pell Grant $" + dollarUSLocale.format(pellGrantAward) + ". AY (1) begins " + loanPeriodStartDate + ", Total Credits/Weeks: " + creditsWeeks + ", " + "Program: "+ program + ". " + "Tuition Rate $" + dollarUSLocale.format(tuitionRate) +". COA: " + costofAttendance1 + ". " + upperCase2 + " NSLDS borrowed $" + dollarUSLocale.format(nsldsAggLimit1) + ". " + aggs1 + " until aggregate limits reached. " + mpnUpperCase2  + " " + extra + " " + "Ready to Disburse."; 
        
  
    
    }
     else if (subLoanAward === '' && unsubLoanAward !== '' && pellGrantAward !== ''){
    
   
    
        
         if (upperCase2 === "NO"){
            upperCase2 = "No C Codes."

        }
            else if (upperCase2 === ""){
            upperCase2 = ""

        }
            else {
             upperCase2 = cCodes1;
                
               
                
            

        }
        
        if(mpnUpperCase2 === "YES"){
                mpnUpperCase2 = "Valid ED/MPN Staff Loan, No OVLP. Award Letter ready to be sent, loan originated."
                
            }
            else if(mpnUpperCase2 === ""){
                
                mpnUpperCase2 = ""
            }
            else{
                 mpnUpperCase2 = mpnEC1;
                

                
            
            }
        
        
       
        
        
         var extra = prompt('Please Enter Any Additional Information:');
            
        if(extra === null){
            extra = "";
        }
        
        
    var dollarUSLocale = Intl.NumberFormat('en-US');
    var dollarIndianLocale = Intl.NumberFormat('en-IN');
        
        
        if(isNaN(pellGrantAward)){
            pellGrantAward = "";
        }
            if(isNaN(tuitionRate)){
            tuitionRate = "";
        }
         if(isNaN(unsubLoanAward)){
            unsubLoanAward = "";
        }
        if(isNaN(nsldsAggLimit1)){
            nsldsAggLimit1 = "";
        }
        
        
       var note = "Packaged awards for " + "Unsubsidized Loan $" + dollarUSLocale.format(unsubLoanAward) + " &" +" Pell Grant $" + dollarUSLocale.format(pellGrantAward) + ". AY (1) begins " + loanPeriodStartDate + ", Total Credits/Weeks: " + creditsWeeks + ", " + "Program: "+ program + ". " + "Tuition Rate $" + dollarUSLocale.format(tuitionRate) +". COA: " + costofAttendance1 + ". " + upperCase2 + " NSLDS borrowed $" + dollarUSLocale.format(nsldsAggLimit1) + ". " + aggs1 + " until aggregate limits reached. " + mpnUpperCase2  + " " + extra + " " + "Ready to Disburse."; 
        
  
    
    }
    else if (subLoanAward === '' && pellGrantAward === '' && unsubLoanAward !== ''){
    
   
    
        
         if (upperCase2 === "NO"){
            upperCase2 = "No C Codes."

        }
            else if (upperCase2 === ""){
            upperCase2 = ""

        }
            else {
             upperCase2 = cCodes1;
                
               
                
            

        }
        
        if(mpnUpperCase2 === "YES"){
                mpnUpperCase2 = "Valid ED/MPN Staff Loan, No OVLP. Award Letter ready to be sent, loan originated."
                
            }
            else if(mpnUpperCase2 === ""){
                
                mpnUpperCase2 = ""
            }
            else{
                 mpnUpperCase2 = mpnEC1;
                

                
            
            }
        
        
       
        
        
         var extra = prompt('Please Enter Any Additional Information:');
            
        if(extra === null){
            extra = "";
        }
        
        
    var dollarUSLocale = Intl.NumberFormat('en-US');
    var dollarIndianLocale = Intl.NumberFormat('en-IN');
        
        
       
            if(isNaN(tuitionRate)){
            tuitionRate = "";
        }
         if(isNaN(unsubLoanAward)){
            unsubLoanAward = "";
        }
        if(isNaN(nsldsAggLimit1)){
            nsldsAggLimit1 = "";
        }
        
        
       var note = "Packaged awards for " + "Unsubsidized Loan $" + dollarUSLocale.format(unsubLoanAward)  + ". AY (1) begins " + loanPeriodStartDate + ", Total Credits/Weeks: " + creditsWeeks + ", " + "Program: "+ program + ". " + "Tuition Rate $" + dollarUSLocale.format(tuitionRate) +". COA: " + costofAttendance1 + ". " + upperCase2 + " NSLDS borrowed $" + dollarUSLocale.format(nsldsAggLimit1) + ". " + aggs1 + " until aggregate limits reached. " + mpnUpperCase2  + " " + extra + " " + "Ready to Disburse."; 
        
  
    
    }
    else if (pellGrantAward === '' && subLoanAward !== '' && unsubLoanAward !== ''){
    
   
    
        
         if (upperCase2 === "NO"){
            upperCase2 = "No C Codes."

        }
            else if (upperCase2 === ""){
            upperCase2 = ""

        }
            else {
             upperCase2 = cCodes1;
                
               
                
            

        }
        
        if(mpnUpperCase2 === "YES"){
                mpnUpperCase2 = "Valid ED/MPN Staff Loan, No OVLP. Award Letter ready to be sent, loan originated."
                
            }
            else if(mpnUpperCase2 === ""){
                
                mpnUpperCase2 = ""
            }
            else{
                 mpnUpperCase2 = mpnEC1;
                

                
            
            }
        
        
       
        
        
         var extra = prompt('Please Enter Any Additional Information:');
            
        if(extra === null){
            extra = "";
        }
        
        
    var dollarUSLocale = Intl.NumberFormat('en-US');
    var dollarIndianLocale = Intl.NumberFormat('en-IN');
        
        
       
            if(isNaN(tuitionRate)){
            tuitionRate = "";
        }
         if(isNaN(unsubLoanAward)){
            unsubLoanAward = "";
        }
        if(isNaN(nsldsAggLimit1)){
            nsldsAggLimit1 = "";
        }
        if(isNaN(subLoanAward)){
            subLoanAward = "";
        }
        
        
       var note = "Packaged awards for " + "Unsubsidized Loan $" + dollarUSLocale.format(unsubLoanAward) + " & " +"Subsidized Loan $" + dollarUSLocale.format(subLoanAward)  + ". AY (1) begins " + loanPeriodStartDate + ", Total Credits/Weeks: " + creditsWeeks + ", " + "Program: "+ program + ". " + "Tuition Rate $" + dollarUSLocale.format(tuitionRate) +". COA: " + costofAttendance1 + ". " + upperCase2 + " NSLDS borrowed $" + dollarUSLocale.format(nsldsAggLimit1) + ". " + aggs1 + " until aggregate limits reached. " + mpnUpperCase2  + " " + extra + " " + "Ready to Disburse."; 
        
  
    
    }
    else if (unsubLoanAward === '' && pellGrantAward === '' && subLoanAward !== ''){
    
   
    
        
         if (upperCase2 === "NO"){
            upperCase2 = "No C Codes."

        }
            else if (upperCase2 === ""){
            upperCase2 = ""

        }
            else {
             upperCase2 = cCodes1;
                
               
                
            

        }
        
        if(mpnUpperCase2 === "YES"){
                mpnUpperCase2 = "Valid ED/MPN Staff Loan, No OVLP. Award Letter ready to be sent, loan originated."
                
            }
            else if(mpnUpperCase2 === ""){
                
                mpnUpperCase2 = ""
            }
            else{
                 mpnUpperCase2 = mpnEC1;
                

                
            
            }
        
        
       
        
        
         var extra = prompt('Please Enter Any Additional Information:');
            
        if(extra === null){
            extra = "";
        }
        
        
    var dollarUSLocale = Intl.NumberFormat('en-US');
    var dollarIndianLocale = Intl.NumberFormat('en-IN');
        
        
       
            if(isNaN(tuitionRate)){
            tuitionRate = "";
        }
         if(isNaN(subLoanAward)){
            unsubLoanAward = "";
        }
        if(isNaN(nsldsAggLimit1)){
            nsldsAggLimit1 = "";
        }
        
        
       var note = "Packaged awards for " + "Subsidized Loan $" + dollarUSLocale.format(subLoanAward)  + ". AY (1) begins " + loanPeriodStartDate + ", Total Credits/Weeks: " + creditsWeeks + ", " + "Program: "+ program + ". " + "Tuition Rate $" + dollarUSLocale.format(tuitionRate) +". COA: " + costofAttendance1 + ". " + upperCase2 + " NSLDS borrowed $" + dollarUSLocale.format(nsldsAggLimit1) + ". " + aggs1 + " until aggregate limits reached. " + mpnUpperCase2  + " " + extra + " " + "Ready to Disburse."; 
        
  
    
    }
    
    
    
     document.getElementById('noteRectangle').innerHTML = note;
    
    
    
}



if (window.console==null) { window["console"] = { log : function() {} } }; // some browsers do not set console

var Application = function() {
	// event constants
	this.prefix = "--web-";
	this.NAVIGATION_CHANGE = "viewChange";
	this.VIEW_NOT_FOUND = "viewNotFound";
	this.VIEW_CHANGE = "viewChange";
	this.VIEW_CHANGING = "viewChanging";
	this.STATE_NOT_FOUND = "stateNotFound";
	this.APPLICATION_COMPLETE = "applicationComplete";
	this.APPLICATION_RESIZE = "applicationResize";
	this.SIZE_STATE_NAME = "data-is-view-scaled";
	this.STATE_NAME = this.prefix + "state";

	this.lastTrigger = null;
	this.lastView = null;
	this.lastState = null;
	this.lastOverlay = null;
	this.currentView = null;
	this.currentState = null;
	this.currentOverlay = null;
	this.currentQuery = {index: 0, rule: null, mediaText: null, id: null};
	this.inclusionQuery = "(min-width: 0px)";
	this.exclusionQuery = "none and (min-width: 99999px)";
	this.LastModifiedDateLabelName = "LastModifiedDateLabel";
	this.viewScaleSliderId = "ViewScaleSliderInput";
	this.pageRefreshedName = "showPageRefreshedNotification";
	this.application = null;
	this.applicationStylesheet = null;
	this.showByMediaQuery = null;
	this.mediaQueryDictionary = {};
	this.viewsDictionary = {};
	this.addedViews = [];
	this.viewStates = [];
	this.views = [];
	this.viewIds = [];
	this.viewQueries = {};
	this.overlays = {};
	this.overlayIds = [];
	this.numberOfViews = 0;
	this.verticalPadding = 0;
	this.horizontalPadding = 0;
	this.stateName = null;
	this.viewScale = 1;
	this.viewLeft = 0;
	this.viewTop = 0;
	this.horizontalScrollbarsNeeded = false;
	this.verticalScrollbarsNeeded = false;

	// view settings
	this.showUpdateNotification = false;
	this.showNavigationControls = false;
	this.scaleViewsToFit = false;
	this.scaleToFitOnDoubleClick = false;
	this.actualSizeOnDoubleClick = false;
	this.scaleViewsOnResize = false;
	this.navigationOnKeypress = false;
	this.showViewName = false;
	this.enableDeepLinking = true;
	this.refreshPageForChanges = false;
	this.showRefreshNotifications = true;

	// view controls
	this.scaleViewSlider = null;
	this.lastModifiedLabel = null;
	this.supportsPopState = false; // window.history.pushState!=null;
	this.initialized = false;

	// refresh properties
	this.refreshDuration = 250;
	this.lastModifiedDate = null;
	this.refreshRequest = null;
	this.refreshInterval = null;
	this.refreshContent = null;
	this.refreshContentSize = null;
	this.refreshCheckContent = false;
	this.refreshCheckContentSize = false;

	var self = this;

	self.initialize = function(event) {
		var view = self.getVisibleView();
		var views = self.getVisibleViews();
		if (view==null) view = self.getInitialView();
		self.collectViews();
		self.collectOverlays();
		self.collectMediaQueries();

		for (let index = 0; index < views.length; index++) {
			var view = views[index];
			self.setViewOptions(view);
			self.setViewVariables(view);
			self.centerView(view);
		}

		// sometimes the body size is 0 so we call this now and again later
		if (self.initialized) {
			window.addEventListener(self.NAVIGATION_CHANGE, self.viewChangeHandler);
			window.addEventListener("keyup", self.keypressHandler);
			window.addEventListener("keypress", self.keypressHandler);
			window.addEventListener("resize", self.resizeHandler);
			window.document.addEventListener("dblclick", self.doubleClickHandler);

			if (self.supportsPopState) {
				window.addEventListener('popstate', self.popStateHandler);
			}
			else {
				window.addEventListener('hashchange', self.hashChangeHandler);
			}

			// we are ready to go
			window.dispatchEvent(new Event(self.APPLICATION_COMPLETE));
		}

		if (self.initialized==false) {
			if (self.enableDeepLinking) {
				self.syncronizeViewToURL();
			} 
	
			if (self.refreshPageForChanges) {
				self.setupRefreshForChanges();
			}
	
			self.initialized = true;
		}
		
		if (self.scaleViewsToFit) {
			self.viewScale = self.scaleViewToFit(view);
			
			if (self.viewScale<0) {
				setTimeout(self.scaleViewToFit, 500, view);
			}
		}
		else if (view) {
			self.viewScale = self.getViewScaleValue(view);
			self.centerView(view);
			self.updateSliderValue(self.viewScale);
		}
		else {
			// no view found
		}
	
		if (self.showUpdateNotification) {
			self.showNotification();
		}

		//"addEventListener" in window ? null : window.addEventListener = window.attachEvent;
		//"addEventListener" in document ? null : document.addEventListener = document.attachEvent;
	}


	///////////////////////////////////////
	// AUTO REFRESH 
	///////////////////////////////////////

	self.setupRefreshForChanges = function() {
		self.refreshRequest = new XMLHttpRequest();

		if (!self.refreshRequest) {
			return false;
		}

		// get document start values immediately
		self.requestRefreshUpdate();
	}

	/**
	 * Attempt to check the last modified date by the headers 
	 * or the last modified property from the byte array (experimental)
	 **/
	self.requestRefreshUpdate = function() {
		var url = document.location.href;
		var protocol = window.location.protocol;
		var method;
		
		try {

			if (self.refreshCheckContentSize) {
				self.refreshRequest.open('HEAD', url, true);
			}
			else if (self.refreshCheckContent) {
				self.refreshContent = document.documentElement.outerHTML;
				self.refreshRequest.open('GET', url, true);
				self.refreshRequest.responseType = "text";
			}
			else {

				// get page last modified date for the first call to compare to later
				if (self.lastModifiedDate==null) {

					// File system does not send headers in FF so get blob if possible
					if (protocol=="file:") {
						self.refreshRequest.open("GET", url, true);
						self.refreshRequest.responseType = "blob";
					}
					else {
						self.refreshRequest.open("HEAD", url, true);
						self.refreshRequest.responseType = "blob";
					}

					self.refreshRequest.onload = self.refreshOnLoadOnceHandler;

					// In some browsers (Chrome & Safari) this error occurs at send: 
					// 
					// Chrome - Access to XMLHttpRequest at 'file:///index.html' from origin 'null' 
					// has been blocked by CORS policy: 
					// Cross origin requests are only supported for protocol schemes: 
					// http, data, chrome, chrome-extension, https.
					// 
					// Safari - XMLHttpRequest cannot load file:///Users/user/Public/index.html. Cross origin requests are only supported for HTTP.
					// 
					// Solution is to run a local server, set local permissions or test in another browser
					self.refreshRequest.send(null);

					// In MS browsers the following behavior occurs possibly due to an AJAX call to check last modified date: 
					// 
					// DOM7011: The code on this page disabled back and forward caching.

					// In Brave (Chrome) error when on the server
					// index.js:221 HEAD https://www.example.com/ net::ERR_INSUFFICIENT_RESOURCES
					// self.refreshRequest.send(null);

				}
				else {
					self.refreshRequest = new XMLHttpRequest();
					self.refreshRequest.onreadystatechange = self.refreshHandler;
					self.refreshRequest.ontimeout = function() {
						self.log("Couldn't find page to check for updates");
					}
					
					var method;
					if (protocol=="file:") {
						method = "GET";
					}
					else {
						method = "HEAD";
					}

					//refreshRequest.open('HEAD', url, true);
					self.refreshRequest.open(method, url, true);
					self.refreshRequest.responseType = "blob";
					self.refreshRequest.send(null);
				}
			}
		}
		catch (error) {
			self.log("Refresh failed for the following reason:")
			self.log(error);
		}
	}

	self.refreshHandler = function() {
		var contentSize;

		try {

			if (self.refreshRequest.readyState === XMLHttpRequest.DONE) {
				
				if (self.refreshRequest.status === 2 || 
					self.refreshRequest.status === 200) {
					var pageChanged = false;

					self.updateLastModifiedLabel();

					if (self.refreshCheckContentSize) {
						var lastModifiedHeader = self.refreshRequest.getResponseHeader("Last-Modified");
						contentSize = self.refreshRequest.getResponseHeader("Content-Length");
						//lastModifiedDate = refreshRequest.getResponseHeader("Last-Modified");
						var headers = self.refreshRequest.getAllResponseHeaders();
						var hasContentHeader = headers.indexOf("Content-Length")!=-1;
						
						if (hasContentHeader) {
							contentSize = self.refreshRequest.getResponseHeader("Content-Length");

							// size has not been set yet
							if (self.refreshContentSize==null) {
								self.refreshContentSize = contentSize;
								// exit and let interval call this method again
								return;
							}

							if (contentSize!=self.refreshContentSize) {
								pageChanged = true;
							}
						}
					}
					else if (self.refreshCheckContent) {

						if (self.refreshRequest.responseText!=self.refreshContent) {
							pageChanged = true;
						}
					}
					else {
						lastModifiedHeader = self.getLastModified(self.refreshRequest);

						if (self.lastModifiedDate!=lastModifiedHeader) {
							self.log("lastModifiedDate:" + self.lastModifiedDate + ",lastModifiedHeader:" +lastModifiedHeader);
							pageChanged = true;
						}

					}

					
					if (pageChanged) {
						clearInterval(self.refreshInterval);
						self.refreshUpdatedPage();
						return;
					}

				}
				else {
					self.log('There was a problem with the request.');
				}

			}
		}
		catch( error ) {
			//console.log('Caught Exception: ' + error);
		}
	}

	self.refreshOnLoadOnceHandler = function(event) {

		// get the last modified date
		if (self.refreshRequest.response) {
			self.lastModifiedDate = self.getLastModified(self.refreshRequest);

			if (self.lastModifiedDate!=null) {

				if (self.refreshInterval==null) {
					self.refreshInterval = setInterval(self.requestRefreshUpdate, self.refreshDuration);
				}
			}
			else {
				self.log("Could not get last modified date from the server");
			}
		}
	}

	self.refreshUpdatedPage = function() {
		if (self.showRefreshNotifications) {
			var date = new Date().setTime((new Date().getTime()+10000));
			document.cookie = encodeURIComponent(self.pageRefreshedName) + "=true" + "; max-age=6000;" + " path=/";
		}

		document.location.reload(true);
	}

	self.showNotification = function(duration) {
		var notificationID = self.pageRefreshedName+"ID";
		var notification = document.getElementById(notificationID);
		if (duration==null) duration = 4000;

		if (notification!=null) {return;}

		notification = document.createElement("div");
		notification.id = notificationID;
		notification.textContent = "PAGE UPDATED";
		var styleRule = ""
		styleRule = "position: fixed; padding: 7px 16px 6px 16px; font-family: Arial, sans-serif; font-size: 10px; font-weight: bold; left: 50%;";
		styleRule += "top: 20px; background-color: rgba(0,0,0,.5); border-radius: 12px; color:rgb(235, 235, 235); transition: all 2s linear;";
		styleRule += "transform: translateX(-50%); letter-spacing: .5px; filter: drop-shadow(2px 2px 6px rgba(0, 0, 0, .1)); cursor: pointer";
		notification.setAttribute("style", styleRule);

		notification.className = "PageRefreshedClass";
		notification.addEventListener("click", function() {
			notification.parentNode.removeChild(notification);
		});
		
		document.body.appendChild(notification);

		setTimeout(function() {
			notification.style.opacity = "0";
			notification.style.filter = "drop-shadow( 0px 0px 0px rgba(0,0,0, .5))";
			setTimeout(function() {
				try {
					notification.parentNode.removeChild(notification);
				} catch(error) {}
			}, duration)
		}, duration);

		document.cookie = encodeURIComponent(self.pageRefreshedName) + "=; max-age=1; path=/";
	}

	/**
	 * Get the last modified date from the header 
	 * or file object after request has been received
	 **/
	self.getLastModified = function(request) {
		var date;

		// file protocol - FILE object with last modified property
		if (request.response && request.response.lastModified) {
			date = request.response.lastModified;
		}
		
		// http protocol - check headers
		if (date==null) {
			date = request.getResponseHeader("Last-Modified");
		}

		return date;
	}

	self.updateLastModifiedLabel = function() {
		var labelValue = "";
		
		if (self.lastModifiedLabel==null) {
			self.lastModifiedLabel = document.getElementById("LastModifiedLabel");
		}

		if (self.lastModifiedLabel) {
			var seconds = parseInt(((new Date().getTime() - Date.parse(document.lastModified)) / 1000 / 60) * 100 + "");
			var minutes = 0;
			var hours = 0;

			if (seconds < 60) {
				seconds = Math.floor(seconds/10)*10;
				labelValue = seconds + " seconds";
			}
			else {
				minutes = parseInt((seconds/60) + "");

				if (minutes>60) {
					hours = parseInt((seconds/60/60) +"");
					labelValue += hours==1 ? " hour" : " hours";
				}
				else {
					labelValue = minutes+"";
					labelValue += minutes==1 ? " minute" : " minutes";
				}
			}
			
			if (seconds<10) {
				labelValue = "Updated now";
			}
			else {
				labelValue = "Updated " + labelValue + " ago";
			}

			if (self.lastModifiedLabel.firstElementChild) {
				self.lastModifiedLabel.firstElementChild.textContent = labelValue;

			}
			else if ("textContent" in self.lastModifiedLabel) {
				self.lastModifiedLabel.textContent = labelValue;
			}
		}
	}

	self.getShortString = function(string, length) {
		if (length==null) length = 30;
		string = string!=null ? string.substr(0, length).replace(/\n/g, "") : "[String is null]";
		return string;
	}

	self.getShortNumber = function(value, places) {
		if (places==null || places<1) places = 4;
		value = Math.round(value * Math.pow(10,places)) / Math.pow(10, places);
		return value;
	}

	///////////////////////////////////////
	// NAVIGATION CONTROLS
	///////////////////////////////////////

	self.updateViewLabel = function() {
		var viewNavigationLabel = document.getElementById("ViewNavigationLabel");
		var view = self.getVisibleView();
		var viewIndex = view ? self.getViewIndex(view) : -1;
		var viewName = view ? self.getViewPreferenceValue(view, self.prefix + "view-name") : null;
		var viewId = view ? view.id : null;

		if (viewNavigationLabel && view) {
			if (viewName && viewName.indexOf('"')!=-1) {
				viewName = viewName.replace(/"/g, "");
			}

			if (self.showViewName) {
				viewNavigationLabel.textContent = viewName;
				self.setTooltip(viewNavigationLabel, viewIndex + 1 + " of " + self.numberOfViews);
			}
			else {
				viewNavigationLabel.textContent = viewIndex + 1 + " of " + self.numberOfViews;
				self.setTooltip(viewNavigationLabel, viewName);
			}

		}
	}

	self.updateURL = function(view) {
		view = view == null ? self.getVisibleView() : view;
		var viewId = view ? view.id : null
		var viewFragment = view ? "#"+ viewId : null;

		if (viewId && self.viewIds.length>1 && self.enableDeepLinking) {

			if (self.supportsPopState==false) {
				self.setFragment(viewId);
			}
			else {
				if (viewFragment!=window.location.hash) {

					if (window.location.hash==null) {
						window.history.replaceState({name:viewId}, null, viewFragment);
					}
					else {
						window.history.pushState({name:viewId}, null, viewFragment);
					}
				}
			}
		}
	}

	self.updateURLState = function(view, stateName) {
		stateName = view && (stateName=="" || stateName==null) ? self.getStateNameByViewId(view.id) : stateName;

		if (self.supportsPopState==false) {
			self.setFragment(stateName);
		}
		else {
			if (stateName!=window.location.hash) {

				if (window.location.hash==null) {
					window.history.replaceState({name:view.viewId}, null, stateName);
				}
				else {
					window.history.pushState({name:view.viewId}, null, stateName);
				}
			}
		}
	}

	self.setFragment = function(value) {
		window.location.hash = "#" + value;
	}

	self.setTooltip = function(element, value) {
		// setting the tooltip in edge causes a page crash on hover
		if (/Edge/.test(navigator.userAgent)) { return; }

		if ("title" in element) {
			element.title = value;
		}
	}

	self.getStylesheetRules = function(styleSheet) {
		try {
			if (styleSheet) return styleSheet.cssRules || styleSheet.rules;
	
			return document.styleSheets[0]["cssRules"] || document.styleSheets[0]["rules"];
		}
		catch (error) {
			// ERRORS:
			// SecurityError: The operation is insecure.
			// Errors happen when script loads before stylesheet or loading an external css locally

			// InvalidAccessError: A parameter or an operation is not supported by the underlying object
			// Place script after stylesheet

			console.log(error);
			if (error.toString().indexOf("The operation is insecure")!=-1) {
				console.log("Load the stylesheet before the script or load the stylesheet inline until it can be loaded on a server")
			}
			return [];
		}
	}

	/**
	 * If single page application hide all of the views. 
	 * @param {Number} selectedIndex if provided shows the view at index provided
	 **/
	self.hideViews = function(selectedIndex, animation) {
		var rules = self.getStylesheetRules();
		var queryIndex = 0;
		var numberOfRules = rules!=null ? rules.length : 0;

		// loop through rules and hide media queries except selected
		for (var i=0;i<numberOfRules;i++) {
			var rule = rules[i];
			var cssText = rule && rule.cssText;

			if (rule.media!=null && cssText.match("--web-view-name:")) {

				if (queryIndex==selectedIndex) {
					self.currentQuery.mediaText = rule.conditionText;
					self.currentQuery.index = selectedIndex;
					self.currentQuery.rule = rule;
					self.enableMediaQuery(rule);
				}
				else {
					if (animation) {
						self.fadeOut(rule)
					}
					else {
						self.disableMediaQuery(rule);
					}
				}
				
				queryIndex++;
			}
		}

		self.numberOfViews = queryIndex;
		self.updateViewLabel();
		self.updateURL();

		self.dispatchViewChange();

		var view = self.getVisibleView();
		var viewIndex = view ? self.getViewIndex(view) : -1;

		return viewIndex==selectedIndex ? view : null;
	}

	/**
	 * If single page application hide all of the views. 
	 * @param {HTMLElement} selectedView if provided shows the view passed in
	 **/
	 self.hideAllViews = function(selectedView, animation) {
		var views = self.views;
		var queryIndex = 0;
		var numberOfViews = views!=null ? views.length : 0;

		// loop through rules and hide media queries except selected
		for (var i=0;i<numberOfViews;i++) {
			var viewData = views[i];
			var view = viewData && viewData.view;
			var mediaRule = viewData && viewData.mediaRule;
			
			if (view==selectedView) {
				self.currentQuery.mediaText = mediaRule.conditionText;
				self.currentQuery.index = queryIndex;
				self.currentQuery.rule = mediaRule;
				self.enableMediaQuery(mediaRule);
			}
			else {
				if (animation) {
					self.fadeOut(mediaRule)
				}
				else {
					self.disableMediaQuery(mediaRule);
				}
			}
			
			queryIndex++;
		}

		self.numberOfViews = queryIndex;
		self.updateViewLabel();
		self.updateURL();
		self.dispatchViewChange();

		var visibleView = self.getVisibleView();

		return visibleView==selectedView ? selectedView : null;
	}

	/**
	 * Hide view
	 * @param {Object} view element to hide
	 **/
	self.hideView = function(view) {
		var rule = view ? self.mediaQueryDictionary[view.id] : null;

		if (rule) {
			self.disableMediaQuery(rule);
		}
	}

	/**
	 * Hide overlay
	 * @param {Object} overlay element to hide
	 **/
	self.hideOverlay = function(overlay) {
		var rule = overlay ? self.mediaQueryDictionary[overlay.id] : null;

		if (rule) {
			self.disableMediaQuery(rule);

			//if (self.showByMediaQuery) {
				overlay.style.display = "none";
			//}
		}
	}

	/**
	 * Show the view by media query. Does not hide current views
	 * Sets view options by default
	 * @param {Object} view element to show
	 * @param {Boolean} setViewOptions sets view options if null or true
	 */
	self.showViewByMediaQuery = function(view, setViewOptions) {
		var id = view ? view.id : null;
		var query = id ? self.mediaQueryDictionary[id] : null;
		var isOverlay = view ? self.isOverlay(view) : false;
		setViewOptions = setViewOptions==null ? true : setViewOptions;

		if (query) {
			self.enableMediaQuery(query);

			if (isOverlay && view && setViewOptions) {
				self.setViewVariables(null, view);
			}
			else {
				if (view && setViewOptions) self.setViewOptions(view);
				if (view && setViewOptions) self.setViewVariables(view);
			}
		}
	}

	/**
	 * Show the view. Does not hide current views
	 */
	self.showView = function(view, setViewOptions) {
		var id = view ? view.id : null;
		var query = id ? self.mediaQueryDictionary[id] : null;
		var display = null;
		setViewOptions = setViewOptions==null ? true : setViewOptions;

		if (query) {
			self.enableMediaQuery(query);
			if (view==null) view =self.getVisibleView();
			if (view && setViewOptions) self.setViewOptions(view);
		}
		else if (id) {
			display = window.getComputedStyle(view).getPropertyValue("display");
			if (display=="" || display=="none") {
				view.style.display = "block";
			}
		}

		if (view) {
			if (self.currentView!=null) {
				self.lastView = self.currentView;
			}

			self.currentView = view;
		}
	}

	self.showViewById = function(id, setViewOptions) {
		var view = id ? self.getViewById(id) : null;

		if (view) {
			self.showView(view);
			return;
		}

		self.log("View not found '" + id + "'");
	}

	self.getElementView = function(element) {
		var view = element;
		var viewFound = false;

		while (viewFound==false || view==null) {
			if (view && self.viewsDictionary[view.id]) {
				return view;
			}
			view = view.parentNode;
		}
	}

	/**
	 * Show overlay over view
	 * @param {Event | HTMLElement} event event or html element with styles applied
	 * @param {String} id id of view or view reference
	 * @param {Number} x x location
	 * @param {Number} y y location
	 */
	self.showOverlay = function(event, id, x, y) {
		var overlay = id && typeof id === 'string' ? self.getViewById(id) : id ? id : null;
		var query = overlay ? self.mediaQueryDictionary[overlay.id] : null;
		var centerHorizontally = false;
		var centerVertically = false;
		var anchorLeft = false;
		var anchorTop = false;
		var anchorRight = false;
		var anchorBottom = false;
		var display = null;
		var reparent = true;
		var view = null;
		
		if (overlay==null || overlay==false) {
			self.log("Overlay not found, '"+ id + "'");
			return;
		}

		// get enter animation - event target must have css variables declared
		if (event) {
			var button = event.currentTarget || event; // can be event or htmlelement
			var buttonComputedStyles = getComputedStyle(button);
			var actionTargetValue = buttonComputedStyles.getPropertyValue(self.prefix+"action-target").trim();
			var animation = buttonComputedStyles.getPropertyValue(self.prefix+"animation").trim();
			var isAnimated = animation!="";
			var targetType = buttonComputedStyles.getPropertyValue(self.prefix+"action-type").trim();
			var actionTarget = self.application ? null : self.getElement(actionTargetValue);
			var actionTargetStyles = actionTarget ? actionTarget.style : null;

			if (actionTargetStyles) {
				actionTargetStyles.setProperty("animation", animation);
			}

			if ("stopImmediatePropagation" in event) {
				event.stopImmediatePropagation();
			}
		}
		
		if (self.application==false || targetType=="page") {
			document.location.href = "./" + actionTargetValue;
			return;
		}

		// remove any current overlays
		if (self.currentOverlay) {

			// act as switch if same button
			if (self.currentOverlay==actionTarget || self.currentOverlay==null) {
				if (self.lastTrigger==button) {
					self.removeOverlay(isAnimated);
					return;
				}
			}
			else {
				self.removeOverlay(isAnimated);
			}
		}

		if (reparent) {
			view = self.getElementView(button);
			if (view) {
				view.appendChild(overlay);
			}
		}

		if (query) {
			//self.setElementAnimation(overlay, null);
			//overlay.style.animation = animation;
			self.enableMediaQuery(query);
			
			var display = overlay && overlay.style.display;
			
			if (overlay && display=="" || display=="none") {
				overlay.style.display = "block";
				//self.setViewOptions(overlay);
			}

			// add animation defined in event target style declaration
			if (animation && self.supportAnimations) {
				self.fadeIn(overlay, false, animation);
			}
		}
		else if (id) {

			display = window.getComputedStyle(overlay).getPropertyValue("display");

			if (display=="" || display=="none") {
				overlay.style.display = "block";
			}

			// add animation defined in event target style declaration
			if (animation && self.supportAnimations) {
				self.fadeIn(overlay, false, animation);
			}
		}

		// do not set x or y position if centering
		var horizontal = self.prefix + "center-horizontally";
		var vertical = self.prefix + "center-vertically";
		var style = overlay.style;
		var transform = [];

		centerHorizontally = self.getIsStyleDefined(id, horizontal) ? self.getViewPreferenceBoolean(overlay, horizontal) : false;
		centerVertically = self.getIsStyleDefined(id, vertical) ? self.getViewPreferenceBoolean(overlay, vertical) : false;
		anchorLeft = self.getIsStyleDefined(id, "left");
		anchorRight = self.getIsStyleDefined(id, "right");
		anchorTop = self.getIsStyleDefined(id, "top");
		anchorBottom = self.getIsStyleDefined(id, "bottom");

		
		if (self.viewsDictionary[overlay.id] && self.viewsDictionary[overlay.id].styleDeclaration) {
			style = self.viewsDictionary[overlay.id].styleDeclaration.style;
		}
		
		if (centerHorizontally) {
			style.left = "50%";
			style.transformOrigin = "0 0";
			transform.push("translateX(-50%)");
		}
		else if (anchorRight && anchorLeft) {
			style.left = x + "px";
		}
		else if (anchorRight) {
			//style.right = x + "px";
		}
		else {
			style.left = x + "px";
		}
		
		if (centerVertically) {
			style.top = "50%";
			transform.push("translateY(-50%)");
			style.transformOrigin = "0 0";
		}
		else if (anchorTop && anchorBottom) {
			style.top = y + "px";
		}
		else if (anchorBottom) {
			//style.bottom = y + "px";
		}
		else {
			style.top = y + "px";
		}

		if (transform.length) {
			style.transform = transform.join(" ");
		}

		self.currentOverlay = overlay;
		self.lastTrigger = button;
	}

	self.goBack = function() {
		if (self.currentOverlay) {
			self.removeOverlay();
		}
		else if (self.lastView) {
			self.goToView(self.lastView.id);
		}
	}

	self.removeOverlay = function(animate) {
		var overlay = self.currentOverlay;
		animate = animate===false ? false : true;

		if (overlay) {
			var style = overlay.style;
			
			if (style.animation && self.supportAnimations && animate) {
				self.reverseAnimation(overlay, true);

				var duration = self.getAnimationDuration(style.animation, true);
		
				setTimeout(function() {
					self.setElementAnimation(overlay, null);
					self.hideOverlay(overlay);
					self.currentOverlay = null;
				}, duration);
			}
			else {
				self.setElementAnimation(overlay, null);
				self.hideOverlay(overlay);
				self.currentOverlay = null;
			}
		}
	}

	/**
	 * Reverse the animation and hide after
	 * @param {Object} target element with animation
	 * @param {Boolean} hide hide after animation ends
	 */
	self.reverseAnimation = function(target, hide) {
		var lastAnimation = null;
		var style = target.style;

		style.animationPlayState = "paused";
		lastAnimation = style.animation;
		style.animation = null;
		style.animationPlayState = "paused";

		if (hide) {
			//target.addEventListener("animationend", self.animationEndHideHandler);
	
			var duration = self.getAnimationDuration(lastAnimation, true);
			var isOverlay = self.isOverlay(target);
	
			setTimeout(function() {
				self.setElementAnimation(target, null);

				if (isOverlay) {
					self.hideOverlay(target);
				}
				else {
					self.hideView(target);
				}
			}, duration);
		}

		setTimeout(function() {
			style.animation = lastAnimation;
			style.animationPlayState = "paused";
			style.animationDirection = "reverse";
			style.animationPlayState = "running";
		}, 30);
	}

	self.animationEndHandler = function(event) {
		var target = event.currentTarget;
		self.dispatchEvent(new Event(event.type));
	}

	self.isOverlay = function(view) {
		var result = view ? self.getViewPreferenceBoolean(view, self.prefix + "is-overlay") : false;

		return result;
	}

	self.animationEndHideHandler = function(event) {
		var target = event.currentTarget;
		self.setViewVariables(null, target);
		self.hideView(target);
		target.removeEventListener("animationend", self.animationEndHideHandler);
	}

	self.animationEndShowHandler = function(event) {
		var target = event.currentTarget;
		target.removeEventListener("animationend", self.animationEndShowHandler);
	}

	self.setViewOptions = function(view) {

		if (view) {
			self.minimumScale = self.getViewPreferenceValue(view, self.prefix + "minimum-scale");
			self.maximumScale = self.getViewPreferenceValue(view, self.prefix + "maximum-scale");
			self.scaleViewsToFit = self.getViewPreferenceBoolean(view, self.prefix + "scale-to-fit");
			self.scaleToFitType = self.getViewPreferenceValue(view, self.prefix + "scale-to-fit-type");
			self.scaleToFitOnDoubleClick = self.getViewPreferenceBoolean(view, self.prefix + "scale-on-double-click");
			self.actualSizeOnDoubleClick = self.getViewPreferenceBoolean(view, self.prefix + "actual-size-on-double-click");
			self.scaleViewsOnResize = self.getViewPreferenceBoolean(view, self.prefix + "scale-on-resize");
			self.enableScaleUp = self.getViewPreferenceBoolean(view, self.prefix + "enable-scale-up");
			self.centerHorizontally = self.getViewPreferenceBoolean(view, self.prefix + "center-horizontally");
			self.centerVertically = self.getViewPreferenceBoolean(view, self.prefix + "center-vertically");
			self.navigationOnKeypress = self.getViewPreferenceBoolean(view, self.prefix + "navigate-on-keypress");
			self.showViewName = self.getViewPreferenceBoolean(view, self.prefix + "show-view-name");
			self.refreshPageForChanges = self.getViewPreferenceBoolean(view, self.prefix + "refresh-for-changes");
			self.refreshPageForChangesInterval = self.getViewPreferenceValue(view, self.prefix + "refresh-interval");
			self.showNavigationControls = self.getViewPreferenceBoolean(view, self.prefix + "show-navigation-controls");
			self.scaleViewSlider = self.getViewPreferenceBoolean(view, self.prefix + "show-scale-controls");
			self.enableDeepLinking = self.getViewPreferenceBoolean(view, self.prefix + "enable-deep-linking");
			self.singlePageApplication = self.getViewPreferenceBoolean(view, self.prefix + "application");
			self.showByMediaQuery = self.getViewPreferenceBoolean(view, self.prefix + "show-by-media-query");
			self.showUpdateNotification = document.cookie!="" ? document.cookie.indexOf(self.pageRefreshedName)!=-1 : false;
			self.imageComparisonDuration = self.getViewPreferenceValue(view, self.prefix + "image-comparison-duration");
			self.supportAnimations = self.getViewPreferenceBoolean(view, self.prefix + "enable-animations", true);

			if (self.scaleViewsToFit) {
				var newScaleValue = self.scaleViewToFit(view);
				
				if (newScaleValue<0) {
					setTimeout(self.scaleViewToFit, 500, view);
				}
			}
			else {
				self.viewScale = self.getViewScaleValue(view);
				self.viewToFitWidthScale = self.getViewFitToViewportWidthScale(view, self.enableScaleUp)
				self.viewToFitHeightScale = self.getViewFitToViewportScale(view, self.enableScaleUp);
				self.updateSliderValue(self.viewScale);
			}

			if (self.imageComparisonDuration!=null) {
				// todo
			}

			if (self.refreshPageForChangesInterval!=null) {
				self.refreshDuration = Number(self.refreshPageForChangesInterval);
			}
		}
	}

	self.previousView = function(event) {
		var rules = self.getStylesheetRules();
		var view = self.getVisibleView()
		var index = view ? self.getViewIndex(view) : -1;
		var prevQueryIndex = index!=-1 ? index-1 : self.currentQuery.index-1;
		var queryIndex = 0;
		var numberOfRules = rules!=null ? rules.length : 0;

		if (event) {
			event.stopImmediatePropagation();
		}

		if (prevQueryIndex<0) {
			return;
		}

		// loop through rules and hide media queries except selected
		for (var i=0;i<numberOfRules;i++) {
			var rule = rules[i];
			
			if (rule.media!=null) {

				if (queryIndex==prevQueryIndex) {
					self.currentQuery.mediaText = rule.conditionText;
					self.currentQuery.index = prevQueryIndex;
					self.currentQuery.rule = rule;
					self.enableMediaQuery(rule);
					self.updateViewLabel();
					self.updateURL();
					self.dispatchViewChange();
				}
				else {
					self.disableMediaQuery(rule);
				}

				queryIndex++;
			}
		}
	}

	self.nextView = function(event) {
		var rules = self.getStylesheetRules();
		var view = self.getVisibleView();
		var index = view ? self.getViewIndex(view) : -1;
		var nextQueryIndex = index!=-1 ? index+1 : self.currentQuery.index+1;
		var queryIndex = 0;
		var numberOfRules = rules!=null ? rules.length : 0;
		var numberOfMediaQueries = self.getNumberOfMediaRules();

		if (event) {
			event.stopImmediatePropagation();
		}

		if (nextQueryIndex>=numberOfMediaQueries) {
			return;
		}

		// loop through rules and hide media queries except selected
		for (var i=0;i<numberOfRules;i++) {
			var rule = rules[i];
			
			if (rule.media!=null) {

				if (queryIndex==nextQueryIndex) {
					self.currentQuery.mediaText = rule.conditionText;
					self.currentQuery.index = nextQueryIndex;
					self.currentQuery.rule = rule;
					self.enableMediaQuery(rule);
					self.updateViewLabel();
					self.updateURL();
					self.dispatchViewChange();
				}
				else {
					self.disableMediaQuery(rule);
				}

				queryIndex++;
			}
		}
	}

	/**
	 * Enables a view via media query
	 */
	self.enableMediaQuery = function(rule) {

		try {
			rule.media.mediaText = self.inclusionQuery;
		}
		catch(error) {
			//self.log(error);
			rule.conditionText = self.inclusionQuery;
		}
	}

	self.disableMediaQuery = function(rule) {

		try {
			rule.media.mediaText = self.exclusionQuery;
		}
		catch(error) {
			rule.conditionText = self.exclusionQuery;
		}
	}

	self.dispatchViewChange = function() {
		try {
			var event = new Event(self.NAVIGATION_CHANGE);
			window.dispatchEvent(event);
		}
		catch (error) {
			// In IE 11: Object doesn't support this action
		}
	}

	self.getNumberOfMediaRules = function() {
		var rules = self.getStylesheetRules();
		var numberOfRules = rules ? rules.length : 0;
		var numberOfQueries = 0;

		for (var i=0;i<numberOfRules;i++) {
			if (rules[i].media!=null) { numberOfQueries++; }
		}
		
		return numberOfQueries;
	}

	/////////////////////////////////////////
	// VIEW SCALE 
	/////////////////////////////////////////

	self.sliderChangeHandler = function(event) {
		var value = self.getShortNumber(event.currentTarget.value/100);
		var view = self.getVisibleView();
		self.setViewScaleValue(view, false, value, true);
	}

	self.updateSliderValue = function(scale) {
		var slider = document.getElementById(self.viewScaleSliderId);
		var tooltip = parseInt(scale * 100 + "") + "%";
		var inputType;
		var inputValue;
		
		if (slider) {
			inputValue = self.getShortNumber(scale * 100);
			if (inputValue!=slider["value"]) {
				slider["value"] = inputValue;
			}
			inputType = slider.getAttributeNS(null, "type");

			if (inputType!="range") {
				// input range is not supported
				slider.style.display = "none";
			}

			self.setTooltip(slider, tooltip);
		}
	}

	self.viewChangeHandler = function(event) {
		var view = self.getVisibleView();
		var matrix = view ? getComputedStyle(view).transform : null;
		
		if (matrix) {
			self.viewScale = self.getViewScaleValue(view);
			
			var scaleNeededToFit = self.getViewFitToViewportScale(view);
			var isViewLargerThanViewport = scaleNeededToFit<1;
			
			// scale large view to fit if scale to fit is enabled
			if (self.scaleViewsToFit) {
				self.scaleViewToFit(view);
			}
			else {
				self.updateSliderValue(self.viewScale);
			}
		}
	}

	self.getViewScaleValue = function(view) {
		var matrix = getComputedStyle(view).transform;

		if (matrix) {
			var matrixArray = matrix.replace("matrix(", "").split(",");
			var scaleX = parseFloat(matrixArray[0]);
			var scaleY = parseFloat(matrixArray[3]);
			var scale = Math.min(scaleX, scaleY);
		}

		return scale;
	}

	/**
	 * Scales view to scale. 
	 * @param {Object} view view to scale. views are in views array
	 * @param {Boolean} scaleToFit set to true to scale to fit. set false to use desired scale value
	 * @param {Number} desiredScale scale to define. not used if scale to fit is false
	 * @param {Boolean} isSliderChange indicates if slider is callee
	 */
	self.setViewScaleValue = function(view, scaleToFit, desiredScale, isSliderChange) {
		var enableScaleUp = self.enableScaleUp;
		var scaleToFitType = self.scaleToFitType;
		var minimumScale = self.minimumScale;
		var maximumScale = self.maximumScale;
		var hasMinimumScale = !isNaN(minimumScale) && minimumScale!="";
		var hasMaximumScale = !isNaN(maximumScale) && maximumScale!="";
		var scaleNeededToFit = self.getViewFitToViewportScale(view, enableScaleUp);
		var scaleNeededToFitWidth = self.getViewFitToViewportWidthScale(view, enableScaleUp);
		var scaleNeededToFitHeight = self.getViewFitToViewportHeightScale(view, enableScaleUp);
		var scaleToFitFull = self.getViewFitToViewportScale(view, true);
		var scaleToFitFullWidth = self.getViewFitToViewportWidthScale(view, true);
		var scaleToFitFullHeight = self.getViewFitToViewportHeightScale(view, true);
		var scaleToWidth = scaleToFitType=="width";
		var scaleToHeight = scaleToFitType=="height";
		var shrunkToFit = false;
		var topPosition = null;
		var leftPosition = null;
		var translateY = null;
		var translateX = null;
		var transformValue = "";
		var canCenterVertically = true;
		var canCenterHorizontally = true;
		var style = view.style;

		if (view && self.viewsDictionary[view.id] && self.viewsDictionary[view.id].styleDeclaration) {
			style = self.viewsDictionary[view.id].styleDeclaration.style;
		}

		if (scaleToFit && isSliderChange!=true) {
			if (scaleToFitType=="fit" || scaleToFitType=="") {
				desiredScale = scaleNeededToFit;
			}
			else if (scaleToFitType=="width") {
				desiredScale = scaleNeededToFitWidth;
			}
			else if (scaleToFitType=="height") {
				desiredScale = scaleNeededToFitHeight;
			}
		}
		else {
			if (isNaN(desiredScale)) {
				desiredScale = 1;
			}
		}

		self.updateSliderValue(desiredScale);
		
		// scale to fit width
		if (scaleToWidth && scaleToHeight==false) {
			canCenterVertically = scaleNeededToFitHeight>=scaleNeededToFitWidth;
			canCenterHorizontally = scaleNeededToFitWidth>=1 && enableScaleUp==false;

			if (isSliderChange) {
				canCenterHorizontally = desiredScale<scaleToFitFullWidth;
			}
			else if (scaleToFit) {
				desiredScale = scaleNeededToFitWidth;
			}

			if (hasMinimumScale) {
				desiredScale = Math.max(desiredScale, Number(minimumScale));
			}

			if (hasMaximumScale) {
				desiredScale = Math.min(desiredScale, Number(maximumScale));
			}

			desiredScale = self.getShortNumber(desiredScale);

			canCenterHorizontally = self.canCenterHorizontally(view, "width", enableScaleUp, desiredScale, minimumScale, maximumScale);
			canCenterVertically = self.canCenterVertically(view, "width", enableScaleUp, desiredScale, minimumScale, maximumScale);

			if (desiredScale>1 && (enableScaleUp || isSliderChange)) {
				transformValue = "scale(" + desiredScale + ")";
			}
			else if (desiredScale>=1 && enableScaleUp==false) {
				transformValue = "scale(" + 1 + ")";
			}
			else {
				transformValue = "scale(" + desiredScale + ")";
			}

			if (self.centerVertically) {
				if (canCenterVertically) {
					translateY = "-50%";
					topPosition = "50%";
				}
				else {
					translateY = "0";
					topPosition = "0";
				}
				
				if (style.top != topPosition) {
					style.top = topPosition + "";
				}

				if (canCenterVertically) {
					transformValue += " translateY(" + translateY+ ")";
				}
			}

			if (self.centerHorizontally) {
				if (canCenterHorizontally) {
					translateX = "-50%";
					leftPosition = "50%";
				}
				else {
					translateX = "0";
					leftPosition = "0";
				}

				if (style.left != leftPosition) {
					style.left = leftPosition + "";
				}

				if (canCenterHorizontally) {
					transformValue += " translateX(" + translateX+ ")";
				}
			}

			style.transformOrigin = "0 0";
			style.transform = transformValue;

			self.viewScale = desiredScale;
			self.viewToFitWidthScale = scaleNeededToFitWidth;
			self.viewToFitHeightScale = scaleNeededToFitHeight;
			self.viewLeft = leftPosition;
			self.viewTop = topPosition;

			return desiredScale;
		}

		// scale to fit height
		if (scaleToHeight && scaleToWidth==false) {
			//canCenterVertically = scaleNeededToFitHeight>=scaleNeededToFitWidth;
			//canCenterHorizontally = scaleNeededToFitHeight<=scaleNeededToFitWidth && enableScaleUp==false;
			canCenterVertically = scaleNeededToFitHeight>=scaleNeededToFitWidth;
			canCenterHorizontally = scaleNeededToFitWidth>=1 && enableScaleUp==false;
			
			if (isSliderChange) {
				canCenterHorizontally = desiredScale<scaleToFitFullHeight;
			}
			else if (scaleToFit) {
				desiredScale = scaleNeededToFitHeight;
			}

			if (hasMinimumScale) {
				desiredScale = Math.max(desiredScale, Number(minimumScale));
			}

			if (hasMaximumScale) {
				desiredScale = Math.min(desiredScale, Number(maximumScale));
				//canCenterVertically = desiredScale>=scaleNeededToFitHeight && enableScaleUp==false;
			}

			desiredScale = self.getShortNumber(desiredScale);

			canCenterHorizontally = self.canCenterHorizontally(view, "height", enableScaleUp, desiredScale, minimumScale, maximumScale);
			canCenterVertically = self.canCenterVertically(view, "height", enableScaleUp, desiredScale, minimumScale, maximumScale);

			if (desiredScale>1 && (enableScaleUp || isSliderChange)) {
				transformValue = "scale(" + desiredScale + ")";
			}
			else if (desiredScale>=1 && enableScaleUp==false) {
				transformValue = "scale(" + 1 + ")";
			}
			else {
				transformValue = "scale(" + desiredScale + ")";
			}

			if (self.centerHorizontally) {
				if (canCenterHorizontally) {
					translateX = "-50%";
					leftPosition = "50%";
				}
				else {
					translateX = "0";
					leftPosition = "0";
				}

				if (style.left != leftPosition) {
					style.left = leftPosition + "";
				}

				if (canCenterHorizontally) {
					transformValue += " translateX(" + translateX+ ")";
				}
			}

			if (self.centerVertically) {
				if (canCenterVertically) {
					translateY = "-50%";
					topPosition = "50%";
				}
				else {
					translateY = "0";
					topPosition = "0";
				}
				
				if (style.top != topPosition) {
					style.top = topPosition + "";
				}

				if (canCenterVertically) {
					transformValue += " translateY(" + translateY+ ")";
				}
			}

			style.transformOrigin = "0 0";
			style.transform = transformValue;

			self.viewScale = desiredScale;
			self.viewToFitWidthScale = scaleNeededToFitWidth;
			self.viewToFitHeightScale = scaleNeededToFitHeight;
			self.viewLeft = leftPosition;
			self.viewTop = topPosition;

			return scaleNeededToFitHeight;
		}

		if (scaleToFitType=="fit") {
			//canCenterVertically = scaleNeededToFitHeight>=scaleNeededToFitWidth;
			//canCenterHorizontally = scaleNeededToFitWidth>=scaleNeededToFitHeight;
			canCenterVertically = scaleNeededToFitHeight>=scaleNeededToFit;
			canCenterHorizontally = scaleNeededToFitWidth>=scaleNeededToFit;

			if (hasMinimumScale) {
				desiredScale = Math.max(desiredScale, Number(minimumScale));
			}

			desiredScale = self.getShortNumber(desiredScale);

			if (isSliderChange || scaleToFit==false) {
				canCenterVertically = scaleToFitFullHeight>=desiredScale;
				canCenterHorizontally = desiredScale<scaleToFitFullWidth;
			}
			else if (scaleToFit) {
				desiredScale = scaleNeededToFit;
			}

			transformValue = "scale(" + desiredScale + ")";

			//canCenterHorizontally = self.canCenterHorizontally(view, "fit", false, desiredScale);
			//canCenterVertically = self.canCenterVertically(view, "fit", false, desiredScale);
			
			if (self.centerVertically) {
				if (canCenterVertically) {
					translateY = "-50%";
					topPosition = "50%";
				}
				else {
					translateY = "0";
					topPosition = "0";
				}
				
				if (style.top != topPosition) {
					style.top = topPosition + "";
				}

				if (canCenterVertically) {
					transformValue += " translateY(" + translateY+ ")";
				}
			}

			if (self.centerHorizontally) {
				if (canCenterHorizontally) {
					translateX = "-50%";
					leftPosition = "50%";
				}
				else {
					translateX = "0";
					leftPosition = "0";
				}

				if (style.left != leftPosition) {
					style.left = leftPosition + "";
				}

				if (canCenterHorizontally) {
					transformValue += " translateX(" + translateX+ ")";
				}
			}

			style.transformOrigin = "0 0";
			style.transform = transformValue;

			self.viewScale = desiredScale;
			self.viewToFitWidthScale = scaleNeededToFitWidth;
			self.viewToFitHeightScale = scaleNeededToFitHeight;
			self.viewLeft = leftPosition;
			self.viewTop = topPosition;

			self.updateSliderValue(desiredScale);
			
			return desiredScale;
		}

		if (scaleToFitType=="default" || scaleToFitType=="") {
			desiredScale = 1;

			if (hasMinimumScale) {
				desiredScale = Math.max(desiredScale, Number(minimumScale));
			}
			if (hasMaximumScale) {
				desiredScale = Math.min(desiredScale, Number(maximumScale));
			}

			canCenterHorizontally = self.canCenterHorizontally(view, "none", false, desiredScale, minimumScale, maximumScale);
			canCenterVertically = self.canCenterVertically(view, "none", false, desiredScale, minimumScale, maximumScale);

			if (self.centerVertically) {
				if (canCenterVertically) {
					translateY = "-50%";
					topPosition = "50%";
				}
				else {
					translateY = "0";
					topPosition = "0";
				}
				
				if (style.top != topPosition) {
					style.top = topPosition + "";
				}

				if (canCenterVertically) {
					transformValue += " translateY(" + translateY+ ")";
				}
			}

			if (self.centerHorizontally) {
				if (canCenterHorizontally) {
					translateX = "-50%";
					leftPosition = "50%";
				}
				else {
					translateX = "0";
					leftPosition = "0";
				}

				if (style.left != leftPosition) {
					style.left = leftPosition + "";
				}

				if (canCenterHorizontally) {
					transformValue += " translateX(" + translateX+ ")";
				}
				else {
					transformValue += " translateX(" + 0 + ")";
				}
			}

			style.transformOrigin = "0 0";
			style.transform = transformValue;


			self.viewScale = desiredScale;
			self.viewToFitWidthScale = scaleNeededToFitWidth;
			self.viewToFitHeightScale = scaleNeededToFitHeight;
			self.viewLeft = leftPosition;
			self.viewTop = topPosition;

			self.updateSliderValue(desiredScale);
			
			return desiredScale;
		}
	}

	/**
	 * Returns true if view can be centered horizontally
	 * @param {HTMLElement} view view
	 * @param {String} type type of scaling - width, height, all, none
	 * @param {Boolean} scaleUp if scale up enabled 
	 * @param {Number} scale target scale value 
	 */
	self.canCenterHorizontally = function(view, type, scaleUp, scale, minimumScale, maximumScale) {
		var scaleNeededToFit = self.getViewFitToViewportScale(view, scaleUp);
		var scaleNeededToFitHeight = self.getViewFitToViewportHeightScale(view, scaleUp);
		var scaleNeededToFitWidth = self.getViewFitToViewportWidthScale(view, scaleUp);
		var canCenter = false;
		var minScale;

		type = type==null ? "none" : type;
		scale = scale==null ? scale : scaleNeededToFitWidth;
		scaleUp = scaleUp == null ? false : scaleUp;

		if (type=="width") {
	
			if (scaleUp && maximumScale==null) {
				canCenter = false;
			}
			else if (scaleNeededToFitWidth>=1) {
				canCenter = true;
			}
		}
		else if (type=="height") {
			minScale = Math.min(1, scaleNeededToFitHeight);
			if (minimumScale!="" && maximumScale!="") {
				minScale = Math.max(minimumScale, Math.min(maximumScale, scaleNeededToFitHeight));
			}
			else {
				if (minimumScale!="") {
					minScale = Math.max(minimumScale, scaleNeededToFitHeight);
				}
				if (maximumScale!="") {
					minScale = Math.max(minimumScale, Math.min(maximumScale, scaleNeededToFitHeight));
				}
			}
	
			if (scaleUp && maximumScale=="") {
				canCenter = false;
			}
			else if (scaleNeededToFitWidth>=minScale) {
				canCenter = true;
			}
		}
		else if (type=="fit") {
			canCenter = scaleNeededToFitWidth>=scaleNeededToFit;
		}
		else {
			if (scaleUp) {
				canCenter = false;
			}
			else if (scaleNeededToFitWidth>=1) {
				canCenter = true;
			}
		}

		self.horizontalScrollbarsNeeded = canCenter;
		
		return canCenter;
	}

	/**
	 * Returns true if view can be centered horizontally
	 * @param {HTMLElement} view view to scale
	 * @param {String} type type of scaling
	 * @param {Boolean} scaleUp if scale up enabled 
	 * @param {Number} scale target scale value 
	 */
	self.canCenterVertically = function(view, type, scaleUp, scale, minimumScale, maximumScale) {
		var scaleNeededToFit = self.getViewFitToViewportScale(view, scaleUp);
		var scaleNeededToFitWidth = self.getViewFitToViewportWidthScale(view, scaleUp);
		var scaleNeededToFitHeight = self.getViewFitToViewportHeightScale(view, scaleUp);
		var canCenter = false;
		var minScale;

		type = type==null ? "none" : type;
		scale = scale==null ? 1 : scale;
		scaleUp = scaleUp == null ? false : scaleUp;
	
		if (type=="width") {
			canCenter = scaleNeededToFitHeight>=scaleNeededToFitWidth;
		}
		else if (type=="height") {
			minScale = Math.max(minimumScale, Math.min(maximumScale, scaleNeededToFit));
			canCenter = scaleNeededToFitHeight>=minScale;
		}
		else if (type=="fit") {
			canCenter = scaleNeededToFitHeight>=scaleNeededToFit;
		}
		else {
			if (scaleUp) {
				canCenter = false;
			}
			else if (scaleNeededToFitHeight>=1) {
				canCenter = true;
			}
		}

		self.verticalScrollbarsNeeded = canCenter;
		
		return canCenter;
	}

	self.getViewFitToViewportScale = function(view, scaleUp) {
		var enableScaleUp = scaleUp;
		var availableWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
		var availableHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
		var elementWidth = parseFloat(getComputedStyle(view, "style").width);
		var elementHeight = parseFloat(getComputedStyle(view, "style").height);
		var newScale = 1;

		// if element is not added to the document computed values are NaN
		if (isNaN(elementWidth) || isNaN(elementHeight)) {
			return newScale;
		}

		availableWidth -= self.horizontalPadding;
		availableHeight -= self.verticalPadding;

		if (enableScaleUp) {
			newScale = Math.min(availableHeight/elementHeight, availableWidth/elementWidth);
		}
		else if (elementWidth > availableWidth || elementHeight > availableHeight) {
			newScale = Math.min(availableHeight/elementHeight, availableWidth/elementWidth);
		}
		
		return newScale;
	}

	self.getViewFitToViewportWidthScale = function(view, scaleUp) {
		// need to get browser viewport width when element
		var isParentWindow = view && view.parentNode && view.parentNode===document.body;
		var enableScaleUp = scaleUp;
		var availableWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
		var elementWidth = parseFloat(getComputedStyle(view, "style").width);
		var newScale = 1;

		// if element is not added to the document computed values are NaN
		if (isNaN(elementWidth)) {
			return newScale;
		}

		availableWidth -= self.horizontalPadding;

		if (enableScaleUp) {
			newScale = availableWidth/elementWidth;
		}
		else if (elementWidth > availableWidth) {
			newScale = availableWidth/elementWidth;
		}
		
		return newScale;
	}

	self.getViewFitToViewportHeightScale = function(view, scaleUp) {
		var enableScaleUp = scaleUp;
		var availableHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
		var elementHeight = parseFloat(getComputedStyle(view, "style").height);
		var newScale = 1;

		// if element is not added to the document computed values are NaN
		if (isNaN(elementHeight)) {
			return newScale;
		}

		availableHeight -= self.verticalPadding;

		if (enableScaleUp) {
			newScale = availableHeight/elementHeight;
		}
		else if (elementHeight > availableHeight) {
			newScale = availableHeight/elementHeight;
		}
		
		return newScale;
	}

	self.keypressHandler = function(event) {
		var rightKey = 39;
		var leftKey = 37;
		
		// listen for both events 
		if (event.type=="keypress") {
			window.removeEventListener("keyup", self.keypressHandler);
		}
		else {
			window.removeEventListener("keypress", self.keypressHandler);
		}
		
		if (self.showNavigationControls) {
			if (self.navigationOnKeypress) {
				if (event.keyCode==rightKey) {
					self.nextView();
				}
				if (event.keyCode==leftKey) {
					self.previousView();
				}
			}
		}
		else if (self.navigationOnKeypress) {
			if (event.keyCode==rightKey) {
				self.nextView();
			}
			if (event.keyCode==leftKey) {
				self.previousView();
			}
		}
	}

	///////////////////////////////////
	// GENERAL FUNCTIONS
	///////////////////////////////////

	self.getViewById = function(id) {
		id = id ? id.replace("#", "") : "";
		var view = self.viewIds.indexOf(id)!=-1 && self.getElement(id);
		return view;
	}

	self.getViewIds = function() {
		var viewIds = self.getViewPreferenceValue(document.body, self.prefix + "view-ids");
		var viewId = null;

		viewIds = viewIds!=null && viewIds!="" ? viewIds.split(",") : [];

		if (viewIds.length==0) {
			viewId = self.getViewPreferenceValue(document.body, self.prefix + "view-id");
			viewIds = viewId ? [viewId] : [];
		}

		return viewIds;
	}

	self.getInitialViewId = function() {
		var viewId = self.getViewPreferenceValue(document.body, self.prefix + "view-id");
		return viewId;
	}

	self.getApplicationStylesheet = function() {
		var stylesheetId = self.getViewPreferenceValue(document.body, self.prefix + "stylesheet-id");
		self.applicationStylesheet = document.getElementById("applicationStylesheet");
		return self.applicationStylesheet.sheet;
	}

	self.getVisibleView = function() {
		var viewIds = self.getViewIds();
		
		for (var i=0;i<viewIds.length;i++) {
			var viewId = viewIds[i].replace(/[\#?\.?](.*)/, "$" + "1");
			var view = self.getElement(viewId);
			var postName = "_Class";

			if (view==null && viewId && viewId.lastIndexOf(postName)!=-1) {
				view = self.getElement(viewId.replace(postName, ""));
			}
			
			if (view) {
				var display = getComputedStyle(view).display;
		
				if (display=="block" || display=="flex") {
					return view;
				}
			}
		}

		return null;
	}

	self.getVisibleViews = function() {
		var viewIds = self.getViewIds();
		var views = [];
		
		for (var i=0;i<viewIds.length;i++) {
			var viewId = viewIds[i].replace(/[\#?\.?](.*)/, "$" + "1");
			var view = self.getElement(viewId);
			var postName = "_Class";

			if (view==null && viewId && viewId.lastIndexOf(postName)!=-1) {
				view = self.getElement(viewId.replace(postName, ""));
			}
			
			if (view) {
				var display = getComputedStyle(view).display;
				
				if (display=="none") {
					continue;
				}

				if (display=="block" || display=="flex") {
					views.push(view);
				}
			}
		}

		return views;
	}

	self.getStateNameByViewId = function(id) {
		var state = self.viewsDictionary[id];
		return state && state.stateName;
	}

	self.getMatchingViews = function(ids) {
		var views = self.addedViews.slice(0);
		var matchingViews = [];

		if (self.showByMediaQuery) {
			for (let index = 0; index < views.length; index++) {
				var viewId = views[index];
				var state = self.viewsDictionary[viewId];
				var rule = state && state.rule; 
				var matchResults = window.matchMedia(rule.conditionText);
				var view = self.views[viewId];
				
				if (matchResults.matches) {
					if (ids==true) {
						matchingViews.push(viewId);
					}
					else {
						matchingViews.push(view);
					}
				}
			}
		}

		return matchingViews;
	}

	self.ruleMatchesQuery = function(rule) {
		var result = window.matchMedia(rule.conditionText);
		return result.matches;
	}

	self.getViewsByStateName = function(stateName, matchQuery) {
		var views = self.addedViews.slice(0);
		var matchingViews = [];

		if (self.showByMediaQuery) {

			// find state name
			for (let index = 0; index < views.length; index++) {
				var viewId = views[index];
				var state = self.viewsDictionary[viewId];
				var rule = state.rule;
				var mediaRule = state.mediaRule;
				var view = self.views[viewId];
				var viewStateName = self.getStyleRuleValue(mediaRule, self.STATE_NAME, state);
				var stateFoundAtt = view.getAttribute(self.STATE_NAME)==state;
				var matchesResults = false;
				
				if (viewStateName==stateName) {
					if (matchQuery) {
						matchesResults = self.ruleMatchesQuery(rule);

						if (matchesResults) {
							matchingViews.push(view);
						}
					}
					else {
						matchingViews.push(view);
					}
				}
			}
		}

		return matchingViews;
	}

	self.getInitialView = function() {
		var viewId = self.getInitialViewId();
		viewId = viewId.replace(/[\#?\.?](.*)/, "$" + "1");
		var view = self.getElement(viewId);
		var postName = "_Class";

		if (view==null && viewId && viewId.lastIndexOf(postName)!=-1) {
			view = self.getElement(viewId.replace(postName, ""));
		}

		return view;
	}

	self.getViewIndex = function(view) {
		var viewIds = self.getViewIds();
		var id = view ? view.id : null;
		var index = id && viewIds ? viewIds.indexOf(id) : -1;

		return index;
	}

	self.syncronizeViewToURL = function() {
		var fragment = self.getHashFragment();

		if (self.showByMediaQuery) {
			var stateName = fragment;
			
			if (stateName==null || stateName=="") {
				var initialView = self.getInitialView();
				stateName = initialView ? self.getStateNameByViewId(initialView.id) : null;
			}
			
			self.showMediaQueryViewsByState(stateName);
			return;
		}

		var view = self.getViewById(fragment);
		var index = view ? self.getViewIndex(view) : 0;
		if (index==-1) index = 0;
		var currentView = self.hideViews(index);

		if (self.supportsPopState && currentView) {

			if (fragment==null) {
				window.history.replaceState({name:currentView.id}, null, "#"+ currentView.id);
			}
			else {
				window.history.pushState({name:currentView.id}, null, "#"+ currentView.id);
			}
		}
		
		self.setViewVariables(view);
		return view;
	}

	/**
	 * Set the currentView or currentOverlay properties and set the lastView or lastOverlay properties
	 */
	self.setViewVariables = function(view, overlay, parentView) {
		if (view) {
			if (self.currentView) {
				self.lastView = self.currentView;
			}
			self.currentView = view;
		}

		if (overlay) {
			if (self.currentOverlay) {
				self.lastOverlay = self.currentOverlay;
			}
			self.currentOverlay = overlay;
		}
	}

	self.getViewPreferenceBoolean = function(view, property, altValue) {
		var computedStyle = window.getComputedStyle(view);
		var value = computedStyle.getPropertyValue(property);
		var type = typeof value;
		
		if (value=="true" || (type=="string" && value.indexOf("true")!=-1)) {
			return true;
		}
		else if (value=="" && arguments.length==3) {
			return altValue;
		}

		return false;
	}

	self.getViewPreferenceValue = function(view, property, defaultValue) {
		var value = window.getComputedStyle(view).getPropertyValue(property);

		if (value===undefined) {
			return defaultValue;
		}
		
		value = value.replace(/^[\s\"]*/, "");
		value = value.replace(/[\s\"]*$/, "");
		value = value.replace(/^[\s"]*(.*?)[\s"]*$/, function (match, capture) { 
			return capture;
		});

		return value;
	}

	self.getStyleRuleValue = function(cssRule, property) {
		var value = cssRule ? cssRule.style.getPropertyValue(property) : null;

		if (value===undefined) {
			return null;
		}
		
		value = value.replace(/^[\s\"]*/, "");
		value = value.replace(/[\s\"]*$/, "");
		value = value.replace(/^[\s"]*(.*?)[\s"]*$/, function (match, capture) { 
			return capture;
		});

		return value;
	}

	/**
	 * Get the first defined value of property. Returns empty string if not defined
	 * @param {String} id id of element
	 * @param {String} property 
	 */
	self.getCSSPropertyValueForElement = function(id, property) {
		var styleSheets = document.styleSheets;
		var numOfStylesheets = styleSheets.length;
		var values = [];
		var selectorIDText = "#" + id;
		var selectorClassText = "." + id + "_Class";
		var value;

		for(var i=0;i<numOfStylesheets;i++) {
			var styleSheet = styleSheets[i];
			var cssRules = self.getStylesheetRules(styleSheet);
			var numOfCSSRules = cssRules.length;
			var cssRule;
			
			for (var j=0;j<numOfCSSRules;j++) {
				cssRule = cssRules[j];
				
				if (cssRule.media) {
					var mediaRules = cssRule.cssRules;
					var numOfMediaRules = mediaRules ? mediaRules.length : 0;
					
					for(var k=0;k<numOfMediaRules;k++) {
						var mediaRule = mediaRules[k];
						
						if (mediaRule.selectorText==selectorIDText || mediaRule.selectorText==selectorClassText) {
							
							if (mediaRule.style && mediaRule.style.getPropertyValue(property)!="") {
								value = mediaRule.style.getPropertyValue(property);
								values.push(value);
							}
						}
					}
				}
				else {

					if (cssRule.selectorText==selectorIDText || cssRule.selectorText==selectorClassText) {
						if (cssRule.style && cssRule.style.getPropertyValue(property)!="") {
							value = cssRule.style.getPropertyValue(property);
							values.push(value);
						}
					}
				}
			}
		}

		return values.pop();
	}

	self.getIsStyleDefined = function(id, property) {
		var value = self.getCSSPropertyValueForElement(id, property);
		return value!==undefined && value!="";
	}

	self.collectViews = function() {
		var viewIds = self.getViewIds();

		for (let index = 0; index < viewIds.length; index++) {
			const id = viewIds[index];
			const view = self.getElement(id);
			self.views[id] = view;
		}
		
		self.viewIds = viewIds;
	}

	self.collectOverlays = function() {
		var viewIds = self.getViewIds();
		var ids = [];

		for (let index = 0; index < viewIds.length; index++) {
			const id = viewIds[index];
			const view = self.getViewById(id);
			const isOverlay = view && self.isOverlay(view);
			
			if (isOverlay) {
				ids.push(id);
				self.overlays[id] = view;
			}
		}
		
		self.overlayIds = ids;
	}

	self.collectMediaQueries = function() {
		var viewIds = self.getViewIds();
		var styleSheet = self.getApplicationStylesheet();
		var cssRules = self.getStylesheetRules(styleSheet);
		var numOfCSSRules = cssRules ? cssRules.length : 0;
		var cssRule;
		var id = viewIds.length ? viewIds[0]: ""; // single view
		var selectorIDText = "#" + id;
		var selectorClassText = "." + id + "_Class";
		var viewsNotFound = viewIds.slice();
		var viewsFound = [];
		var selectorText = null;
		var property = self.prefix + "view-id";
		var stateName = self.prefix + "state";
		var stateValue = null;
		var view = null;
		
		for (var j=0;j<numOfCSSRules;j++) {
			cssRule = cssRules[j];
			
			if (cssRule.media) {
				var mediaRules = cssRule.cssRules;
				var numOfMediaRules = mediaRules ? mediaRules.length : 0;
				var mediaViewInfoFound = false;
				var mediaId = null;
				
				for(var k=0;k<numOfMediaRules;k++) {
					var mediaRule = mediaRules[k];

					selectorText = mediaRule.selectorText;
					
					if (selectorText==".mediaViewInfo" && mediaViewInfoFound==false) {

						mediaId = self.getStyleRuleValue(mediaRule, property);
						stateValue = self.getStyleRuleValue(mediaRule, stateName);

						selectorIDText = "#" + mediaId;
						selectorClassText = "." + mediaId + "_Class";
						view = self.getElement(mediaId);
						
						// prevent duplicates from load and domcontentloaded events
						if (self.addedViews.indexOf(mediaId)==-1) {
							self.addView(view, mediaId, cssRule, mediaRule, stateValue);
						}

						viewsFound.push(mediaId);

						if (viewsNotFound.indexOf(mediaId)!=-1) {
							viewsNotFound.splice(viewsNotFound.indexOf(mediaId));
						}

						mediaViewInfoFound = true;
					}

					if (selectorIDText==selectorText || selectorClassText==selectorText) {
						var styleObject = self.viewsDictionary[mediaId];
						if (styleObject) {
							styleObject.styleDeclaration = mediaRule;
						}
						break;
					}
				}
			}
			else {
				selectorText = cssRule.selectorText;
				
				if (selectorText==null) continue;

				selectorText = selectorText.replace(/[#|\s|*]?/g, "");

				if (viewIds.indexOf(selectorText)!=-1) {
					view = self.getElement(selectorText);
					self.addView(view, selectorText, cssRule, null, stateValue);

					if (viewsNotFound.indexOf(selectorText)!=-1) {
						viewsNotFound.splice(viewsNotFound.indexOf(selectorText));
					}

					break;
				}
			}
		}

		if (viewsNotFound.length) {
			console.log("Could not find the following views:" + viewsNotFound.join(",") + "");
			console.log("Views found:" + viewsFound.join(",") + "");
		}
	}

	/**
	 * Adds a view
	 * @param {HTMLElement} view view element
	 * @param {String} id id of view element
	 * @param {CSSRule} cssRule of view element
	 * @param {CSSMediaRule} mediaRule media rule of view element
	 * @param {String} stateName name of state if applicable
	 **/
	self.addView = function(view, viewId, cssRule, mediaRule, stateName) {
		var viewData = {};
		viewData.name = viewId;
		viewData.rule = cssRule;
		viewData.id = viewId;
		viewData.mediaRule = mediaRule;
		viewData.stateName = stateName;

		self.views.push(viewData);
		self.addedViews.push(viewId);
		self.viewsDictionary[viewId] = viewData;
		self.mediaQueryDictionary[viewId] = cssRule;
	}

	self.hasView = function(name) {

		if (self.addedViews.indexOf(name)!=-1) {
			return true;
		}
		return false;
	}

	/**
	 * Go to view by id. Views are added in addView()
	 * @param {String} id id of view in current
	 * @param {Boolean} maintainPreviousState if true then do not hide other views
	 * @param {String} parent id of parent view
	 **/
	self.goToView = function(id, maintainPreviousState, parent) {
		var state = self.viewsDictionary[id];

		if (state) {
			if (maintainPreviousState==false || maintainPreviousState==null) {
				self.hideViews();
			}
			self.enableMediaQuery(state.rule);
			self.updateViewLabel();
			self.updateURL();
		}
		else {
			var event = new Event(self.STATE_NOT_FOUND);
			self.stateName = id;
			window.dispatchEvent(event);
		}
	}

	/**
	 * Go to the view in the event targets CSS variable
	 **/
	self.goToTargetView = function(event) {
		var button = event.currentTarget;
		var buttonComputedStyles = getComputedStyle(button);
		var actionTargetValue = buttonComputedStyles.getPropertyValue(self.prefix+"action-target").trim();
		var animation = buttonComputedStyles.getPropertyValue(self.prefix+"animation").trim();
		var targetType = buttonComputedStyles.getPropertyValue(self.prefix+"action-type").trim();
		var targetView = self.application ? null : self.getElement(actionTargetValue);
		var targetState = targetView ? self.getStateNameByViewId(targetView.id) : null;
		var actionTargetStyles = targetView ? targetView.style : null;
		var state = self.viewsDictionary[actionTargetValue];
		
		// navigate to page
		if (self.application==false || targetType=="page") {
			document.location.href = "./" + actionTargetValue;
			return;
		}

		// if view is found
		if (targetView) {

			if (self.currentOverlay) {
				self.removeOverlay(false);
			}

			if (self.showByMediaQuery) {
				var stateName = targetState;
				
				if (stateName==null || stateName=="") {
					var initialView = self.getInitialView();
					stateName = initialView ? self.getStateNameByViewId(initialView.id) : null;
				}
				self.showMediaQueryViewsByState(stateName, event);
				return;
			}

			// add animation set in event target style declaration
			if (animation && self.supportAnimations) {
				self.crossFade(self.currentView, targetView, false, animation);
			}
			else {
				self.setViewVariables(self.currentView);
				self.hideViews();
				self.enableMediaQuery(state.rule);
				self.scaleViewIfNeeded(targetView);
				self.centerView(targetView);
				self.updateViewLabel();
				self.updateURL();
			}
		}
		else {
			var stateEvent = new Event(self.STATE_NOT_FOUND);
			self.stateName = name;
			window.dispatchEvent(stateEvent);
		}

		event.stopImmediatePropagation();
	}

	/**
	 * Cross fade between views
	 **/
	self.crossFade = function(from, to, update, animation) {
		var targetIndex = to.parentNode
		var fromIndex = Array.prototype.slice.call(from.parentElement.children).indexOf(from);
		var toIndex = Array.prototype.slice.call(to.parentElement.children).indexOf(to);

		if (from.parentNode==to.parentNode) {
			var reverse = self.getReverseAnimation(animation);
			var duration = self.getAnimationDuration(animation, true);

			// if target view is above (higher index)
			// then fade in target view 
			// and after fade in then hide previous view instantly
			if (fromIndex<toIndex) {
				self.setElementAnimation(from, null);
				self.setElementAnimation(to, null);
				self.showViewByMediaQuery(to);
				self.fadeIn(to, update, animation);

				setTimeout(function() {
					self.setElementAnimation(to, null);
					self.setElementAnimation(from, null);
					self.hideView(from);
					self.updateURL();
					self.setViewVariables(to);
					self.updateViewLabel();
				}, duration)
			}
			// if target view is on bottom
			// then show target view instantly 
			// and fade out current view
			else if (fromIndex>toIndex) {
				self.setElementAnimation(to, null);
				self.setElementAnimation(from, null);
				self.showViewByMediaQuery(to);
				self.fadeOut(from, update, reverse);

				setTimeout(function() {
					self.setElementAnimation(to, null);
					self.setElementAnimation(from, null);
					self.hideView(from);
					self.updateURL();
					self.setViewVariables(to);
				}, duration)
			}
		}
	}

	self.fadeIn = function(element, update, animation) {
		self.showViewByMediaQuery(element);

		if (update) {
			self.updateURL(element);

			element.addEventListener("animationend", function(event) {
				element.style.animation = null;
				self.setViewVariables(element);
				self.updateViewLabel();
				element.removeEventListener("animationend", arguments.callee);
			});
		}

		self.setElementAnimation(element, null);
		
		element.style.animation = animation;
	}

	self.fadeOutCurrentView = function(animation, update) {
		if (self.currentView) {
			self.fadeOut(self.currentView, update, animation);
		}
		if (self.currentOverlay) {
			self.fadeOut(self.currentOverlay, update, animation);
		}
	}

	self.fadeOut = function(element, update, animation) {
		if (update) {
			element.addEventListener("animationend", function(event) {
				element.style.animation = null;
				self.hideView(element);
				element.removeEventListener("animationend", arguments.callee);
			});
		}

		element.style.animationPlayState = "paused";
		element.style.animation = animation;
		element.style.animationPlayState = "running";
	}

	self.getReverseAnimation = function(animation) {
		if (animation && animation.indexOf("reverse")==-1) {
			animation += " reverse";
		}

		return animation;
	}

	/**
	 * Get duration in animation string
	 * @param {String} animation animation value
	 * @param {Boolean} inMilliseconds length in milliseconds if true
	 */
	self.getAnimationDuration = function(animation, inMilliseconds) {
		var duration = 0;
		var expression = /.+(\d\.\d)s.+/;

		if (animation && animation.match(expression)) {
			duration = parseFloat(animation.replace(expression, "$" + "1"));
			if (duration && inMilliseconds) duration = duration * 1000;
		}

		return duration;
	}

	self.setElementAnimation = function(element, animation, priority) {
		element.style.setProperty("animation", animation, "important");
	}

	self.getElement = function(id) {
		id = id ? id.trim() : id;
		var element = id ? document.getElementById(id) : null;

		return element;
	}

	self.getElementById = function(id) {
		id = id ? id.trim() : id;
		var element = id ? document.getElementById(id) : null;

		return element;
	}

	self.getElementByClass = function(className) {
		className = className ? className.trim() : className;
		var elements = document.getElementsByClassName(className);

		return elements.length ? elements[0] : null;
	}

	self.resizeHandler = function(event) {
		
		if (self.showByMediaQuery) {
			if (self.enableDeepLinking) {
				var stateName = self.getHashFragment();

				if (stateName==null || stateName=="") {
					var initialView = self.getInitialView();
					stateName = initialView ? self.getStateNameByViewId(initialView.id) : null;
				}
				self.showMediaQueryViewsByState(stateName, event);
			}
		}
		else {
			var visibleViews = self.getVisibleViews();

			for (let index = 0; index < visibleViews.length; index++) {	
				var view = visibleViews[index];
				self.scaleViewIfNeeded(view);
			}
		}

		window.dispatchEvent(new Event(self.APPLICATION_RESIZE));
	}

	self.scaleViewIfNeeded = function(view) {

		if (self.scaleViewsOnResize) {
			if (view==null) {
				view = self.getVisibleView();
			}

			var isViewScaled = view.getAttributeNS(null, self.SIZE_STATE_NAME)=="false" ? false : true;

			if (isViewScaled) {
				self.scaleViewToFit(view, true);
			}
			else {
				self.scaleViewToActualSize(view);
			}
		}
		else if (view) {
			self.centerView(view);
		}
	}

	self.centerView = function(view) {

		if (self.scaleViewsToFit) {
			self.scaleViewToFit(view, true);
		}
		else {
			self.scaleViewToActualSize(view);  // for centering support for now
		}
	}

	self.preventDoubleClick = function(event) {
		event.stopImmediatePropagation();
	}

	self.getHashFragment = function() {
		var value = window.location.hash ? window.location.hash.replace("#", "") : "";
		return value;
	}

	self.showBlockElement = function(view) {
		view.style.display = "block";
	}

	self.hideElement = function(view) {
		view.style.display = "none";
	}

	self.showStateFunction = null;

	self.showMediaQueryViewsByState = function(state, event) {
		// browser will hide and show by media query (small, medium, large)
		// but if multiple views exists at same size user may want specific view
		// if showStateFunction is defined that is called with state fragment and user can show or hide each media matching view by returning true or false
		// if showStateFunction is not defined and state is defined and view has a defined state that matches then show that and hide other matching views
		// if no state is defined show view 
		// an viewChanging event is dispatched before views are shown or hidden that can be prevented 

		// get all matched queries
		// if state name is specified then show that view and hide other views
		// if no state name is defined then show
		var matchedViews = self.getMatchingViews();
		var matchMediaQuery = true;
		var foundViews = self.getViewsByStateName(state, matchMediaQuery);
		var showViews = [];
		var hideViews = [];

		// loop views that match media query 
		for (let index = 0; index < matchedViews.length; index++) {
			var view = matchedViews[index];
			
			// let user determine visible view
			if (self.showStateFunction!=null) {
				if (self.showStateFunction(view, state)) {
					showViews.push(view);
				}
				else {
					hideViews.push(view);
				}
			}
			// state was defined so check if view matches state
			else if (foundViews.length) {

				if (foundViews.indexOf(view)!=-1) {
					showViews.push(view);
				}
				else {
					hideViews.push(view);
				}
			}
			// if no state names are defined show view (define unused state name to exclude)
			else if (state==null || state=="") {
				showViews.push(view);
			}
		}

		if (showViews.length) {
			var viewChangingEvent = new Event(self.VIEW_CHANGING);
			viewChangingEvent.showViews = showViews;
			viewChangingEvent.hideViews = hideViews;
			window.dispatchEvent(viewChangingEvent);

			if (viewChangingEvent.defaultPrevented==false) {
				for (var index = 0; index < hideViews.length; index++) {
					var view = hideViews[index];

					if (self.isOverlay(view)) {
						self.removeOverlay(view);
					}
					else {
						self.hideElement(view);
					}
				}

				for (var index = 0; index < showViews.length; index++) {
					var view = showViews[index];

					if (index==showViews.length-1) {
						self.clearDisplay(view);
						self.setViewOptions(view);
						self.setViewVariables(view);
						self.centerView(view);
						self.updateURLState(view, state);
					}
				}
			}

			var viewChangeEvent = new Event(self.VIEW_CHANGE);
			viewChangeEvent.showViews = showViews;
			viewChangeEvent.hideViews = hideViews;
			window.dispatchEvent(viewChangeEvent);
		}
		
	}

	self.clearDisplay = function(view) {
		view.style.setProperty("display", null);
	}

	self.hashChangeHandler = function(event) {
		var fragment = self.getHashFragment();
		var view = self.getViewById(fragment);

		if (self.showByMediaQuery) {
			var stateName = fragment;

			if (stateName==null || stateName=="") {
				var initialView = self.getInitialView();
				stateName = initialView ? self.getStateNameByViewId(initialView.id) : null;
			}
			self.showMediaQueryViewsByState(stateName);
		}
		else {
			if (view) {
				self.hideViews();
				self.showView(view);
				self.setViewVariables(view);
				self.updateViewLabel();
				
				window.dispatchEvent(new Event(self.VIEW_CHANGE));
			}
			else {
				window.dispatchEvent(new Event(self.VIEW_NOT_FOUND));
			}
		}
	}

	self.popStateHandler = function(event) {
		var state = event.state;
		var fragment = state ? state.name : window.location.hash;
		var view = self.getViewById(fragment);

		if (view) {
			self.hideViews();
			self.showView(view);
			self.updateViewLabel();
		}
		else {
			window.dispatchEvent(new Event(self.VIEW_NOT_FOUND));
		}
	}

	self.doubleClickHandler = function(event) {
		var view = self.getVisibleView();
		var scaleValue = view ? self.getViewScaleValue(view) : 1;
		var scaleNeededToFit = view ? self.getViewFitToViewportScale(view) : 1;
		var scaleNeededToFitWidth = view ? self.getViewFitToViewportWidthScale(view) : 1;
		var scaleNeededToFitHeight = view ? self.getViewFitToViewportHeightScale(view) : 1;
		var scaleToFitType = self.scaleToFitType;

		// Three scenarios
		// - scale to fit on double click
		// - set scale to actual size on double click
		// - switch between scale to fit and actual page size

		if (scaleToFitType=="width") {
			scaleNeededToFit = scaleNeededToFitWidth;
		}
		else if (scaleToFitType=="height") {
			scaleNeededToFit = scaleNeededToFitHeight;
		}

		// if scale and actual size enabled then switch between
		if (self.scaleToFitOnDoubleClick && self.actualSizeOnDoubleClick) {
			var isViewScaled = view.getAttributeNS(null, self.SIZE_STATE_NAME);
			var isScaled = false;
			
			// if scale is not 1 then view needs scaling
			if (scaleNeededToFit!=1) {

				// if current scale is at 1 it is at actual size
				// scale it to fit
				if (scaleValue==1) {
					self.scaleViewToFit(view);
					isScaled = true;
				}
				else {
					// scale is not at 1 so switch to actual size
					self.scaleViewToActualSize(view);
					isScaled = false;
				}
			}
			else {
				// view is smaller than viewport 
				// so scale to fit() is scale actual size
				// actual size and scaled size are the same
				// but call scale to fit to retain centering
				self.scaleViewToFit(view);
				isScaled = false;
			}
			
			view.setAttributeNS(null, self.SIZE_STATE_NAME, isScaled+"");
			isViewScaled = view.getAttributeNS(null, self.SIZE_STATE_NAME);
		}
		else if (self.scaleToFitOnDoubleClick) {
			self.scaleViewToFit(view);
		}
		else if (self.actualSizeOnDoubleClick) {
			self.scaleViewToActualSize(view);
		}

	}

	self.scaleViewToFit = function(view) {
		return self.setViewScaleValue(view, true);
	}

	self.scaleViewToActualSize = function(view) {
		self.setViewScaleValue(view, false, 1);
	}

	self.onloadHandler = function(event) {
		self.initialize();
	}

	self.setElementHTML = function(id, value) {
		var element = self.getElement(id);
		element.innerHTML = value;
	}

	self.getStackArray = function(error) {
		var value = "";
		
		if (error==null) {
		  try {
			 error = new Error("Stack");
		  }
		  catch (e) {
			 
		  }
		}
		
		if ("stack" in error) {
		  value = error.stack;
		  var methods = value.split(/\n/g);
	 
		  var newArray = methods ? methods.map(function (value, index, array) {
			 value = value.replace(/\@.*/,"");
			 return value;
		  }) : null;
	 
		  if (newArray && newArray[0].includes("getStackTrace")) {
			 newArray.shift();
		  }
		  if (newArray && newArray[0].includes("getStackArray")) {
			 newArray.shift();
		  }
		  if (newArray && newArray[0]=="") {
			 newArray.shift();
		  }
	 
			return newArray;
		}
		
		return null;
	}

	self.log = function(value) {
		console.log.apply(this, [value]);
	}
	
	// initialize on load
	// sometimes the body size is 0 so we call this now and again later
	window.addEventListener("load", self.onloadHandler);
	window.document.addEventListener("DOMContentLoaded", self.onloadHandler);
}

window.application = new Application();