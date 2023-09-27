const { exit, exitCode, abort } = require("process");
const readline = require("readline");
const case1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1];
const case2 = [3, 4, 5, 6, 7, 8, 9, 1, 2, 3];
const month31 = ["January", "March", "May", "July", "August", "October", "December"];
const month30 = ["February", "April", "June", "September", "November"]; 

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})
rl.question("Enter social security number: ", (userInput) => {  
    let isikukood = userInput;
    let sex = "None";
    let century = "None";
    let month_born = "None";
    let year_born = "None";
    let isleapyear = false;
    let day_born = "None";
    let birth_place = "None";
    let race_place = "None";
    let kontrollnum = "None";
    let needcase2 = false;
    
    if (isikukood == "505090727501") {
        console.log("Its a me Aimar")
        console.log("Ignore the 1 at the end")
        throw new Error("Sayonara");
    }
    else if (isikukood.length == 11) {
    }
    else {
        console.log("Why give wrong social security number??")
        process.exit();
    }


    sex = isikukood.charAt(0);
    
    if ((sex == "1" || sex == "2")) {
        century = "18"
    }
    else if ((sex == "3" || sex == "4")) {
        century = "19"
    }
    else if ((sex == "5" || sex == "6")) {
        century = "20"
    }
    else if ((sex == "7" || sex == "8")) {
        century = "21"
    }

    if (sex % 2 == 0) {
        sex = "Female"
    }
    else {
        sex = "Male"    
    }

    let month = isikukood.slice(3,5);
    if (month == "01") {
        month_born = "January";
    }
    else if (month == "02") {
        month_born = "February";
    }
    else if (month == "03") {
        month_born = "March";
    }
    else if (month == "04") {
        month_born = "April";
    }
    else if (month == "05") {
        month_born = "May";
    }
    else if (month == "06") {
        month_born = "June";
    }
    else if (month == "07") {
        month_born = "July";
    }
    else if (month == "08") {
        month_born = "August";
    }
    else if (month == "09") {
        month_born = "September";
    }
    else if (month == "10") {
        month_born = "October";
    }
    else if (month == "11") {
        month_born = "November";
    }
    else if (month == "12") {
        month_born = "December";
    }
    else {
        console.log("New month again????")
        process.exit();
    }


    let year = isikukood.slice(1,3);
    if (year >= 0) {
        year_born = century + year;
    }
    else {
        console.log("Da fuck year is that??")
    } 

    if (year_born % 100 == 0) {
        if (year_born % 400 == 0) {
            isleapyear = true
        }
        else {
            isleapyear = false
        }
    }
    else if (year_born % 4 == 0) {
        isleapyear = true
    }
    else {
        isleapyear = false
    }


    let day = isikukood.slice(5,7);
    if ((day <= 29 && day > 0 && month_born == "February")){
        if ((day == 29 && isleapyear == true)) {
            day_born = 29;
        }
        else if ((day > 0 && day <= 28)) {
            day_born = day;
        }
        else {
            console.log("There aint a knew kind of leap year. At least to my knowledge");
        }
    }
    if ((month30.includes(month_born) == true && day > 0 && day <= 30)) {
        day_born = day
    }
    else if ((month31.includes(month_born) == true && day > 0 && day <= 31)) {
        day_born = day
    }

    

    let location = isikukood.slice(7, 10);
    if ((location >= 1 && location <=10)) {
        birth_place = "Kuressaare haigla"
        race_place = location
    }
    else if ((location >= 11 && location <=20)) {
        birth_place = "Tartu Ülikooli Naistekliinik"
        race_place = location - 10
    }
    else if ((location >= 21 && location <=150)) {
        birth_place = "Ida-Tallinna keskhaigla, Pelgulinna sünnitusmaja (Tallinn)"
        race_place = location - 20
    }
    else if ((location >= 151 && location <=160)) {
        birth_place = "Keila haigla"
        race_place = location - 150
    }
    else if ((location >= 161 && location <=220)) {
        birth_place = "Rapla haigla, Loksa haigla, Hiiumaa haigla (Kärdla)"
        race_place = location - 160
    }
    else if ((location >= 221 && location <=270)) {
        birth_place = "Ida-Viru keskhaigla (Kohtla-Järve, endine Jõhvi)"
        race_place = location - 220
    }
    else if ((location >= 271 && location <=370)) {
        birth_place = "Maarjamõisa kliinikum (Tartu), Jõgeva haigla"
        race_place = location - 270
    }
    else if ((location >= 371 && location <=420)) {
        birth_place = "Narva haigla"
        race_place = location - 370
    }
    else if ((location >= 421 && location <=470)) {
        birth_place = "Pärnu haigla"
        race_place = location - 420
    }
    else if ((location >= 471 && location <=490)) {
        birth_place = "Haapsalu hai gla"
        race_place = location - 470
    }
    else if ((location >= 491 && location <=520)) {
        birth_place = "Järvamaa haigla (Paide)"
        race_place = location - 490
    }
    else if ((location >= 521 && location <=570)) {
        birth_place = "Rakvere haigla, Tapa haigla"
        race_place = location - 520
    }
    else if ((location >= 571 && location <=600)) {
        birth_place = "Valga haigla"
        race_place = location - 570
    }
    else if ((location >= 601 && location <=650)) {
        birth_place = "Viljandi haigla"
        race_place = location - 600
    }
    else if ((location >= 651 && location <=700)) {
        birth_place = "Lõuna-Eesti haigla (Võru), Põlva haigla"
        race_place = location - 650
    }
    else {
        console.log("I honestly dont know where you were born")
        process.exit();
    }
    
    let sum = 0;
    let order = 0;
    let kontroll = 0;

    for (let num of case1) {
        sum += num * isikukood.charAt(order);
        order += 1;
        if (order == 10) {
            kontroll = sum / 11
            if (kontroll % 1 == 0) {
                kontrollnum = sum - kontroll * 11;
                if (kontrollnum >= 10) {
                    needcase2 = true
                }
            }
            else {
                kontroll = Math.floor(kontroll);
                kontrollnum = sum - kontroll * 11;
                if (kontrollnum >= 10) {
                    needcase2 = true
                }
            } 
        }
    }

    sum = 0;
    order = 0;
    kontroll = 0;
    
    if (needcase2 == true) {
        for (let num of case2) {
            sum += num * isikukood.charAt(order);
            order += 1;
            if (order == 10) {
                kontroll = sum / 11
                if (kontroll % 1 == 0) {
                    kontrollnum = sum - kontroll * 11;
                    if (kontrollnum >= 10) {
                        kontrollnum = "0"
                    }
                }
                else {
                    kontroll = Math.floor(kontroll);
                    kontrollnum = sum - kontroll * 11;
                    if (kontrollnum >= 10) {
                        kontrollnum = "0"
                    } 
                } 
            }
        }
    } 
        

    console.log(sex + " with the social security number of " + isikukood + ", born on " + month_born + " " + day_born + "," + year_born + " in " + birth_place + " as the " + race_place + " child with a controll number of "+ kontrollnum + ".\nFun true/false facts: they were born on a leap year: " + isleapyear + ".");


    process.exit();
});