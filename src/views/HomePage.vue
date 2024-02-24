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
        <div class="headerContainer">
            <h1>Featured Restaurants</h1>
            <h2>Discover Unforgettable Dining Destinations</h2>
        </div>
        <div id="bigCircle1"></div>
        <div id="bigCircle2"></div>
        <div class="cardContainer">
            <RestaurantCard v-for="(data, index) in featuredApiData" :key="index" :image="data.image" :name="data.name" :rating="data.rating" :description="data.description"></RestaurantCard>
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

    <div id="allRestaurants">
        <div class="headerContainer">
            <h1>Find Your Perfect Dining Spot</h1>
            <h2 style="margin-bottom: 25px;">Search by Cuisine, Location, or Name</h2>
            <div id="searchArea">
                <div id="searchBar">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.248 19.2311C18.8577 19.6215 18.225 19.6221 17.834 19.2325L12.9375 14.3542C12.5347 14.6725 12.0593 14.9223 11.5113 15.1034C10.9632 15.2845 10.3692 15.375 9.72917 15.375C8.12969 15.375 6.77497 14.8194 5.66498 13.7083C4.55499 12.5972 4 11.2569 4 9.6875C4 8.11806 4.55556 6.77778 5.66667 5.66667C6.77778 4.55556 8.12153 4 9.69792 4C11.2743 4 12.6146 4.55556 13.7188 5.66667C14.8229 6.77778 15.375 8.1191 15.375 9.69063C15.375 10.3135 15.2882 10.8924 15.1146 11.4271C14.941 11.9618 14.6806 12.4653 14.3333 12.9375L19.2454 17.8132C19.6387 18.2036 19.6399 18.8393 19.248 19.2311V19.2311ZM9.71569 13.4167C10.7559 13.4167 11.6328 13.0538 12.3464 12.3281C13.0599 11.6024 13.4167 10.7222 13.4167 9.6875C13.4167 8.65278 13.0589 7.77257 12.3433 7.04688C11.6277 6.32118 10.7518 5.95833 9.71569 5.95833C8.66797 5.95833 7.77981 6.32118 7.05121 7.04688C6.32263 7.77257 5.95833 8.65278 5.95833 9.6875C5.95833 10.7222 6.3216 11.6024 7.04815 12.3281C7.7747 13.0538 8.66388 13.4167 9.71569 13.4167Z" fill="black"/></svg>
                    <input type="text" placeholder="Search for restaurants">
                    <img src="../assets/images/Filter Iconvector.svg" alt="">
                </div>
                <div id="searchButton">
                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19.248 19.2311C18.8577 19.6215 18.225 19.6221 17.834 19.2325L12.9375 14.3542C12.5347 14.6725 12.0593 14.9223 11.5113 15.1034C10.9632 15.2845 10.3692 15.375 9.72917 15.375C8.12969 15.375 6.77497 14.8194 5.66498 13.7083C4.55499 12.5972 4 11.2569 4 9.6875C4 8.11806 4.55556 6.77778 5.66667 5.66667C6.77778 4.55556 8.12153 4 9.69792 4C11.2743 4 12.6146 4.55556 13.7188 5.66667C14.8229 6.77778 15.375 8.1191 15.375 9.69063C15.375 10.3135 15.2882 10.8924 15.1146 11.4271C14.941 11.9618 14.6806 12.4653 14.3333 12.9375L19.2454 17.8132C19.6387 18.2036 19.6399 18.8393 19.248 19.2311V19.2311ZM9.71569 13.4167C10.7559 13.4167 11.6328 13.0538 12.3464 12.3281C13.0599 11.6024 13.4167 10.7222 13.4167 9.6875C13.4167 8.65278 13.0589 7.77257 12.3433 7.04688C11.6277 6.32118 10.7518 5.95833 9.71569 5.95833C8.66797 5.95833 7.77981 6.32118 7.05121 7.04688C6.32263 7.77257 5.95833 8.65278 5.95833 9.6875C5.95833 10.7222 6.3216 11.6024 7.04815 12.3281C7.7747 13.0538 8.66388 13.4167 9.71569 13.4167Z" /></svg>
                </div>
            </div>
        </div>
        <div class="cardContainer">
            <RestaurantCard v-for="(data, index) in featuredApiData" :key="index" :image="data.image" :name="data.name" :rating="data.rating" :description="data.description"></RestaurantCard>
            <div class="toggleRestaurantsButton" @click="this.showMore = !this.showMore" :style="{ marginBottom: showMore ? '0' : '35px' }" ><h5>Show {{ this.showMore ? "Less" : "More" }}</h5><svg :class="{rotatedIcon: this.showMore}" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.41107 6.91076C4.73651 6.58533 5.26414 6.58533 5.58958 6.91076L10.0003 11.3215L14.4111 6.91076C14.7365 6.58533 15.2641 6.58533 15.5896 6.91076C15.915 7.2362 15.915 7.76384 15.5896 8.08928L10.5896 13.0893C10.2641 13.4147 9.73651 13.4147 9.41107 13.0893L4.41107 8.08928C4.08563 7.76384 4.08563 7.2362 4.41107 6.91076Z" /></svg></div>
            <div id="allRestaurantsContainer" v-show="this.showMore">
                <RestaurantCard v-for="(data, index) in moreApiData" :key="index" :image="data.image" :name="data.name" :rating="data.rating" :description="data.description"></RestaurantCard>
                <div class="toggleRestaurantsButton" @click="this.showMore = false" ><h5>Show Less</h5><svg :class="{rotatedIcon: this.showMore}" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.41107 6.91076C4.73651 6.58533 5.26414 6.58533 5.58958 6.91076L10.0003 11.3215L14.4111 6.91076C14.7365 6.58533 15.2641 6.58533 15.5896 6.91076C15.915 7.2362 15.915 7.76384 15.5896 8.08928L10.5896 13.0893C10.2641 13.4147 9.73651 13.4147 9.41107 13.0893L4.41107 8.08928C4.08563 7.76384 4.08563 7.2362 4.41107 6.91076Z" /></svg></div>
            </div>
        </div>
    </div>
    
