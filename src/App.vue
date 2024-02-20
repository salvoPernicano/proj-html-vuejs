<script>
import { store } from './store'
import AppHeader from './components/AppHeader.vue'
import TopJumbo from './components/TopJumbo.vue'
import BottomJumbo from './components/BottomJumbo.vue'
import AppSlider from './components/AppSlider.vue'
import AppPlaylist from './components/AppPlaylist.vue'
import AppNewcome from './components/AppNewcome.vue'
import AppNews from './components/AppNews.vue'
import AppSub from './components/AppSub.vue'

export default{
    components : {
        AppHeader,
        TopJumbo,
        AppSlider,
        AppPlaylist,
        BottomJumbo,
        AppNewcome,
        AppNews,
        AppSub
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
        <AppNewcome/>
        <AppNews/>
        <AppSub/>


</template>

<style lang="scss">
@use './scss/style.scss' as *;







</style>
