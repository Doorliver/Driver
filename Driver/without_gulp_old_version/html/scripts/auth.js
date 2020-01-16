// track if user is signed in or out
auth.onAuthStateChanged(user => {
    if (user) {
        console.log(user);
    }
});

//sign user up
const signupForm = document.querySelector('#contactform');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // get user info
    const firstName = signupForm['loginInputName'].value;
    const lastName = signupForm['loginLastName'].value;
    const email = signupForm['loginInputEmail'].value;
    const password = signupForm['loginInputPassword'].value;

    auth.createUserWithEmailAndPassword(email, password).then((user) => {
        var uid = auth.currentUser.uid;
        logUser(uid, firstName, lastName, email, password);
    }, (error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage);
    });
})

function logUser(uid, fn, ln, em, pw) {
    db.collection('drivers').doc(uid).set({
        firstName: fn,
        lastName: ln,
        email: em,
        password: pw
    }).then(() => {
        console.log('finished!');
        window.location = "./new_coming_soon.html";
    }).catch((error) => {
        console.error("Error:", error);
    });
}

//sign user out
const signout = document.querySelector('#signout');
signout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut();
});