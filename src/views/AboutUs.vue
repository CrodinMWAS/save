<template>
    <div class="headerContainer">
        <h1>About Us</h1>
        <h2>Embracing the Joy of Dining</h2>
    </div>
    <div id="timeline">
        <div id="topRow">
            <div class="cell"> <h3 class="date">2019</h3> </div>
            <div class="cell"> <h3>Culinary Connections Made</h3> <div class="lineContainer"><div class="line"><div class="circle"></div></div></div> </div>
            <div class="cell"> <h3 class="date">2021</h3> </div>
            <div class="cell"> <h3>Redefining Dining Landscape</h3> <div class="lineContainer"><div class="line"><div class="circle"></div></div></div> </div>
            <div class="cell"> <h3 class="date">2023</h3> </div>
        </div>
        <div id="bottomRow">
            <div class="cell"> <div class="lineContainer"><div class="line"><div class="circle"></div></div></div> <h3>Birth of DineEase</h3> </div>
            <div class="cell"> <h3 class="date">2020</h3> </div>
            <div class="cell"> <div class="lineContainer"><div class="line"><div class="circle"></div></div></div> <h3>Curatorial Excellence Emerges</h3> </div>
            <div class="cell"> <h3 class="date">2022</h3> </div>
            <div class="cell"> <div class="lineContainer"><div class="line"><div class="circle"></div></div></div> <h3>Redefining Dining Landscape</h3> </div>
        </div>
    </div>

    <div class="headerContainer">
        <h1>Meet our team</h1>
        <h2>The Culinary Visionaries Behind DineEase</h2>
    </div>
    <div id="employeeContainer">
        <Employee v-for="(employee, index) in employees" :key="index" :image="employee.image" :name="employee.name" :title="employee.title" ></Employee>
    </div>

    <div id="connectionContainer">
        <h1>Connect with DineEase</h1>
        <p>Hungry for more? Whether you have questions, feedback, or simply wish to share your culinary story, we're eager to hear from you. Dive deeper into the DineEase experience and let's make every meal memorable.</p>
        <div id="connectionButton"><h1>Connect With DineEase</h1></div>
    </div>
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
}
</script>

<style>
/*=============================================
=            Style of the Timeline            =
=============================================*/

    #timeline{
        width: 100%;
        height: 400px;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
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
        width: 75%;
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

    #connectionContainer{
        width: 100%;
        height: 40vh;
        background-color: var(--purpleColor);
        color: white;
        padding: 20px 4%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        gap: 0.67em;
    }

    #connectionContainer > h1{
        margin: 0;
    }

    #connectionContainer #connectionButton{
        background-color: var(--greyishWhiteColor);
        border-radius: 5px;
        padding: 2% 10%;
        color: var(--purpleColor);
        transition: all 0.2s ease-in-out;
    }
    #connectionContainer #connectionButton:hover{
        cursor: pointer;
        color: var(--greyishWhiteColor);
        outline: 2px solid var(--greyishWhiteColor);
        background-color: var(--purpleColor);
    }
    
    #connectionContainer #connectionButton h1{
        font-size: medium;
    }

/*=====  End of Style of the connection section  ======*/



</style>