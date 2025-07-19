window.addEventListener("DOMContentLoaded",()=>{


let fname = document.getElementById("10");
let Username = document.getElementById("11");
let PAS = document.getElementById("12");
let con = document.getElementById("14");

let BTN = document.getElementById("13");




let luser = document.getElementById("15");
let lpwd = document.getElementById("16");
let login = document.getElementById("17");
login.addEventListener("click",(e)=>{
    e.preventDefault();
    let ans= localStorage.getItem("Password");
    console.log(ans);
   if (ans === lpwd.value) {
  Swal.fire({
    icon: 'success',
    title: 'Login Successful',
    text: 'Logged in successfully.',
    confirmButtonText: 'OK',
    confirmButtonColor: '#3085d6'
  }).then((result) => {
    if (result.isConfirmed) {
      // Redirect only after user clicks OK
      window.location.href = "../ProjectSkeleton/UserDashboard.html";
    }
  });
}

    else{
        Swal.fire({
  icon: 'error',
  title: 'Login Failed',
  text: 'Incorrect username or password.',
  confirmButtonText: 'Retry',
  confirmButtonColor: '#d33'
});

    }
})

const qname = (name) => /^[A-Za-z]+( [A-Za-z]+)*$/.test(name);
const user = (name) => /^[A-Za-z0-9]+( [A-Za-z0-9]+)*$/.test(name);
const pwd = (name) => /^[A-Za-z0-9@ ]+$/.test(name);
const pwdle = (name) => /^(?=.*\d)(?=.*@).{7,}$/.test(name);
const same = (pwd1, pwd2) => pwd1 === pwd2;
const pschecker=(name)=>{
  let p=  localStorage.getItem("Password");
if(p===name)
{
    return false ;
}
else{
    return true;
}
}
const namecahc=(name)=>{
  let p=  localStorage.getItem("UserName");
if(p===name)
{
    return false ;
}
else{
    return true;
}
}


BTN.addEventListener("click", (e) => {
    console.log("CHAL RHA HAI!")
  e.preventDefault();
  

  if (!fname.value || !Username.value || !PAS.value || !con.value) {
    Swal.fire({
      icon: 'error',
      title: 'Empty Fields',
      text: 'None of the fields can be empty.',
      confirmButtonColor: '#d33'
    });
    return;
  }

  if(!pschecker(PAS.value))
  {
    Swal.fire({
      icon: 'error',
      title: 'User Already exist!',
      text: 'Try with new Password.',
      confirmButtonColor: '#d33'
    });
    return;
  
  }

  if(!namecahc(Username.value))
  {
    Swal.fire({
      icon: 'error',
      title: 'User Already exist!',
      text: 'Try with new Username.',
      confirmButtonColor: '#d33'
    });
    return;
  
  }
  if (!qname(fname.value)) {
    Swal.fire({
      icon: 'error',
      title: 'Invalid Full Name',
      text: 'Full name can contain only alphabets and spaces.',
      confirmButtonColor: '#d33'
    });
    return;
  }

  if (!user(Username.value)) {
    Swal.fire({
      icon: 'error',
      title: 'Invalid User Name',
      text: 'User name can contain only alphabets, digits and spaces.',
      confirmButtonColor: '#d33'
    });
    return;
  }

  if (!pwd(PAS.value)) {
    Swal.fire({
      icon: 'error',
      title: 'Invalid Password',
      text: 'Password can contain only alphabets, digits, @ and spaces.',
      confirmButtonColor: '#d33'
    });
    return;
  }

  if (!same(con.value, PAS.value)) {
    Swal.fire({
      icon: 'error',
      title: 'Password Mismatch',
      text: 'Your Password and Confirm Password are not the same.',
      confirmButtonColor: '#d33'
    });
    return;
  }

  if (!pwdle(PAS.value)) {
    Swal.fire({
      icon: 'error',
      title: 'Weak Password',
      text: 'Password must be at least 7 characters and include @ and digits.',
      confirmButtonColor: '#d33'
    });
    return;
  }

  // ✅ Success
 
console.log(localStorage.getItem("FullName"));     // Should print actual name
console.log(localStorage.getItem("UserName"));     // Should print username
console.log(localStorage.getItem("Password"));     // Be cautious with this

  Swal.fire({
    icon: 'success',
    title: 'Account Created!',
    text: 'Your account has been created successfully.',
    confirmButtonText: 'OK',
    confirmButtonColor: '#3085d6'
  });
   localStorage.setItem("FullName", fname.value);
  localStorage.setItem("UserName", Username.value);
  localStorage.setItem("Password", PAS.value);
  
});




  let p1 = document.getElementById("45");
  let p2 = document.getElementById("46");
  let p3 = document.getElementById("47");

  let fullName = localStorage.getItem("FullName");
  let userName = localStorage.getItem("UserName");
  let password = localStorage.getItem("Password");

   p1.innerText = fullName;
   p2.innerText = userName;
 p3.innerText = password;


})