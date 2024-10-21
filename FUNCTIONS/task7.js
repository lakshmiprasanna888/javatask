
function checkScholarshipEligibility(gpa) {
    if (gpa >= 7.5) {
        return "Congratulations! You are eligible for the scholarship.";
    } else {
        return "Sorry, you are not eligible for the scholarship.";
    }
}

let gpa = prompt("Enter your GPA:");

while (isNaN(gpa) || gpa < 0 || gpa > 10) {
    gpa = prompt("Invalid input. Please enter a GPA between 0 and 10:");
}

gpa = parseFloat(gpa);

let result = checkScholarshipEligibility(gpa);


console.log(result);
alert(result);


