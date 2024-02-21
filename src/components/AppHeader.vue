<template>
    <div class="headerContainer">
        <div class="socialLogin container">
            <div class="socialSub">
                <span> <i class="fa-regular fa-envelope"></i> Superhit Top Movie <span id="king">** King Star **</span></span>
                <ul class="socialMenu">
                    <li v-for="socialItem in socialArray">
                 <img :src="socialItem.iconPath" alt="">
                </li>
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
                    <li class="navTitle" v-for="(element) in navArray"><a  href="#">{{ element.name }} <span v-if="element.subNames"><i class="fa-solid fa-chevron-down"></i></span> </a>
                    <ul  v-if="element.subNames" class="dropdownMenu">
                        <li v-for="item in element.subNames">{{ item }}</li>
                    </ul></li>
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
                    subNames:[
                      'Home', 'Home 2' , 'Home 3','Home 4','Home 5','Home 6'
                    ] 
                },
                {
                    name: 'Celebritiy',
                    subNames:[
                      'Celebritiy', 'Celebritiy'  
                    ] 
                },
                {
                    name: 'Movie',
                    subNames:[
                      'Movie', 'Movie'  
                    ] 
                },
                {
                    name: 'Page',
                    subNames:[
                      'Page', 'Page'  
                    ] 
                },
                {
                    name: 'Shop',
                    subNames:[
                      'Page', 'Page'  
                    ] 
                },
                {
                    name: 'Blog',
        
                },
                {
                    name: 'Contact Us',
             
                }

            ],
            socialArray : [
                
            {
                iconPath : './src/assets/img/social/facebook-f.svg',
                testo : 'ciao'
            },
            {
                iconPath : './src/assets/img/social/twitter (1).svg',
                testo : 'ciao'
            },
            {
                iconPath : './src/assets/img/social/linkedin-in.svg',
                testo : 'ciao'
            },
            {
                iconPath : './src/assets/img/social/instagram.svg',
                testo : 'ciao'
            },
            {
                iconPath : './src/assets/img/social/google-plus-g.svg',
                testo : 'ciao'
            },
 
            
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

.dropdownMenu{
    display: none;
    position: absolute;
    z-index: 1;
    width: 150%;
    background-color: $appBlack;
}

.navTitle{
    position: relative;
}
.navTitle:hover .dropdownMenu{
    padding: 15px;
    display: flex;
    flex-direction: column;
    gap: 20px;
}
.fa-basket-shopping{
    position: relative;
}
.fa-basket-shopping::after{
    content: '0';
    font-size: 0.7rem;
    padding:3px 5px;
    border-radius: 50%;
    top: -10px;
    color: white;
    background-color: $appGreen;
    position: absolute;
}

.navMenu li{
    list-style: none;
    cursor: pointer;
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

#king{
    color: $appGreen;
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
    cursor: pointer;
    &:hover{
        background-color: white;
        color: $appBlack;
    }
}

.socialMenu{
    display: flex;
    list-style: none;
    gap: 8px;
    img{
        height: 20px;
        width: 20px;
    }
}

.socialSub{
    display: flex;
    align-items: center;
    gap: 10px;
}
</style>