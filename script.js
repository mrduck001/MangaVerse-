// إظهار الصفحة الرئيسية
function showHome() {
    hideAllPages();
    document.getElementById("homePage").classList.remove("hidden");
}

// إظهار صفحة التعليقات
function showComments() {
    hideAllPages();
    document.getElementById("commentsPage").classList.remove("hidden");
}

// إظهار صفحة تحميل الفصول
function showUpload() {
    hideAllPages();
    document.getElementById("developerPage").classList.remove("hidden");
}

// إظهار صفحة تسجيل الدخول
function showLogin() {
    hideAllPages();
    document.getElementById("loginPage").classList.remove("hidden");
}

// إظهار صفحة التسجيل
function showRegister() {
    hideAllPages();
    document.getElementById("registerPage").classList.remove("hidden");
}

// إظهار ملف التعريف
function showProfile() {
    hideAllPages();
    document.getElementById("profilePage").classList.remove("hidden");
}

// إخفاء جميع الصفحات
function hideAllPages() {
    const pages = document.querySelectorAll(".container > div");
    pages.forEach(page => {
        page.classList.add("hidden");
    });
}

// تسجيل الدخول
function login() {
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    // هنا يمكن إضافة كود للتحقق من البيانات
    // في حال تم التحقق بنجاح
    document.getElementById("profileIcon").classList.remove("hidden");
    showHome();
}

// تسجيل حساب جديد
function register() {
    const email = document.getElementById("registerEmail").value;
    const password = document.getElementById("registerPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        alert("كلمات المرور غير متطابقة");
        return;
    }

    // هنا يمكن إضافة كود للتحقق من البيانات وتخزين الحساب
    showHome();
}

// حفظ التغييرات في ملف التعريف
function saveProfile() {
    const nickname = document.getElementById("nickname").value;
    const profileImage = document.getElementById("profileImage").src;

    // يمكنك هنا إضافة الكود لحفظ التغييرات على النيك نيم والصورة.
    alert("تم حفظ التغييرات بنجاح!");
}

// رفع الصورة الشخصية
function uploadProfileImage() {
    const file = document.getElementById("uploadImage").files[0];
    const reader = new FileReader();

    reader.onloadend = function() {
        const profileImage = document.getElementById("profileImage");
        profileImage.src = reader.result;
    };

    if (file) {
        reader.readAsDataURL(file);
    }
}

// التحقق من كلمة المرور للوصول إلى صفحة تحميل الفصول
function checkPassword() {
    const password = document.getElementById("passwordInput").value;
    const correctPassword = "seenf0192"; // يمكنك تغيير كلمة المرور هنا.

    if (password === correctPassword) {
        document.getElementById("uploadForm").classList.remove("hidden");
    } else {
        alert("كلمة المرور غير صحيحة!");
    }
}

// رفع الفصل
function submitChapter() {
    const chapterName = document.getElementById("chapterName").value;
    const chapterNumber = document.getElementById("chapterNumber").value;
    const chapterDescription = document.getElementById("chapterDescription").value;
    const chapterFile = document.getElementById("chapterFile").files[0];

    if (!chapterName || !chapterNumber || !chapterDescription || !chapterFile) {
        alert("يرجى ملء جميع الحقول!");
        return;
    }

    // هنا يمكنك إضافة كود لتحميل الفصل إلى الخادم أو حفظه محليًا.
    alert("تم تحميل الفصل بنجاح!");
}
