<template>
     <nav role="navigation" :class="{showButtons: showNavButtons}" aria-label="Website Navigaton">
        <router-link to="/" v-if="!showNavButtons" aria-label="Go to homepage">
            <img src="../assets/images/Logo.png" alt="This is a logo of our website. It takes you back to our homepage." title="Go to homepage">
        </router-link>
        <div class="navButtonsContainer" aria-label="Toggle Navigation Menu">
            <button aria-label="Leave Menu" id="backButton" @click="this.toggleNavOverlay()"><img src="../assets/images/Chevron Down Icon@2x.png" alt="Menu Icon" title="Leave Menu"></button>
            <router-link aria-label="Go To The Homepage" to="/" @click="this.showNavButtons ? this.toggleNavOverlay() : ''  ">Home</router-link>
            <router-link aria-label="Go To The About Us page" to="/AboutUs" @click="this.showNavButtons ? this.toggleNavOverlay() : '' ">About Us</router-link>
            <router-link aria-label="Go To The Contact page" to="/Contact" @click="this.showNavButtons ? this.toggleNavOverlay() : ''  ">Contact</router-link>
            <!-- The Router Links only Toggle The Overlay On/Off When showNavButtons is True, Meaning The Menu is only accessible through the hamburgermenu. -->
        </div>
        <button v-if="!showNavButtons" @click="this.toggleNavOverlay()" aria-label="Open Menu" id="hamburgerMenuIcon">
            <img ref="hamburgerMenuIcon" src="../assets/images/Menu Icon.png" alt="This Is a Hamburgermenu Icon" title="Open Menu">
        </button>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            showNavButtons: false,
        }
    },
    methods:{
        // Toggles the full screen navigation Section. Also, emits to App.vue, So it can decide whether to show the page content or not.
        toggleNavOverlay(){
            this.showNavButtons = !this.showNavButtons
            this.$emit("toggleOverlay")
        }
    }
}

</script>

<style>
    
</style>