<script>
import AppHeader from './components/AppHeader.vue'
import TopJumbo from './components/TopJumbo.vue'
import AppSlider from './components/AppSlider.vue'

export default{
    components : {
        AppHeader,
        TopJumbo,
        AppSlider
    }
}
</script>

<template>

        <AppHeader/>
        <TopJumbo />
        <AppSlider/>

</template>

<style lang="scss">
@use './scss/style.scss' as *;







</style>
