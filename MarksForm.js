document.addEventListener("DOMContentLoaded", function(){
    const form = document.getElementById("marksForm");

    let name = document.getElementById("name");
    let surname1 = document.getElementById("surname1");
    let surname2 = document.getElementById("surname2");

    let mark1 = document.getElementById("mark1");
    let mark2 = document.getElementById("mark2");
    let mark3 = document.getElementById("mark3");

    let line1 = document.getElementById("line1");
    let line2 = document.getElementById("line2");

    //Function to validate that the mark is a number between 0 and 10
    function isValidMark (n){
        return !isNaN(n) && n>=0 && n<=10;
    }

    //What happens when it presses submit button
    form.addEventListener("submit", function(e){
        e.preventDefault();

        let m1 = Number(mark1.value);
        let m2 = Number(mark1.value);
        let m3 = Number(mark1.value);

        //We check if the name and surname is valid
        if (!name.value.trim() || !surname1.value.trim() || !surname2.value.trim()){
            line1.textContent = "Complete name and surnames"
            line2.textContent = "";
            return;
        }

        //We check if the marks are valid
        if (!isValidMark(m1) || !isValidMark(m2) || !isValidMark(m3)){
            line1.textContent = "Marks must be between 0 and 10"
            line2.textContent = "";
            return;
        }

        //We calculate the average
        let average = ((m1+m2+m3) / 3);

        //To count the number of fails
        let fails = 0;

        if (m1<5) fails++;
        if (m2<5) fails++;
        if (m3<5) fails++;

        //We get the qualification with the average
        let qualification = ""

        if (average<5) qualification = "FAIL";
        else if (average<7) qualification = "PASS";
        else if (average<9) qualification = "VERY GOOD";
        else if (average<5) qualification = "EXCELLENT";
        else if (average<5) qualification = "WITH HONORS";

        //To create the final message
        let status = "";

        if(fails === 0) status = "You can begin your practice period"
        else if (fails === 1) status = "You have to pass one subject"
        else status = "You have to repeat the course"

        //To show the final message
        let student = name.value.trim() + " " + surname1.value.trim() + " " + surname2.value.trim();

        line1.textContent = student + " -> Average: " + average.toFixed(2) + " - " + qualification;
        line2.textContent = status;
    })

    //To reset when it presses reset button
    form.addEventListener("reset", function(){
        line1.textContent = "";
        line2.textContent = "";
    }) 
})