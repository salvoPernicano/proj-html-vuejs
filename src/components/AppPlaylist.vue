<template>
    <div class="playlistBox container">
        <div class="upperWrapper">
            <div class="PlaylistTop">
                <h1>Movie Playlist</h1>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>

        </div>
        <div class="framePlaylist">
            <iframe width="956" height="500" src="https://www.youtube.com/embed/H-izTnvz9MI?si=jOO6tLK3DJGyt2xK"
                title="YouTube video player" frameborder="1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
            <div class="playlist">
                <div class="header">
            <h1>New Movie</h1>
        </div>
                <MoviePlaylist v-for="(element, index) in store.moviePlaylist" :key="titolo" :propsObject="element" />

            </div>
        </div>
    </div>
</template>

<script>
import { store } from '../store'
import MoviePlaylist from './MoviePlaylist.vue'
export default {
    components: {
        MoviePlaylist,
    },
    name: 'AppPlaylist',
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

.playlistBox {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
.PlaylistTop {
    width: 100%;
    padding-left: 2em;
    border-bottom: 1px solid $appLightBlue;
    padding-block: 1em;
}

.upperWrapper {
    border-left: 2px solid $appGreen;
    display: flex;
    justify-content: space-between;
}

.framePlaylist {
    padding-block: 4em;
    display: flex;
    justify-content: space-between;
    .playlist{
        border: 1px solid red;
        height: 500px;
        flex-basis: 30%;
        overflow: auto;
        padding: 1em;
        background-color: $appLightBlue;
    }
}

</style>