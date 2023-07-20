<template>
    <transition name="fade">
    <div v-if="show" class="modal_container">
        <ul>
            <li @click="$router.push('/profile') ,show = false"><i class="las la-user"></i>Профиль</li>
            <li @click="$router.push('/settings'),show = false"><i class="las la-cog"></i>Настройки</li>
            <li @click="logout(), show = false"><i class="las la-sign-out-alt"></i>Выйти</li>
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
    ul {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    li {
        list-style: none;
        cursor: pointer;
        color: white;
        display: flex;
    }
    li:nth-child(2) {
        margin-top: 25px;
    }
    li:nth-child(3) {
        margin-top: 25px;
    }
    .las{
        font-size: 24px;
        position: relative;
        right: 5px;
        color: rgb(245, 5, 5);
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s ease;
    }

    .fade-enter-from, .fade-leave-to {
        opacity: 0;
    }


</style>