<template>
<div id="content">

    <div id="contactInformationContainer">
        <div class="headerContainer">
            <h1>Contact Information</h1>
            <h2>Have an inquiry? Fill out the form to contact our team.</h2>
        </div>
        <div id="dataContainer">
            <div class="row"><img src="../assets/images/phone.svg" alt="This is a fun icon depicting a phone"><h1>+36 30 123 4567</h1></div>
            <div class="row"><img src="../assets/images/email.svg" alt="This is a fun icon depicting a letter"><h1>support@dineease.com</h1></div>
            <div class="row"><img src="../assets/images/location-filled.svg" alt="This is a fun icon depicting a location pin"><h1>132 Dartmouth Street Boston, Massachusetts 02156 United States</h1></div>
        </div>
        <div id="bottomCircle1"></div>
        <div id="bottomCircle2"></div>
        <div class="socialIconsContainer">
            <img src="../assets/images/Facebook Iconvector.svg" alt="This is an icon to our Facebook page" title="This is an icon to our Facebook page">
            <img src="../assets/images/Instagram Iconvector.svg" alt="This is an icon to our Instagram page" title="This is an icon to our Instagram page">
            <img src="../assets/images/Twitter Iconvector.svg" alt="This is an icon to our Twitter page" title="This is an icon to our Twitter page">
        </div>
    </div>

    <div id="informationContainer">
        <div class="headerContainer">
            <h1>Contact Us</h1>
            <h2>Have an inquiry? Fill out the form to contact our team.</h2>
        </div>
        <div id="formContainer">
            <form action="">
                <input type="text" placeholder="First Name">
                <input type="text" placeholder="Last Name">
                <input type="email" placeholder="Email">
                <input type="number" placeholder="Phone Number">
                <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
                <button>Send Message</button>
            </form>
        </div>
    </div>
</div>


</template>
<script>
export default {
    
}
</script>
<style>

/*===============================================================================
=            Style of the header (Used in multiple pages in the page)            =
=================================================================================*/

    #contactInformationContainer .headerContainer, #informationContainer .headerContainer{
        text-align: left;
        height: 20%;
        display: flex;
        justify-content: center;
    }
    #contactInformationContainer .headerContainer h1{
        font-size: x-large;
    }
    #contactInformationContainer .headerContainer h2{
        margin: 0;
    }

/*=====  End of Style of the header (Used in multiple pages in the page)  ======*/


/*=============================================================================
=            Style of the Purple box (conctactInformationContainer)            =
==============================================================================*/

    #contactInformationContainer{
        display: flex;
        flex-direction: column;
        background-color: var(--purpleColor);
        color: white;
        padding: 4% 4%;
        margin: 0 4% 50px 4%;
        border-radius: 10px;
        justify-content: space-between;
        position: relative;
        overflow: hidden;
        gap: 50px;
    }

    #contactInformationContainer #dataContainer{
        height: 300px;
        width: 75%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        gap: 20px;
    }

    #contactInformationContainer #dataContainer .row{
        display: flex;
        gap: 20px;
        align-items: center;
    }
    
    #contactInformationContainer #dataContainer .row h1{
        font-size: 100%;
        font-weight: normal;
    }
    
    #contactInformationContainer .socialIconsContainer{
        width: 20%;
        justify-content: space-between;
    }

    #contactInformationContainer #bottomCircle1{
        background-color: var(--lightPurpleColor);
        opacity: 0.2;
        border-radius: 50%;
        width: 110px;
        aspect-ratio: 1;
        position: absolute;
        bottom: -40px;
        right: -30px;
    }
    #contactInformationContainer #bottomCircle2{
        background-color: var(--lightPurpleColor);
        opacity: 0.2;
        border-radius: 50%;
        width: 80px;
        aspect-ratio: 1;
        position: absolute;
        bottom: 30px;
        right: 20px;
    }

/*=====  End of Style of the Purple box (conctactInformationContainer)  ======*/


