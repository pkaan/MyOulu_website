var x = null;

function lista(y) {
    var x, i;
    if (y == 0) {
        recenter(y);
        x = document.querySelectorAll(".kampus")
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        x = document.querySelectorAll(".kaupunki")
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "inline-block";
        }
    }
    if (y == 1) {
        recenter(y);
        x = document.querySelectorAll(".kaupunki")
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        x = document.querySelectorAll(".kampus")
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "inline-block";
        }
    }
    if (y == 2) {
        recenter(y);
        x = document.querySelectorAll(".kaupunki")
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "inline-block";
        }
        x = document.querySelectorAll(".kampus")
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "inline-block";
        }
        x = document.querySelectorAll(".oulubtn")
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "inline-block";
        }
        x = document.querySelectorAll(".kampusbtn")
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "inline-block";
        }
        x = document.querySelectorAll(".kaupunkibtn")
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "inline-block";
        }
        x = document.querySelectorAll(".kaupunkibtneng")
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        x = document.querySelectorAll(".oulubtneng")
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        x = document.querySelectorAll(".kampusbtneng")
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        x = document.querySelectorAll(".campus")
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        x = document.querySelectorAll(".city")
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        x = document.getElementById("vastausbtn");
        x.style.display = "inline";

        x = document.getElementById("vastausbtneng");
        x.style.display = "none";

        x = document.getElementById("kokoVisa");
        x.style.display = "inline";

        x = document.getElementById("kokoVisaeng");
        x.style.display = "none";

        x = document.getElementById("siteInstructions");
        x.style.display = "inline";

        x = document.getElementById("siteInstructionseng");
        x.style.display = "none";

        x = document.getElementById("introductionText"); 
        x.textContent = "Oppaasi opiskelijan Ouluun!";
    }
    if (y == 4) {
        recenter(y);
        x = document.querySelectorAll(".kaupunki")
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        x = document.querySelectorAll(".kampus")
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        x = document.querySelectorAll(".oulubtn")
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        x = document.querySelectorAll(".kaupunkibtn")
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        x = document.querySelectorAll(".oulubtn")
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        x = document.querySelectorAll(".kampusbtn")
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        x = document.querySelectorAll(".oulubtneng")
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "inline-block";
        }
        x = document.querySelectorAll(".kampusbtneng")
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "inline-block";
        }
        x = document.querySelectorAll(".kaupunkibtneng")
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "inline-block";
        }
        x = document.querySelectorAll(".city")
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "inline-block";
        }
        x = document.querySelectorAll(".campus")
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "inline-block";
        }
        x = document.querySelectorAll(".campus")
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "inline-block";
        }
        x = document.getElementById("vastausbtneng");
        x.style.display = "inline";

        x = document.getElementById("vastausbtn");
        x.style.display = "none";

        x = document.getElementById("kokoVisaeng");
        x.style.display = "inline";

        x = document.getElementById("kokoVisa");
        x.style.display = "none";

        x = document.getElementById("siteInstructionseng");
        x.style.display = "inline";

        x = document.getElementById("siteInstructions");
        x.style.display = "none";

        x = document.getElementById("introductionText");
        x.textContent = "Your guide to student's Oulu!";
        
    }
    if (y == 5) {
        recenter(y);
        x = document.querySelectorAll(".kaupunki")
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        x = document.querySelectorAll(".kampus")
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        x = document.querySelectorAll(".oulubtn")
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        x = document.querySelectorAll(".kampusbtn")
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        x = document.querySelectorAll(".kaupunkibtn")
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        x = document.querySelectorAll(".kaupunkibtneng")
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "inline-block";
        }
        x = document.querySelectorAll(".oulubtneng")
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "inline-block";
        }
        x = document.querySelectorAll(".kampusbtneng")
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "inline-block";
        }
        x = document.querySelectorAll(".campus")
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        x = document.querySelectorAll(".city")
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "inline-block";
        }
    }
    if (y == 6) {
        recenter(y);
        x = document.querySelectorAll(".kaupunki")
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        x = document.querySelectorAll(".kampus")
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        x = document.querySelectorAll(".oulubtn")
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        x = document.querySelectorAll(".kampusbtn")
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        x = document.querySelectorAll(".kaupunkibtn")
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        x = document.querySelectorAll(".kaupunkibtneng")
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "inline-block";
        }
        x = document.querySelectorAll(".oulubtneng")
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "inline-block";
        }
        x = document.querySelectorAll(".kampusbtneng")
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "inline-block";
        }
        x = document.querySelectorAll(".campus")
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "inline-block";
        }
        x = document.querySelectorAll(".city")
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
    }
    
}