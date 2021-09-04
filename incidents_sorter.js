//Incidents Grabbing Script For Shift Summary**

//------------------------------VARIABLES--------------------------------
var index;//index of the incidents title
var PageCapacity = parseInt(document.querySelectorAll(".vt").length) ;  //Page Incidents Total number
var ShiftNamesTemp = prompt("Shift Members --> (SYNTAX: ShiftOwner name2 name3 ..."); // array for the names of the shift owner and the others.(*The first name entered is considered as the shift owner)
var ShiftNames= ShiftNamesTemp;// array for the names of the shift owner and the others.(*The first name entered is considered as the shift owner)
let Owner = "";//the name of the shift owner.
const Pingdom = [];//an array for Pingdome incidents
const Alerts = [];//an array for Alerts incidents
const FalseAlerts =[];//an array that contains all the false alerts.
const III = [];//an array for III incidents
const SalesForce = [];//an array for salesforce incidents
const substring = "Pingdom";//substring that we wanna search for in each incident
const substring2 = "III"; //substring that we wanna search for in each incident
const substring3 = "Salesforce";//substring that we wanna search for in each incident , salesforce incidents.
const substring4 = "False Alert";//substring that we wanna search for in each incident to check whether it's a false alert.
var General = ""; // a string that contains all the incidents and everything that will be copied to the clipboard.
var counter = 0;//counter for counting the alerts
var column = 22; // the number of the page columns including Opened
var ShiftPeriod;

//------------------------------END --> VARIABLES-------------------------
//------------------Title----------------

const today = new Date()// date
var month =today.toLocaleString('default', { month: 'long' });// get the month 
var day = today.getDate();//get the  Day
var hour = today.getHours();//time 

if(hour > 18 && hour > 17){
  console.log("true");
}

if ((( hour > 8 ) &&  (hour < 16)) || (hour == 16)){
ShiftPeriod ="Morning Shift";

}

if ((hour > 16 ) && (hour <= 24 )){
  ShiftPeriod = "Evening Shift";

}
   

if ((hour > 24 ) &&  (hour <= 8)) {
    ShiftPeriod  = "Night Shift";
}

    
General+=`NOC & SOC Shift Summary - `+ ShiftPeriod+ " -  "+day+" /"+ month+".\n\n";


//-----------------------------------------

//*  Analysing The Owner & Reformating The Names**

function titleCase(str) {//this method is for the capitalization of every first letter in each word
   var splitStr = str.toLowerCase().split(' ');
   for (var i = 0; i < splitStr.length; i++) {
    
       splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
   }
  
   return splitStr.join(' '); 
}
ShiftNames  = titleCase(ShiftNames);//saves the capitalization in within the shift names

for (var i = 0; i < ShiftNames.indexOf(" "); i++) {//analyzing the owner

  Owner += ShiftNames.charAt(i);

}

let FormatedNames= "";//The names become in the format of name & name & name.
for (var i = 0; i < ShiftNames.length; i++) {
  
  if(ShiftNames.charAt(i) == " "){//if a space was detected
    FormatedNames+=" & ";

  }else{
FormatedNames+= ShiftNames.charAt(i);
if(i == ShiftNames.length-1){
  FormatedNames+=".";

    
}
  }

}
//----------------- TEXTS ---------------------------
let text1 = "\n\n   Pingdom's:\n";
let text2 = "\n\n   Exceptional NOC Alerts:\n\n";
let text7 = "\n\n   False alert:\n";
let text4 = "\n\n   III:\n";
let text5 = "Below Is The Shift Summary:";
let text6 = "Major/ Minor event:";
let text8 = "SOC-Security Alert:\n";
let text9 = "Alerts with no procedure:";
let text10 = "Changes handled:\n";
let text11="Changes Opened:\n";
let text12 ="SD SF cases:\n";
let text13="Handled Unassigned HUB Tasks:";
let text14="Cisco cases:";
let text15="Cancellations handeled:";
let text16= "Daily report:";
let text17= "Analytics:";
let text18="Private/Shift Tasks:";
let text19;

//--------last name guess-----
switch(Owner){

    case "Hanna":
        text19 = "Hanna Bajjaly";
        break;
    case "Shelly":
        text19 = "Shelly Meir";
        break;
    case "Moghly":
        text19 ="Mohammed Abo-Moghly";
        break;
    case "Ashmar":
        text19 ="Mohammad Ashmar";
        break;
    case "Raya":
        text19 ="Raya Tharf";
        break;
    case "Moshe":
        text19 = "Moshe Tendler";
        break;
    case "David":
        text19 = "David Mantzoor";
        break;
    case "Qussay":
        text19 = "Qussay Firon";
        break;
    case "Ifah":
        text19 ="Ifah Argov";
        break;
    case "George":
        text19= "George Nazy";
        break;
    case "Oryan":
        text19="Oryan Agam";
        break;
    default:
        text19 = Owner;    
}

