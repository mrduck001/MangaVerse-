// ملف: scripts.js

// التبديل بين الصفحات
function showPage(pageId) {
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => page.classList.remove('active'));
  document.getElementById(pageId).classList.add('active');
}

// التحقق من صحة التسجيل
document.getElementById('registerForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  if (password !== confirmPassword) {
    alert('كلمتا المرور غير متطابقتين!');
  } else {
    alert('تم التسجيل بنجاح!');
    showPage('home');
  }
});

// تسجيل الدخول
document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('تم تسجيل الدخول بنجاح!');
  showPage('home');
});

// إضافة تعليق
document.getElementById('commentsForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const comment = document.getElementById('comment').value;
  const commentsList = document.getElementById('commentsList');

  const commentElement = document.createElement('div');
  commentElement.textContent = comment;
  commentElement.style.border = '1px solid #ddd';
  commentElement.style.padding = '10px';
  commentElement.style.margin = '10px 0';
  commentElement.style.backgroundColor = '#fff';

  commentsList.appendChild(commentElement);
  document.getElementById('comment').value = '';
});
