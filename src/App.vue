<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>|
      <router-link to="login">Login</router-link> |
      <router-link to="/register">Register</router-link> |
      <router-link to="/page">Page</router-link> |
       <router-link to="change">Change</router-link> |
      
      
      
    </div>
   >
    <router-view />
  </div>
</template>

<style>
#app {
  margin:0%;
  padding: 0%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ee8e10;
}
body{
  background: #7463a7;
}

#nav {
  padding: 10px;
}

#nav a {
  font-weight: bold;
  color: #0d7ceb;
}

#nav a.router-link-exact-active {
  color: #f1860c;
}

</style>