//-----------------------------
function translate(char) {//function for translating any string into a unicode Bold text.
  let diff;
  if (/[A-Z]/.test(char)) {
    diff = "𝗔".codePointAt(0) - "A".codePointAt(0);
  }
  else {
    diff = "𝗮".codePointAt(0) - "a".codePointAt(0);
  }
  return String.fromCodePoint(char.codePointAt(0) + diff);
}
text1 = text1.replace(/[A-Za-z]/g, translate);
text2 = text2.replace(/[A-Za-z]/g, translate);
text4 = text4.replace(/[A-Za-z]/g, translate);
text5 = text5.replace(/[A-Za-z]/g, translate);
text6 = text6.replace(/[A-Za-z]/g, translate);
text7 = text7.replace(/[A-Za-z]/g, translate);
text8 = text8.replace(/[A-Za-z]/g, translate);
text9 = text9.replace(/[A-Za-z]/g, translate);
text10 = text10.replace(/[A-Za-z]/g, translate);
text11 = text11.replace(/[A-Za-z]/g, translate);
text12 = text12.replace(/[A-Za-z]/g, translate);
text13 = text13.replace(/[A-Za-z]/g, translate);
text14 = text14.replace(/[A-Za-z]/g, translate);
text15 = text15.replace(/[A-Za-z]/g, translate);
text16 = text16.replace(/[A-Za-z]/g, translate);
text17 = text17.replace(/[A-Za-z]/g, translate);
text18 = text18.replace(/[A-Za-z]/g, translate);
text19 = text19.replace(/[A-Za-z]/g, translate);

//Adding Titles
Pingdom.push(text1);
Alerts.push(text2);
III.push(text4+"\n          • Alerts:\n");
FalseAlerts.push(text7);
//---------------


//------------------------------------------------

let Beginning = String.raw`
Hello,`+"\n\n"+

text5 +

`\n\nShift members: ` + FormatedNames + `
Shift owner: `+ Owner + 

`
Tasks dedicated analyst: N/A \n\n`


 +"        "+text6
          +
    
          `
              • None`;

General += Beginning;

//------------------------------------------------


//-----------------looping over the incidents elements-------------------------------------------------
var CloseCode;
try {
  for (var i = 2; i < PageCapacity; i += (column+1)) {
    counter++;
//editable , depends on the user Filter
    index =  i; //index of the incidents title 
    CloseIndex =index + 7;//the index of the closeCode
    ConfigurationIndex = index + 1; // the index of the configuration item .
//-------------------------------------------------------------------

    string = document.querySelectorAll(".vt")[index].innerText;//string that contains the specific incident title.
    CloseCode = document.querySelectorAll(".vt")[CloseIndex].innerText; // it gets the closeCode information about each incident.

    if (string.includes(substring2) || string.includes("iii")) {// iii incidents
      if(CloseCode.includes(substring4)){
        FalseAlerts.push("\n           • " + document.querySelectorAll(".vt")[index].innerText + "        " + document.querySelectorAll(".vt")[ConfigurationIndex ].innerText + "        " + document.querySelectorAll(".vt")[CloseIndex].innerText);
      }
      III.push("\n               • " + document.querySelectorAll(".vt")[index].innerText + "        " + document.querySelectorAll(".vt")[ConfigurationIndex ].innerText + "        " + document.querySelectorAll(".vt")[CloseIndex].innerText);
    }
    if ((document.querySelectorAll(".vt")[index - 2].innerText).includes(substring3)) {//salesforce incidents
      if(CloseCode.includes(substring4)){
        FalseAlerts.push("\n           • " + document.querySelectorAll(".vt")[index].innerText + "        " + document.querySelectorAll(".vt")[ConfigurationIndex ].innerText + "        " + document.querySelectorAll(".vt")[CloseIndex].innerText);
      }

      SalesForce.push("\n          • " + document.querySelectorAll(".vt")[index].innerText + "        " + document.querySelectorAll(".vt")[ConfigurationIndex ].innerText + "        " + document.querySelectorAll(".vt")[CloseIndex].innerText);

    } else {//other alerts
      if(CloseCode.includes(substring4)){
        FalseAlerts.push("\n           • " + document.querySelectorAll(".vt")[index].innerText + "        " + document.querySelectorAll(".vt")[ConfigurationIndex ].innerText + "        " + document.querySelectorAll(".vt")[CloseIndex].innerText);
      }
      Alerts.push("\n           • " + document.querySelectorAll(".vt")[index].innerText + "        " + document.querySelectorAll(".vt")[ConfigurationIndex ].innerText + "        " + document.querySelectorAll(".vt")[CloseIndex].innerText);

      if (string.includes(substring)) {//if a Pingdom was found in within the incident title
        if(CloseCode.includes(substring4)){
          FalseAlerts.push("\n           • " + document.querySelectorAll(".vt")[index].innerText + "        " + document.querySelectorAll(".vt")[ConfigurationIndex ].innerText + "        " + document.querySelectorAll(".vt")[CloseIndex].innerText);
        }
        Pingdom.push("\n           • " + document.querySelectorAll(".vt")[index].innerText + "        " + document.querySelectorAll(".vt")[ConfigurationIndex ].innerText + "        " + document.querySelectorAll(".vt")[CloseIndex].innerText);//add the pingdom title and other elements to the array

      }
    }
  }
}
catch {
  console.log("%c" + "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n******  Failed To Copy Result ******", "color:" + "Red");
  fail;
}
//-----------------------------------------------------
function DeleteDuplicates(a) {//this method is for deleting duplicates!
  return a.sort().filter(function (item, pos, ary) {
    return !pos || item != ary[pos - 1];
  });
}

