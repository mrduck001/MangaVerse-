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

// حالة تسجيل الدخول
let isLoggedIn = false;
let user = {};

// التحقق من كلمة المرور لفتح صفحة المطورين
function checkPassword() {
  const passwordInput = document.getElementById("passwordInput").value;
  const correctPassword = "seenf0192";

  if (passwordInput === correctPassword) {
    document.getElementById("uploadForm").style.display = "block";
    document.getElementById("passwordInput").disabled = true;
    alert("تم التحقق بنجاح! يمكنك الآن تحميل الفصل.");
  } else {
    alert("كلمة المرور غير صحيحة. يرجى المحاولة مرة أخرى.");
  }
}

// رفع الفصل
function submitChapter() {
  const chapterName = document.getElementById("chapterName").value;
  const chapterNumber = document.getElementById("chapterNumber").value;
  const chapterDescription = document.getElementById("chapterDescription").value;
  const chapterFile = document.getElementById("chapterFile").files[0];

  if (!chapterName || !chapterNumber || !chapterFile) {
    alert("يرجى ملء جميع التفاصيل وتحميل الفصل.");
    return;
  }

  // هنا يمكن إضافة كود لتحميل الصور إلى الخادم أو حفظها محليًا
  const reader = new FileReader();
  reader.onload = function (e) {
    // هنا يمكنك تخزين الفصول في مكان مناسب (مثل قاعدة بيانات أو localStorage مؤقتًا)
    const chapterData = {
      name: chapterName,
      number: chapterNumber,
      description: chapterDescription,
      file: e.target.result, // حفظ بيانات الملف بشكل مؤقت (في حالة رفعه محليًا)
    };

    // تخزين البيانات في localStorage أو إرسالها إلى الخادم
    localStorage.setItem("chapter_" + chapterNumber, JSON.stringify(chapterData));

    // عرض إشعار بعد تحميل الفصل
    alert("تم تحميل الفصل بنجاح!");
    document.getElementById("successMessage").textContent = "تم رفع الفصل بنجاح! الفصل الآن متاح للمستخدمين.";
    document.getElementById("successMessage").style.display = "block";
    
    // تحديث الصفحة الرئيسية لعرض الفصل الجديد (يمكنك إضافة فصل جديد في الصفحة الرئيسية هنا)
  };
  reader.readAsDataURL(chapterFile); // تحميل الملف من الجهاز
}

// إظهار رسالة النجاح بعد رفع الفصل
function showSuccessMessage() {
  const successMessage = document.createElement("div");
  successMessage.id = "successMessage";
  successMessage.textContent = "تم رفع الفصل بنجاح!";
  successMessage.style.color = "green";
  document.body.appendChild(successMessage);
}

// تحديث الواجهة لعرض الفصل الجديد
function updateHomePage() {
  // جلب جميع الفصول المخزنة وعرضها للمستخدمين
  const chapterKeys = Object.keys(localStorage);
  chapterKeys.forEach((key) => {
    if (key.startsWith("chapter_")) {
      const chapterData = JSON.parse(localStorage.getItem(key));
      displayChapter(chapterData);
    }
  });
}

// عرض الفصل في الصفحة الرئيسية
function displayChapter(chapterData) {
  const chapterContainer = document.createElement("div");
  chapterContainer.classList.add("chapter");

  const chapterTitle = document.createElement("h3");
  chapterTitle.textContent = `فصل ${chapterData.number}: ${chapterData.name}`;
  chapterContainer.appendChild(chapterTitle);

  const chapterDesc = document.createElement("p");
  chapterDesc.textContent = chapterData.description;
  chapterContainer.appendChild(chapterDesc);

  // إضافة زر لقراءة الفصل
  const readButton = document.createElement("button");
  readButton.textContent = "قراءة الفصل";
  chapterContainer.appendChild(readButton);

  readButton.onclick = function() {
    alert(`فتح الفصل رقم ${chapterData.number} - ${chapterData.name}`);
    // هنا يمكن فتح الفصل وعرضه بطريقة احترافية
  };

  // إضافة الفصل إلى الصفحة الرئيسية
  document.getElementById("homePage").appendChild(chapterContainer);
}

// الحفاظ على حالة تسجيل الدخول
function checkLoginStatus() {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  if (storedUser) {
    isLoggedIn = true;
    user = storedUser;
    updateUI();
  } else {
    alert("من فضلك سجل الدخول.");
  }
}

// تحديث الواجهة بناءً على حالة تسجيل الدخول
function updateUI() {
  if (isLoggedIn) {
    document.getElementById("profileIcon").style.display = "block";
    document.getElementById("loginBtn").style.display = "none";
  } else {
    document.getElementById("profileIcon").style.display = "none";
    document.getElementById("loginBtn").style.display = "block";
  }
}
