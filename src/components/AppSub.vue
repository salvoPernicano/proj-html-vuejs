<template>
    <div class="container">
<form>
    <div class="inputGroup">
        <input type="text" id="fname" name="fname" placeholder="First Name">
        <input type="text" id="lname" name="lname" placeholder="Last Name">
        <input type="email" id="email" name="email" placeholder="Email">
    </div>
  <button>Subscribe</button>
</form> 
    </div>
</template>

<script>
export default {
    name : 'AppSub',
    data() {
        

        return {}
    }
}
</script>

<style lang="scss" scoped>
@use '../scss/style.scss' as *;
@use '../scss/partials/variables' as*;

div.container{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-block: 6em;
    height: 50vh;
    background-image: url(../assets/img/form-bg-1.png);
    background-repeat: no-repeat;
    background-size: cover;
    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        row-gap: 50px;
    } 
    input{
        margin-inline: 2em;
        border: 1px solid white;
        background-color: $appGreen;
        padding: 10px;
        border-radius: 20px;
    }
    button{
        border: none;
        background-color: $appLightBlue;
        padding: 20px 30px;
        border-radius: 25px;
        font-weight: bold;
        color: white;
        &:hover{
            color: $appBlack;
            background-color: white;
            cursor: pointer;
        }
    }
}
</style>