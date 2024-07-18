var today = new Date();
var calculateAge = function (birthDate) {
    var birthYear = new Date(birthDate).getFullYear();
    var currentYear = today.getFullYear();
    var age = currentYear - birthYear;
    console.log("La edad de la persona es " + age + " años");
};
calculateAge("1978-01-09");
