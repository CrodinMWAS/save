<template>
    <div id="hero">
        <div id="fadedCircle"></div>
        <div id="heroTextContainer">
            <h1>DineEase: Exceptional Dining Awaits.</h1>
            <p>Dive into culinary wonders with DineEase. We curate top-rated restaurants, each with distinct flavors and ambiance.
                From international dishes to traditional delights and gastronomic adventures, find your perfect spot with DineEase.</p>
            <div id="exploreButton" @click="this.$refs.restaurants.scrollIntoView({behavior: 'smooth'})">
                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19.248 19.2311C18.8577 19.6215 18.225 19.6221 17.834 19.2325L12.9375 14.3542C12.5347 14.6725 12.0593 14.9223 11.5113 15.1034C10.9632 15.2845 10.3692 15.375 9.72917 15.375C8.12969 15.375 6.77497 14.8194 5.66498 13.7083C4.55499 12.5972 4 11.2569 4 9.6875C4 8.11806 4.55556 6.77778 5.66667 5.66667C6.77778 4.55556 8.12153 4 9.69792 4C11.2743 4 12.6146 4.55556 13.7188 5.66667C14.8229 6.77778 15.375 8.1191 15.375 9.69063C15.375 10.3135 15.2882 10.8924 15.1146 11.4271C14.941 11.9618 14.6806 12.4653 14.3333 12.9375L19.2454 17.8132C19.6387 18.2036 19.6399 18.8393 19.248 19.2311V19.2311ZM9.71569 13.4167C10.7559 13.4167 11.6328 13.0538 12.3464 12.3281C13.0599 11.6024 13.4167 10.7222 13.4167 9.6875C13.4167 8.65278 13.0589 7.77257 12.3433 7.04688C11.6277 6.32118 10.7518 5.95833 9.71569 5.95833C8.66797 5.95833 7.77981 6.32118 7.05121 7.04688C6.32263 7.77257 5.95833 8.65278 5.95833 9.6875C5.95833 10.7222 6.3216 11.6024 7.04815 12.3281C7.7747 13.0538 8.66388 13.4167 9.71569 13.4167Z"/></svg>
                <h3>Explore Restaurants</h3>
            </div>
        </div>
        <div id="middleStrip">
            <div id="topStrip">
                <div class="lightStrip"></div>
            </div>

            <div class="purpleStrip"></div>
            <div class="divider"></div>
            <div class="lightPurpleStrip"></div>

            <div id="bottomStrip">
                <div class="lightStrip"></div>
                <div class="purpleStrip"></div>
            </div>
        </div>
        <div id="heroImageContainer">
            <img src="../assets/images/HeroIllustration.png" alt="This is a cool illustration of a man eating a meal and rating it 5 stars." title="This is a cool illustration of a man eating a meal and rating it 5 stars.">
        </div>
        <hr>
    </div>

    <div id="featuredRestaurants">
        <div class="featuredCircle"></div>
        <div class="featuredCircle"></div>
        <div class="headerContainer">
            <h1>Featured Restaurants</h1>
            <h2>Discover Unforgettable Dining Destinations</h2>
        </div>
        <div class="cardContainer">
            <RestaurantCard v-for="(data, index) in featuredApiData" :key="index" :image="data.image" :name="data.name" :rating="data.rating" :description="data.description"></RestaurantCard>
        </div>
    </div>

    <div id="testimonials">
        <div id="testimonialHeader">
            <div id="quote">
                <img id="decorQuote" src="../assets/images/Quote markvector.svg" alt="This is a decorative quote.">
                <h1>Delightful Experiences Shared by Our Guests</h1>
            </div>
            <TestimonialCard v-if="testimonials.length > 0" :experience="testimonials[0].experience" :contributor="testimonials[0].contributor"></TestimonialCard>
        </div>
        <div id="testimonialCardContainer">
            <TestimonialCard v-for="(testimonial, index) in this.testimonials" :key="index" :experience="testimonial.experience" :contributor="testimonial.contributor"></TestimonialCard>
        </div>
    </div>

    <div id="allRestaurants" ref="restaurants">
        <div class="headerContainer">
            <h1>Find Your Perfect Dining Spot</h1>
            <h2>Search by Cuisine, Location, or Name</h2>
            <input type="checkbox" id="hiddenCheckbox">

            <div class="searchArea simpleSearch">
                <div id="searchBar">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.248 19.2311C18.8577 19.6215 18.225 19.6221 17.834 19.2325L12.9375 14.3542C12.5347 14.6725 12.0593 14.9223 11.5113 15.1034C10.9632 15.2845 10.3692 15.375 9.72917 15.375C8.12969 15.375 6.77497 14.8194 5.66498 13.7083C4.55499 12.5972 4 11.2569 4 9.6875C4 8.11806 4.55556 6.77778 5.66667 5.66667C6.77778 4.55556 8.12153 4 9.69792 4C11.2743 4 12.6146 4.55556 13.7188 5.66667C14.8229 6.77778 15.375 8.1191 15.375 9.69063C15.375 10.3135 15.2882 10.8924 15.1146 11.4271C14.941 11.9618 14.6806 12.4653 14.3333 12.9375L19.2454 17.8132C19.6387 18.2036 19.6399 18.8393 19.248 19.2311V19.2311ZM9.71569 13.4167C10.7559 13.4167 11.6328 13.0538 12.3464 12.3281C13.0599 11.6024 13.4167 10.7222 13.4167 9.6875C13.4167 8.65278 13.0589 7.77257 12.3433 7.04688C11.6277 6.32118 10.7518 5.95833 9.71569 5.95833C8.66797 5.95833 7.77981 6.32118 7.05121 7.04688C6.32263 7.77257 5.95833 8.65278 5.95833 9.6875C5.95833 10.7222 6.3216 11.6024 7.04815 12.3281C7.7747 13.0538 8.66388 13.4167 9.71569 13.4167Z" fill="black"/></svg>
                    <input type="text" placeholder="Search for restaurants">
                <label for="hiddenCheckbox">
                    <svg id="filterIcon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.74805 5.31713H3.5207M14.2527 5.31713H9.84492" stroke="#0A0A0A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M1.74805 10.6492L6.29953 10.6492M14.2527 10.6492L12.5758 10.6492" stroke="#0A0A0A" stroke-width="1.5" stroke-linecap="round"/><ellipse cx="6.7317" cy="5.35083" rx="1.52467" ry="1.52467" stroke="#0A0A0A" stroke-width="1.5"/><ellipse cx="9.36549" cy="10.6492" rx="1.52467" ry="1.52467" stroke="#0A0A0A" stroke-width="1.5"/></svg>
                </label>
                </div>
                <div class="searchButton">
                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19.248 19.2311C18.8577 19.6215 18.225 19.6221 17.834 19.2325L12.9375 14.3542C12.5347 14.6725 12.0593 14.9223 11.5113 15.1034C10.9632 15.2845 10.3692 15.375 9.72917 15.375C8.12969 15.375 6.77497 14.8194 5.66498 13.7083C4.55499 12.5972 4 11.2569 4 9.6875C4 8.11806 4.55556 6.77778 5.66667 5.66667C6.77778 4.55556 8.12153 4 9.69792 4C11.2743 4 12.6146 4.55556 13.7188 5.66667C14.8229 6.77778 15.375 8.1191 15.375 9.69063C15.375 10.3135 15.2882 10.8924 15.1146 11.4271C14.941 11.9618 14.6806 12.4653 14.3333 12.9375L19.2454 17.8132C19.6387 18.2036 19.6399 18.8393 19.248 19.2311V19.2311ZM9.71569 13.4167C10.7559 13.4167 11.6328 13.0538 12.3464 12.3281C13.0599 11.6024 13.4167 10.7222 13.4167 9.6875C13.4167 8.65278 13.0589 7.77257 12.3433 7.04688C11.6277 6.32118 10.7518 5.95833 9.71569 5.95833C8.66797 5.95833 7.77981 6.32118 7.05121 7.04688C6.32263 7.77257 5.95833 8.65278 5.95833 9.6875C5.95833 10.7222 6.3216 11.6024 7.04815 12.3281C7.7747 13.0538 8.66388 13.4167 9.71569 13.4167Z" /></svg>
                </div>
            </div>

            <div class="searchArea advancedSearch">
                <div id="inputs">
                    <div id="cusineSelectContainer">
                        <select name="Cusine" id="cusineSelect">
                            <option>Cusine</option>
                        </select>
                    </div>
                    <div id="locationInputContainer">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 14C13.6569 14 15 12.6569 15 11C15 9.34315 13.6569 8 12 8C10.3431 8 9 9.34315 9 11C9 12.6569 10.3431 14 12 14Z" stroke="#6B7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M17.657 16.657L13.414 20.9C13.039 21.2746 12.5306 21.4851 12.0005 21.4851C11.4704 21.4851 10.962 21.2746 10.587 20.9L6.343 16.657C5.22422 15.5382 4.46234 14.1127 4.15369 12.5609C3.84504 11.009 4.00349 9.40051 4.60901 7.93873C5.21452 6.47694 6.2399 5.22754 7.55548 4.3485C8.87107 3.46947 10.4178 3.00029 12 3.00029C13.5822 3.00029 15.1289 3.46947 16.4445 4.3485C17.7601 5.22754 18.7855 6.47694 19.391 7.93873C19.9965 9.40051 20.155 11.009 19.8463 12.5609C19.5377 14.1127 18.7758 15.5382 17.657 16.657V16.657Z" stroke="#6B7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                        <input type="text" placeholder="Location">
                    </div>
                    <div id="nameInputContainer">
                        <input type="text" placeholder="Name">
                    </div>
                    <div class="searchButton">
                        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19.248 19.2311C18.8577 19.6215 18.225 19.6221 17.834 19.2325L12.9375 14.3542C12.5347 14.6725 12.0593 14.9223 11.5113 15.1034C10.9632 15.2845 10.3692 15.375 9.72917 15.375C8.12969 15.375 6.77497 14.8194 5.66498 13.7083C4.55499 12.5972 4 11.2569 4 9.6875C4 8.11806 4.55556 6.77778 5.66667 5.66667C6.77778 4.55556 8.12153 4 9.69792 4C11.2743 4 12.6146 4.55556 13.7188 5.66667C14.8229 6.77778 15.375 8.1191 15.375 9.69063C15.375 10.3135 15.2882 10.8924 15.1146 11.4271C14.941 11.9618 14.6806 12.4653 14.3333 12.9375L19.2454 17.8132C19.6387 18.2036 19.6399 18.8393 19.248 19.2311V19.2311ZM9.71569 13.4167C10.7559 13.4167 11.6328 13.0538 12.3464 12.3281C13.0599 11.6024 13.4167 10.7222 13.4167 9.6875C13.4167 8.65278 13.0589 7.77257 12.3433 7.04688C11.6277 6.32118 10.7518 5.95833 9.71569 5.95833C8.66797 5.95833 7.77981 6.32118 7.05121 7.04688C6.32263 7.77257 5.95833 8.65278 5.95833 9.6875C5.95833 10.7222 6.3216 11.6024 7.04815 12.3281C7.7747 13.0538 8.66388 13.4167 9.71569 13.4167Z" /></svg>
                    </div>
                </div>
                <label for="hiddenCheckbox">
                    <h2>Simple Search</h2>
                </label>
            </div>

        </div>
        <div class="cardContainer">
                <RestaurantCard v-for="(data, index) in featuredApiData" :key="index" :image="data.image" :name="data.name" :rating="data.rating" :description="data.description"></RestaurantCard>
            <div id="allRestaurantsContainer" v-show="this.showMore">
                <RestaurantCard v-for="(data, index) in moreApiData" :key="index" :image="data.image" :name="data.name" :rating="data.rating" :description="data.description"></RestaurantCard>
            </div>
        </div>
        <div class="toggleRestaurantsButton" @click="this.showMore = !this.showMore" ><h5>Show {{ this.showMore ? "Less" : "More" }}</h5><svg :class="{rotatedIcon: this.showMore}" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.41107 6.91076C4.73651 6.58533 5.26414 6.58533 5.58958 6.91076L10.0003 11.3215L14.4111 6.91076C14.7365 6.58533 15.2641 6.58533 15.5896 6.91076C15.915 7.2362 15.915 7.76384 15.5896 8.08928L10.5896 13.0893C10.2641 13.4147 9.73651 13.4147 9.41107 13.0893L4.41107 8.08928C4.08563 7.76384 4.08563 7.2362 4.41107 6.91076Z" /></svg></div>
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
           return fetch("https://es2025-s17-hu-r1-backend.onrender.com/api/v1/restaurants/top-rated")
            .then(res => res.json())
            .then(data => {
                this.featuredApiData = data;
                console.log(this.featuredApiData)
            })
            .catch(err => console.log(err));
        },

        fetchRestaurants(){
            fetch("https://es2025-s17-hu-r1-backend.onrender.com/api/v1/restaurants")
            .then(res => res.json())
            .then(data => {
                this.moreApiData = data.filter(item => !this.featuredApiData.some(item2 => item.name == item2.name))
                console.log(this.moreApiData)
            })
            .catch(err => console.log(err))
        },
    },
    mounted() {
        this.fetchFeaturedData().then(
            () => this.fetchRestaurants()
        )
    },
}
</script>

