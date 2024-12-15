// Toggle Hamburger Menu
function toggleMenu() {
    const menu = document.getElementById('navMenu');
    menu.classList.toggle('active');
}

// Protect the Developer Page
const password = "seenf0192";

document.getElementById('devForm').addEventListener('submit', function (event) {
    event.preventDefault(); // منع إعادة تحميل الصفحة عند الضغط على الزر
    
    const enteredPassword = prompt("الرجاء إدخال كلمة السر:");
    
    if (enteredPassword === password) {
        const protectedSection = document.querySelector('.protected');
        protectedSection.style.display = 'block'; // إظهار الصفحة المحمية
        alert("مرحبًا بك! يمكنك الآن رفع الفصول.");
    } else {
        alert("كلمة السر غير صحيحة. حاول مرة أخرى!");
    }
});

// Event Listener for Hamburger Icon
const hamburger = document.querySelector('.hamburger');
if (hamburger) {
    hamburger.addEventListener('click', toggleMenu);
}
