
function Validate(){
    var first_name = document.forms.regForm.first_name.value;
    var middle_name = document.forms.regForm.middle_name.value;
    var last_name = document.forms.regForm.last_name.value;
    var birthdate = document.forms.regForm.birthdate.value;
    var address = document.forms.regForm.address.value;
    var pincode = document.forms.regForm.pincode.value;
    var country = document.forms.regForm.country.value;
    var mobile = document.forms.regForm.mobile.value;
    var email = document.forms.regForm.email.value;
    
    var flag = 0;
    if ((first_name=="") || (middle_name=="") || (last_name == "") ){
        document.getElementById("name_blank").style.display="table-cell";      
        flag = 1;
    }
    else{
        document.getElementById("name_blank").style.display="none";      
    }

    if (birthdate == ""){
        document.getElementById("birthdate_blank").style.display = "table-cell";
        flag = 1;
    }
    else if (birthdate < "19950101" || birthdate > "20041231"){
        document.getElementById("birthdate_blank").style.display = "none";
        document.getElementById("birthdate_limitexceed").style.display = "table-row";
        flag = 1;
    }
    else{
        document.getElementById("birthdate_blank").style.display = "none";
        document.getElementById("birthdate_limitexceed").style.display = "none";
        
    }

    if (address == ""){
        document.getElementById("address_blank").style.display = "table-cell";
        flag = 1;
    }
    else{
        document.getElementById("address_blank").style.display = "none";
    }

    if (pincode == ""){
        document.getElementById("pincode_blank").style.display = "table-cell";
        flag = 1;
    }
    else if(String(pincode).length != 6){
        document.getElementById("pincode_blank").style.display = "none";
        document.getElementById("pincode_length_invalid").style.display = "table-cell";
        flag = 1;
    }
    else {
        document.getElementById("pincode_blank").style.display = "none";
        document.getElementById("pincode_length_invalid").style.display = "none";
    }


    if (country == ""){
        document.getElementById("country_blank").style.display = "table-cell";
        document.getElementById("country_blank").style.textAlign = "right";
        flag = 1;
    }
    else{
        document.getElementById("country_blank").style.display = "none";
    }
    
    
    if (mobile == ""){
        document.getElementById("mobile_blank").style.display = "table-cell";
        flag = 1;
    }
    else if(String(mobile).length != 10){
        document.getElementById("mobile_blank").style.display = "none";
        document.getElementById("mobile_less_digits").style.display = "table-cell";
        flag = 1;
    }
    else {    
        document.getElementById("mobile_blank").style.display = "none";
        document.getElementById("mobile_less_digits").style.display = "none";
    }


    if (email == ""){
        document.getElementById("email_blank").style.display = "table-cell";
        flag = 1;
    }
    else if (email_validation(email) == false){
        document.getElementById("email_blank").style.display = "none";
        document.getElementById("email_invalid").style.display = "table-cell";
        flag = 1;
    }
    else {
        document.getElementById("email_blank").style.display = "none";
        document.getElementById("email_invalid").style.display = "none";        
    }
    
    if (flag == 1){
        return false;
    }
    else{
        document.getElementById("success_message").style.display = "table-row";
        return false;
    }
}



function pincode_validation(t,e){ //ONKEYPRESS event
    var ascii=e.keyCode || e.charCode;
    if (ascii!=8){ //if the key isn't the backspace key (which we should allow)
    if (String(t.value).length < 6){ //if length is less than 6
        if (ascii<48||ascii>57) //if not a number
            return false; //disable key press
    }
    else {
        return false;
    }
    }
}

function mobile_validation(t,e){
    var ascii=e.keyCode || e.charCode;
    if (ascii!=8){ //if the key isn't the backspace key (which we should allow)
    if (String(t.value).length < 10){ //if length is less than 10
        if (ascii<48||ascii>57) //if not a number
            return false; //disable key press
    }
    else {
        return false;
    }
    }
}

function email_validation(email){
    
    if (String(email).indexOf('@') < String(email).indexOf('.')){
        return true;
    }
    else{
        return false;
    }
}

function mouseOver(self){
    
    self.style.boxShadow = "0 0 5px grey";
    
}

function mouseOut(self){
    self.style.boxShadow = "none";
}

function mouseUp(){
    self.style.border="1px solid rgb(240, 152, 52)";
    
}

function mouseDown(self){
    self.style.boxShadow = "0 0 5px grey";
    
}
