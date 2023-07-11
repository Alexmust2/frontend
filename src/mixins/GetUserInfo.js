import { getAuth, onAuthStateChanged, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";


export default {
    data() {
        return {
            name: ''
        }
    },
    mounted() {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                user.displayName = user.email.split("@")[0];
                this.name = user.displayName;
            }
            else {
                console.log('loggetout')
            }
        });
    },
    methods: {
        logout() {
            const auth = getAuth();
            signOut(auth).then(() => {
                this.$router.push("/");
            });
        },
        signIn() {
            signInWithEmailAndPassword(getAuth(), this.email, this.password)
              .then((data) => {
                this.$router.push('/forums')
              }).catch((error) => {
                console.log(error.code);
                switch (error.code) {
                  case "auth/invalid-email":
                    this.errMsg = "Invalid email"
                    break;
                  case "auth/user-not-found":
                    this.errMsg = "No account with that email was found"
                    break;
                  case "auth/wrong-password":
                    this.errMsg = "Incorect password"
                    break;
                  default:
                    this.errMsg = "Email or password was incorrect"
                    break;
                }
              })
            },
            showpass() {
                const pass = document.querySelector('.password')
                if(pass.getAttribute('type') === 'password'){
                  pass.setAttribute('type', 'text')
                } else {
                  pass.setAttribute('type', 'password')
                }
            },
            createAccount() {
                if (this.email != '' && this.password != ''){
                   createUserWithEmailAndPassword(getAuth(), this.email, this.password)
                   .then((data) => {
                    console.log("Successfuly registered")
                    this.$router.push('/forums')
                   }).catch((error) => {
                    console.log(error.code);
                    alert(error.message)
                   })
                } else {
                  alert('error')
                }
              }
        }
    }