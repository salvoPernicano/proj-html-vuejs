<script>
import { store } from './store'
import AppHeader from './components/AppHeader.vue'
import TopJumbo from './components/TopJumbo.vue'
import BottomJumbo from './components/BottomJumbo.vue'
import AppSlider from './components/AppSlider.vue'
import AppPlaylist from './components/AppPlaylist.vue'

export default{
    components : {
        AppHeader,
        TopJumbo,
        AppSlider,
        AppPlaylist,
        BottomJumbo
    },
    data(){
        return{
            store
        }
    }
}
</script>

<template>

        <AppHeader/>
        <TopJumbo />
        <AppSlider/>
        <AppPlaylist/>
        <BottomJumbo/>

</template>

<style lang="scss">
@use './scss/style.scss' as *;







</style>
