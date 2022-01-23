//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ CHANGE IFRAME WINDOW $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
document.getElementsByName("gsft_main")[0].contentWindow.run = function(fn) {
    fn.call(this, this.window);
};
document.getElementsByName("gsft_main")[0].contentWindow.run(function(window) {


    //--------------------------------------------------------------------------    VARIABLES   -----------------------------------------------------------

    var ShiftNamesTemp = prompt("Shift Members --> (SYNTAX: ShiftOwner name2 name3 ..."); // array for the names of the shift owner and the others.(*The first name entered is considered as the shift owner)
    var ShiftNames = ShiftNamesTemp; // array for the names of the shift owner and the others.(*The first name entered is considered as the shift owner)
    let Owner = ""; //the name of the shift owner.
    let text1 = "Shift owner: ";
    let text2 = "Shift members: ";
    let text3 = "Events/Exceptional Issues:";
    let text4 = "Handled Incidents/Passed to other Teams:";
    let text5 = "Changes Handled:";
    let text6 = "iQuest Cases:";
    let text7 = "On-Dashboard Non-Resolved Incidents:";
    let text8 = "Handover tasks in Progress:";
    let text9 = "Private tasks: ";

    var ChooseShift = prompt("Enter m for Morning , e for Evening , n for night shifts");

    switch (ChooseShift) {

        case 'm':
            // var PT = document.querySelectorAll(".list_div_cell .list2_body")[0].innerText // Choose table.
            var Exceptional = window.document.querySelectorAll(".list_div_cell .list2_body")[0].innerText // Choose table.
            var INC = window.document.querySelectorAll(".list_div_cell .list2_body")[3].innerText // Choose table.
            var CH = window.document.querySelectorAll(".list_div_cell .list2_body")[6].innerText // Choose table.
            var CASES = window.document.querySelectorAll(".list_div_cell .list2_body")[9].innerText // Choose table.
            var TASKS = window.document.querySelectorAll(".list_div_cell .list2_body")[12].innerText // Choose table.
            var NONE_RESOLVED = window.document.querySelectorAll(".list_div_cell .list2_body")[15].innerText // Choose table.
            // var SCTASK  = document.querySelectorAll(".list_div_cell .list2_body")[2].innerText // Choose table.

            //tables should be added here....
            break;
        case 'e':
            // var PT = document.querySelectorAll(".list_div_cell .list2_body")[0].innerText // Choose table.
            var Exceptional = window.document.querySelectorAll(".list_div_cell .list2_body")[1].innerText // Choose table.
            var INC = window.document.querySelectorAll(".list_div_cell .list2_body")[4].innerText // Choose table.
            var CH = window.document.querySelectorAll(".list_div_cell .list2_body")[7].innerText // Choose table.
            var CASES = window.document.querySelectorAll(".list_div_cell .list2_body")[10].innerText // Choose table.
            var TASKS = window.document.querySelectorAll(".list_div_cell .list2_body")[13].innerText // Choose table.
            var NONE_RESOLVED = window.document.querySelectorAll(".list_div_cell .list2_body")[15].innerText // Choose table.

            // var SCTASK  = document.querySelectorAll(".list_div_cell .list2_body")[2].innerText // Choose table.

            //tables should be added here....
            break;

        case 'n':
            // var PT = document.querySelectorAll(".list_div_cell .list2_body")[0].innerText // Choose table.
            var Exceptional = window.document.querySelectorAll(".list_div_cell .list2_body")[2].innerText // Choose table.
            var INC = window.document.querySelectorAll(".list_div_cell .list2_body")[5].innerText // Choose table.
            var CH = window.document.querySelectorAll(".list_div_cell .list2_body")[8].innerText // Choose table.
            var CASES = window.document.querySelectorAll(".list_div_cell .list2_body")[11].innerText // Choose table.
            var TASKS = window.document.querySelectorAll(".list_div_cell .list2_body")[14].innerText // Choose table.
            var NONE_RESOLVED = window.document.querySelectorAll(".list_div_cell .list2_body")[15].innerText // Choose table.

            // var SCTASK  = document.querySelectorAll(".list_div_cell .list2_body")[2].innerText // Choose table.

            //tables should be added here....
            break;

        default:

            alert("Incorrect Input , Try Again With : m , e or n .");

    }




    //%%%%%%%%%%%%%%%%%%%%%%    FUNCTIONS   %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    //%%%%%%%%%%%%%%%%%%%%%%    FUNCTIONS   %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

    function SplitByString(source, splitBy) { //splits any string  to an array 
        var splitter = splitBy.split('');
        splitter.push([source]); //Push initial value

        return splitter.reduceRight(function(accumulator, curValue) {
            var k = [];
            accumulator.forEach(v => k = [...k, ...v.split(curValue)]);
            return k;
        });
    }

    //--------------------------------------------------------------------
    function StringCleaner(table, type) {
        temp = []; //array that will contain the array without the empty values 

        var splitBy = "\n\t\n\t\t"; // the array will be splitted by this value 

        var Array = SplitByString(table, splitBy); //split array

        for (let i of Array)
            i && temp.push(i); // copy each non-empty value to the 'temp' array

        Array = temp; // array that contains each element from the table 
        Array = Array.filter(e => e !== '\n'); // removes \n from major incidents



        let FinalResult = ""; //string that contains the change , PT etc..

        for (var i = 0; i < Array.length; i++) { //loop


            if (Array[i].includes(type) && i != 0) { //if there's an INC 


                FinalResult += "\n"
                FinalResult += Array[i] + "\t";

            } else {

                FinalResult += Array[i] + "\t";

            }

        }
        return FinalResult;
    }

    function IncBeautifier(table, type) { //function for beautifying an incident details like - or . etc...

        var FinalResult2 = "";
        temp = []; //array that will contain the array without the empty values 

        var splitBy = "\n\t\n\t\t"; // the array will be splitted by this value 

        var Array = SplitByString(table, splitBy); //split array
        splitBy = "\t"
        Array = SplitByString(table, splitBy); //split array
        var tempCounter = 0;
        for (let i of Array)
            i && temp.push(i); // copy each non-empty value to the 'temp' array

        Array = temp; // array that contains each element from the table 

        Array = Array.filter(e => e !== '\n'); // removes \n from major incidents


        for (var i = 0; i < Array.length; i++) { //loop over array of incidents
            index = Array[i];
            index = index.replace('\n', ""); //replace new line with nothing (since major incidents come with ectra '\n')




            if (index.includes(type) && index != Array[0]) { //if there is a new  incident
                tempCounter = 0;


                FinalResult2 += "\n• " + index + ": ";

            } else {
                if (index.includes(type) && index == Array[0]) { //the first incident 

                    if (tempCounter == 0) {

                        FinalResult2 += "• " + index + ": ";
                    }



                } else {

                    if (tempCounter == 0) {
                        FinalResult2 += index + " - ";
                        tempCounter++;
                    } else if (tempCounter == 2) {

                        FinalResult2 += " - " + index + " - ";
                        tempCounter++;

                    } else if (tempCounter == 3) {

                        if (i + 1 < Array.length) {

                            if (Array[i + 1].includes(type) == false) {
                                FinalResult2 += index + " - ";
                                tempCounter++;


                            } else {
                                if (index.includes("HUB")) {
                                    FinalResult2 = FinalResult2.slice(0, -3) + "."
                                    tempCounter++;


                                } else {
                                    FinalResult2 += "Passed to: " + index + ".";
                                    tempCounter++;
                                }
                            }



                        } else {


                            if (index.includes("HUB")) { //if HUB is included in the assignment group , delete it.
                                FinalResult2 = FinalResult2.slice(0, -3) + "."
                                tempCounter++;


                            } else {
                                FinalResult2 += "Passed to: " + index + ".";
                                tempCounter++;
                            }


                        }



                    } else if (tempCounter == 4) {

                        if (index.includes("HUB")) {
                            FinalResult2 = FinalResult2.slice(0, -3) + "."
                            tempCounter++;


                        } else {
                            FinalResult2 += "Passed to: " + index + ".";
                            tempCounter++;
                        }

                    } else if (tempCounter == 5) {

                        FinalResult2 += index + ".";
                        tempCounter++;

                    } else {

                        FinalResult2 += index + " ";
                        tempCounter++;
                    }
                }


            }
        }

        return FinalResult2;
    }


    //----------------------------------------------------------

    function CasesBeautifier(table, type) { //function for beautifying an incident details like - or . etc...

        var FinalResult3 = "";
        temp = []; //array that will contain the array without the empty values 

        var splitBy = "\n\t\n\t\t"; // the array will be splitted by this value 

        var Array = SplitByString(table, splitBy); //split array
        splitBy = "\t"
        Array = SplitByString(table, splitBy); //split array
        var tempCounter = 0;
        for (let i of Array)
            i && temp.push(i); // copy each non-empty value to the 'temp' array

        Array = temp; // array that contains each element from the table 

        Array = Array.filter(e => e !== '\n'); // removes \n from major incidents


        for (var i = 0; i < Array.length; i++) { //loop over array of incidents
            index = Array[i];
            index = index.replace('\n', ""); //replace new line with nothing (since major incidents come with ectra '\n')




            if (index.includes(type) && index != Array[0]) { //if there is a new  incident
                tempCounter = 0;


                FinalResult3 += "\n• " + index + " - ";

            } else {
                if (index.includes(type) && index == Array[0]) { //the first incident 

                    if (tempCounter == 0) {

                        FinalResult3 += "• " + index + " - ";
                    }



                } else {



                    if (tempCounter == 0) {
                        FinalResult3 += index + " - ";
                        tempCounter++;


                    } else if (tempCounter == 1) {

                        FinalResult3 += index + " - ";
                        tempCounter++;
                    } else if (tempCounter == 2) {


                        FinalResult3 += "Passed to: " + index + ".";
                        tempCounter++;

                    } else {




                        FinalResult3 += index + " ";
                        tempCounter++;
                    }
                }


            }
        }

        return FinalResult3;
    }



    function NonResolved_Beautifier(table, type) { //function for beautifying an incident details like - or . etc...

        var FinalResult2 = "";
        temp = []; //array that will contain the array without the empty values 

        var splitBy = "\n\t\n\t\t"; // the array will be splitted by this value 

        var Array = SplitByString(table, splitBy); //split array
        splitBy = "\t"
        Array = SplitByString(table, splitBy); //split array
        var tempCounter = 0;
        for (let i of Array)
            i && temp.push(i); // copy each non-empty value to the 'temp' array

        Array = temp; // array that contains each element from the table 


        splitBy = "\n"
        Array = SplitByString(table, splitBy); //split array


        Array = Array.filter(e => e.replace(/(\r\n|\n|\r)/gm, "") !== '')
        splitBy = "\t"
        Array = SplitByString(table, splitBy); //split array
        splitBy = "\t\t"
        Array = SplitByString(table, splitBy); //split array
        Array = Array.filter(e => e.replace(/(\r\n|\n|\r)/gm, "") !== '')

        for (var i = 0; i < Array.length; i++) { //loop over array of incidents
            index = Array[i];
            index = index.replace('\n', ""); //replace new line with nothing (since major incidents or dates come with ectra '\n')
            Array[i] = index;
        }




        for (var i = 0; i < Array.length; i++) { //loop over array of incidents
            index = Array[i];
            index = index.replace('\n', ""); //replace new line with nothing (since major incidents come with ectra '\n')




            if (index.includes(type) && index != Array[0]) { //if there is a new  incident
                tempCounter = 0;


                FinalResult2 += "\n• " + index + ": ";

            } else {
                if (index.includes(type) && index == Array[0]) { //the first incident 

                    if (tempCounter == 0) {

                        FinalResult2 += "• " + index + ": ";
                    }



                } else {

                    if (tempCounter == 0) {
                        FinalResult2 += index;
                        tempCounter++;

                    } else if (tempCounter == 1) {


                        if (i + 1 < Array.length) {

                            if (Array[i + 1].includes(type) == false) {
                                FinalResult2 += " - " + index + " - ";
                                tempCounter++;

                            } else {
                                FinalResult2 += " - " + index + ".";
                                tempCounter++;

                            }



                        } else {


                            FinalResult2 += " - " + index + ".";
                            tempCounter++;


                        }

                    } else if (tempCounter == 2) {

                        if (i + 1 < Array.length) {

                            if (Array[i + 1].includes(type) == false) {
                                FinalResult2 += index + " - ";
                                tempCounter++;


                            } else {
                                FinalResult2 += index + ".";
                                tempCounter++;

                            }



                        } else {


                            FinalResult2 += index + ".";
                            tempCounter++;


                        }



                    } else if (tempCounter == 3) {
                        FinalResult2 += index + ".";
                        tempCounter++;


                    } else if (tempCounter == 4) {

                        FinalResult2 += index + ".";
                        tempCounter++;

                    } else {

                        FinalResult2 += index;
                        tempCounter++;
                    }
                }


            }
        }

        return FinalResult2;
    }


    function PT_Beautifier(table, type) { //function for beautifying an incident details like - or . etc...


        var FinalResult2 = "";
        temp = []; //array that will contain the array without the empty values 

        var splitBy = "\n\t\n\t\t"; // the array will be splitted by this value 

        var Array = SplitByString(table, splitBy); //split array
        splitBy = "\t"
        Array = SplitByString(table, splitBy); //split array
        var tempCounter = 0;
        for (let i of Array)
            i && temp.push(i); // copy each non-empty value to the 'temp' array

        Array = temp; // array that contains each element from the table 


        splitBy = "\n"
        Array = SplitByString(table, splitBy); //split array


        Array = Array.filter(e => e.replace(/(\r\n|\n|\r)/gm, "") !== '')
        splitBy = "\t"
        Array = SplitByString(table, splitBy); //split array
        splitBy = "\t\t"
        Array = SplitByString(table, splitBy); //split array
        Array = Array.filter(e => e.replace(/(\r\n|\n|\r)/gm, "") !== '')

        for (var i = 0; i < Array.length; i++) { //loop over array of incidents
            index = Array[i];
            index = index.replace('\n', ""); //replace new line with nothing (since major incidents or dates come with ectra '\n')
            Array[i] = index;
        }




        for (var i = 0; i < Array.length; i++) { //loop over array of incidents
            index = Array[i];
            index = index.replace('\n', ""); //replace new line with nothing (since major incidents come with ectra '\n')




            if (index.includes(type) && index != Array[0]) { //if there is a new  incident
                tempCounter = 0;


                FinalResult2 += "\n• " + index + " Opened on ";

            } else {
                if (index.includes(type) && index == Array[0]) { //the first incident 

                    if (tempCounter == 0) {

                        FinalResult2 += "• " + index + " Opened on ";
                    }



                } else {

                    if (tempCounter == 0) {
                        FinalResult2 += index;
                        tempCounter++;

                    } else if (tempCounter == 1) {



                        FinalResult2 += " By " + index + ": ";
                        tempCounter++;


                    } else if (tempCounter == 2) {


                        FinalResult2 += index + ". ";
                        tempCounter++;




                    } else {

                        FinalResult2 += index;
                        tempCounter++;
                    }
                }


            }
        }

        return FinalResult2;
    }



    //*  Analysing The Owner & Reformating The Names**

    function titleCase(str) { //this method is for the capitalization of every first letter in each word
        var splitStr = str.toLowerCase().split(' ');
        for (var i = 0; i < splitStr.length; i++) {

            splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
        }

        return splitStr.join(' ');
    }
    ShiftNames = titleCase(ShiftNames); //saves the capitalization in within the shift names

    for (var i = 0; i < ShiftNames.indexOf(" "); i++) { //analyzing the owner

        Owner += ShiftNames.charAt(i);

    }

    let FormatedNames = ""; //The names become in the format of name & name & name.
    for (var i = 0; i < ShiftNames.length; i++) {

        if (ShiftNames.charAt(i) == " ") { //if a space was detected
            FormatedNames += " & ";

        } else {
            FormatedNames += ShiftNames.charAt(i);
            if (i == ShiftNames.length - 1) {
                FormatedNames += ".";


            }
        }

    }

    function translate(char) { //function for translating any string into a unicode Bold text.
        let diff;
        if (/[A-Z]/.test(char)) {
            diff = "𝗔".codePointAt(0) - "A".codePointAt(0);
        } else {
            diff = "𝗮".codePointAt(0) - "a".codePointAt(0);
        }
        return String.fromCodePoint(char.codePointAt(0) + diff);
    }
    text1 = text1.replace(/[A-Za-z]/g, translate);
    text2 = text2.replace(/[A-Za-z]/g, translate);
    text3 = text3.replace(/[A-Za-z]/g, translate);
    text4 = text4.replace(/[A-Za-z]/g, translate);
    text5 = text5.replace(/[A-Za-z]/g, translate);
    text6 = text6.replace(/[A-Za-z]/g, translate);
    text7 = text7.replace(/[A-Za-z]/g, translate);
    text8 = text8.replace(/[A-Za-z]/g, translate);
    text9 = text9.replace(/[A-Za-z]/g, translate);
    //-------------------------------------------------------------

    function fallbackcopyToClipboard(text) { //this method is for automatically copying the result to a clipboard.
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

            console.log('%c Copying to clipboard was successful!', 'background: #00ccff; color: #ffffff');
        }, function(err) {

            console.log('%c Could not copy text !', 'background: #e8105f; color: #ffffff');
        });
    }

    //%%%%%%%%%%%%%%%%%%%%%%    FUNCTIONS   %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%A%


    // ***      MAIN      *** */

    var INC_table = IncBeautifier(INC, "INC"); // it takes the table and the type that makes a new sentence ...

    if (INC_table.includes("No records to display")) {

        INC_table = "None."
    }



    var CH_table = NonResolved_Beautifier(CH, "CH"); // it takes the table and the type that makes a new sentence ...

    if (CH_table.includes("No records to display")) {

        CH_table = "None."
    }


    var Exceptional_table = NonResolved_Beautifier(Exceptional, "INC"); // it takes the table and the type that makes a new sentence ...

    if (Exceptional_table.includes("No records to display")) {

        Exceptional_table = "None."
    }



    var CASES_table = CasesBeautifier(CASES, "06"); // it takes the table and the type that makes a new sentence ...

    if (CASES_table.includes("No records to display")) {

        CASES_table = "None."
    }


    var TASKS_table = PT_Beautifier(TASKS, "PT"); // it takes the table and the type that makes a new sentence ...

    if (TASKS_table.includes("No records to display")) {

        TASKS_table = "None."
    }


    var NONE_RESOLVED_table = NonResolved_Beautifier(NONE_RESOLVED, "INC"); // it takes the table and the type that makes a new sentence ...

    if (NONE_RESOLVED_table.includes("No records to display")) {

        NONE_RESOLVED_table = "None."
    }


    //------------------Title----------------
    var ShiftPeriod;

    const today = new Date() // date
    var month = today.toLocaleString('default', {
        month: 'long'
    }); // get the month 
    var day = today.getDate(); //get the  Day
    var hour = today.getHours(); //time 


    if (((hour > 8) && (hour < 16)) || (hour == 16)) {
        ShiftPeriod = "Morning Shift";

    }

    if (((hour > 16) && (hour < 24)) || (hour == 24)) {
        ShiftPeriod = "Evening Shift";

    }


    if (((hour >= 1) && (hour < 8)) || (hour == 8)) {
        ShiftPeriod = "Night Shift";
        day = day - 1;

    }

    var Summary = ""; // summary String

    Summary += `NOC & SOC Shift Summary - ` + ShiftPeriod + " - " + day + " / " + month + ".\n\n"; //summary's title.


    //-----------------------------------------

    titleCase(FormatedNames); // it creates a good format out of the shift owner and members.
    let Owner_BOLD = Owner.replace(/[A-Za-z]/g, translate); //owner name in bold

    Summary += "Hi all,\n" + text1 + Owner + "\n" + text2 + FormatedNames + "\n\n" + text3 + "\n" + Exceptional_table + "\n\n" + text4 + "\n" + INC_table + "\n\n" + text5 + "\n" + CH_table + "\n\n" + text6 + "\n" + CASES_table + "\n\n" + text7 + "\n" + NONE_RESOLVED_table + "\n\n" + text8 + "\n" + TASKS_table + "\n\n" + text9 + "\n\nRegards," + Owner_BOLD + ".";


    copyToClipboard(Summary); //copy to clipboard the following result.

});
