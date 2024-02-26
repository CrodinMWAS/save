<template>
    <header class="headerContainer">
        <h1>About Us</h1>
        <h2>Embracing the Joy of Dining</h2>
    </header>
    <section id="timeline" role="region" aria-label="Timeline">

        <!-- Not Visible Timeline, Only Visible To The screenReader -->
        <!-- Adding This was a must, Due To My Timeline Design and Structure. -->

        <h1 class="hidden">2019</h1>
        <p class="hidden">Birth of DineEase</p>
        <h2 class="hidden">2020</h2>
        <p class="hidden">Culinary Connections Made</p>
        <h3 class="hidden">2021</h3>
        <p class="hidden">Curatorial Excellence Emerges</p>
        <h4 class="hidden">2022</h4>
        <p class="hidden">Redefining Dining Landscape</p>
        <h5 class="hidden">2023</h5>
        <p class="hidden">Redefining Dining Landscape</p>

        <div id="topRow">
            <div class="cell"> <h3 aria-hidden="true" class="date">2019</h3> </div>
            <div class="cell"> <h3 aria-hidden="true">Culinary Connections Made</h3> <div class="lineContainer"><div class="line"><div class="circle"></div></div></div> </div>
            <div class="cell"> <h3 aria-hidden="true" class="date">2021</h3> </div>
            <div class="cell"> <h3 aria-hidden="true">Redefining Dining Landscape</h3> <div class="lineContainer"><div class="line"><div class="circle"></div></div></div> </div>
            <div class="cell"> <h3 aria-hidden="true" class="date">2023</h3> </div>
        </div>
        <div id="bottomRow">
            <div class="cell"> <div class="lineContainer"><div class="line"><div class="circle"></div></div></div> <h3 aria-hidden="true">Birth of DineEase</h3> </div>
            <div class="cell"> <h3 aria-hidden="true" class="date">2020</h3> </div>
            <div class="cell"> <div class="lineContainer"><div class="line"><div class="circle"></div></div></div> <h3 aria-hidden="true">Curatorial Excellence Emerges</h3> </div>
            <div class="cell"> <h3 aria-hidden="true" class="date">2022</h3> </div>
            <div class="cell"> <div class="lineContainer"><div class="line"><div class="circle"></div></div></div> <h3 aria-hidden="true">Redefining Dining Landscape</h3> </div>
        </div>
    </section>

    <header class="headerContainer" role="banner" aria-label="Our Team">
        <h1>Meet our team</h1>
        <h2>The Culinary Visionaries Behind DineEase</h2>
    </header>
    <section id="employeeContainer" role="region" aria-label="Employees">
        <Employee v-for="(employee, index) in employees" :key="index" :image="employee.image" :name="employee.name" :title="employee.title" ></Employee>
    </section>

    <section id="connectionSection" role="region" aria-label="Connection Region">
        <div id="connectionContainer">
            <h1>Connect with DineEase</h1>
            <p>Hungry for more? Whether you have questions, feedback, or simply wish to share your culinary story, we're eager to hear from you. Dive deeper into the DineEase experience and let's make every meal memorable.</p>
            <router-link to="/Contact">
                <div id="connectionButton" @click="scrollToTop()"><h1>Connect With DineEase</h1></div>
            </router-link>
        </div>
    </section>
</template>

<script>
import Employee from '../components/Employee.vue';

export default {
    components:{
    Employee
},
    data() {
        return {
            employees: [
                    {
                        image: 1,
                        name: "Elena Martinez",
                        title: "Founder & CEO"
                    },
                    {
                        image: 2,
                        name: "Raj Singh",
                        title: "Chief Culinary Curator"
                    },
                    {
                        image: 3,
                        name: "Sophia Dawson",
                        title: "Director of Community Engagement"
                    },
                    {
                        image: 4,
                        name: "Lucas Kim",
                        title: "Head of Digital Strategy"
                    },
                    {
                        image: 5,
                        name: "Aisha Abdi",
                        title: "Marketing & Brand Manager"
                    },
                ],
        }
    },
    methods: {
        scrollToTop(){
            window.scrollTo(0, 0);
        }
    },
}
</script>

