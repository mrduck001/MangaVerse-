let isLoggedIn = false;
let user = {};

function showHome() {
  hideAll();
  document.getElementById("homePage").style.display = "block";
}

function showRegister() {
  hideAll();
  document.getElementById("registerPage").style.display = "block";
}

function showLogin() {
  hideAll();
  document.getElementById("loginPage").style.display = "block";
}

function showProfile() {
  hideAll();
  document.getElementById("profilePage").style.display = "block";
}

function hideAll() {
  const pages = document.querySelectorAll(".container > div");
  pages.forEach(page => (page.style.display = "none"));
}

function register() {
  const email = document.getElementById("registerEmail").value;
  const password = document.getElementById("registerPassword").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  
  if (password !== confirmPassword) {
    alert("كلمات المرور غير متطابقة");
    return;
  }

  user = { email, password, nickname: "مستخدم جديد" };
  localStorage.setItem("user", JSON.stringify(user));
  alert("تم التسجيل بنجاح!");
  showHome();
  updateUI();
}

function login() {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  const storedUser = JSON.parse(localStorage.getItem("user"));

  if (storedUser && storedUser.email === email && storedUser.password === password) {
    user = storedUser;
    isLoggedIn = true;
    alert("تم تسجيل الدخول بنجاح!");
    showHome();
    updateUI();
  } else {
    alert("البريد الإلكتروني أو كلمة المرور غير صحيحة");
  }
}

function updateUI() {
  if (isLoggedIn) {
    document.getElementById("profileIcon").src = "https://via.placeholder.com/40";
    document.getElementById("profileIcon").style.display = "block";
    document.getElementById("registerBtn").style.display = "none";
    document.getElementById("loginBtn").style.display = "none";
  } else {
    document.getElementById("profileIcon").style.display = "none";
    document.getElementById("registerBtn").style.display = "block";
    document.getElementById("loginBtn").style.display = "block";
  }
}

function uploadProfileImage() {
  const file = document.getElementById("uploadImage").files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      document.getElementById("profileImage").src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
}

function saveProfile() {
  const nickname = document.getElementById("nickname").value;
  user.nickname = nickname;
  localStorage.setItem("user", JSON.stringify(user));
  alert("تم حفظ التغييرات!");
}
