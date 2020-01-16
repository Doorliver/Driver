// complete sign up / register
const signupForm = document.querySelector('#contactform');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // get user info
    const address = signupForm['loginInputAddress'].value;
    const postalCode = signupForm['loginInputPostalCode'].value;
    const age = signupForm['loginInputAge'].value;
    const cc = signupForm['loginInputCC'].value;

    const uid = auth.currentUser.uid;

    db.collection('drivers').doc(uid).set({
        address: address,
        postalCode: postalCode,
        age: age,
        cc: cc
    }, {
        merge: true
    }).then(() => {
        console.log("finished pt2");
    }).catch((error) => {
        console.error("Error:", error);
    });
});

// sign out
const signout = document.querySelector('#signout');
signout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut().then(() => {
        console.log('user signed out!');
    });
});

// track if user is signed in or out
auth.onAuthStateChanged(user => {
    console.log(user);
});