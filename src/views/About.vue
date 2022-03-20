<template>
  <div class="about">
    <h1 style="background-color: Orange">Account ID</h1>
    <h2>Email: {{ email }}</h2>
    <h2>UID: {{ uid }}</h2>
  </div>
</template>

<script>
import { auth } from "../plugins/firebaseinit";
import { onAuthStateChanged } from "firebase/auth";
export default {
  data() {
    return {
      email: "",
    };
  },
  mounted() {
    this.checkLogin();
  },

  methods: {
    checkLogin() {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const uid = user.uid;
          console.log(uid);
          this.email = user.email;
          this.uid = user.uid;
        } else {
          alert("ยังไม่ได้ Login");
          this.$router.push("/login");
        }
      });
    },
  },
};
</script>

<style></style>