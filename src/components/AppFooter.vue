<template>
    <div class="ft">
        <div class="container">
            <ul>
                <li>{{ navMenuOptions[0].name }}</li>
                <li>{{ navMenuOptions[0].content }}</li>
            </ul>
            <ul>
                <li>{{ navMenuOptions[1].name }}</li>
                <li v-for="element in navMenuOptions[1].content">{{ element }}</li>
            </ul>
            <ul>
                <li>{{ navMenuOptions[2].name }}</li>
                <li v-for="element in navMenuOptions[2].content">{{ element }}</li>
            </ul>
            <ul>
                <li>{{ navMenuOptions[3].name }}</li>
                <li v-for="element in navMenuOptions[3].content"><img :src=element.imagePath alt=""></li>
            </ul>
   
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
                    content: 'Mauris malesuada arcu eu posuere eleifen. Ut egestas tortor at leo egestas tincidunt. Nam tincidunt metus tristique: tristique viverra. Mauris erat ante, egestas vitae dapibus seds.'
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
    border: 1px solid red;
    height: 100%;
    display: flex;
    justify-content: space-between;
}

ul{
    padding: 1em;
    flex-basis: 25%;
    list-style: none;
    display: flex;
    flex-direction: column;
    li{
        margin-block: 6px;
    }
}

ul li:first-child{
    font-weight: bold;
    font-size: 1.2rem;
}
</style>