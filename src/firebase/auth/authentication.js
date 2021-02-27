import firebase from 'firebase/auth';

const auth = firebase.auth();

const signIn = (email, password, onSignInSuccess, onSignInFailure) => {
    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in 
            var user = userCredential.user;
            // ...
            onSignInSuccess(userCredential)
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            // ..
            onSignInFailure(error)
        });
}

const signUp = (email, password, onSignUpSuccess, onSignUpFailure) => {
    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in 
            var user = userCredential.user;
            // ...
            onSignUpSuccess(userCredential)
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            onSignUpFailure(error)
        });
}

const signOut = (onSignOutSuccess, onSignOutFailure) => {
    auth.signOut().then(() => {
        onSignOutSuccess()
    }).catch((error) => {
        onSignOutFailure(error)
    });
}

const authStateChangeListener = (onAuthChange) => {
    auth.onAuthStateChanged(function (user) {
        if (user) {
            // User is signed in.
        } else {
            // No user is signed in.
        }
        onAuthChange(user)
    });
}

const currentUser = () => {
    return auth.currentUser
}

const resetPassword = (email, onResetPasswordSuccess, onResetPasswordFailure) => {
    auth.sendPasswordResetEmail(email).then(function () {
        // Email sent.
        onResetPasswordSuccess()
    }).catch(function (error) {
        // An error happened.
        onResetPasswordFailure()
    });
}

const reAuthenticateUser = (password, onReAuthenticateSuccess, onReAuthenticateFailure) => {
    let user = currentUser()
    const credential = firebase.auth.EmailAuthProvider.credential(
        user.email,
        password
    );
    user.reauthenticateWithCredential(credential).then(function () {
        // User re-authenticated.
        onReAuthenticateSuccess()
    }).catch(function (error) {
        // An error happened.
        onReAuthenticateFailure()
    });
}

const deleteUser = (onDeleteUserSuccess, onDeleteUserFailure) => {
    currentUser().delete().then(function () {
        // User deleted.
        onDeleteUserSuccess()
    }).catch(function (error) {
        // An error happened.
        onDeleteUserFailure()
    });
}

export { signIn, signUp, signOut, authStateChangeListener, resetPassword, reAuthenticateUser, deleteUser }