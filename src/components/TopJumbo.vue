<template>
    <div class="offerJumbo">

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
}




</style>