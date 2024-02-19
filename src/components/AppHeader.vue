<template>
    <header>
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
                <span>
                    <i class="fa-solid fa-basket-shopping"></i>
                </span>
            </nav>
        </div>

    </header>
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
.navMenu,
.socialLogin,
.logoSearch,
.bottomNav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em;
    gap: 8px;
}

.wrapper{
    border-block: 1px solid grey;
}

nav{
    width: 100%;
}

.navMenu li{
    list-style: none;
    a{
        text-decoration: none;
        color: $appWhite;
    }
}


</style>