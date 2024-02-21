<template>
    <div class="container">
        <div class="newsSubBox">
            <h1>Latest News</h1>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>

        <div class="newsBox">
            <div class="mainNews">
            
                <figure>
                    <img :src="store.newsArray[0].imagePath" alt="">
                </figure>
                <div  class="mainNewsInfo">
                        <h2>{{store.newsArray[0].title }}</h2>

                    </div>
                    <span class="pillDarkLeft">Details</span>
                    <span class="share"><span class="faded">moviestar</span> 0 Comments Share</span>
            </div>
            <div class="smallNews">
                <div v-for="(item,index) in store.newsArray" :key="index" v-show="index !== 0" class="newsCard">
                    <span class="date">{{ item.date }}</span>
                    <figure>
                        <img :src="item.imagePath" alt="">
                    </figure>
                    <div  class="newsInfo">
                        <h2>{{ item.title }}</h2>
                    </div>
                    <span class="pillDarkLeft">Details</span>
                    <span class="share">Share</span>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import { store } from '../store'

export default {
    name: 'AppNews',
    data() {
        return {
            store,

        }
    }
}
</script>

<style lang="scss" scoped>
@use '../scss/style.scss' as *;
@use '../scss/partials/variables' as*;

img{
    object-fit: cover;
}
.newsBox{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 15px;
}

.newsSubBox{
    margin-block: 2em;
    padding: 1em 2em;
    border-left: 1px solid $appGreen;
    border-bottom : 1px solid $appLightBlue
}
.mainNews{
    flex-basis: calc(50% - 15px);
    height: 500px;
    position: relative;
    figure{
        width: 100%;
        height: 100%;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .mainNewsInfo{
        position: absolute;
        bottom: 50px;
        padding: 1em;
    }
}
.smallNews{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    flex-basis: 50%;
    gap: 15px;

    div{
        height:calc(250px - (15px / 2));
        flex-basis: calc(50% - 15px);
        position: relative;
        figure{
            width: 100%;
            height: 100%;
            img{
                width: 100%;
                height: 100%;
            }
        }
    }

    .newsCard:before {
  content: '';
  display: block;
  position: absolute;
  height: 0%;
  width: 100%;
  top: 0;
  transition: height 0.5s ease-out;
  background: linear-gradient(to top, transparent 0%,  $appGreen 150%);
}
.newsCard:hover:before {
  height: 100%;
}

    .newsCard{
        position: relative;
        .newsInfo{
            padding: 1em ;
            font-size: 0.8rem;
            height: 50px;
        position: absolute;
        bottom: 25%;
    }
    }
}

.newsCard:hover .date{
    display: block;
}
.date{

    display: none;
    position: absolute;
    right: 0;
    top: 20px;
    padding: 10px 10px;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    background-color: $appGreen;

}
.pillDarkLeft{
        position: absolute;
        left: 0;
        bottom: 10px;
        background-color: $appBlack;
        padding: 5px 15px;
        font-weight: bold;
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;
    }

.share{
    position: absolute;
    right: 0;
    bottom: 10px;
    font-weight: bold;
    margin-right: 20px;
}

.faded{
    opacity: 0.5;
}

.mainNews:before {
  content: '';
  display: block;
  position: absolute;
  height: 0%;
  width: 100%;
  top: 0;
  transition: height 0.5s ease-out;
  background: linear-gradient(to top, transparent 0%,  $appGreen 150%);
}
.mainNews:hover:before {
  height: 100%;
}
</style>