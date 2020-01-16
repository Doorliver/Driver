// track if user is signed in or out
auth.onAuthStateChanged(user => {
    console.log(user);
});

// sign in
const signin = document.querySelector("#customerlogin");
signin.addEventListener('submit', (e) => {
    e.preventDefault();

    // get user info
    const email = signin['loginInputEmail'].value;
    const password = signin['loginInputPassword'].value;

    //sign in user
    auth.signInWithEmailAndPassword(email, password).then(() => {
        signin.reset();
    });
});

// sign out
const signout = document.querySelector('#signout');
signout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut();
});