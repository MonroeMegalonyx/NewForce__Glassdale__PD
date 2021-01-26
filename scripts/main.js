//import { getCriminals, useCriminals } from './criminals/CriminalProvider.js'

//getCriminals();
//useCriminals();

import { listCriminals } from './criminals/CriminalList.js';

listCriminals();

const darkModeButton = document.querySelector("#dark-mode");


darkModeButton.addEventListener("click", function(){
    // Select the entire body tag
    const bodyElement = document.querySelector("body")
  
    // Add a class
    bodyElement.classList.toggle("dark-background")
  });