<style>

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
        padding: 15px;
        border-radius: 15px;
        box-shadow: 0px 3px 7.5px rgba(128, 128, 128, 0.3);
    }
    
    .cardPicture{
        width: 100%;
        aspect-ratio: 3;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        border-radius: 5px;
        image-rendering: optimizeQuality;
    }

    .cardInfoContainer{
        display: flex;
        flex-direction: column;
    }

    .cardTopRow{
        display: flex;
    }

    .restaurantName{
        width: 100%;
        font-size: larger;
    }

    .restaurantRatings{
        width: fit-content;
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
    .restaurantLink:hover{
        color: var(--blackColor);
    }
    .restaurantLink:active{
        color: var(--lightPurpleColor);
    }

/*=====  End of Style of The Restaurant Cards  ======*/


/*=============================================
=            Style Of the Hero Section            =
=============================================*/

    #hero{
        height: fit-content;
        width: 100%;
        padding: 4% 4%;
    }

    #hero #heroTextContainer{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    #hero #heroTextContainer h1{
        margin: 0;
        font-size: 220%;
    }

/*----------  The style of the explore Button  ----------*/

    #hero #heroTextContainer #exploreButton{
        display: flex;
        align-items: center;
        border-radius: 10px;
        background-color: var(--purpleColor);
        padding: 0 5%;
        color: white;
        transition: all 0.2s ease-in-out;
        user-select: none;
    }
    #hero #heroTextContainer #exploreButton svg{
        fill: white;
        transition: all 0.2s ease-in-out;
    }
    #hero #heroTextContainer #exploreButton:hover svg{
        fill: black;
    }
    #hero #heroTextContainer #exploreButton:hover {
        cursor: pointer;
        scale: 1.1;
        background-color: var(--greyishWhiteColor);
        color: var(--blackColor);
        outline: 2px solid var(--purpleColor);
    }
    #hero #heroTextContainer #exploreButton:active{
        scale: 1.0;
        outline: 2px solid var(--lightPurpleColor);
    }

    #hero #heroTextContainer #exploreButton h3{
        font-weight: 500;
        font-size: medium;
        margin-left: 10px;
    }

