<template>
  <Navbar></Navbar>
  <router-view></router-view>
</template>

<script>
import Navbar from '../src/components/Navbar.vue';

export default{
  components:{
    Navbar
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');

:root{
  --blackColor: #212121;
}

body{
  font-family: "Inter", sans-serif;
  margin: 0;
  padding: 0;
}

a{
  text-decoration: none;
  color: var(--blackColor);
}

*{
  box-sizing: border-box;
}

nav{
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0.5% 4%;
  height: 45px;
  margin-bottom: 10%;
}
nav img{
  cursor: pointer;
}

nav .navButtonsContainer{
  display: none;
  /* display: flex; */
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  gap: 5%;
  align-items: center;
  padding-top: 5%;
}
.showButtons{
  display: flex !important;
}


nav .navButtonsContainer h2{
  margin: 0;
  padding: 0;
  width: fit-content;
}

nav .navButtonsContainer #backButton{
  transform: rotate(-90deg);
  align-self: flex-end;
}
nav .navButtonsContainer #backButton:hover{
  cursor: pointer;
}

@media screen and (min-width: 600px){
  nav{
    gap: 3%;
    align-items: flex-end;
  }

  #hamburgerMenuIcon{
    display: none;
  }

  nav .navButtonsContainer{
    display: flex;
    flex-direction: row;
    padding-top: 0.3%;
    min-height: 36px;
    height: 100%;
    gap: 2%;
  }

  nav .navButtonsContainer h2{
    font-size: medium;
  }
  nav .navButtonsContainer #backButton{
    display: none;
  }
}


</style>