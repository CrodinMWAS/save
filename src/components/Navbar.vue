<template>
     <nav :class="{showButtons: showNavButtons}">
        <router-link to="/" v-if="!showNavButtons">
            <img src="../assets/images/Logo.png" alt="This is a logo of our website. It takes you back to our homepage." title="This is a logo of our website.">
        </router-link>
        <div class="navButtonsContainer">
            <h2 id="backButton" @click="this.toggleNavOverlay()"><img src="../assets/images/Chevron Down Icon@2x.png" alt="This is an Icon which hides the navbar menu." title="This is an Icon Which hides the navbar menu."></h2>
            <h2><router-link to="/" @click="this.showNavButtons ? this.toggleNavOverlay() : ''  ">Home</router-link></h2>
            <h2><router-link to="/AboutUs" @click="this.showNavButtons ? this.toggleNavOverlay() : '' ">About Us</router-link></h2>
            <h2><router-link to="/Contact" @click="this.showNavButtons ? this.toggleNavOverlay() : ''  ">Contact</router-link></h2>
        </div>
        <img ref="hamburgerMenuIcon" id="hamburgerMenuIcon" v-if="!showNavButtons" @click="this.toggleNavOverlay()" src="../assets/images/Menu Icon.png" alt="This is an Icon for the dropdown menu." title="This is an Icon for the dropdown menu.">
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
        toggleNavOverlay(){
            this.showNavButtons = !this.showNavButtons
            this.$emit("toggleOverlay")
        }
    }
}

</script>

<style>
    
</style>