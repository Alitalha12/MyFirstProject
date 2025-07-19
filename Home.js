

window.addEventListener("DOMContentLoaded",()=>{



// Split text into characters
const split = new SplitType('.animated-text', {
  types: 'chars',
  charClass: 'char'
});

// Create a timeline with repeat
const tl = gsap.timeline({ repeat: -1, repeatDelay: 3 }); // repeat -1 = infinite

tl.from(split.chars, {
  opacity: 0,
  scale: 0.8,
  x: -10,
  duration: 0.5,
  ease: "expo.out",
  stagger: {
    each: 0.04,
    from: "start"
  }
});




let Button = document.getElementById("23");
Button.addEventListener("click", () => {
  let option = localStorage.getItem("Option");

  if (option === "true") {
    let ans = localStorage.getItem("Password");
    if (ans && ans !== "") {
      window.location.href = "../ProjectSkeleton/UserDashboard.html";
    } else {
      window.location.href = "../ProjectSkeleton/Auth.html";
    }
  } else {
    // If option is "false" or not set
    window.location.href = "../ProjectSkeleton/Auth.html";
  }
})
});
