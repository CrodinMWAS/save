<template>
    <div class="employeeCard">
        <div class="employeePicture" :style="{ backgroundImage: `url(../../src/assets/images/Person${image}vector.svg)` }"></div>
        <div class="headerContainer">
        <h1>{{ name }}</h1>
        <h2>{{ title }}</h2>
    </div>
    </div>
</template>

<script>
export default {
    props:["image","name","title"],
}
</script>

<style>

</style>