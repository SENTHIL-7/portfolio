// =============================== menu ===========================================

function myMenu() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

function printCV(doc){
   
    	let objFra = document.createElement('iframe');     // Create an IFrame.
        objFra.style.visibility = 'hidden';                // Hide the frame.
        objFra.src = doc;                   // Set source.

        document.body.appendChild(objFra);  // Add the frame to the web page.

        objFra.contentWindow.focus();       // Set focus.
        objFra.contentWindow.print();       // Print it.
    }
