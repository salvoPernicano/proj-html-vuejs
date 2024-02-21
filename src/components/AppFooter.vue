<template>
    <div class="ft">
        <div class="container">
            <ul>
                <li class="title">{{ navMenuOptions[0].name }}</li>
                <li>{{ navMenuOptions[0].content }}</li>
                <ul class="footerIconBox">
                    <li class="footerIcon" v-for="icon in navMenuOptions[0].icons"><img :src=icon alt=""></li>

                </ul>
            </ul>
            <ul>
                <li class="title">{{ navMenuOptions[1].name }}</li>
                <li v-for="element in navMenuOptions[1].content">{{ element }}</li>
            </ul>
            <ul>
                <li class="title">{{ navMenuOptions[2].name }}</li>
                <li v-for="element in navMenuOptions[2].content">{{ element }}</li>
            </ul>
            <div class="recent">
                <h3 class="title">{{ navMenuOptions[3].name }}</h3>
                    <div class="recentBox" v-for="element in navMenuOptions[3].content">
                        <img :src=element.imagePath alt="">
                        <div class="postInfo">
                        <h4>{{ element.title }}</h4>
                        <h4>{{ element.date }}</h4>

                        </div>
                </div>
            </div>
        </div>
        <div class="copy container">
            <div>
                <span>Terms and Conditions</span>
                <span>Policy</span>
                <span>About</span>
            </div>
            <div>
                <span>&copy; 2020 <span class="green">@Themepul</span> All Rights Reserved</span>
            </div>
        </div>
    </div>
</template>

<script>
import { store } from '../store'
export default {
    name: 'AppFooter',
    data() {
        return {
            store,
            navMenuOptions: [
                {
                    name: 'About Us',
                    content: 'Mauris malesuada arcu eu posuere eleifen. Ut egestas tortor at leo egestas tincidunt. Nam tincidunt metus tristique: tristique viverra. Mauris erat ante, egestas vitae dapibus seds.',
                    icons : [
                    './src/assets/img/social/facebook-f.svg',
                    './src/assets/img/social/twitter (1).svg',
                    './src/assets/img/social/linkedin-in.svg',
                    './src/assets/img/social/instagram.svg',
                    './src/assets/img/social/pinterest-p.svg'
                    ]
                },
                {
                    name: 'Movie Category',
                    content: [
                        'English New Movie',
                        'Hindi All Movie',
                        'Latest Tamil Movie',
                        'New Top Rating Movie',
                        'Homn New Movie',
                        'Animation New Movie'
                    ]
                },
                {
                    name: 'Information',
                    content: [
                        'Youtube Video Post ',
                        'Actor Information ',
                        'New Promotion ',
                        'Latest Movie In English ',
                        'Latest Flim Product ',
                        'Video New Video '
                    ]
                },
                {
                    name: 'Recent Posts',
                    content: [
                        {
                            imagePath: './src/assets/img/blog-100x100.jpg',
                            title: 'Actor The Concept Movie High Concept Theory see',
                            date: 'April 14, 2020'
                        },
                        {
                            imagePath: './src/assets/img/blog2-100x100.jpg',
                            title: 'consequat Nam lectus nibh aucibus It has turpis',
                            date: 'April 14, 2020'

                        },
                        {
                            imagePath: './src/assets/img/blog3-100x100.jpg',
                            title: 'Nam lectus nibh consequat aucibus turpis',
                            date: 'April 14, 2020'

                        }
                    ]

                }


            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@use '../scss/style.scss' as *;
@use '../scss/partials/variables' as*;
div.ft::before {

    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: url(../assets/img/ft-bg.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    filter: brightness(120%) opacity(0.2);
    z-index: -1;

}

div.ft {
    position: relative;
    margin-block: 3em;
    height: 50vh;
}

.container {
    height: 100%;
    display: flex;
    justify-content: space-between;
    gap: 20px;
}

ul{
    padding-block: 3em;
    flex-basis: 25%;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.title{
    margin-bottom: 10px;
    font-weight: bold;
    font-size: 1.2rem;
    position: relative;
}
.title:after{
    position: absolute;
    bottom: -2px;
    left: 0;
        content: "";
        background-color: white;
        height: 2px;
        width: 20%;
    }

.recent{
    padding-block: 3em;
}
.recentBox{
    padding-top: 5px;
        display: flex;
        gap: 12px;
}
.footerIconBox{
    padding-top: 15px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

.footerIcon{
    height: 16px;
    width: 16px;
}

.postInfo h4{
    font-weight: 200;
}

.copy{
    height: 50px;
    display: flex;
    align-items: center;
    div{
        display: flex;
        gap: 10px;
    }
    .green{
        color: $appGreen;
    }
}
</style>