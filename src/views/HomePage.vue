<template>
    <div id="hero">
        <div id="fadedCircle"></div>
        <div id="heroTextContainer">
            <h1>DineEase: Exceptional Dining Awaits.</h1>
            <p>Dive into culinary wonders with DineEase. We curate top-rated restaurants, each with distinct flavors and ambiance.
                From international dishes to traditional delights and gastronomic adventures, find your perfect spot with DineEase.</p>
            <div id="exploreButton">
                    <img src="../assets/images/Search Iconvector.svg" alt="This is a search icon." title="This is a search icon.">
                    <h3>Explore Restaurants</h3>
            </div>
        </div>
        <div id="purpleStrip"></div>
        <div id="lightPurpleStrip"></div>
        <div id="heroImageContainer">
            <img src="../assets/images/Hero Illustration.png" alt="This is a cool illustration of a man eating a meal and rating it 5 stars." title="This is a cool illustration of a man eating a meal and rating it 5 stars.">
        </div>
        <hr>
    </div>



    <div id="featuredRestaurants">
        <div id="headerContainer">
            <h1>Featured Restaurants</h1>
            <h2>Discover Unforgettable Dining Destinations</h2>
        </div>
        <div id="cardContainer">
            <!-- {{ apiData }} -->
            <RestaurantCard v-for="(data, index) in apiData" :key="index" :image="data.image" :name="data.name" :rating="data.rating" :description="data.description"></RestaurantCard>
        </div>
    </div>

    <div id="testimonials">
        <div id="testimonialHeader">
            <img id="decorQuote" src="../assets/images/Quote markvector.svg" alt="This is a decorative quote.">
            <h1>Delightful Experiences Shared by Our Guests</h1>
        </div>
        <div id="testimonialCardContainer">
            <TestimonialCard v-for="(testimonial, index) in this.testimonials" :key="index" :experience="testimonial.experience" :contributor="testimonial.contributor"></TestimonialCard>
        </div>
    </div>

    
</template>

<script>
import RestaurantCard from '../components/RestaurantCard.vue';
import TestimonialCard from '../components/TestimonialCard.vue';

export default {
    data() {
        return {
            apiData: [],
            testimonials: [
                {
                    experience: "Exquisite flavors, impeccable service, and a memorable ambiance – DineEase made our celebration truly special!",
                    contributor: "Robert & Emily"
                },
                {
                    experience: "DineEase guided us to hidden gems we never knew existed! We've become food adventurers, thanks to this platform.",
                    contributor: "Lisa & Mark"
                },
                {
                    experience: "With DineEase, we've uncovered culinary treasures right in our city. Every dining recommendation feels like an exclusive invitation to a world of flavors. We thought we knew our local dining scene, but DineEase introduced us to so much more.",
                    contributor: "Emma & Jacob"
                },
            ]
        }
    },
    components:{
    RestaurantCard,
    TestimonialCard
},
    mounted() {
        fetch("https://es2025-s17-hu-r1-backend.onrender.com/api/v1/restaurants/top-rated")
        .then(res => res.json())
        .then(data => {
            this.apiData = data
        })
        .catch(err => console.log(err))
    },
}
</script>

<style>

/*=========================================================================================
=            Style of The Restaurant Cards (Used in Multiple Places in the page)            =
===========================================================================================*/

    .card{
        width: 100%;
        padding: 10px;
        border-radius: 15px;
        box-shadow: 0px 3px 7.5px rgba(128, 128, 128, 0.3);
    }
    
    .cardPicture{
        width: 100%;
        aspect-ratio: 2;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        border-radius: 5px;
    }

    .cardInfoContainer{
        display: flex;
        flex-direction: column;
    }

    .cardTopRow{
        display: flex;
        justify-content: space-between;
    }

    .restaurantName{
        width: fit-content;
        font-size: larger;
    }

    .restaurantRatings{
        width: 25%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 5px;
    }
    .restaurantRatings img{
        height: 15px;
    }
    
    .restaurantDescription{
        margin: 0;
        font-size: small;
        color: grey;
    }

    .restaurantLink{
        color: var(--purpleColor);
        align-self: flex-end;
        font-size: small;
        margin-top: 10px;
    }

