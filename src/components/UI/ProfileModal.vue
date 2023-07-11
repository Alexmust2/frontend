<template>
    <transition name="fade">
    <div v-if="show" class="modal_container">
        <ul>
            <li @click="$router.push('/profile') ,show = false">Профиль</li>
            <li @click="$router.push('/settings'),show = false">Настройки</li>
            <li @click="logout(), show = false">Выйти</li>
        </ul>
    </div>
    </transition>
</template>
<script>
import GetUserInfo from '@/mixins/GetUserInfo'


export default {
    data(){
        return{
        }
    },
    props:['show'],
    mixins: [GetUserInfo]
}
</script>
<style scoped lang="scss">
    .modal_container {
        width: 150px;
        height: 150px;
        background-color: rgb(65, 8, 8);
        position: absolute;
        top:70px;
        left: 82%;
        border-radius: 25px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        transition: all ease-in-out;
        z-index: 512;
    }
    li {
        list-style: none;
        cursor: pointer;
        color: white;
    }
    li:nth-child(2) {
        margin-top: 25px;
    }
    li:nth-child(3) {
        margin-top: 25px;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s ease;
    }

    .fade-enter-from, .fade-leave-to {
        opacity: 0;
    }


</style>