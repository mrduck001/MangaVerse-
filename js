// Hamburger menu toggle
function toggleMenu() {
    const menu = document.getElementById('navMenu');
    menu.classList.toggle('active');
}

// Protect the Developer Page
const password = "seenf0192";

document.getElementById('devForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const enteredPassword = prompt("الرجاء إدخال كلمة السر:");

    if (enteredPassword === password) {
        document.querySelector('.protected').style.display = 'block';
    } else {
        alert("كلمة السر غير صحيحة.");
    }
});
