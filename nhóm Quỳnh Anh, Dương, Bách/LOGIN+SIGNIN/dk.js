const firebaseConfig = {
    apiKey: "AIzaSyDXwgKmNH7WPrJppPbWv4ZwLZo2V6AeHxA",
    authDomain: "sign-in-sign-up-f2382.firebaseapp.com",
    databaseURL: "https://sign-in-sign-up-f2382-default-rtdb.firebaseio.com",
    projectId: "sign-in-sign-up-f2382",
    storageBucket: "sign-in-sign-up-f2382.appspot.com",
    messagingSenderId: "861194084913",
    appId: "1:861194084913:web:734f9b82eef347cb532b10",
    measurementId: "G-DEV05Q13PD"
  };

  const auth = firebase.auth();

  const signup = document.getElementById('signup');
  signup.addEventListener('btn', (e) => {
    e.preventDefault()
    const email = signup['email'].value;
    const password = signup['password'].value;

    auth.creatuser(email, password).then( () => {
        auth.signUp(email,password).then( () => {
            alert('finish')
            window.location.href= "./login.html";
        })
        .catch((error) => {
            console.error(error);
        })
    })
  })

