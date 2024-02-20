<template>
    <div class="container">
<form>
  <input type="text" id="fname" name="fname">
  <input type="text" id="lname" name="lname">
  <input type="email" id="email" name="email">
  <input type="submit" value="Subscribe">
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
div{
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
    }
}
</style>