<style>
/*=============================================
=            Style of the Timeline            =
=============================================*/

    /* Not Visible Timeline, Only Visible To The screenReader  */
    .hidden{
        position: absolute;
        width: 1px;
        height: 1px;
        margin: -1px;
        padding: 0;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        border: 0;
    }

    #timeline{
        width: 100%;
        max-width: 1300px;
        height: 400px;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin: 0 auto;
    }
    #timeline::after{
        content: "";
        background-color: var(--purpleColor);
        height: 2px;
        width: 100%;
        position: absolute;
        bottom: 50%;
    }

    #topRow, #bottomRow{
        display: flex;
        height: 50%;
    }

    .cell{
        width: calc(100% / 5);
        height: 100%;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding: 30px 0;
    }

    #topRow .cell{
        justify-content: flex-end;
    }

    #bottomRow .cell{
        justify-content: flex-start;
    }

/*----------  Style of the circle ----------*/

    #bottomRow .cell::after{
        content: "";
        background-color: var(--purpleColor);
        width: 20px;
        height: 20px;
        position: absolute;
        border-radius: 50%;
        top: -15px;
        border: 4px solid white;
        outline: 3px solid var(--purpleColor);
        right: calc(50% - 15px);
    }

/*------------------------------------------*/

    .cell .date{
        font-weight: 900;
        color: var(--purpleColor);
    }
    
    .cell h3{
        font-weight: normal;
        margin: 10px;
        font-size: small;
    }
    
/*----------  Style of the grey line  ----------*/
    
    .cell .lineContainer{
        height: 60%;
    }

    .cell .lineContainer .line{
        width: 2px;
        height: 75px;
        background-color: var(--greyishWhiteColor);
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    #bottomRow .cell .lineContainer .line{
        justify-content: flex-end;
    }
    
    .cell .lineContainer .line .circle{
        width: 6px;
        height: 6px;
        background-color: var(--greyishWhiteColor);
        border-radius: 50%;
    }

/*=====  End of Style of the Timeline  ======*/


/*=============================================
=            Style of the Employee section            =
=============================================*/

    .employeeCard{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .employeePicture{
        width: 200px;
        aspect-ratio: 1;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        margin-bottom: 1rem;
    }
    
    .employeeCard .headerContainer h1{
        margin: 0;
    }

/*=====  End of Style of the Employee section  ======*/


/*=============================================
=            Style of the connection section            =
=============================================*/

    #connectionSection{
        width: 100%;
        background-color: var(--purpleColor);
        color: white;
        padding: 5%;
        text-align: center;
        display: flex;
        justify-content: center;
    }

    #connectionContainer{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100%;
        max-width: 690px;
        gap: 2em;
    }

    #connectionSection h1{
        margin: 0;
    }

    #connectionSection #connectionButton{
        background-color: var(--greyishWhiteColor);
        border-radius: 5px;
        padding: 15px 50px;
        color: var(--purpleColor);
        transition: all 0.2s ease-in-out;
    }
    #connectionSection #connectionButton:hover{
        cursor: pointer;
        color: var(--greyishWhiteColor);
        outline: 2px solid var(--greyishWhiteColor);
        background-color: var(--purpleColor);
        scale: 1.2;
    }
    #connectionSection #connectionButton:active{
        outline: 2px solid var(--purpleColor);
        scale: 1.1;
    }
    
    #connectionSection #connectionButton h1{
        font-size: medium;
    }


/*=====  End of Style of the connection section  ======*/


/*=============================================
=            Media Queries            =
=============================================*/

    @media screen and (min-width: 500px){
        #employeeContainer{
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
        }

        .employeeCard{
            display: flex;
            width: 50%;
        }

        .cell h3{
            font-size: medium;
        }

    }
    
    @media screen and (min-width: 610px) {
        #connectionSection #connectionContainer > h1, .headerContainer h1{
            font-size: 250%;
        }
    }

    @media screen and (min-width: 992px){
        #employeeContainer{
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
        }

        .employeeCard{
            display: flex;
            width: calc(100% / 3);
        }

        .cell h3{
            font-size: larger;
        }

    }

/*=====  End of Media Queries  ======*/




</style>