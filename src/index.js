navHeader();
pageFooter();

function navHeader(){
    const mainDiv = document.getElementById("content");
    const pageNames = ["Home", "Menu", "Contact"];

    //Create our menu items.
    const navBar = document.createElement("div");
    navBar.setAttribute("id", "navbar");

    // Create the list.
    const navList = document.createElement("ul")
    navList.setAttribute("id", "navlist");

    // Create the list items.
    for(let i = 0; i < pageNames.length; i++){
        let navLink = document.createElement("li");
        navLink.textContent = pageNames[i];
        navLink.setAttribute("class", "navlink");

        navList.appendChild(navLink);
    }
    
    // Set up our nav menu.
    mainDiv.appendChild(navBar);
    navBar.appendChild(navList);
}

function pageFooter(){
    const mainDiv = document.getElementById("content");

    const footerDiv = document.createElement("div");
    footerDiv.setAttribute("id", "footer-container");

    const footerTag = document.createElement("p");
    footerTag.textContent = "Created by Spencer Lynch for The Odin Project";

    const footerCopy = document.createElement("p");
    footerCopy.textContent = "©2023 Spencer Lynch. Licensed under the GNU General Public License, version 3.";

    footerDiv.appendChild(footerTag);
    footerDiv.appendChild(footerCopy);

    mainDiv.appendChild(footerDiv);
}