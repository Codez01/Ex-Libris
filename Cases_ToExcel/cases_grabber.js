//**********************variables**************************** 
var string="";
var string2="";
var connect="";
var counter = 0;
var NA =[];
var NA_index= 0;
var NA_counter= 0;
var EU =[];
var EU_index =0;
var EU_counter =0;
var APAC=[];
var APAC_index=0;
var APAC_counter=0;
var ROW = [];
var ROW_index=0;
var ROW_counter=0;
var GLOBAL = [];
var GLOBAL_index = 0;
var GLOBAL_counter = 0;

//***************************************************** 

for ( var i = 0 ; i < document.querySelectorAll(".even").length; i++){
 
string+= document.querySelectorAll(".even")[i].innerText +"\n"

}

function SplitByString(source, splitBy) {
  var splitter = splitBy.split('');
  splitter.push([source]); //Push initial value

  return splitter.reduceRight(function(accumulator, curValue) {
    var k = [];
    accumulator.forEach(v => k = [...k, ...v.split(curValue)]);
    return k;
  });
}
//**********************variables**************************** 
var splitBy = "\n\t";
var Array1 = SplitByString(string, splitBy);
var Array2 = [];
var Array3 = [];
var c=0;
var i =0;
var n =0;
//*******************skipping unneeded fields******************************* 
while(1){
if(i== Array1.length-1){
  break;
}
if(c==4){
i+=3
c+=3
}
if(c==8){
i+=1
c+=1

}

else{

Array2[n] =Array1[i];
n++;
c++;
i++;
if(c==12){
  c=0
}

}

}
//*******************Looping through regions and adding content to result************************* 

for(var i=0;i<Array2.length;i++){

if(Array2[i].includes("North America")){
  var temp2 =i;

  for(var temp =temp2-7 ; temp <= temp2; temp++ ){

NA[NA_index] = Array2[temp];
NA_index++;


  }

  NA_counter++;
}


if(Array2[i].includes("Europe")){
  var temp2 =i;

  for(var temp =temp2-7 ; temp <= temp2; temp++ ){

EU[EU_index] = Array2[temp];
EU_index++;


  }
  EU_counter++;
}



if(Array2[i].includes("APAC")){
  var temp2 =i;

  for(var temp =temp2-7 ; temp <= temp2; temp++ ){

APAC[APAC_index] = Array2[temp];
APAC_index++;


  }
  APAC_counter++;
}




if(Array2[i].includes("ROW") ||Array2[i].includes("Row")||Array2[i].includes("row") ){
  var temp2 =i;

  for(var temp =temp2-7 ; temp <= temp2; temp++ ){

ROW[ROW_index] = Array2[temp];
ROW_index++;


  }
  ROW_counter++;
}


if(Array2[i].includes("Global") || Array2[i].includes("GLOBAL")){
  var temp2 =i;

  for(var temp =temp2-7 ; temp <= temp2; temp++ ){

GLOBAL[GLOBAL_index] = Array2[temp];
GLOBAL_index++;
}



GLOBAL_counter++;
}


}
//********************results************************* 

var counter_String = String(NA_counter) + "+"+ String(EU_counter)+"+"+String(APAC_counter)+"+"+String(ROW_counter)+"+"+String(GLOBAL_counter);
var result;

result = NA.join("\t") + "\t" + EU.join("\t")  + "\t" + APAC.join("\t") + "\t" + ROW.join("\t") + "\t" + GLOBAL.join("\t") + "=" +counter_String ;


console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
console.log(result);// prints the result that we wanna copy

//*************************************************************** 
  console.log('\n\n%c COPY THE RESULT, by clicking three times on the result + (CRT + C)  !!!', 'background: #990c97; color: #ffffff');

//**************************END END END END END END END END ************************** 