/*=====  End of Style of The Restaurant Cards  ======*/


/*=============================================
=            Style Of the Hero Section            =
=============================================*/

    #hero{
        height: calc(100vh - 105px);
        width: 100%;
        padding: 0 4%;
        overflow: hidden;
    }

    #hero #heroTextContainer{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    #hero #heroTextContainer h1{
        margin: 0;
        font-size: 220%;
    }

/*----------  The style of the explore Button  ----------*/

    #hero #heroTextContainer #exploreButton{
        display: flex;
        align-self: flex-start;
        border-radius: 10px;
        background-color: var(--purpleColor);
        padding: 0 5%;
        color: white;
    }

    #hero #heroTextContainer #exploreButton h3{
        font-weight: 500;
        font-size: medium;
        margin-left: 10px;
    }


/*----------  Style of the Hero Illustration/Image  ----------*/

    #hero #heroImageContainer{
        display: flex;
        align-items: center;
        justify-content: center;
        height: fit-content;
        width: fit-content;
    }

    #hero #heroImageContainer img{
        width: 130%;
    }

/*=====  End of Style Of the Hero Section  ======*/


/*=================================================================
=            Style of The Featured Restaurants Section            =
=================================================================*/

    #featuredRestaurants{
        padding: 0 4%;
    }

    #featuredRestaurants #headerContainer{
        display: flex;
        flex-direction: column;
        text-align: center;
    }

    #featuredRestaurants #headerContainer h1{
        font-weight: bold;
        font-size: xx-large;
        margin: 10px;
    }

    #featuredRestaurants #headerContainer h2{
        margin: 10px;
        margin-bottom: 50px;
        font-weight: normal;
        font-size: medium;
    }

    #featuredRestaurants #cardContainer{
        display: flex;
        flex-direction: column;
        gap: 35px;
    }

/*=====  End of Style of The Featured Restaurants Section  ======*/

/*========================================================
=            Style of the Testimonials section            =
=========================================================*/

    #testimonials{
        margin-top: 50px;
        background-color: var(--lightPurpleColor);
        height: 100vh;
        padding: 0 4%;
    }

    #testimonials #testimonialHeader{
        display: flex;
        align-items: flex-end;
        min-height: 120px;
        position: relative;
        padding-top: 20px;
    }

    #testimonials #testimonialHeader #decorQuote{
        position: absolute;
        height: 50%;
        top: 0;
        right: 50%;
    }

    #testimonials #testimonialHeader h1{
        margin: 0;
        text-align: center;
    }

    @media screen and (min-width: 375px) {
        #testimonials #testimonialHeader{
            padding-top: 0;
        }
        #testimonials #testimonialHeader #decorQuote{
            position: absolute;
            height: 75%;
            top: 0;
            left: 0;
        }
        #testimonials #testimonialHeader h1{
            text-align: left;
        }
    }

/*====================================================
=            Style Of The Testimonial Card            =
======================================================*/

    #testimonialCardContainer .experienceCard{
        display: flex;
        padding: 5% 2.5%;
        gap: 10px;
    }

    .experienceCard .quoteColumn{
        display: flex;
        width: 10%;
        align-items: flex-start;
        justify-content: center;
    }

    .experienceCard .quoteColumn .quote{
        width: 25px;
        height: fit-content;
        fill: var(--purpleColor);
    }

    .experienceCard .experienceColumn{
        width: 85%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        gap: 25px;
    }

    .experienceCard .experienceColumn p{
        margin: 0;
        font-size: medium;
    }

    .experienceCard .experienceColumn .contributor{
        font-weight: bold;
    }
/*=====  End of Style Of The Testimonial Card  ======*/



/*=====  End of Style of the Testimonials section  ======*/



</style>