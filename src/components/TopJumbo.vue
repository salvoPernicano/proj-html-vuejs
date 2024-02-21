<template>
    <div class="offerJumbo">
        <div class="special">
            <h4>Welcome To Our Movie Site</h4>
            <h3>OUR SPECIAL <span>MOVIES</span></h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem dignissimos culpa quaerat ipsa quo repellat, consequatur alias saepe incidunt qui.</p>
            <button>Read More</button>
        </div>
    </div>
</template>

<script>
export default {
    name : 'TopJumbo',
    data () {
        return {}
    }
}
</script>

<style lang="scss" scoped>
@use '../scss/style.scss' as *;
@use '../scss/partials/variables' as*;

.offerJumbo{
    background-image: url(../assets/img/slider-1536x520.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    height: calc(100vh - 200px);
    position: relative;
}

.special{
    width: 450px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%);
    text-align: center;
    h3{
        margin-block: 8px;
        font-size: 2.5rem;
        font-weight: 300;
        span{
            color: $appGreen;
        }
    }
    p{
        line-height: 150%;
    }
}

button{
    margin-block: 1em;
    color: white;
    font-weight: bold;
    background-color: $appGreen;
    border: none;
    padding: 10px 20px;
    border-radius: 20px;
    cursor: pointer;
    &:hover{
        background-color: white;
        color: $appBlack;
    }
}


</style>