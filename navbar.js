const openDrawerButton = document.querySelector("#burger");
const closeDrawerButton = document.getElementById("closeDrawerButton");
const mobileDrawer = document.getElementById("mobileDrawer");
mobileDrawer.style.left = "-80%";
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

openDrawerButton.addEventListener("click", () => {
    mobileDrawer.style.display = "block";
});

closeDrawerButton.addEventListener("click", () => {
    mobileDrawer.style.display = "none";
});


 // Toggle menu icon for screens with width 786px or less
 function toggleMenuIcon() {
    if (window.innerWidth <= 800) {
        nav.style.display = "none"; // Hide the navigation bar
        openDrawerButton.style.display = "block"; // Show the menu icon
    } else {
        nav.style.display = "flex"; // Display the navigation bar
        openDrawerButton.style.display = "none"; // Hide the menu icon
        mobileDrawer.style.display = "none"; // Hide the mobile drawer
    }
}

// Initial check and event listener for screen width
toggleMenuIcon();
window.addEventListener("resize", toggleMenuIcon);
