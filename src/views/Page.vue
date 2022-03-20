<template>
  <div class="mb-3">
    <h1>POST</h1>
    <div class="row">
      <div class="col">
        <input class="us1" v-model="post1" />
      </div>
    </div>

    <label class="form-check-label" for="flexRadioDefault2"> - </label>
    <div class="row">
      <div class="col">
        post<input class="us2" v-model="name1" /> city<input v-model="city" />
      </div>
    </div>

    <button @click="addData()" type="button" class="button">เสร็จสิ้น</button>
    <button @click="readData()" type="button" class="button">ดูข้อมูล</button>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Post</th>
          <th scope="col">Name</th>
          <th scope="col">city</th>
        </tr>
      </thead>
      <tbody v-for="(item, index) in dbData" :key="index">
        <tr>
          <th scope="row">{{ index }}</th>
          <td>{{ item.data.post1 }}</td>
          <td>{{ item.data.name1 }}</td>
          <td>{{ item.data.city }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import { db,auth } from "../plugins/firebaseinit";
import { collection, addDoc,onAuthStateChanged, getDocs } from "firebase/firestore";

export default {
  data() {
    return {
      dbData: [],
      post1: "",
      name1: "",
      city: "",
      email:"",
    };
  },
  methods: {
    async readData() {
      this.dbData = [];
      const querySnapshot = await getDocs(collection(db, "post"));
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        this.dbData.push({ id: doc.id, data: doc.data() });
      });
    },

    async addData() {
      try {
        const docRef = await addDoc(collection(db, "post"), {
          post1: this.post1,
          name1: this.name1,
          city: this.city,
          email: this.email,
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    },
    /* addit() {
      this.additems.push({
        text: this.name,
      });
    },*/
  },
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
};
</script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
.us1 {
  border: 1px solid rgb(139, 6, 247);
  background-color: rgb(245, 249, 250);
  padding-top: 10px;
  padding-right: 500px;
  padding-bottom: 200px;
  padding-left: 1px;
  border-style: double;
  border-width: 15px;
}
</style>