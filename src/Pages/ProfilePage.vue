<template lang="">
    <div class="test">
        <button @click="changename()">Change name</button>
        <input type="text" v-model="login">
    </div>
</template>
<script>


export default {
    data(){
        return{
            login:''
        }
    },
    props:['name'],
    methods:{
        changename(){
            this.$props.name = this.login
        }
}
}
</script>
<style lang="scss">
    .test {
        position:relative;
        top:250px
    }
</style>