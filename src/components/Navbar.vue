<template>
    <nav>
        <router-link to="/" v-if="!showNavButtons">
            <img src="../assets/images/Logo.png" alt="This is a logo of our website. It takes you back to our homepage." title="This is a logo of our website.">
        </router-link>
        <div id="navButtonsContainer">
            <h2 id="backButton" @click="this.showNavButtons = !this.showNavButtons"><img src="../assets/images/Chevron Down Icon@2x.png" alt="This is an Icon which hides the navbar menu." title="This is an Icon Which takes hides the navbar menu."></h2>
            <h2><router-link to="/">Home</router-link></h2>
            <h2><router-link to="/AboutUs">About</router-link></h2>
            <h2><router-link to="/Contact">Contact</router-link></h2>
        </div>
        <img v-if="!showNavButtons" @click="this.showNavButtons = !this.showNavButtons" src="../assets/images/Menu Icon.png" alt="This is an Icon for the dropdown menu." title="This is an Icon for the dropdown menu.">
    </nav>
</template>

<script>
export default {
    data() {
        return {
            showNavButtons: false,
        }
    },
}

</script>

<style>
    
</style>