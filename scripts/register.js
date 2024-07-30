
// // Sample hardcoded users for admin and student
// let hardcodedUsers = [
//     { username: 'admin', password: 'admin123', fullname: 'Admin User', role: 'admin', institute: 'E-Max Education' },
//     { username: 'student', password: 'student123', fullname: 'Student User', role: 'student', institute: 'E-Max Education' }
// ];

// // Check if users exist in localStorage, if not, initialize with hardcoded users
// let users = JSON.parse(localStorage.getItem('users')) || hardcodedUsers;

// document.getElementById('register-form').addEventListener('submit', function(event) {
//     event.preventDefault();
//     let username = document.getElementById('username').value;
//     let password = document.getElementById('password').value;
//     let fullname = document.getElementById('fullname').value;
//     let role = document.querySelector('input[name="role"]:checked').value; // Get the selected role

//     // Create a new user object
//     let newUser = {
//         username: username,
//         password: password,
//         fullname: fullname,
//         role: role,
//         institute: "E-Max Education" // Assuming fixed institute name
//     };

//     // Check if username already exists
//     if (users.some(user => user.username === username)) {
//         alert('Username already exists. Please choose a different username.');
//         return;
//     }

//     // Add new user to users array
//     users.push(newUser);

//     // Save updated users array back to localStorage
//     localStorage.setItem('users', JSON.stringify(users));

//     alert('Registration successful');
//     // Redirect or update UI as needed
//     window.location.href = 'login.html';
// });

// function updateHeader(username) {
//     document.getElementById('header-right').innerHTML = `
//         <span>Hi ${username}</span>
//         <a href="#">My Account</a>
//         <a href="#">Logout</a>
//     `;
// }


// Register form submission handler
document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let fullname = document.getElementById('fullname').value;
    let role = document.querySelector('input[name="role"]:checked')?.value; // Get the selected role

    if (!role) {
        alert('Please select a role.');
        return;
    }

    // Create a new user object
    let newUser = {
        username: username,
        password: password,
        fullname: fullname,
        role: role,
        institute: "E-Max Education" // Assuming fixed institute name
    };

    // Check if username already exists
    if (users.some(user => user.username === username)) {
        alert('Username already exists. Please choose a different username.');
        return;
    }

    // Add new user to users array
    users.push(newUser);

    // Save updated users array back to localStorage
    localStorage.setItem('users', JSON.stringify(users));

    alert('Registration successful');
    // Redirect to login page
    window.location.href = 'login.html';
});

// Function to update header based on logged-in user
function updateHeader(username) {
    document.getElementById('header-right').innerHTML = `
        <span>Hi ${username}</span>
        <a href="#">My Account</a>
        <a href="#">Logout</a>
    `;
}
