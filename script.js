// Example functions for handling different pages
let currentUser = null;

function showHome() {
  document.getElementById("homePage").classList.remove("hidden");
  document.getElementById("commentsPage").classList.add("hidden");
  document.getElementById("developerPage").classList.add("hidden");
  document.getElementById("registerPage").classList.add("hidden");
  document.getElementById("loginPage").classList.add("hidden");
  document.getElementById("profilePage").classList.add("hidden");
}

function showComments() {
  document.getElementById("homePage").classList.add("hidden");
  document.getElementById("commentsPage").classList.remove("hidden");
  document.getElementById("developerPage").classList.add("hidden");
  document.getElementById("registerPage").classList.add("hidden");
  document.getElementById("loginPage").classList.add("hidden");
  document.getElementById("profilePage").classList.add("hidden");
}

function showUpload() {
  document.getElementById("homePage").classList.add("hidden");
  document.getElementById("commentsPage").classList.add("hidden");
  document.getElementById("developerPage").classList.remove("hidden");
  document.getElementById("registerPage").classList.add("hidden");
  document.getElementById("loginPage").classList.add("hidden");
  document.getElementById("profilePage").classList.add("hidden");
}

function showRegister() {
  document.getElementById("homePage").classList.add("hidden");
  document.getElementById("registerPage").classList.remove("hidden");
}

function showLogin() {
  document.getElementById("homePage").classList.add("hidden");
  document.getElementById("loginPage").classList.remove("hidden");
}

function register() {
  let email = document.getElementById("registerEmail").value;
  let password = document.getElementById("registerPassword").value;
  let confirmPassword = document.getElementById("confirmPassword").value;

  if (password !== confirmPassword) {
    alert("كلمات المرور لا تطابق");
    return;
  }

  // Simulate registration
  currentUser = { email: email };
  alert("تم تسجيل الحساب بنجاح!");
  showHome();
}

function login() {
  let email = document.getElementById("loginEmail").value;
  let password = document.getElementById("loginPassword").value;

  // Simulate login
  if (email && password) {
    currentUser = { email: email };
    alert("تم تسجيل الدخول بنجاح!");
    showHome();
  } else {
    alert("يرجى إدخال البريد الإلكتروني وكلمة المرور");
  }
}

function updateUserName() {
  let nickname = document.getElementById("nickname").value;
  if (currentUser) {
    currentUser.nickname = nickname;
    document.getElementById("userName").textContent = `مرحبًا ${nickname}`;
  }
}

function saveProfile() {
  alert("تم حفظ التغييرات!");
}

function uploadProfileImage() {
  let file = document.getElementById("uploadImage").files[0];
  if (file) {
    document.getElementById("profileImage").src = URL.createObjectURL(file);
  }
}

function postComment() {
  let comment = document.getElementById("newComment").value;
  let name = document.getElementById("commentName").value;

  if (!comment || !name) {
    alert("يرجى ملء جميع الحقول");
    return;
  }

  let commentDiv = document.createElement("div");
  commentDiv.textContent = `${name}: ${comment}`;
  document.getElementById("chatBox").appendChild(commentDiv);

  document.getElementById("newComment").value = ""; // Clear input
}

function checkPassword() {
  let password = document.getElementById("passwordInput").value;

  if (password === "admin123") {
    document.getElementById("uploadForm").classList.remove("hidden");
  } else {
    alert("كلمة المرور غير صحيحة");
  }
}

function submitChapter() {
  alert("تم تحميل الفصل بنجاح!");
}
