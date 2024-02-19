<template>
    <div class="headerContainer">
        <div class="socialLogin container">
            <div>
                <span> <i class="fa-regular fa-envelope"></i> Superhit Top Movie <span>** King Star **</span></span>
                <ul class="socialMenu">

                </ul>
            </div>
            <div>
                <span> <i class="fa-solid fa-lock"></i> Log In</span>
            </div>
        </div>
        <div class="wrapper ">
            <div class="logoSearch container">

                <figure>
                    <img src="../assets/img/cropped-logo.png" alt="">
                </figure>
                <div class="search-container">
                    <form>
                        <input type="text" placeholder="Search.." name="search">
                        <button type="button">Search</button>
                    </form>
                </div>
            </div>
        </div>
        <div class="bottomNav container">
            <nav>
                <ul class="navMenu">
                    <li v-for="element in navArray"><a href="#">{{ element.name }}</a></li>
                </ul>
            </nav>
                <span>
                    <i class="fa-solid fa-basket-shopping"></i>
                </span>
        </div>

    </div>
</template>

<script>
export default {
    name: 'AppHeader',
    data() {
        return {
            navArray: [
                {
                    name: 'Home',
                    subNames: 'Home'
                },
                {
                    name: 'Celebritiy',
                    subNames: 'Movie'
                },
                {
                    name: 'Movie',
                    subNames: 'Home'
                },
                {
                    name: 'Page',
                    subNames: 'Home'
                },
                {
                    name: 'Shop',
                    subNames: 'Home'
                },
                {
                    name: 'Blog',
                    subNames: 'Home'
                },
                {
                    name: 'Contact Us',
                    subNames: 'Home'
                }

            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@use '../scss/style.scss' as *;
@use '../scss/partials/variables' as*;

nav,
.socialLogin,
.logoSearch,
.bottomNav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    width: 100%;
}

.wrapper{
    border-block: 1px solid  $appLightBlue;
}

.navMenu{
    display: flex;
    gap: 10px;
}

.navMenu li{
    list-style: none;
    a{
        text-decoration: none;
        color: $appWhite;
    }
}


.logoSearch{
    padding-block: 1em;
}
.headerContainer{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 200px;
}

input{
    background-color: $appBlack;
    padding: 10px 10px;
    border-inline: none ;
    border-block:1px solid $appLightBlue ;
}

button{
    background-color: $appGreen;
    color: white;
    padding: 10px 20px;
    border: none;
}
</style>