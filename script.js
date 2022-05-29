
function validateForm() {
    let pipeline = document.forms["myForm"]["pipeline"].value;
    let prname = document.forms["myForm"]["prname"].value;
    let bname = document.forms["myForm"]["bname"].value;
    let csfile = document.forms["myForm"]["csfile"].value;
    let pass = document.forms["myForm"]["pass"].value;
    let revery = document.forms["myForm"]["revery"].value;

    var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;  
    if(!format.test(prname)){   
        alert("Please remove special characters!");
    }

    if(!format.test(revery)){   
        alert("Please remove special characters!");
    }


    if (pipeline == "") {
      alert("Pipeline must be filled out");
      return false;
    }

    if (prname == "") {
        alert("Project name must be filled out");
        return false;
    }

    if (bname == "") {
        alert("Bucket name must be filled out");
        return false;
    }

    if (csfile == "") {
        alert("File location must be filled out");
        return false;
    }

    if (pass == "") {
        alert("Credentials must be filled out");
        return false;
    }

    if (revery == "") {
        alert("Minutes must be filled out");
        return false;
    }
  }