let enable = document.getElementById("en");
let lgout = document.getElementById("lg");

let prof = document.getElementById("90");
prof.addEventListener("click",()=>{
    window.location.href="../ProjectSkeleton/Profile.html";
})
// Get current state from localStorage
let now = localStorage.getItem("Option");

// Default to false if no value exists
if (now === null) {
  localStorage.setItem("Option", "false");
  now = "false";
}

// Set button text on page load
enable.innerText = now === "true" ? "Disable Auto Login" : "Enable Auto Login";

// Toggle event
enable.addEventListener("click", (e) => {
  // Toggle value
  now = localStorage.getItem("Option"); // get fresh value
  let newValue = now === "true" ? "false" : "true";

  // Update localStorage
  localStorage.setItem("Option", newValue);

  // Update button text
  e.target.innerText = newValue === "true" ? "Disable Auto Login" : "Enable Auto Login";
});

// Logout button
lgout.addEventListener("click", () => {
  
  localStorage.setItem("Option", "false"); // optional: turn off auto login on logout

  Swal.fire({
    icon: 'error',
    title: 'Log Out!',
    text: 'Log out successfully.',
    confirmButtonText: 'OK',
    confirmButtonColor: '#3085d6'
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.href = "../ProjectSkeleton/Home.html";
    }
  });
});
