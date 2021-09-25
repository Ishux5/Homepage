// Function to open Dropdown
function dropdownFunction() {
    document
        .getElementById("tagDropdownContent")
        .classList.toggle("tagDropdownContentShow");
    document
        .getElementById("searchbarTags")
        .classList.toggle("searchbarTagsShow");
}

// Toggle Collorvariables in style.css
let toggleValue = "Dark";

function changeThemeMain() {
    const r = document.querySelector(":root").style;

    if (toggleValue === "Light") {
        r.setProperty("--backgroundColor", "");
        r.setProperty("--textColor", "");
        r.setProperty("--outlineColor", "");
        r.setProperty("--hoverColor", "");
        r.setProperty("--logoTextColor", "");
        document.getElementById("changeTheme").src = "images/sunIcon.png";
        document.getElementById("searchbarTagIcon").src =
            "images/tagIconWhite.png";
        document.getElementById("searchbarSearchIcon").src =
            "images/searchIconThinWhite.png";

        toggleValue = "Dark";
    } else {
        r.setProperty("--backgroundColor", "white");
        r.setProperty("--textColor", "black");
        r.setProperty("--outlineColor", "rgb(41, 43, 47)");
        r.setProperty("--hoverColor", "rgb(228, 228, 228)");
        r.setProperty("--logoTextColor", "rgb(41, 43, 47)");
        document.getElementById("changeTheme").src = "images/moonIcon.png";
        document.getElementById("searchbarTagIcon").src =
            "images/tagIconBlack.png";
        document.getElementById("searchbarSearchIcon").src =
            "images/searchIconThinBlack.png";

        toggleValue = "Light";
    }
}

// Change password visibility
let visibilityValue = false;
function passwordVisibility() {
    if (visibilityValue === false) {
        document.getElementById("password").type = "text";
        document.getElementById("loginVisibility").src =
            "../images/visibilityOnWhite.png";
        visibilityValue = true;
    } else {
        document.getElementById("password").type = "password";
        document.getElementById("loginVisibility").src =
            "../images/visibilityOffWhite.png";
        visibilityValue = false;
    }
}

const activeTagArray = [];

function tagAddFunction(tagName) {
    tag = tagName.replace(/\s/g, "");
    if (document.getElementById(tag) === null) {
        const newDiv = document.createElement("div");
        const newP = document.createElement("p");

        // Set id of Div and adding p and img as childreen
        newDiv.setAttribute("id", tag);
        newDiv.appendChild(newP).classList.add("tagP");

        // Adding Div to DOM and adding class to Div
        document.getElementById("activeTags").appendChild(newDiv);
        document.getElementById(tag).classList.add("activeTag");

        const div = document.getElementById(tag);
        const childP = div.getElementsByClassName("tagP");

        childP[0].innerHTML = tag;
        childP[0].outerHTML +=
            '<svg class="tagImg" width="73" height="73" viewBox="0 0 73 73" fill="none" xmlns="http://www.w3.org/2000/svg"><rect class="tagImgChild" x="53.3317" y="14.8304" width="6.84194" height="54.4491" rx="2" transform="rotate(45 53.3317 14.8304)"/><rect class="tagImgChild" x="14.8303" y="19.6683" width="6.84194" height="54.4491" rx="2" transform="rotate(-45 14.8303 19.6683)" /></svg>';

        // Adding tag to activeTagArray
        activeTagArray.push(tag);
    }
}

// Delete Tag
const tagList = document.getElementById("activeTags");
tagList.addEventListener("click", removeTag);

function removeTag(e) {
    if (e.target.classList.contains("tagImg")) {
        const parentE = e.target.parentElement;
        const removeTagName = parentE.id;
        const tagNameIndex = activeTagArray.indexOf(removeTagName);

        // remove div
        tagList.removeChild(parentE);

        // remove tag from activeTagArray
        if (tagNameIndex > -1) {
            activeTagArray.splice(tagNameIndex, 1);
        }
    } else if (e.target.classList.contains("tagImgChild")) {
        const parentE = e.target.parentElement.parentElement;
        const removeTagName = parentE.id;
        const tagNameIndex = activeTagArray.indexOf(removeTagName);

        // remove div
        tagList.removeChild(parentE);

        // remove tag from activeTagArray
        if (tagNameIndex > -1) {
            activeTagArray.splice(tagNameIndex, 1);
        }
    }
}