/*==================================================================
=            Style of the feedback/information container            =
===================================================================*/

    #informationContainer .headerContainer h2{
        margin: 0;
        margin-bottom: 20px;
    }

    #informationContainer{
        padding: 0 4%;
    }

    #formContainer{
        display: flex;
        flex-direction: column;
    }

    /*----------  Style of the form elements  ----------*/

    #formContainer input, #formContainer textarea{
        border: none;
        background-color: var(--greyishWhiteColor);
        resize: none;
        border-radius: 5px;
        padding: 3%;
        font-size: medium;
    }
    #formContainer input{
        width: 95%;
        margin: 10px 0;
    }
    #formContainer textarea{
        margin-top: 2.5%;
        width: 95%;
    }
    #formContainer input:focus, #formContainer textarea:focus{
        outline: none;
    }
    
    #formContainer button{
        border: 0;
        border-radius: 5px;
        padding: 20px 50px;
        margin: 10% 0;
        background-color: var(--purpleColor);
        color: white;
        transition: all 0.2s ease-in-out;
    }
    #formContainer button:hover{
        cursor: pointer;
        background-color: var(--lightPurpleColor);
        outline: 2px solid var(--purpleColor);
        color: black;
        scale: 1.2;
    }
    #formContainer button:active{
        scale: 1.1;
        outline: 2px solid var(--lightPurpleColor);
    }

    /*----------  End of the Style of the form elements  ----------*/
    
/*=====  End of Style of the feedback/information container  ======*/


/*=============================================
=            Media Queries            =
=============================================*/

    @media screen and (min-width: 400px) and (orientation: portrait){
        #contactInformationContainer #bottomCircle1{
            width: 150px;
            bottom: -40px;
            right: -40px;
        }
        #contactInformationContainer #bottomCircle2{
            width: 100px;
            bottom: 40px;
            right: 40px;
        } 
    }

    @media screen and (min-width: 500px) {
        #formContainer input:nth-child(odd){
            margin: 2.5% 2.5% 2.5% 0;
        }
        #formContainer input:nth-child(even){
            margin: 2.5% 0 2.5% 2.5%;
        }
        #formContainer input{
            width: 45%;
        }
    }

    @media screen and (min-width: 600px) and (orientation: portrait){
        #contactInformationContainer #bottomCircle1{
            width: 180px;
            bottom: -40px;
            right: -35px;
        }
        #contactInformationContainer #bottomCircle2{
            width: 110px;
            bottom: 60px;
            right: 75px;
        } 
        #informationContainer input, #informationContainer textarea{
            padding: 2%;
        }
    }

    @media screen and (min-width: 800px) and (orientation: portrait){
        #contactInformationContainer #bottomCircle1{
            width: 200px;
            bottom: -50px;
        }
        #contactInformationContainer #bottomCircle2{
            width: 120px;
        } 
    }

    @media screen and (min-width: 992px){
        #content{
            display: flex;
        }
        
        /*=============================================
        =            Style of the purple Block            =
        =============================================*/
        
        #contactInformationContainer{
            padding: 2%;
            width: 40%;
        }
        
        #contactInformationContainer #dataContainer{
            width: 100%;
            font-size: 140%;
        }
        
        #contactInformationContainer .headerContainer h1{
            font-size: 200%;
        }
        #contactInformationContainer .headerContainer h2{
            font-size: 140%;
        }
        
        #contactInformationContainer .socialIconsContainer{
            height: 40px;
        }

        #contactInformationContainer .socialIconsContainer img{
            height: 100%;
            aspect-ratio: 1;
        }
        
        /*=====  End of Style of the purple Block  ======*/

        
        /*=============================================
        =            Style of the Contact Us section            =
        =============================================*/
        
        
        
        #informationContainer{
            width: 60%;
        }
        
        #informationContainer input, #informationContainer textarea{
            padding: 3%;
        }
        
        #informationContainer button{
            margin: 10% 0;
        }
        
        /*=====  End of Style of the Contact Us section  ======*/

        #contactInformationContainer #bottomCircle1{
            width: 250px;
            bottom: -70px;
            right: -80px;
        }
        #contactInformationContainer #bottomCircle2{
            width: 125px;
            bottom: 80px;
            right: 80px;
        }
    }

/*=====  End of Media Queries  ======*/

</style>