<template>
<div class="newMovieCard">
    <figure>
        <img :src="propsNewMovies.PosterPath" alt="">
    </figure>
    <div class="newMovieInfo">
        <h1>{{ propsNewMovies.titolo }}</h1>
        <h3>{{'Category : ' + propsNewMovies.category }}</h3>
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
.newMovieCard{
    margin-block: 2em;
    flex-basis: calc(80% / 3 );
    height: 450px;
    position: relative;
    border: 1px solid blue;
    figure{
        width: 100%;
        height: 100%;
        img{
            width: 100%;
            height: 100%;
            object-fit: cover
        };
    }
    .newMovieInfo{
        padding: 1em;
        position: absolute;
        bottom: 4em;
        h3{
            margin-block: 1em;
            font-size: 0.9rem;
        }
    }
    
}
</style>