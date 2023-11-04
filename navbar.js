const openDrawerButton = document.querySelector("#burger");
const closeDrawerButton = document.getElementById("closeDrawerButton");
const mobileDrawer = document.getElementById("mobileDrawer");

 // Function to open the mobile drawer
 function openDrawer() {
    mobileDrawer.style.left = "0";
}

// Function to close the mobile drawer
function closeDrawer() {
    mobileDrawer.style.left = "-80%"; // Hide the drawer
}

// Event listener for opening the drawer
openDrawerButton.addEventListener("click", openDrawer);

// Event listener for closing the drawer
closeDrawerButton.addEventListener("click", closeDrawer);