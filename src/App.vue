<template>
  <Navbar @toggleOverlay="this.hidePage = !this.hidePage"></Navbar>
  <router-view v-if="!this.hidePage"></router-view>
  <Footer v-if="!this.hidePage"></Footer>
</template>

<script>
import Navbar from '../src/components/Navbar.vue';
import Footer from '../src/components/Footer.vue';

export default{
  data() {
    return {
      hidePage: false
    }
  },
  components:{
    Navbar,
    Footer
  }
}
</script>

<style>

/*=============================================
=            General/Global Styling            =
=============================================*/
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');

:root{
  --blackColor: #212121;
  --greyishWhiteColor: #EAEAEA;
  --purpleColor: #7c3aed;
  --lightPurpleColor: #ede9fe;
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
/*=====  End of General/Global Styling  ======*/


/*=============================================
=            Style of the Navbar            =
=============================================*/
nav{
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 35px 4%;
  height: 45px;
  margin-bottom: 35px;
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
  height: 100vh;
}
.showButtons .navButtonsContainer{
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
/*=====  End of Style of the Navbar  ======*/


/*=============================================
=            Style Of the Footer            =
=============================================*/

#footer{
  background-color: black;
  color: var(--greyishWhiteColor);
  padding: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

#footer #infoColumn h3, #footer #infoColumn h5{
  font-weight: normal;
}

#footer #infoColumn h5{
  color: grey;
}

#footer #socialsColumn{
  width: 100%;
}

#footer #socialsColumn #socialIconsContainer{
  width: 100%;
  display: flex;
  justify-content: space-around;
}

/*=====  End of Style Of the Footer  ======*/


</style>