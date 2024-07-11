// document.getElementById('login-form').addEventListener('submit', function(event) {
//     event.preventDefault();
//     let username = document.getElementById('username').value;
//     let password = document.getElementById('password').value;

//     let users = JSON.parse(localStorage.getItem('users')) || [];
//     let loggedInUser = users.find(user => user.username === username && user.password === password);

//     if (loggedInUser) {
//         sessionStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));

//         if (loggedInUser.role === 'admin') {
//             window.location.href = 'index.html';
//         } else if (loggedInUser.role === 'student') {
//             window.location.href = 'student-index.html';
//         }
//     } else {
//         alert('Invalid username or password');
//     }
// });



document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    // Retrieve users from localStorage
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Find the logged-in user
    let loggedInUser = users.find(user => user.username === username && user.password === password);

    if (loggedInUser) {
        // Save logged in user information in sessionStorage
        sessionStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
        
        // Redirect based on user role
        if (loggedInUser.role === 'admin') {
            window.location.href = 'index.html';
        } else if (loggedInUser.role === 'student') {
            window.location.href = 'student-index.html';
        }
    } else {
        alert('Invalid username or password');
    }
});

// Function to update header based on logged-in user
function updateHeader() {
    // Retrieve logged-in user from sessionStorage
    let loggedInUser = JSON.parse(sessionStorage.getItem('loggedInUser'));

    if (loggedInUser) {
        document.getElementById('header-right').innerHTML = `
            <span>Hi ${loggedInUser.username}</span>
            <a href="#">My Account</a>
            <a href="#">Logout</a>
        `;
    }
}