/*----------  Style of the Hero Illustration/Image  ----------*/

    #hero #heroImageContainer{
        display: flex;
        margin: 0 auto;
        align-items: center;
        justify-content: center;
        height: fit-content;
        width: fit-content;
    }

    #hero #heroImageContainer img{
        width: 100%;
    }

    #hero hr{
        border-color: var(--greyishWhiteColor);
        margin: 0 8%;
    }

/*=====  End of Style Of the Hero Section  ======*/


/*=================================================================
=            Style of The Featured Restaurants Section            =
=================================================================*/

    #featuredRestaurants{
        padding: 0 4%;
        position: relative;
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

    #testimonials #testimonialHeader .experienceCard{
        display: none;
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

/*====================================================
=            Style Of The Testimonial Card            =
======================================================*/

    #testimonialCardContainer{
        padding-top: 25px;
        display: flex;
        flex-direction: column;
        gap: 25px;
    }

    .experienceCard{
        background-color: #F9F9F9;
        display: flex;
        padding: 5% 2.5%;
        gap: 10px;
        border-radius: 5px;
        line-height: 1.5;
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
        display: flex;
        flex-direction: column;
    }

    #allRestaurants .headerContainer > h2{
        margin-bottom: 25px;
    }

/*----------  Style of the SearchArea  ----------*/


