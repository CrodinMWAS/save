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
    --pinkColor: #ded6fb;
  }

  body{
    margin: 0;
    padding: 0;
  }

  a{
    text-decoration: none;
    color: var(--blackColor);
  }

  *{
    font-family: "Inter", sans-serif;
    box-sizing: border-box;
  }

  .socialIconsContainer{
    width: 100%;
    display: flex;
    justify-content: space-around;
  }

  .socialIconsContainer img{
    margin: 0 10px 0 0; 
  }

/*============================================================================
=            Style Of Headers (Used in Multiple Places in the Project)            =
==============================================================================*/

  .headerContainer{
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  .headerContainer h1{
    font-weight: bold;
    font-size: xx-large;
    margin: 10px;
  }

  .headerContainer h2{
    margin: 10px;
    margin-bottom: 50px;
    font-weight: normal;
    font-size: medium;
  }

/*=====  End of Style Of Headers (Used in Multiple Places in the Project)  ======*/

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
    user-select: none;
  }

  nav img:hover{
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
    transition: all 0.2s ease-in-out;
  }
  nav .navButtonsContainer h2:hover{
    cursor: pointer;
    scale: 1.2;
  }
  nav .navButtonsContainer h2:active{
    scale: 1.1;
    color: var(--lightPurpleColor);
  }
  
  nav .navButtonsContainer #backButton{
    transform: rotate(-90deg);
    align-self: flex-end;
  }
  nav .navButtonsContainer #backButton:hover{
    cursor: pointer;
    scale: 1.2;
  }
  nav .navButtonsContainer #backButton:active{
    scale: 1.1;
    color: var(--lightPurpleColor);
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

  #footer #infoColumn a{
    color: white;
  }
  #footer #infoColumn a:hover{
    cursor: pointer;
    color: var(--purpleColor)
  }
  #footer #infoColumn a:active{
    color: var(--blackColor)
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

/*=====  End of Style Of the Footer  ======*/


/*=============================================
=            Media Queries            =
=============================================*/

  @media screen and (min-width: 450px) {
    #footer{
      padding: 5%;
      flex-direction: row;
      text-align: left;
      justify-content: space-between;
      align-items: flex-start;
    }

    #footer #infoColumn{
      width: 45%;
    }

    #footer #socialsColumn{
      width: 30%;
    }

    .socialIconsContainer{
      justify-content: flex-start;
    }
  }

  @media screen and (min-width: 600px) {
    #footer #infoColumn{
      width: 95%;
    }
    #footer #infoColumn #contactContainer{
      display: flex;
      gap: 20px;
    }
  }

  @media screen and (min-width: 768px) {
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

/*=====  End of Media Queries  ======*/




</style>