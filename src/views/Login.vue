<template>
  <div class="signin">
    <h1>Login ID</h1>
    <h1>User Name : <input type="email" required v-model="email" /></h1>
    <h1>Password : <input type="password" required v-model="password" /></h1>
    <button class="button" href="/page" @click="login()">Login</button>
    <a class="button1" href="/register">Register</a>
    <a class="button2" href="/" @click="logout()">Logout</a>
  </div>
</template>

<script>
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../plugins/firebaseinit";
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    logout() {
      //    const auth = getAuth();
      signOut(auth)
        .then(() => {
          // Sign-Out successful.
          this.$router.replace("/login");
        })
        .catch((error) => {
          // An error happened.
          console.log(error);
        });
    },

    login() {
      //const auth = getAuth();
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("User = " + user);
          this.$router.replace("/page");
          // ...
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + " " + errorMessage);
        });
    },
    
  },
};
</script>

<style>
.button {
  background-color: #f10ba4;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
.button1 {
  background-color: #f1380a;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
.button2{
  background-color: #148ef1;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  
}
</style>