/*===========================================================================
=            Style for changing the search type (advanced/simple)            =
=============================================================================*/

    #hiddenCheckbox{
        display: none;
    }

    #hiddenCheckbox:checked ~ .simpleSearch{
        display: none;
    }

    #hiddenCheckbox:checked ~ .advancedSearch{
        display: flex;
    }

    .simpleSearch{
        display: flex;
    }
    
    .advancedSearch{
        display: none;
        flex-direction: column;
    }

    .advancedSearch #inputs{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 20px;
    }

    .advancedSearch #inputs > div{
        max-width: 290px;
    }
    
    .advancedSearch label h2{
        margin: 0;
        color: var(--purpleColor);
        font-weight: bold;
        transition: all 0.2s ease-in-out;
        user-select: none;
    }
    .advancedSearch label h2:hover{
        cursor: pointer;
        scale: 1.2;
    }
    .advancedSearch label h2:active{
        color: var(--blackColor);
    }
    
    .advancedSearch #inputs input, .advancedSearch #inputs select {
        border: none;
        background-color: var(--greyishWhiteColor);
        border-radius: 5px;
        width: 90%;
        padding: 5px;
        font-size: medium;
    }
    .advancedSearch #inputs input:focus, .advancedSearch #inputs select:focus {
        outline: none;
    }

    .advancedSearch #inputs select{
        color: gray;
    }
    
    .advancedSearch #inputs #locationInputContainer, #cusineSelectContainer, #nameInputContainer{
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--greyishWhiteColor);
        border-radius: 5px;
        min-height: 50px;
        width: 90%;
        overflow: hidden;
    }

    .advancedSearch #inputs #locationInputContainer svg{
        margin: 0 0 0 5px;
    }

    .advancedSearch .searchButton{
        width: 90%; /*Remove for pc */
    }
    
