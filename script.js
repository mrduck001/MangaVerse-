// Toggle Hamburger Menu
function toggleMenu() {
    const menu = document.getElementById('navMenu');
    menu.classList.toggle('active');
}

// Protect the Developer Page
const password = "seenf0192";
document.getElementById('devForm').addEventListener('submit', function (event) {
    event.preventDefault(); // منع إعادة تحميل الصفحة
    
    const enteredPassword = prompt("الرجاء إدخال كلمة السر:");
    
    if (enteredPassword === password) {
        document.querySelector('.protected').style.display = 'block'; // إظهار الصفحة المحمية
        alert("مرحبًا بك في صفحة المطور!");
    } else {
        alert("كلمة السر غير صحيحة.");
    }
});

// Handle Chapter Upload
document.getElementById('uploadForm').addEventListener('submit', function (event) {
    event.preventDefault(); // منع إعادة تحميل الصفحة
    
    const mangaName = document.getElementById('mangaName').value;
    const chapterNumber = document.getElementById('chapterNumber').value;
    const chapterFiles = document.getElementById('chapterFiles').files;

    if (!mangaName || !chapterNumber || chapterFiles.length === 0) {
        alert("الرجاء إدخال جميع البيانات.");
        return;
    }

    const chapterSection = document.getElementById('chapters');
    chapterSection.innerHTML = ''; // مسح الرسالة القديمة
    
    // إنشاء عنصر جديد لعرض الفصل
    const chapterDiv = document.createElement('div');
    chapterDiv.classList.add('chapter');

    const chapterDetails = `
        <h3>${mangaName} - الفصل ${chapterNumber}</h3>
        <p>عدد الصفحات: ${chapterFiles.length}</p>
    `;

    chapterDiv.innerHTML = chapterDetails;
    chapterSection.appendChild(chapterDiv);

    alert("تم رفع الفصل بنجاح!");
});
