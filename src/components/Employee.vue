<template>
    <article class="employeeCard">
        <div class="employeePicture" :style="{ backgroundImage: `url(../../src/assets/images/Person${image}vector.svg)` }"></div>
        <header class="headerContainer">
            <h1>{{ name }}</h1>
            <h2>{{ title }}</h2>
        </header>
    </article>
</template>

<script>
export default {
    props:["image","name","title"],
}
</script>

<style>

</style>