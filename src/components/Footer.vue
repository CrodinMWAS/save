<template>
    <div id="footer">
        <div id="infoColumn">
            <img src="../assets/images/Logomarkvector.svg" alt="This is our logo." title="This is our logo.">
            <h3 @click="scrollToTop()">
                <router-link to="Privacy-Policy">
                    Privacy Policy
                </router-link>
            </h3>
            <div id="contactContainer">
                <h3>+36 30 123 4567</h3>
                <h3>support@dineease.com</h3>
            </div>
            <h5>© 2024 - All rights reserved</h5>
        </div>
        <div id="socialsColumn">
            <h2>Follow Us</h2>
            <div class="socialIconsContainer">
                <img src="../assets/images/Facebook Iconvector.svg" alt="This is an icon to our Facebook page" title="This is an icon to our Facebook page">
                <img src="../assets/images/Instagram Iconvector.svg" alt="This is an icon to our Instagram page" title="This is an icon to our Instagram page">
                <img src="../assets/images/Twitter Iconvector.svg" alt="This is an icon to our Twitter page" title="This is an icon to our Twitter page">
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