/* Custom JS goes here */

// IIFE - Immediately Invoked Function Expression
// anonymous self executing function
(function () {
    "use strict"



    function Lab2(){
        let mySentence = document.getElementById("mySentence");
        mySentence.textContent ="This is a sentence! Yay JavaScript!";
    }


    function Start() {
        // local variable
        let title = document.title;

        console.log("App Started!");
        console.log("----------------------------");
        console.log("Title: " + title);

        switch (title) {
            case "COMP125 - Home":
                Lab2();
                break;

            case "COMP125 - About":
                AboutContent();
                break;

            default:
                break;
        }
    }

    //window.onload = Start;

    window.addEventListener("load", Start);
})();