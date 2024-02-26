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
    --dividerColor: #f6f9ff;
    --lightStripColor: #c4b5fd;
  }

  body{
    margin: 0;
    padding: 0;
    overflow-x: hidden;
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

  nav > button{
    background-color: transparent;
    border: none;
  }

  nav > button:hover{
    cursor: pointer;
  }

  nav .navButtonsContainer{
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    gap: 5%;
    align-items: center;
    padding-top: 5%;
  }
  .showButtons{
    height: 100vh;
    margin: 0;
  }

  nav .showButtons #backButton{
    width: 40px;
    height: 40px;
  }

  nav .showButtons a{
    width: 50%;
    height: 25%;
    font-size: xx-large;
    text-align: center;
  }
  nav .navButtonsContainer .showButtons .navButtonsContainer{
    display: flex;
  }

  nav .navButtonsContainer button, nav .navButtonsContainer a{
    margin: 0;
    padding: 0;
    transition: all 0.2s ease-in-out;
    background-color: transparent;
    border: none;
    font-weight: bold;
  }
  nav .navButtonsContainer button:hover, nav .navButtonsContainer a:hover{
    cursor: pointer;
    scale: 1.2;
  }
  nav .navButtonsContainer button:active,nav .navButtonsContainer a:active{
    scale: 1.1;
    color: var(--lightPurpleColor);
  }

  nav .navButtonsContainer button a{
    display: block;
  }

  
  nav .navButtonsContainer #backButton{
    transform: rotate(-90deg);
    align-self: flex-end;
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
    font-size: 120%;
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

  #footer #infoColumn h3{
    font-weight: normal;
  }

  #footer #infoColumn > h3:last-of-type{
    font-size: 80%
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
    #footer{
      padding: 3% 5%;
    }
    #footer #infoColumn{
      width: 95%;
    }
  }

  @media screen and (min-width: 700px) {
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

    nav .navButtonsContainer a{
      font-size: medium;
    }
    nav .navButtonsContainer #backButton{
      display: none;
    }
  }

/*=====  End of Media Queries  ======*/




</style>