</template>

<script>
import RestaurantCard from '../components/RestaurantCard.vue';
import TestimonialCard from '../components/TestimonialCard.vue';

export default {
    data() {
        return {
            featuredApiData: [],
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
            ],
            showMore: false,
            moreApiData: [],
        }
    },
    components:{
        RestaurantCard,
        TestimonialCard
    },
    methods: {
        fetchFeaturedData() {
            fetch("https://es2025-s17-hu-r1-backend.onrender.com/api/v1/restaurants/top-rated")
            .then(res => res.json())
            .then(data => {
                this.featuredApiData = data;
            })
            .catch(err => console.log(err));
        },

        fetchRestaurants(){
            fetch("https://es2025-s17-hu-r1-backend.onrender.com/api/v1/restaurants")
            .then(res => res.json())
            .then(data => {
                this.moreApiData = data.filter(item => !this.featuredApiData.some(item2 => item.name == item2.name))
            })
            .catch(err => console.log(err))
        },
    },
    mounted() {
        this.fetchFeaturedData();

        this.fetchRestaurants();
    },
}
</script>

<style>
/*============================================================================
=            Style Of Headers (Used in Multiple Places in the page)            =
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

/*=====  End of Style Of Headers (Used in Multiple Places in the page)  ======*/


/*=========================================================================================
=            Style of The Restaurant Cards (Used in Multiple Places in the page)            =
===========================================================================================*/

    .cardContainer{
        display: flex;
        flex-direction: column;
        gap: 35px;
        align-items: center;
    }

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
        width: 50%;
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

/*=====  End of Style of The Featured Restaurants Section  ======*/

/*========================================================
=            Style of the Testimonials section            =
=========================================================*/

    #testimonials{
        margin-top: 50px;
        background-color: var(--lightPurpleColor);
        padding: 20% 4% 20% 4%;
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


/*==========================================================
=            Style of the Restaurant Search Area            =
============================================================*/

    #allRestaurants{
        padding-top: 50px;
        padding: 50px 4% 4% 4%;
    }

/*----------  Style of the SearchArea  ----------*/

    #searchArea{
        display: flex;
        justify-content: center;
        margin-bottom: 25px;
        gap: 15px;
    }

    #searchArea #searchBar{
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: blue;
        border-radius: 5px;
        background-color: var(--greyishWhiteColor);
        height: 50px;
        padding: 0 2.5%;
    }

    #searchArea #searchBar #searchBarSearchIcon{
        fill: black;
    }

    #searchArea #searchBar input{
        border: none;
        background-color: var(--greyishWhiteColor);
    }
    #searchArea #searchBar input:focus{
        outline: none;
    }

    #searchArea #searchButton{
        display: flex;
        align-items: center;
        justify-content: center;
        background-color:  var(--lightPurpleColor);
        border-radius: 5px;
        height: 40px;
        aspect-ratio: 1;
        align-self: center;
    }

    #searchArea #searchButton svg{
        fill: var(--purpleColor);
    }

/*----------  End of the Style of the SearchArea  ----------*/

    .toggleRestaurantsButton{
        display: flex;
        align-items: center;
        gap: 10px;
        color: var(--purpleColor);
    }

    .toggleRestaurantsButton:hover{
        cursor: pointer;
    }

    .toggleRestaurantsButton svg {
        fill: var(--purpleColor);
    }

    #allRestaurantsContainer{
        display: flex;
        flex-direction: column;
        gap: 25px;
    }

    #allRestaurantsContainer .toggleRestaurantsButton{
        align-self: center;
    }
    
    .rotatedIcon{
        transform: rotate(180deg);
    }

/*=====  End of Style of the Restaurant Search Area  ======*/


</style>