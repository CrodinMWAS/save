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
    <FeaturedRestaurants></FeaturedRestaurants>
</template>

<script>
import FeaturedRestaurants from '../components/FeaturedRestaurants.vue';

export default {
    data() {
        return {
        }
    },
    components:{
        FeaturedRestaurants
    }
}
</script>

<style scoped>
    #hero{
        height: calc(100vh - 101px);
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
    }

    #hero #heroImageContainer img{
        width: 130%;
    }

    #heroImageContainer{
        height: fit-content;
        width: fit-content;
    }

</style>