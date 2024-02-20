<template>
<div class="newMovieCard">
    <figure>
        <img :src="propsNewMovies.PosterPath" alt="">
    </figure>
    <div class="newMovieInfo">
        <h1>{{ propsNewMovies.titolo }}</h1>
    </div>
</div>
</template>

<script>
export default {
    name : 'NewMovies',
    props : [
        'propsNewMovies'
    ],
    data() {
        

        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>