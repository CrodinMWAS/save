<template>
    <article class="card" role="article" :aria-label="`Restaurant: ${name} Rated: ${rating}`">
        <div class="cardPicture" :style="{ backgroundImage: `url(${image})` }" aria-hidden="true"></div>
        <div class="cardInfoContainer">

            <header class="cardTopRow">
                <h1 class="restaurantName">{{ name }}</h1>

                <div class="restaurantRatings">
                    <img aria-hidden="true" v-for="index in 5" :key="index" :style="{ filter: getStarStyle(index) }" src="../assets/images/star.png" alt="Star, Representing The Rating" title="Star, Representing The Rating">
                </div>
            </header>
            <p class="restaurantDescription">
                {{ description }}
            </p>

            <a class="restaurantLink" href="#" role="link" aria-label="View Restaurant">View Restaurant »</a>
        </div>
    </article>
</template>

<script>
export default {
    props: ['image', 'name', 'description', 'rating'],
    methods: {
        // This Method Colors The Stars According To their Respective Restaurants Rating.
        getStarStyle(index) {
            return index <= this.rating ? "" : "contrast(0)";
        },
    },
}
</script>

<style>
</style>