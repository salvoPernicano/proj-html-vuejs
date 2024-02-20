<template>
    <div class="movieCard">
        <img :src="propsObject.PosterPath" alt="">
        <div class="movieInfo">

            <h1>{{ propsObject.titolo }}</h1>
            <h3>{{ propsObject.views + ' views' }}</h3>
            <div class="date">
                <h4>{{ propsObject.data_di_uscita }}</h4>
                <span>{{'Duration: ' + propsObject.durata + ' minutes' }}</span>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name : 'MoviePlaylist',
    props : [
        'propsObject'
    ],
    data() {
        

        return {}
    }
}
</script>

<style lang="scss" scoped>
@use '../scss/style.scss' as *;
@use '../scss/partials/variables' as*;
.movieCard{
    font-size: 0.9rem;
    display: flex;
    justify-content: flex-start;
    gap: 10px;
    margin-block: 1.5em;
    .movieInfo{
        display: flex;
        flex-direction: column;
       gap: 5px;
        h3{
            font-size: 0.8rem;
        }
        h4{
            font-size: 0.8rem;
        }
    }

}
.date{
    display: flex;
    justify-content: space-between;
    gap: 10px;
}
    img{
        height: 80px;
        aspect-ratio: 1;
    }
</style>