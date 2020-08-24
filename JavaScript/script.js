function loginValidation() {
    var userid = document.getElementById('user-id').value;
    var password = document.getElementById('user-pass').value;
    var numeric = /^[0-9]+$/;
    var passFlag, idFlag;
    if(password.length <= 6) {
        document.getElementById("password").innerHTML="Password should be atleast 6 characters";
        passFlag = false;
    } else {
        document.getElementById("password").innerHTML = "";
        passFlag = true;
    }
    if(userid == null || userid == "") {
        document.getElementById("Empid").innerHTML="Employee Id cannot be Empty";
        idFlag = false;
        console.log("Empty ID");
    } else if(!/^[0-9]+$/.test(userid)) {
        document.getElementById("Empid").innerHTML="Employee Id should contain only Numbers";
        idFlag = false;
    }
    else {
        document.getElementById("Empid").innerHTML="";
        idFlag = true;
        console.log("Non-Numeric");
    }
    
    if(idFlag && passFlag) {
        location.href="view_claim.html";
    }
}
function viewclaim() {
    location.href="update.html";
}

function UpdatePageValidation() {
    var claimNo = document.getElementById('claimNo').value;
    var claimProgram = document.getElementById('claimProgram').value;
    var startDate = document.getElementById('startDate').value;
    var endDate = document.getElementById('endDate').value;
    var claimnumcheck, claimprgmCheck, datecheck;
    let alphaNumeric = /^[0-9a-zA-Z]+$/;
    
    if(claimNo.length <= 9 && claimNo == "") {
        document.getElementById("claimNoError").innerHTML="Claim Number should be maximum length of 9";
        claimnumcheck = false;
    } else if (!/^[0-9a-zA-Z]+$/.test(claimNo)) {
        claimnumcheck = false;
        document.getElementById("claimNoError").innerHTML = "Claim Number should be AlphaNumeric";
    } else {
        document.getElementById("claimNoError").innerHTML = "";
        claimnumcheck = true;
    }
    if(claimProgram.length < 20 && claimProgram == "") {
        document.getElementById("claimProgramError").innerHTML="Claim Program should be maximum length of 20";
        claimprgmCheck = false;
    } else {
        document.getElementById("claimProgramError").innerHTML = "";
        claimprgmCheck = true;
    }
    if (Date.parse(startDate) > Date.parse(endDate)) {
        datecheck = false;
        document.getElementById("endDateError").innerHTML = "End Date cannot be lesser than Start Date";
    }
    if(!startDate){
        datecheck = false;
        document.getElementById("startDateError").innerHTML = "StartDate cannot be empty";
    } else {
        datecheck = true;
        document.getElementById("startDateError").innerHTML = "";
    }
    if(!endDate){
        datecheck = false;
        document.getElementById("endDateError").innerHTML = "EndDate cannot be empty";
    } else {
        datecheck = true;
        document.getElementById("endDateError").innerHTML = "";
    }
    if(datecheck && claimprgmCheck && claimnumcheck) {
        location.href="view_claim.html";
    }
}
function cancel() {
    location.href="update.html";
}