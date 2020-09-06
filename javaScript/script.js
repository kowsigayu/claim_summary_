function loginValidation() {
    let userid = document.getElementById('user-id').value;
    let password = document.getElementById('user-pass').value;
    let passFlag, idFlag;

    // Password Validation
    if(password.length <= 6) {
        document.getElementById("password").innerHTML="Password should be atleast 6 characters";
        passFlag = false;
    } else {
        document.getElementById("password").innerHTML = "";
        passFlag = true;
    }

    // UserId Validation
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
    // setTimeout(() => { maskClaimNumber(); }, 100);
}
function viewclaim() {
    location.href="update.html";
}

// function maskClaimNumber() {
//     alert("id");
//     document.getElementById('mask').innerHTML="XXX-XXX-XXXX";
// }

function UpdatePageValidation() {
    let claimNo = document.getElementById('claimNo').value;
    let claimProgram = document.getElementById('claimProgram').value;
    let startDate = document.getElementById('startDate').value;
    let endDate = document.getElementById('endDate').value;
    let claimnumcheck, claimprgmCheck, datecheck = true;
    
    // Claim Number Validation
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

    // Claim Program Validation
    if(claimProgram.length < 20 && claimProgram == "") {
        document.getElementById("claimProgramError").innerHTML="Claim Program should be maximum length of 20";
        claimprgmCheck = false;
    } else {
        document.getElementById("claimProgramError").innerHTML = "";
        claimprgmCheck = true;
    }

    // Date Validation
    if(!startDate){
        datecheck = false;
        document.getElementById("startDateError").innerHTML = "StartDate cannot be empty";
    } else {
        document.getElementById("startDateError").innerHTML = "";
    }
    if(!endDate){
        datecheck = false;
        document.getElementById("endDateError").innerHTML = "EndDate cannot be empty";
    } else {
        document.getElementById("endDateError").innerHTML = "";
    }
    if (datecheck && Date.parse(startDate) > Date.parse(endDate)) {
        datecheck = false;
        document.getElementById("endDateError").innerHTML = "End Date cannot be lesser than Start Date";
    }

    if(datecheck && claimprgmCheck && claimnumcheck) {
        location.href="view_claim.html";
    }
}

function cancel() {
    location.href="update.html";
}
