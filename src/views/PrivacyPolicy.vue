<template>
    <div id="privacyPolicyContainer">
    <div class="headerContainer">
        <h1>Privacy Policy</h1>
        <h2>DineEase Showcase Website</h2>
        <h1>Data Protection and User Privacy</h1>
    </div>
    <div id="content">
        <div class="row">
            <p>At DineEase, we value your privacy and are committed to safeguarding your personal information. This Privacy Policy outlines how we collect, use, and protect your data when you access and use our platform. By using DineEase, you agree to the terms outlined in this policy.</p>
        </div>
        <div class="row">
            <h1>Information Collection:</h1>
            <p>We collect certain personal information, such as your name, email address, and location, to enhance your dining experience. This data is voluntarily provided by you when you create an account or interact with our platform.</p>
        </div>
        <div class="row">
            <h1>Use of Information:</h1>
            <p>The information we collect is used to personalize your dining recommendations, improve our services, and keep you informed about the latest updates and offers. Rest assured, we will never share or sell your personal information to third parties without your consent.</p>
        </div>
        <div class="row">
            <h1>Cookies and Tracking:</h1>
            <p>DineEase uses cookies to enhance user experience and provide personalized content. These cookies may track your browsing behavior on our platform. You can manage your cookie preferences through your browser settings.</p>
        </div>
        <div class="row">
            <h1> Data Security:</h1>
            <p>We employ industry-standard security measures to protect your data from unauthorized access, alteration, or disclosure. However, it is essential to understand that no online platform can guarantee 100% security, and you use DineEase at your own risk.</p>
        </div>
        <div class="row">
            <h1>Third-Party Links:</h1>
            <p>DineEase may contain links to external websites and services. We do not have control over the privacy practices of these third-party sites. Please review their respective privacy policies before providing any personal information.</p>
        </div>
        <div class="row">
            <h1>Updates and Amendments:</h1>
            <p> DineEase may update this Privacy Policy from time to time to reflect changes in data regulations or platform enhancements. We recommend checking this page periodically for the latest information.</p>
        </div>
        <div class="row">
            <p>If you have any questions or concerns regarding our Privacy Policy or how we handle your data, please feel free to contact our support team at privacy@dineease.com.</p>
        </div>
    </div>
    </div>

</template>
<script>
export default {
    
}
</script>
<style>
    #privacyPolicyContainer {
        padding: 0 4% 100px 4%;
    }

    #privacyPolicyContainer .headerContainer{
        text-align: left;
    }

    #privacyPolicyContainer .headerContainer h2, .headerContainer h1{
        margin-left: 0;
        margin-right: 0;
    }
    
    #privacyPolicyContainer .headerContainer h2{
        margin-bottom: 5px;
    }
    
    #privacyPolicyContainer .headerContainer h1:last-of-type{
        font-size: medium;
        margin-bottom: 20px;
    }        

    #privacyPolicyContainer #content{
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    #privacyPolicyContainer #content > h1{
        margin-bottom: 25px;
    }

    #privacyPolicyContainer #content h1{
        font-size: medium;
    }

    #privacyPolicyContainer #content h1, #content p{
        margin: 10px 0;
    }

</style>