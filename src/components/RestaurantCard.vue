<template>
    <div class="card">
        <div class="cardPicture" :style="{ backgroundImage: `url(${image})` }"></div>
        <div class="cardInfoContainer">

            <div class="cardTopRow">
                <h1 class="restaurantName">{{ name }}</h1>

                <div class="restaurantRatings">
                    <img v-for="index in 5" :key="index" :style="{ filter: getStarStyle(index) }" src="../assets/images/star.png" alt="This is a picture of a star, representing the rating of the restaurant." title="This is a picture of a star, representing the rating of the restaurant.">
                </div>
            </div>
            <p class="restaurantDescription">
                {{ description }}
            </p>

            <a class="restaurantLink" href="#">View Restaurant »</a>
        </div>
    </div>
</template>

<script>
export default {
    props: ['image', 'name', 'description', 'rating'],
    methods: {
        getStarStyle(index) {
            return index <= this.rating ? "" : "contrast(0)";
        },
    },
}
</script>

<style>
</style>