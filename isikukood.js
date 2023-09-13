const { exit, exitCode, abort } = require("process");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})
rl.question("Sussy?", (userInput) => {  
    let isikukood = userInput;
    var year_born = "None";
    var month_born = "None";
    var day_born = "None";
    var birth_place = "None";

    if (isikukood == "505090727501") {
        console.log("Its a me Aimar")
        console.log("Ignore the 1 at the end")
        throw new Error("Sayonara");
    }
    else if (isikukood.length == 11) {
        console.log(isikukood);
        exit
    }
    else {
        console.log("Why give wrong social security number??")
        process.exit();
    }


    let sex = isikukood.charAt(0);
    if (sex % 2 == 0) {
        console.log("Female");
    }
    else {
        console.log("Male");     
    } 
    

    let day = isikukood.slice(5,7);
    if ((day < 32 && day > 0)){
        var day_born = day;
        console.log(day_born);
    } 
    else {
        console.log("New month??????")
        process.exit();
    }


    let month = isikukood.slice(3,5);
    if (month == "01") {
        var month_born = "January";
        console.log(month_born);
    }
    else if (month == "01") {
        var month_born = "January";
        console.log(month_born);
    }
    else if (month == "02") {
        var month_born = "Febuary";
        console.log(month_born);
    }
    else if (month == "03") {
        var month_born = "March";
        console.log(month_born);
    }
    else if (month == "04") {
        var month_born = "April";
        console.log(month_born);
    }
    else if (month == "05") {
        var month_born = "May";
        console.log(month_born);
    }
    else if (month == "06") {
        var month_born = "June";
        console.log(month_born);
    }
    else if (month == "07") {
        var month_born = "July";
        console.log(month_born);
    }
    else if (month == "08") {
        var month_born = "August";
        console.log(month_born);
    }
    else if (month == "09") {
        var month_born = "September";
        console.log(month_born);
    }
    else if (month == "10") {
        var month_born = "October";
        console.log(month_born);
    }
    else if (month == "11") {
        var month_born = "November";
        console.log(month_born);
    }
    else if (month == "12") {
        var month_born = "December";
        console.log(month_born);
    }
    else {
        console.log("New month again????")
        process.exit();
    }


    let year = isikukood.slice(1,3);
    if (year > 23) {
        var year_born = "19" + year;
        console.log(year_born);
    }
    else if ((year <= 23 && year >= 0)) {
        var year_born = "20" + year;
        console.log(year_born);
    } 
    else if (year < 0) {
        console.log("Da fuck year is that?");
        process.exit();
    }
    else {
        console.log("I dont even know anymore");
        process.exit();
    }

    let location = isikukood.slice(7, 10);
    if ((location >= 1 && location <=10)) {
        var birth_place = "Kuressaare haigla"
        console.log(birth_place);
    }
    else if ((location >= 11 && location <=20)) {
        var birth_place = "Tartu Ülikooli Naistekliinik"
        console.log(birth_place);
    }
    else if ((location >= 21 && location <=150)) {
        var birth_place = "Ida-Tallinna keskhaigla, Pelgulinna sünnitusmaja (Tallinn)"
        console.log(birth_place);
    }
    else if ((location >= 151 && location <=160)) {
        var birth_place = "Keila haigla"
        console.log(birth_place);
    }
    else if ((location >= 161 && location <=220)) {
        var birth_place = "Rapla haigla, Loksa haigla, Hiiumaa haigla (Kärdla)"
        console.log(birth_place);
    }
    else if ((location >= 221 && location <=270)) {
        var birth_place = "Ida-Viru keskhaigla (Kohtla-Järve, endine Jõhvi)"
        console.log(birth_place);
    }
    else if ((location >= 271 && location <=370)) {
        var birth_place = "Maarjamõisa kliinikum (Tartu), Jõgeva haigla"
        console.log(birth_place);
    }
    else if ((location >= 371 && location <=420)) {
        var birth_place = "Narva haigla"
        console.log(birth_place);
    }
    else if ((location >= 421 && location <=470)) {
        var birth_place = "Pärnu haigla"
        console.log(birth_place);
    }
    else if ((location >= 471 && location <=490)) {
        var birth_place = "Haapsalu haigla"
        console.log(birth_place);
    }
    else if ((location >= 491 && location <=520)) {
        var birth_place = "Järvamaa haigla (Paide)"
        console.log(birth_place);
    }
    else if ((location >= 521 && location <=570)) {
        var birth_place = "Rakvere haigla, Tapa haigla"
        console.log(birth_place);
    }
    else if ((location >= 571 && location <=600)) {
        var birth_place = "Valga haigla"
        console.log(birth_place);
    }
    else if ((location >= 601 && location <=650)) {
        var birth_place = "Viljandi haigla"
        console.log(birth_place);
    }
    else if ((location >= 651 && location <=700)) {
        var birth_place = "Lõuna-Eesti haigla (Võru), Põlva haigla"
        console.log(birth_place);
    }
    else {
        console.log("I honestly dont know where you were born")
        process.exit();
    }
    //1 * isikukood.charAt(0) + ...
    process.exit();
});

