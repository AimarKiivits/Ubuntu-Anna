const person = {
    firstname: "Aide",
    lastname: "Kiivits",
    age: 18,
    email: "Aidekiivits@gmail.com",
    hobbies: ["laulmine", "idk"],
    address: {
        city: "Võnnu",
        county: "Tartumaa"
    },
    getBirthYear: function() {
        return 2023 - this.age;
    },
    showHobbies: function() {
        this.hobbies.forEach(function(hobby) {
            console.log(hobby)
        });
    },
    showAddressData: function() {
        for(addresskey in this.address){
            console.log(this.address[addresskey])
        };

    }
}

let val = person.firstname;
let val1 = person.lastname;
let val2 = person.age;
let val3 = person.email;
let val4 = person.hobbies;
let val5 = person.address;
let val6 = person.getBirthYear();
person.showHobbies();
person.showAddressData();

console.log(val, val1, val2, val3, val4, val5, val6)
