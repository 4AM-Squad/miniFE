let teacher = document.getElementById('teacher');
let student = document.getElementById('student');
let club = document.getElementById('club');
let body = document.getElementById('body');
window.addEventListener('load', () => {
    if (localStorage.role) {
        window.location.href = `${localStorage.role}/${localStorage.role}.html`;
    }
});

teacher.addEventListener('click', () => {
    window.location.href = 'teacher/login/login.html';
});

student.addEventListener('click', () => {
    window.location.href = 'student/Register/register.html';
});

club.addEventListener('click', () => {
    window.location.href = 'club/login/login.html';
});