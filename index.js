var CC, YY, MM, DD, d, dayValue;
var dayNames = ["Sunday","Monday","Tuesday","Wednesday", "Thursday", "Friday","Saturday" ];
var maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw", "Kofi","Kwame"];
var femaleNames = ["Akosua","Adwoa","Abenaa","Akua"," Yaa","Afua","Ama"];

function validateForm() {
    var year = document.forms["myForm"]["year"].value;
    if (year == "" || year == null) {
      alert("Year must be filled out");
      return false;
    }
    var month = document.forms["myForm"]["month"].value;
    if (month == "" || month == null) {
      alert("Month must be filled out");
      return false;
    }
    var date = document.forms["myForm"]["date"].value;
    if (date == "" || date == null) {
      alert("Date must be filled out");
      return false;
    }
    var yourGender = document.forms["myForm"]["yourGender"].value;
    if (yourGender == "" || yourGender == null) {
      alert("Select your gender");
      return false;
    }
    else{
        return true ;    
  }
}

function calculateDayValue(){
    year = document.getElementById("year").value;
    CC = parseInt(year.substring(0,2));
    YY = parseInt(year.substring(2,4));
    MM = parseInt(document.getElementById("month").value);
    DD = parseInt(document.getElementById("date").value);
    d = ( ( (CC/4) -2*CC-1) + ( (5*YY/4) ) + ((26*(MM+1)/10) ) + DD)%7;
    console.log(d);
    return (Math.floor(d));
  }

  function getGender(){
    var genders = document.getElementsByName("yourGender");
    if(genders[0].checked == true){
      var gender = "male";
    }
    else if(genders[1].checked == true){
      var gender = "female";
    }
    else{
      return false;
    }
switch(gender){
  case "female":
    if (dayValue == 1){
      alert("Your akan name is " +femaleNames[0]+"!");
    }
    else if(dayValue == 2){
      alert("Your akan name is " +femaleNames[1]+"!");
    }
    else if(dayValue == 3){
      alert("Your akan name is " +femaleNames[2]+"!");
    }
    else if(dayValue == 4){
      alert("Your akan name is " +femaleNames[3]+"!");
    }
    else if(dayValue == 5){
      alert("Your akan name is " +femaleNames[4]+"!");
    }
    else if(dayValue == 6){
      alert("Your akan name is " +femaleNames[5]+"!");
    }
    else if(dayValue == -0){
      alert("Your akan name is " +femaleNames[6]+"!");
    }
  break;
  case "male":
    if (dayValue == 1){
      alert("Your akan name is  " +maleNames[0]+"!");
    }
    else if(dayValue == 2){
      alert("Your akan name is " +maleNames[1]+"!");
    }
    else if(dayValue == 3){
      alert("Your akan name is " +maleNames[2]+"!");
    }
    else if(dayValue == 4){
      alert("Your akan name is " +maleNames[3]+"!");
    }
    else if(dayValue == 5){
      alert("Your akan name is " +maleNames[4]+"!");
    }
    else if(dayValue == 6){
      alert("Your akan name is " + maleNames[5]+"!");
    }else if(dayValue == -0){
      alert("Your akan name is " +maleNames[6]+"!");
    }
  break
  default:
        
}

function getName(){
dayValue = calculateDayValue();
getGender();
}
  }