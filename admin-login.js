// ==========================================
// FIREBASE ADMIN LOGIN
// ==========================================

const loginForm = document.getElementById("adminLoginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function(e) {

        e.preventDefault();

        const email =
            document.getElementById("username").value.trim();

        const password =
            document.getElementById("password").value;

        const loginButton =
            document.getElementById("loginButton");

        if (!email || !password) {

            alert("Please enter your email and password.");
            return;

        }

        loginButton.disabled = true;
        loginButton.innerText = "Logging in...";


        firebase.auth()
            .signInWithEmailAndPassword(email, password)

            .then(function(userCredential) {

                console.log(
                    "Firebase Admin Login:",
                    userCredential.user.email
                );

                localStorage.setItem(
                    "adminLoggedIn",
                    "true"
                );

                window.location.href = "admin.html";

            })

            .catch(function(error) {

                console.error(error);

                let message =
                    "Login failed. Please check your email and password.";

                if (error.code === "auth/invalid-credential") {
                    message = "Incorrect email or password.";
                }

                if (error.code === "auth/invalid-email") {
                    message = "Please enter a valid email address.";
                }

                if (error.code === "auth/user-not-found") {
                    message = "Admin account was not found.";
                }

                if (error.code === "auth/wrong-password") {
                    message = "Incorrect password.";
                }

                alert(message);

                loginButton.disabled = false;
                loginButton.innerText = "🔐 LOGIN";

            });

    });

}