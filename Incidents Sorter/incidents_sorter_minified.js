var index,PageCapacity=parseInt(document.querySelectorAll(".vt").length),ShiftNamesTemp=prompt("Shift Members --\x3e (SYNTAX: ShiftOwner name2 name3 ..."),ShiftNames=ShiftNamesTemp;let Owner="";const Pingdom=[],Alerts=[],FalseAlerts=[],III=[],SalesForce=[],substring="Pingdom",substring2="III",substring3="Salesforce",substring4="False Alert";var ShiftPeriod,General="",counter=0,column=22;const today=new Date;var month=today.toLocaleString("default",{month:"long"}),day=today.getDate(),hour=today.getHours();function titleCase(e){for(var n=e.toLowerCase().split(" "),t=0;t<n.length;t++)n[t]=n[t].charAt(0).toUpperCase()+n[t].substring(1);return n.join(" ")}(hour>8&&hour<16||16==hour)&&(ShiftPeriod="Morning Shift"),(hour>16&&hour<24||24==hour)&&(ShiftPeriod="Evening Shift"),(hour>1&&hour<8||8==hour)&&(ShiftPeriod="Night Shift"),General+="NOC & SOC Shift Summary - "+ShiftPeriod+" -  "+day+" / "+month+".\n\n",ShiftNames=titleCase(ShiftNames);for(var i=0;i<ShiftNames.indexOf(" ");i++)Owner+=ShiftNames.charAt(i);let FormatedNames="";for(i=0;i<ShiftNames.length;i++)" "==ShiftNames.charAt(i)?FormatedNames+=" & ":(FormatedNames+=ShiftNames.charAt(i),i==ShiftNames.length-1&&(FormatedNames+="."));let text19,text1="\n\n   Pingdom's:\n",text2="\n\n   Exceptional NOC Alerts:\n\n",text7="\n\n   False alert:\n",text4="\n\n   III:\n",text5="Below Is The Shift Summary:",text6="Major/ Minor event:",text8="SOC-Security Alert:\n",text9="Alerts with no procedure:",text10="Changes handled:\n",text11="Changes Opened:\n",text12="\nSD SF cases:\n",text13="Handled Unassigned HUB Tasks:",text14="Cisco cases:",text15="Cancellations handeled:",text16="Daily report:",text17="Analytics:",text18="Private/Shift Tasks:";switch(Owner){case"Hanna":text19="Hanna Bajjaly";break;case"Shelly":text19="Shelly Meir";break;case"Moghly":text19="Mohammed Abo-Moghly";break;case"Ashmar":text19="Mohammad Ashmar";break;case"Raya":text19="Raya Tharf";break;case"Moshe":text19="Moshe Tendler";break;case"David":text19="David Mantzoor";break;case"Qussay":text19="Qussay Firon";break;case"Ifah":text19="Ifah Argov";break;case"George":text19="George Nazy";break;case"Oryan":text19="Oryan Agam";break;default:text19=Owner}function translate(e){let n;return n=/[A-Z]/.test(e)?"𝗔".codePointAt(0)-"A".codePointAt(0):"𝗮".codePointAt(0)-"a".codePointAt(0),String.fromCodePoint(e.codePointAt(0)+n)}text1=text1.replace(/[A-Za-z]/g,translate),text2=text2.replace(/[A-Za-z]/g,translate),text4=text4.replace(/[A-Za-z]/g,translate),text5=text5.replace(/[A-Za-z]/g,translate),text6=text6.replace(/[A-Za-z]/g,translate),text7=text7.replace(/[A-Za-z]/g,translate),text8=text8.replace(/[A-Za-z]/g,translate),text9=text9.replace(/[A-Za-z]/g,translate),text10=text10.replace(/[A-Za-z]/g,translate),text11=text11.replace(/[A-Za-z]/g,translate),text12=text12.replace(/[A-Za-z]/g,translate),text13=text13.replace(/[A-Za-z]/g,translate),text14=text14.replace(/[A-Za-z]/g,translate),text15=text15.replace(/[A-Za-z]/g,translate),text16=text16.replace(/[A-Za-z]/g,translate),text17=text17.replace(/[A-Za-z]/g,translate),text18=text18.replace(/[A-Za-z]/g,translate),text19=text19.replace(/[A-Za-z]/g,translate);let Beginning=String.raw`
Hello,`+"\n\n"+text5+"\n\nShift members: "+FormatedNames+"\nShift owner: "+Owner+"\nTasks dedicated analyst: N/A \n\n        "+text6+"\n              • None";var CloseCode,OnAssignmentGroup,AssignedTo;General+=Beginning;try{for(i=2;i<PageCapacity;i+=column+1)counter++,index=i,CloseIndex=index+7,ConfigurationIndex=index+1,OnAssignmentGroup=index+18,AssignedTo=index+19,string=document.querySelectorAll(".vt")[index].innerText,CloseCode=document.querySelectorAll(".vt")[CloseIndex].innerText,document.querySelectorAll(".vt")[OnAssignmentGroup].innerText.includes("(empty)")?(OnAssignmentGroup="",AssignedTo=""):(OnAssignmentGroup="   ( Assigned Group : "+document.querySelectorAll(".vt")[OnAssignmentGroup].innerText,AssignedTo="  / Assigned To : "+document.querySelectorAll(".vt")[AssignedTo].innerText+" )"),(string.includes("III")||string.includes("iii"))&&(CloseCode.includes(substring4)&&FalseAlerts.push("\n           • "+document.querySelectorAll(".vt")[index].innerText+"        "+document.querySelectorAll(".vt")[ConfigurationIndex].innerText+"        "+document.querySelectorAll(".vt")[CloseIndex].innerText+OnAssignmentGroup+AssignedTo),III.push("\n               • "+document.querySelectorAll(".vt")[index].innerText+"        "+document.querySelectorAll(".vt")[ConfigurationIndex].innerText+"        "+document.querySelectorAll(".vt")[CloseIndex].innerText+OnAssignmentGroup+AssignedTo)),document.querySelectorAll(".vt")[index+11].innerText.includes(substring3)?(CloseCode.includes(substring4)&&FalseAlerts.push("\n           • "+document.querySelectorAll(".vt")[index].innerText+"        "+document.querySelectorAll(".vt")[ConfigurationIndex].innerText+"        "+document.querySelectorAll(".vt")[CloseIndex].innerText+OnAssignmentGroup),SalesForce.push("\n          • "+document.querySelectorAll(".vt")[index].innerText+"        "+document.querySelectorAll(".vt")[ConfigurationIndex].innerText+"        "+document.querySelectorAll(".vt")[CloseIndex].innerText+OnAssignmentGroup+AssignedTo)):(CloseCode.includes(substring4)&&FalseAlerts.push("\n           • "+document.querySelectorAll(".vt")[index].innerText+"        "+document.querySelectorAll(".vt")[ConfigurationIndex].innerText+"        "+document.querySelectorAll(".vt")[CloseIndex].innerText+OnAssignmentGroup+AssignedTo),Alerts.push("\n           • "+document.querySelectorAll(".vt")[index].innerText+"        "+document.querySelectorAll(".vt")[ConfigurationIndex].innerText+"        "+document.querySelectorAll(".vt")[CloseIndex].innerText+OnAssignmentGroup+AssignedTo),string.includes("Pingdom")&&(CloseCode.includes(substring4)&&FalseAlerts.push("\n           • "+document.querySelectorAll(".vt")[index].innerText+"        "+document.querySelectorAll(".vt")[ConfigurationIndex].innerText+"        "+document.querySelectorAll(".vt")[CloseIndex].innerText+OnAssignmentGroup+AssignedTo),Pingdom.push("\n           • "+document.querySelectorAll(".vt")[index].innerText+"        "+document.querySelectorAll(".vt")[ConfigurationIndex].innerText+"        "+document.querySelectorAll(".vt")[CloseIndex].innerText+OnAssignmentGroup+AssignedTo)))}catch{console.log("%c\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n***  Failed To Copy Result ***","color:Red"),fail}function DeleteDuplicates(e){e.sort();for(var n=null,t=0,r=0;r<e.length;r++)e[r]!=n?(t>0&&(General+=n+" | "+t+"\n"),n=e[r],t=1):t++;t>0&&(General+=n+" | "+t+"\n")}function fallbackcopyToClipboard(e){var n=document.createElement("textarea");n.value=e,n.style.top="0",n.style.left="0",n.style.position="fixed",document.body.appendChild(n),n.focus(),n.select();try{var t=document.execCommand("copy")?"successful":"unsuccessful";console.log("Fallback: Copying text command was "+t)}catch(e){console.error("Fallback: Oops, unable to copy",e)}document.body.removeChild(n)}function copyToClipboard(e){navigator.clipboard?navigator.clipboard.writeText(e).then((function(){console.log("%c\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n **  The Number Of The Copied Alerts Are: "+counter+"/"+parseInt(document.querySelectorAll(".vt").length)/(column+1)+"  **","color:DodgerBlue"),console.log("%c   ***Copying to clipboard was successful!***  ","background: #00aeff ; color: #ffffff")}),(function(e){console.log("%c*** Error , Please Refresh The Page And Try Again ***","background: #ff0000 ; color: #ffffff")})):fallbackcopyToClipboard(e)}General+=text1,DeleteDuplicates(Pingdom),0==Pingdom.length&&(General+="\n           • None"),General+=text2,DeleteDuplicates(Alerts),0==Alerts.length&&(General+="\n           • None"),General+=text7,DeleteDuplicates(FalseAlerts),0==FalseAlerts.length&&(General+="\n           • None"),General+=text4,DeleteDuplicates(III),0==III.length&&(General+="\n           • None"),General+="\n\n           • Changes/Activities:\n\n                      • None\n\n\n            • Requests:\n\n                      • None\n\n\n            • Open gaps:\n\n                      • None\n\n\n"+text8+"\n            • On-going prevention -None\n\n            • Alerts Detection -notification and analysis\n\n               • Mitigation - None \n\n               • Recovery - None\n\n\n"+text9+"\n\n                      • None\n\n"+text10+"\n                     • None\n\n"+text11+"\n                     • None\n\n\n",General+=text12,DeleteDuplicates(SalesForce),0==SalesForce.length&&(General+="\n                     • None"),General+="",General+="\n\n"+text13+"\n\n                     • None\n\n"+text14+"\n\n                     • None\n\n"+text15+"\n\n                     • None\n\n\n"+text16+"N/A\n"+text17+"N/A\n"+text18+"   \n\n                     • None\n\nBest Regards,\n"+text19+", 24x7 HUB.",console.log(General),copyToClipboard(General);