//---------------LOOP OVER INCIDENTS-------------------

for (var i = 0; i < DeleteDuplicates(Pingdom).length; i++) {//pingdom incidents

  General += DeleteDuplicates(Pingdom)[i];
  if(Pingdom.length==1){
    General += "\n           • None";
  }

}
//-----------------------

for (var i = 0; i < DeleteDuplicates(Alerts).length; i++) {//alerts incidents

  General += DeleteDuplicates(Alerts)[i];
  if(Alerts.length==1){//there are no incidents
    General += "\n           • None";
  }


}
//-----------------------
for (var i = 0; i < DeleteDuplicates(FalseAlerts).length; i++) {//alerts incidents

  General += DeleteDuplicates(FalseAlerts)[i];
  if(FalseAlerts.length==1){//there are no incidents
    General += "\n           • None";
  }

}
//------------------------
for (var i = 0; i < DeleteDuplicates(III).length; i++) {//III incidents

  General += DeleteDuplicates(III)[i];
  if(III.length==1){//there are no incidents
    General += "\n           • None";
  }

}
//-----Adding The rest of the III section ---------
General +=`\n\n           • Changes/Activities:

                      • None


            • Requests:

                      • None


            • Open gaps:

                      • None\n\n
`+text8+
            `\n            • On-going prevention -None

            • Alerts Detection -notification and analysis

               • Mitigation - None 

               • Recovery - None


`+text9+"\n"+
`
                      • None

`+
text10+
`
                     • None

`
+        
text11+
`
                     • None


`
+text12;

//------------------------
for (var i = 0; i < SalesForce.length; i++) {//SalesForce incidents

  General += DeleteDuplicates(SalesForce)[i];

  if(SalesForce.length=0){//there are no incidents
    General += "\n           • None";

  }

}
General += ""
//----------------------------------------------------------
General+="\n\n"+text13+
`

                     • None

`+text14+`

                     • None

`
+text15+
`

                     • None


`+
text16+
`N/A
`+
text17+
`N/A
`+text18+
`   

                     • None

Best Regards,
`+text19+`, 24x7 HUB.`;

//-------------------------------------------------------------

function fallbackcopyToClipboard(text) {//this method is for automatically copying the result to a clipboard.
    var textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";
  
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
  
    try {
      var successful = document.execCommand('copy');
      var msg = successful ? 'successful' : 'unsuccessful';
      console.log('Fallback: Copying text command was ' + msg);
    } catch (err) {
      console.error('Fallback: Oops, unable to copy', err);
    }
  
    document.body.removeChild(textArea);
  }
  function copyToClipboard(text) {
    if (!navigator.clipboard) {
      fallbackcopyToClipboard(text);
      return;
    }
    navigator.clipboard.writeText(text).then(function() {
        console.log( "Copying to clipboard was successful!");
    }, function(err) {
      console.error('Async: Could not copy text: ', err);
    });
  }

//---------------------------------------------------------------

console.log("%c" + "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n ****  The Number Of The Copied Alerts Are: " + counter + "/" + (parseInt(document.querySelectorAll(".vt").length) / (column +1 )) + "  ******", "color:" + "DodgerBlue");

console.log("%c" + "******Copying to clipboard was successful!*******" , "color:" + "Red");

copyToClipboard(General);//copy to clipboard the following result.

//------------------------------------------------------END-------------------------------------------------------------------
