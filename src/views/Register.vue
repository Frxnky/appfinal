<template>
  <div class="signin">
    <h1>REGISTER ID</h1>
    <h1>User Name : <input type="email" required v-model="email" /></h1>
    <h1>Password : <input type="password" required v-model="password" /></h1>
    <a class="button1" href="/page">Register</a>
  </div>
</template>

<script>
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../plugins/firebaseinit";
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    regis() {
      createUserWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("complete = " + user);
          this.$router.replace("/page");
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

<style></style>