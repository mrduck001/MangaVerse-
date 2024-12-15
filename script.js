// ملف: scripts.js

// عرض الصفحة المطلوبة فقط
function showPage(pageId) {
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => {
    page.classList.remove('active');
    if (page.id === pageId) {
      page.classList.add('active');
    }
  });
}

// التحقق من التسجيل
document.getElementById('registerForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  if (password !== confirmPassword) {
    alert('كلمتا المرور غير متطابقتين!');
    return;
  }

  alert('تم التسجيل بنجاح!');
  showPage('home');
});

// تسجيل الدخول
document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('تم تسجيل الدخول بنجاح!');
  showPage('home');
});

// التعليقات
document.getElementById('commentsForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const comment = document.getElementById('comment').value;
  const commentImage = document.getElementById('commentImage').files[0];

  const commentDiv = document.createElement('div');
  const commentText = document.createElement('p');
  commentText.textContent = comment;

  commentDiv.appendChild(commentText);

  if (commentImage) {
    const img = document.createElement('img');
    img.src = URL.createObjectURL(commentImage);
    img.style.maxWidth = '100px';
    img.style.borderRadius = '5px';
    commentDiv.appendChild(img);
  }

  document.getElementById('commentsList').appendChild(commentDiv);
  document.getElementById('comment').value = '';
  document.getElementById('commentImage').value = '';
});

// المطورين
document.getElementById('developerForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const password = document.getElementById('developerPassword').value;

  if (password !== 'seenf0192') {
    alert('كلمة المرور غير صحيحة!');
    return;
  }

  alert('تم تحميل الفصل بنجاح!');
  document.getElementById('developerForm').reset();
});
