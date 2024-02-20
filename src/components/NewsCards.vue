<template>
    <div class="newsCard">
        <figure>
            <img :src="propsNews.imagePath" alt="">
        </figure>
        <div class="news">
            <h1>{{ propsNews.title }}</h1>
        </div>
    </div>
    </template>
    
    <script>
    export default {
        name : 'NewsCards',
        props : [
            'propsNews'
        ],
        data() {
            
    
            return {}
        }
    }
    </script>
    
    <style lang="scss" scoped>
    .newsCard{
        height: 250px;
        flex-basis: calc(25% - 20px);
        position: relative;
        figure{
            width: 100%;
            height: 100%;
            img{
                width: 100%;
            height: 100%; 
            }
        }
        .news{
            position: absolute;
            bottom: 0;
        }
    }
    .newsCard:first-of-type{
        flex-basis: 50%;
        height: 500px;
    }

    </style>