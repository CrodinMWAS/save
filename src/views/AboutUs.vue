<template>
    <div class="headerContainer">
        <h1>About Us</h1>
        <h2>Embracing the Joy of Dining</h2>
    </div>
    <div id="timeline">
        <div id="topRow">
            <div class="cell"> <h3 class="date">2019</h3> </div>
            <div class="cell"> <h3>Culinary Connections Made</h3> <div class="lineContainer"><div class="line"><div class="circle"></div></div></div> </div>
            <div class="cell"> <h3 class="date">2021</h3> </div>
            <div class="cell"> <h3>Redifining Dining Landscape</h3> <div class="lineContainer"><div class="line"><div class="circle"></div></div></div> </div>
            <div class="cell"> <h3 class="date">2023</h3> </div>
        </div>
        <div id="bottomRow">
            <div class="cell"> <div class="lineContainer"><div class="line"><div class="circle"></div></div></div> <h3>Birth of DineEase</h3> </div>
            <div class="cell"> <h3 class="date">2020</h3> </div>
            <div class="cell"> <div class="lineContainer"><div class="line"><div class="circle"></div></div></div> <h3>Curatorial Excellence Emerges</h3> </div>
            <div class="cell"> <h3 class="date">2022</h3> </div>
            <div class="cell"> <div class="lineContainer"><div class="line"><div class="circle"></div></div></div> <h3>Redifining Dining Landscape</h3> </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
    #timeline{
        width: 100%;
        height: 400px;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    #timeline::after{
        content: "";
        background-color: var(--purpleColor);
        height: 2px;
        width: 100%;
        position: absolute;
        bottom: 50%;
    }

    #topRow, #bottomRow{
        display: flex;
        height: 50%;
    }

    .cell{
        width: calc(100% / 5);
        height: 100%;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding: 30px 0;
    }

    #topRow .cell{
        justify-content: flex-end;
    }

    #bottomRow .cell{
        justify-content: flex-start;
    }

    #bottomRow .cell::after{
        content: "";
        background-color: var(--purpleColor);
        width: 20px;
        height: 20px;
        position: absolute;
        border-radius: 50%;
        top: -15px;
        border: 4px solid white;
        outline: 3px solid var(--purpleColor);
        right: calc(50% - 15px);
    }

    .cell .lineContainer{
        height: 60%;
    }
    .cell .lineContainer .line{
        width: 2px;
        height: 75px;
        background-color: var(--greyishWhiteColor);
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    #bottomRow .cell .lineContainer .line{
        justify-content: flex-end;
    }
    .cell .lineContainer .line .circle{
        width: 6px;
        height: 6px;
        background-color: var(--greyishWhiteColor);
        border-radius: 50%;
    }

    .cell .date{
        font-weight: 900;
        color: var(--purpleColor);
    }
    
    .cell h3{
        font-weight: normal;
        margin: 10px;
        font-size: small;
    }
</style>