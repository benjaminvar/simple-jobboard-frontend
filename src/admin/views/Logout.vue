<template>
    
</template>
<script>
export default {
    mounted()
    {
        this.$store.dispatch("logout")
        .then(() => 
        {
            this.$router.push({name:"home"});
        });
    }
}
</script>