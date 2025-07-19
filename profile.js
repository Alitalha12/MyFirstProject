window.addEventListener("DOMContentLoaded", () => {
  const p1 = document.getElementById("45");
  const p2 = document.getElementById("46");
  const p3 = document.getElementById("47");

  const fullName = localStorage.getItem("FullName");
  const userName = localStorage.getItem("UserName");
  const password = localStorage.getItem("Password");

  if (p1) p1.innerText = fullName;
  if (p2) p2.innerText = userName;
  if (p3) p3.innerText = password;
});
