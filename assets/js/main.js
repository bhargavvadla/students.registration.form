let fnameEl = document.getElementById("fname");
let lnameEl = document.getElementById("lname");
let emailEl = document.getElementById("email");
let phoneEl = document.getElementById("phone");
let countryEl = document.getElementById("country");
let checkedListEl = document.getElementById("checkedList");
let selectedRadioEl = document.getElementById("selectedRadio");
let dobEl = document.getElementById("dob");
let thanksContainerEl = document.getElementById("thanksContainer");
let homeBtnEl = document.getElementById("homeBtn");
let checkedList = [];
let selectedRadioValue = "";

let checkboxes = document.querySelectorAll('.checkbox');
let educationRadios = document.querySelectorAll(".education_radio");
let selectedDateEl = document.getElementById("selectedDate");


let submitBtnEl = document.getElementById("submitBtn");

let fnameErrorEl = document.getElementById("fnameError");
let lnameErrorEl = document.getElementById("lnameError");
let emailErrorEl = document.getElementById("emailError");
let phoneErrorEl = document.getElementById("phoneError");
let countryErrorEl = document.getElementById("countryError");
let checkboxErrorEl = document.getElementById("checkboxError");
let dobErrorEl = document.getElementById("dobError");
let radioErrorEl = document.getElementById("radioError");


function validate(e) {
    e.preventDefault();


    let fname = fnameEl.value;
    let lname = lnameEl.value;
    let email = emailEl.value;
    let phone = phoneEl.value;
    let country = countryEl.value;
    let dob = dobEl.value;
    let checkRadios = false;
    let checkCheckboxes = false;

    fnameErrorEl.innerText = "";
    lnameErrorEl.innerText = "";
    emailErrorEl.innerText = "";
    phoneErrorEl.innerText = "";
    countryErrorEl.innerText = "";
    dobErrorEl.innerText = "";
    radioErrorEl.innerText = "";

    if (fname === "")
        fnameErrorEl.innerText = "*Firstname is required!";
    if (lname === "")
        lnameErrorEl.innerText = "*Lastname is required!";
    if (email === "")
        emailErrorEl.innerText = "*Email is required!";
    if (phone === "")
        phoneErrorEl.innerText = "*Phone number is required!";
    if (country === "")
        countryErrorEl.innerText = "*Country is required!";
    let skillsCount = 0;
    for (let checkbox of checkboxes) {
        if (checkbox.checked === true)
            skillsCount += 1;
    }
    checkCheckboxes = skillsCount > 0 ? true : false;

    if (!checkCheckboxes)
        checkboxErrorEl.innerText = "*Atleaset 1 is required!";
    else
        checkboxErrorEl.innerText = "";

    for (let eachRadio of educationRadios) {
        if (eachRadio.checked == true)
            checkRadios = true;
    }
    if (!checkRadios)
        radioErrorEl.innerText = "*Education is required!";
    if (dob === "") {
        dobErrorEl.innerText = "*DOB is required!";
    } else if (dob !== "") {
        selectedDateEl.innerText = dob;
    }
    console.log(fname, lname, email, phone, country, checkCheckboxes, checkRadios, dob)
    if (fname !== "" && lname !== "" && email !== "" && phone !== "" && country !== "" && dob !== "" &&
        checkCheckboxes && checkRadios) {
        thanksContainerEl.classList.remove("d_none");
        console.log("Successfully submitted");
    }


}

for (let eachRadio of educationRadios) {
    eachRadio.addEventListener("click", function () {
        if (this.checked === true) {
            radioErrorEl.innerText = "";
            selectedRadioValue = this.value;
            selectedRadio.innerText = selectedRadioValue;
        }

    })
}
for (let checkbox of checkboxes) {
    checkbox.addEventListener("click", function () {
        if (this.checked === true) {
            checkedList.push(this.value.toUpperCase());
            checkedListEl.innerText = checkedList.join('/ ');
            checkboxErrorEl.innerText = "";
        } else {
            checkedList = checkedList.filter(val => val !== this.value.toUpperCase());
            checkedListEl.innerText = checkedList.join('/ ');
        }

    })
}

function removeErrorMsg(e) {
    if (e.target.value.length >= 0) {
        let targetId = e.target.id
        targetId = targetId + "Error";
        targetId = document.getElementById(targetId);
        targetId.innerText = "";
    }


}

function showHome() {
    thanksContainerEl.classList.toggle("d_none");

}
fnameEl.addEventListener('keydown', removeErrorMsg);
lnameEl.addEventListener('keydown', removeErrorMsg);
emailEl.addEventListener('keydown', removeErrorMsg);
phoneEl.addEventListener('keydown', removeErrorMsg);
countryEl.addEventListener('change', removeErrorMsg);
dobEl.addEventListener('change', removeErrorMsg);



homeBtnEl.addEventListener("click", showHome);
submitBtnEl.addEventListener("click", validate);