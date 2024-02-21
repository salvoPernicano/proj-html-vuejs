<template>
    <div class="offerJumbo">
        <div class="jumboText">
            <h2 class="green">COMING SOON MOVIE</h2>
            <h1>MAX STILL</h1>
            <div class="subBox">
                <h2>JON PLAYER <span>&</span> EMILY ROSE</h2>
                <h3>THE COUNTDOWN IS FINISHED!</h3>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name : 'BottomJumbo',
    data () {
        return {}
    }
}
</script>

<style lang="scss" scoped>
@use '../scss/style.scss' as *;
@use '../scss/partials/variables' as*;

.offerJumbo{
    background-image: url(../assets/img/coming-bg.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position:center ;
    height:100vh;
    position: relative;
}

.jumboText{
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%);
    .green{
        color: $appGreen;
    }
    h1{
        margin-block: 10px;
        font-weight: 100;
        font-size: 3.5rem;
    }
    .subBox{
        background-color:$appBlackFaded;
        padding: 20px;
        h2{
            margin-bottom: 1em;
        }
        span{
            color: $appGreen;
        }

    }
    
}




</style>