// إظهار الصفحة الرئيسية
function showHome() {
    hideAllPages();
    document.getElementById("homePage").classList.remove("hidden");

    // تحديث النص في الصفحة الرئيسية إذا تم اختيار اسم المستخدم
    const nickname = localStorage.getItem("nickname") || "ضيف";
    document.getElementById("homePage").innerHTML = `<h2>مرحبًا, ${nickname}</h2><p>تابع أحدث الفصول وتفاعل مع القراء الآخرين.</p>`;
}

// إظهار صفحة التعليقات
function showComments() {
    hideAllPages();
    document.getElementById("commentsPage").classList.remove("hidden");

    // التحقق من إذا كان المستخدم قد اختار اسم وصورة
    const nickname = localStorage.getItem("nickname") || "ضيف";
    const profileImage = localStorage.getItem("profileImage") || "default-avatar.jpg";  // صورة افتراضية إذا لم يختارها المستخدم

    const commentsSection = document.getElementById("commentsSection");
    commentsSection.innerHTML = '';  // مسح التعليقات السابقة

    // إضافة واجهة إرسال رسالة
    const messageBox = `
        <div class="message-box">
            <input type="text" id="commentInput" placeholder="أكتب تعليقك هنا...">
            <button onclick="sendMessage()">إرسال</button>
        </div>
    `;
    commentsSection.innerHTML += messageBox;
}

// إرسال الرسالة في صفحة التعليقات
function sendMessage() {
    const commentInput = document.getElementById("commentInput").value;
    if (!commentInput.trim()) {
        alert("يرجى كتابة رسالة.");
        return;
    }

    const nickname = localStorage.getItem("nickname") || "ضيف";
    const profileImage = localStorage.getItem("profileImage") || "default-avatar.jpg";  // صورة افتراضية إذا لم يختارها المستخدم

    const comment = `
        <div class="comment">
            <img src="${profileImage}" alt="Profile" class="comment-avatar">
            <div class="comment-content">
                <strong>${nickname}</strong>
                <p>${commentInput}</p>
            </div>
        </div>
    `;

    const commentsSection = document.getElementById("commentsSection");
    commentsSection.innerHTML += comment;  // إضافة التعليق الجديد

    document.getElementById("commentInput").value = '';  // مسح خانة الإدخال بعد الإرسال
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
    
    // تحديث الصفحة وفقًا للاسم والصورة المختارة
    const nickname = localStorage.getItem("nickname") || "ضيف";
    const profileImage = localStorage.getItem("profileImage") || "default-avatar.jpg";

    document.getElementById("profileImage").src = profileImage;
    document.getElementById("nickname").value = nickname;
}

// حفظ التغييرات في ملف التعريف
function saveProfile() {
    const nickname = document.getElementById("nickname").value;
    const profileImage = document.getElementById("profileImage").src;

    // حفظ التغييرات في LocalStorage
    localStorage.setItem("nickname", nickname);
    localStorage.setItem("profileImage", profileImage);

    alert("تم حفظ التغييرات بنجاح!");
    showHome();  // العودة إلى الصفحة الرئيسية بعد الحفظ
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

// عند تحميل الصفحة، تحقق إذا كان المستخدم مسجل دخول بالفعل
window.onload = function() {
    if (localStorage.getItem("loggedIn") === "true") {
        document.getElementById("profileIcon").classList.remove("hidden");
        document.getElementById("registerBtn").classList.add("hidden"); // إخفاء زر التسجيل
        document.getElementById("loginBtn").classList.add("hidden"); // إخفاء زر تسجيل الدخول
        showHome();
    } else {
        document.getElementById("profileIcon").classList.add("hidden");
    }
};
