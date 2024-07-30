

// document.getElementById('login-form').addEventListener('submit', function(event) {
//     event.preventDefault();
//     let username = document.getElementById('username').value;
//     let password = document.getElementById('password').value;

//     // Retrieve users from localStorage
//     let users = JSON.parse(localStorage.getItem('users')) || [];

//     // Find the logged-in user
//     let loggedInUser = users.find(user => user.username === username && user.password === password);

//     if (loggedInUser) {
//         // Save logged in user information in sessionStorage
//         sessionStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
        
//         // Redirect based on user role
//         if (loggedInUser.role === 'admin') {
//             window.location.href = 'center.html';
//         } else if (loggedInUser.role === 'student') {
//             window.location.href = 'student-index.html';
//         }
//     } else {
//         alert('Invalid username or password');
//     }
// });

// // Function to update header based on logged-in user
// function updateHeader() {
//     // Retrieve logged-in user from sessionStorage
//     let loggedInUser = JSON.parse(sessionStorage.getItem('loggedInUser'));

//     if (loggedInUser) {
//         document.getElementById('header-right').innerHTML = `
//             <span>Hi ${loggedInUser.username}</span>
//             <a href="#">My Account</a>
//             <a href="#">Logout</a>
//         `;
//     }
// }

// Sample hardcoded users for admin, student, and center
let hardcodedUsers = [
    { username: 'admin', password: 'admin123', fullname: 'Admin User', role: 'admin', institute: 'E-Max Education' },
    { username: 'student', password: 'student123', fullname: 'Student User', role: 'student', institute: 'E-Max Education' },
    { username: 'center', password: 'center123', fullname: 'Center User', role: 'center', institute: 'E-Max Education' }
];

// Initialize local storage with hardcoded users if it's empty
if (!localStorage.getItem('users')) {
    localStorage.setItem('users', JSON.stringify(hardcodedUsers));
}


document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    // Retrieve users from localStorage
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Debugging: Log user data and form values
    console.log('Users in localStorage:', users);
    console.log('Username:', username);
    console.log('Password:', password);

    // Find the logged-in user
    let loggedInUser = users.find(user => user.username === username && user.password === password);

    console.log('Logged In User:', loggedInUser);

    if (loggedInUser) {
        // Save logged in user information in sessionStorage
        sessionStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
        
        // Redirect based on user role
        if (loggedInUser.role === 'admin') {
            window.location.href = 'admin.html';
        } else if (loggedInUser.role === 'center') {
            window.location.href = 'center.html';
        } else if (loggedInUser.role === 'student') {
            window.location.href = 'student-index.html';
        }
    } else {
        alert('Invalid username or password');
    }
});
