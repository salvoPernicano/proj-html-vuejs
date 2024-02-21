<template>
<div class="newMovieCard">
    <span class="greenPill">2.30.00</span>
    <img class="play" src="../assets/img/circle-play-regular.svg" alt="">
    <figure>
        <img :src="propsNewMovies.PosterPath" alt="">
    </figure>
    <div class="newMovieInfo">
        <h1>{{ propsNewMovies.titolo }}</h1>
        <h3>{{'Category : ' + propsNewMovies.category }}</h3>
        <h4>{{'Release : '+ propsNewMovies.data_di_uscita }}</h4>
        <h4>{{'Release : '+ propsNewMovies.Genres }}</h4>
    </div>
    <span class="pillDarkLeft">Details</span>
    <span class="pillDarkRight">{{propsNewMovies.views + ' views' }}</span>
    <div class="rating">
        <img class="star" src="../assets/img/star-solid.svg" alt="">
        <span>0/10</span>
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
@use '../scss/style.scss' as *;
@use '../scss/partials/variables' as*;
.newMovieCard{
    margin-block: 2em;
    flex-basis: calc(80% / 3 );
    height: 450px;
    position: relative;
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
    .pillDarkLeft{
        position: absolute;
        left: 0;
        bottom: 20px;
        background-color: $appLightBlue;
        padding: 10px 20px;
        font-weight: bold;
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;
    }
    .pillDarkRight{
        position: absolute;
        right: 0;
        bottom: 20px;
        background-color: $appLightBlue;
        padding: 10px 20px;
        font-weight: bold;
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
    }

    .rating{
        padding: 10px;
        position: absolute;
        right: 0;
        top: 0;
        img{
            height: 15px;
            width: 15px;
        }
    }
    
}

.greenPill{
    display: none;
    position: absolute;
    top: 20px;
    color: white;
    background-color: $appGreen;
    padding: 10px 20px;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
}

.play{
    height: 50px;
    width: 50px;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: none;
}


.newMovieCard h4{
    font-weight: 300;
    display: none;
}

.newMovieCard:hover .greenPill{
    display: block;
}
.newMovieCard:hover h4{
    display: block;
}
.newMovieCard:hover .play{
    display: block;
}

.newMovieCard:before {
  content: '';
  display: block;
  position: absolute;
  height: 0%;
  width: 100%;
  top: 0;
  transition: height 0.5s ease-out;
  background: linear-gradient(to top, transparent 0%,  $appGreen 150%);
}
.newMovieCard:hover:before {
  height: 100%;
}
</style>