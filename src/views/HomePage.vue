<template>
    <div id="hero">
        <div id="fadedCircle"></div>
        <div id="heroTextContainer">
            <h1>DineEase: Exceptional Dining Awaits.</h1>
            <p>Dive into culinary wonders with DineEase. We curate top-rated restaurants, each with distinct flavors and ambiance.
                From international dishes to traditional delights and gastronomic adventures, find your perfect spot with DineEase.</p>
            <div id="exploreButton">
                    <img src="../assets/images/Search Icon.png" alt="This is a search icon." title="This is a search icon.">
                    <h3>Explore Restaurants</h3>
            </div>
        </div>
        <div id="purpleStrip"></div>
        <div id="lightPurpleStrip"></div>
        <div id="heroImageContainer">
            <img src="../assets/images/" alt="">
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    #hero{
        background-color: red;
        height: calc(100vh - 45px);
        width: 100%;
        padding: 0 4%;
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
</style>