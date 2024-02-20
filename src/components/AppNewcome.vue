<template>
    <div class="upperWrapper container">
        <div class="newComeBox">
            <h1>New Movie</h1>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <nav>
            <ul>
                <li :class="item.active ? 'focused' : '' " v-for="item in newMovieArray">{{ item.name }}</li>
            </ul>
        </nav>
        <div class="NewMoviesBox">
            <NewMovies v-for="item in store.moviePlaylist" :propsNewMovies="item"/>
        </div>

    </div>
</template>

<script>
import { store } from '../store'
import NewMovies from './NewMovies.vue'
export default {
    name: 'AppNewcome',
    components : {
        NewMovies
    },
        
    data() {


        return {
            store,
            newMovieArray: [
                {
                    name: 'All',
                   active : true
                },
                {
                    name: 'Coming Soon',
                    active : false
                },
                {
                    name: 'Latest Movie',
                    active : false
                },
                {
                    name: 'Top Rating',
                    active : false
                },
                {
                    name: 'TV Series',
                    active : false
                },
          

            ],
        }
    }
}
</script>

<style lang="scss" scoped>
@use '../scss/style.scss' as *;
@use '../scss/partials/variables' as*;

.upperWrapper {
    height: 100vh;
}

.newComeBox {
    width: 80%;
    margin-block: 2em;
    padding: 1em;
    border-left: 2px solid $appGreen;
    border-bottom: 1px solid $appLightBlue;
}

nav ul{
    display: flex;
    list-style: none;
    width: 50%;
    justify-content: space-between;
    font-size: 1.2rem;
    font-weight: bold;

}

li.focused{
    color: $appGreen;
}
</style>