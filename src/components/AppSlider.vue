<template>
    <div class="slider container">
        <div class="upperWrapper">
            <div class="sliderTop">
                <h1>New Movie</h1>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div class="chevronControl">
                <i class="fa-solid fa-circle-left" @click="previousImg()"></i>
                <i class="fa-solid fa-circle-right" @click="nextImg()"></i>
            </div>

        </div>
        <div class="sliderPhotos">
            <div :class="index === currentImage ? 'active' : 'inactive' " v-for="(item,index) in newMovieArray" class="cardMovie" @click="activateCard(index)">
                <figure>
                    <img :src="item.posterPath" alt="poster">
                </figure>
                <div class="movieInfo">
                    <h2>{{ item.title }}</h2>
                    <h3>{{ 'Category :'+item.category }}</h3>
                    <span class="pillDarkLeft">Details</span>
                    <span class="pillDarkRight">{{ item.views + 'views'}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name : 'AppSlider',
    data () {
        return {
            currentImage : 0,
            newMovieArray : [
                {
                    title : 'Hurry Animate Blue Strack New Movie',
                    category : 'Top Rating',
                    posterPath : './src/assets/img/1.jpg',
                    review : 0,
                    views : 381
                },
                {
                    title : 'Quisque Auctor Movie In Strack',
                    category : 'Coming Soon',
                    posterPath : './src/assets/img/2.jpg',
                    review : 4,
                    views : 947
                },
                {
                    title : 'New Movie Quisque In Strack',
                    category : 'Latest Movie',
                    posterPath : './src/assets/img/3.jpg',
                    review : 0,
                    views : 721
                },
            ]
        }
    },
    methods : {
        activateCard(index){
            this.currentImage = index
        },
        nextImg(){
            this.currentImage < this.newMovieArray.length -1 ? this.currentImage++ : this.currentImage = 0
        },
        previousImg(){
            this.currentImage <= 0 ? this.currentImage = this.newMovieArray.length-1 : this.currentImage--
        }
        
    }
}
</script>

<style lang="scss" scoped>
@use '../scss/style.scss' as *;
@use '../scss/partials/variables' as*;
    .slider{
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 100px;
    }

    .sliderTop{
        width: 80%;
        padding-left: 2em;
        border-bottom: 1px solid $appLightBlue;
        padding-block: 1em;
    }
    .upperWrapper{
        border-left: 2px solid $appGreen;
        display: flex;
        justify-content: space-between;
    }

    .chevronControl .fa-solid{
        margin-inline: 5px;
        color: $appGreen;
        padding: 10px 10px;
        border: 1px solid $appLightBlue;
        border-radius: 50%;
        font-size: 1.3rem;
    }

    .cardMovie{
        position: relative;
        border-radius: 30px;
        height: 400px;
            width: 350px;
            transition: all .3s;
    }
    .movieInfo{
        position: absolute;
        bottom: 3em;
        padding: 1em;
        h3{
            font-size: 0.9rem;
            margin-block: 5px;
        }
    }

    .pillDarkLeft{
        margin-top: 5px;
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;
        font-weight: bold;
        background-color: $appBlack;
        padding: 10px;
        position: absolute;
        left: 0;
    }
    .pillDarkRight{
        margin-top: 5px;
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
        font-weight: bold;
        background-color: $appBlack;
        padding: 10px;
        position: absolute;
        right: 0;
    }
    .sliderPhotos{
        height: 50vh;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        padding-bottom: 5em;
        figure{
            margin: 0 auto;
            height: 100%;
                width: 100%;
                border-radius: 30px;
            img{
                height: 100%;
                width: 100%;
                border-radius: 30px;
            }
        }
    }

    .active{
        transform: scale(1.2);
    }

    .inactive{
        filter: grayscale(100%);
    }
</style>