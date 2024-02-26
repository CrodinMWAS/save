<template>
    <div id="footer" role="region" aria-label="Footer">
        <div id="infoColumn">
            <img aria-hidden="true" src="../assets/images/Logomarkvector.svg" alt="DineEase Logo." title="DineEase Logo.">
            <router-link to="Privacy-Policy">
                <h3 @click="scrollToTop()">
                    Privacy Policy
                </h3>
                </router-link>
            <div id="contactContainer">
                <h3>+36 30 123 4567</h3>
                <h3>support@dineease.com</h3>
            </div>
            <h3>© 2024 - All rights reserved</h3>
        </div>
        <div id="socialsColumn">
            <h2>Follow Us</h2>
            <div class="socialIconsContainer">
                <button aria-label="Go to our Facebook Page">
                    <img aria-hidden="true" src="../assets/images/Facebook Iconvector.svg" alt="This is an icon to our Facebook page" title="This is an icon to our Facebook page">
                </button>
                <button aria-label="Go to our Instagram Page">
                    <img aria-hidden="true" src="../assets/images/Instagram Iconvector.svg" alt="This is an icon to our Instagram page" title="This is an icon to our Instagram page">
                </button>
                <button aria-label="Go to our Twitter">
                    <img aria-hidden="true" src="../assets/images/Twitter Iconvector.svg" alt="This is an icon to our Twitter page" title="This is an icon to our Twitter page">
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        scrollToTop(){
            window.scrollTo(0, 0);
        }
    },
}
</script>

<style>
    
</style>