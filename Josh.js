function updateParagraph(userInput) {
  //Regex not working.
  //const rePhys = /[Pp]hysics?/;
  //const reChem = new RegExp(/[Cc]hemistry/);
  //const reBio = new RegExp(/[Bb]iology/);
  //const reMath = new RegExp(/[Mm]ath(s?|(ematics)?)/);
  //Below try...catch code modified from W3Schools.
  try {
    //Should improve this with switch...case.
    if (userInput == "") {
      throw "That's blank.";
    }
    if (userInput == "physics" | userInput == "Physics") {
      scienceParagraph.data = "ScienceText/physics.html";
    }
    else if (userInput == "chemistry" | userInput == "Chemistry") {
      scienceParagraph.data = "ScienceText/chemistry.html";
    }
    else if (userInput == "biology" | userInput == "Biology") {
      scienceParagraph.data = "ScienceText/biology.html";
    }
    else if (userInput == "computing" | userInput == "Computing"| userInput == "computer science"| userInput == "Computer Science") {
      scienceParagraph.data = "ScienceText/computing.html";
    }
    else {
      alert(userInput)
    }
  }
  catch(err) {
    alert(err);
  }
}