/*=====  End of Style for changing the search type (advanced/simple)  ======*/

    .searchArea{
        justify-content: center;
        align-items: center;
        margin-bottom: 25px;
        gap: 15px;
    }

    .searchArea #searchBar{
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        background-color: var(--greyishWhiteColor);
        height: 50px;
        padding: 0 2.5%;
        width: 80%;
    }
    
    .searchArea #searchBar label{
        padding-top: 3px;
    }

    .searchArea #searchBar input{
        border: none;
        background-color: var(--greyishWhiteColor);
        width: 90%;
        height: 100%;
        font-size: large;
    }
    .searchArea #searchBar input:focus{
        outline: none;
    }

    .searchArea #searchBar #filterIcon:hover{
        scale: 1.2;
        cursor: pointer;
    }

    .searchArea .searchButton{
        display: flex;
        align-items: center;
        justify-content: center;
        background-color:  var(--lightPurpleColor);
        border-radius: 5px;
        height: 40px;
        aspect-ratio: 1;
        align-self: center;
        user-select: none;
        transition: all 0.3s ease-in-out;
    }
    .searchArea .searchButton:hover{
        cursor: pointer;
        scale: 1.2;
    }
    .searchArea .searchButton:active{
        scale: 1.1;
    }

    .searchArea .searchButton svg{
        fill: var(--purpleColor);
    }

/*----------  End of the Style of the SearchArea  ----------*/

    .toggleRestaurantsButton{
        display: flex;
        align-items: center;
        gap: 10px;
        color: var(--purpleColor);
        user-select: none;
        align-self: center;
    }
    .toggleRestaurantsButton:hover{
        cursor: pointer;
        color: var(--blackColor);
    }
    .toggleRestaurantsButton:active{
        color: var(--lightPurpleColor);
    }

    .toggleRestaurantsButton svg {
        fill: var(--purpleColor);
    }
    .toggleRestaurantsButton:hover svg{
        fill: black;
    }
    .toggleRestaurantsButton:active svg{
        fill: var(--lightPurpleColor);
    }
    
    #allRestaurantsContainer{
        display: flex;
        flex-direction: column;
        gap: 25px;
        width: 100%;
    }
    
    .rotatedIcon{
        transform: rotate(180deg);
    }

/*=====  End of Style of the Restaurant Search Area  ======*/



/*=============================================
=            Media Queries            =
=============================================*/

    @media screen and (min-width: 375px){
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
        .advancedSearch #inputs{
            width: 85%;
        }
    }

    @media screen and (min-width: 450px){
        .toggleRestaurantsButton{
            font-size: larger;
        }
        .advancedSearch #inputs{
            width: 100%;
        }
    }


    @media screen and (min-width: 500px){
        .restaurantName{
            font-size: x-large;
        }

        .restaurantRatings img{
            height: 16px;
        }
        
        .restaurantDescription{
            font-size: medium;
        }
    }

    @media screen and (min-width: 550px){
        #testimonials{
            padding: 10% 4% 10% 4%;
        }
    }

    @media screen and (min-width: 650px){
        .advancedSearch #inputs{
            flex-direction: row;
        }
        .advancedSearch .searchButton{
            width: initial;
        }
    }

    @media screen and (min-width: 765px){
        #testimonials{
            padding: 4%;
        }
        #testimonials #testimonialHeader #decorQuote{
            position: absolute;
            height: 75%;
            top: 30px;
            left: 0;
        }
    }

    @media screen and (min-width: 900px){
        #testimonialCardContainer .experienceCard{
            padding: 2.5%;
        }
    }

    @media screen and (min-width: 992px){
        
    /*----------  Hero Section  ----------*/
        
        #hero{
            display: flex;
            flex-direction: row;
            padding: 4% 2%;
            position: relative;
        }

        #hero hr{
            display: none;
        }

        #heroTextContainer{
            width: 60%;
        }
        
        #hero #heroImageContainer{
            width: 40%;
            margin: 0;
        }

        #fadedCircle{
            position: absolute;
            background-color: var(--pinkColor);
            border-radius: 50%;
            width: 60vw;
            height: 60vh;
            filter: blur(30px);
            top: -40vh;
            right: -25vw;
            z-index: -5;
        }
        
        /*=============================================
        =            Style Of The Strips            =
        =============================================*/

        .purpleStrip, .divider, .lightPurpleStrip, .lightStrip{
            position: absolute;
            transform:  skew(-3deg); 
            height: 100%;
        }
        .purpleStrip{
            background-color: var(--purpleColor);
        }
        .divider{
            background-color: var(--dividerColor);
        }
        .lightPurpleStrip{
            background-color: var(--lightStripColor);
        }
        .lightStrip{
            background-color: var(--lightPurpleColor);
        }
        
            /*----------  Style of Strip In the Middle  ----------*/

        #middleStrip{
            position: absolute;
            width: calc(100% + 20px);
            height: 60px;
            transform: rotate(-6deg) skew(-3deg);
            z-index: -1;
            left: -10px;
            bottom: 25%;
        }
        #middleStrip > .purpleStrip{
            width: 30%;
        }
        #middleStrip > .divider{
            width: 30%;
            left: 30%;
        }
        #middleStrip > .lightPurpleStrip{
            width: 40%;
            left: 60%;
        }

        /*----------  Style of Strip On the Bottom  ----------*/

        #bottomStrip{
            position: absolute;
            width: calc(100% + 20px);
            height: 60px;
            transform: skew(-3deg);
            z-index: -1;
            left: -10px;
            bottom: -59px;
        }
        #bottomStrip .lightStrip{
            width: 18%;
        }
        #bottomStrip .purpleStrip{
            width: 40%;
            left: 89%;
        }

        /*----------  Style of Strip On the Top ----------*/

        #topStrip{
            position: absolute;
            width: calc(100% + 20px);
            height: 60px;
            transform: skew(-3deg);
            z-index: -1;
            top: -60px;
            left: -10px;
        }
        #topStrip .lightStrip{
            left: 75%;
            width: 20%;
        }

        /*=====  End of Style Of The Strips  ======*/
        
        /*----------  Featured Restaurants Section  ----------*/

        #featuredRestaurants{
            padding: 0 2%;
        }

        #featuredRestaurants .headerContainer{
            margin-bottom: 25px;
        }
        
        #featuredRestaurants .cardContainer{
            padding: 0 5%;
        }

        #featuredRestaurants .headerContainer{
            text-align: left;
            height: 15%;
        }

        #featuredRestaurants .headerContainer h2{
            margin: 0;
        }

        .cardContainer{
            flex-direction: row;
            height: 85%;
            gap: 20px;
        }

        .cardContainer .card{
            display: flex;
            flex-direction: column;
            width: calc(97% / 3);
            height: 500px;
            background-color: white;
        }

        .cardContainer .card .cardPicture{
            height: 100%;
            aspect-ratio: 1;
            margin-bottom: 1rem;
        }

        .cardContainer .card .cardInfoContainer{
            justify-content: space-between;
        }
        
        .featuredCircle{
            background-color: var(--lightPurpleColor);
            border-radius: 50%;
            height: 50%;
            aspect-ratio: 1;
        }
        
        .featuredCircle:first-of-type{
            position: absolute;
            right: -10%;
            z-index: -1;
            top: 5%;
        }
        
        .featuredCircle:nth-of-type(2){
            position: absolute;
            z-index: -1;
            height: 75%;
            aspect-ratio: 1;
            background-color: var(--lightPurpleColor);
            bottom: -180px;
            left: -280px;
        }

        /*----------  Testimonials Section ----------*/

        #testimonials{
            display: flex;
            height: 75vh;
            gap: 3%;
            align-items: center;
            justify-content: center;
            padding: 2%;
        }

        #testimonials .experienceCard{
            padding: 5%;
        }
        
        #testimonials #testimonialHeader{
            flex-direction: column;
            width: 45%;
            height: 65%;
            justify-content: space-between;
            align-self: flex-start;
            padding-top: 5%;
            padding-left: 2%;
        }

        #testimonials #testimonialHeader h1{
            font-size: 250%;
        }

        #testimonials #testimonialHeader #quote{
            height: 60%;
        }

        #testimonials #testimonialHeader #decorQuote{
            position: absolute;
            height: 20%;
            top: 10px;
            left: -50px;
        }
        
        #testimonials #testimonialHeader .experienceCard{
            display: flex;
            width: 85%;
        }
        
        #testimonials #testimonialCardContainer{
            width: 45%;
            height: 100%;
            justify-content: center;
        }

        #testimonials #testimonialCardContainer .experienceCard:first-of-type{
            display: none;
        }
        

        
        /*----------  Style of the Allrestaurants section  ----------*/
        
        #allRestaurants{
            height: fit-content;
            padding: 0 2%;
            justify-content: space-evenly;
        }

        #allRestaurants .headerContainer{
            padding-top: 5%;
        }

        #allRestaurants .cardContainer .headerContainer{
            height: 35%;
        }

        #allRestaurants .cardContainer{
            height: 60%;
            flex-wrap: wrap;
            justify-content: center;
        }
        
        #allRestaurants .cardContainer .toggleRestaurantsButton{
            height: 15%;
            margin: 0;
        }

        #allRestaurants .cardContainer .card{
            width: calc(90% / 3);
            min-width: 300px;
        }
        
        #allRestaurants .simpleSearch{
            width: 50%;
            align-self: center;
        }
        
        #allRestaurants #allRestaurantsContainer{
            flex-direction: row;
            flex-wrap: wrap;
            width: 100%;
            gap: 20px;
            justify-content: center;
        }

        #allRestaurants .toggleRestaurantsButton{
            margin: 25px 0 50px 0;
        }

    }

    @media screen and (min-width: 1100px) {
        #hero #heroTextContainer{
            gap: 5%;
        }

        #hero #heroTextContainer p{
            font-size: large;
        }

        .restaurantDescription{
            font-size: large;
        }

        #testimonials #testimonialHeader #decorQuote{
            top: 15px;
        }
    }

     @media screen and (min-width: 1200px) {
         #hero #heroTextContainer h1{
            font-size: 230%;
         }

        #hero #heroTextContainer p{
            font-size: x-large;
        }
        #testimonials #testimonialHeader #decorQuote{
            left: -45px;
            top: 25px;
        }
    }

    @media screen and (min-width: 1400px) {
        #heroTextContainer{
            gap: 5%;
        }

        #hero #heroTextContainer h1 {
            font-size: 300%;
        }

        #hero #heroTextContainer p{
            font-size: x-large;
        }
        #testimonials #testimonialHeader #decorQuote{
            left: -40px;
            top: 35px;
        }

        .experienceCard{
            padding: 28px;
        }
    }

    @media screen and (min-width: 1600px) {
        #testimonials #testimonialHeader #decorQuote{
            left: -35px;
            top: 45px;
        }
    }

    @media screen and (min-width: 1800px) {
        #testimonials #testimonialHeader #decorQuote{
            left: -30px;
            top: 55px;
        }
    }
        
/*=====  End of Media Queries  ======*/



</style>