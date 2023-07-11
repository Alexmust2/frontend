<template>
    <transition name="fade">
    <div v-if="show" class="modal_container">
        <ul>
            <li>Профиль</li>
            <li>Настройки</li>
            <li>Выйти</li>
        </ul>
    </div>
    </transition>
</template>
<script>
export default {
    data(){
        return{
        }
    },
    props:['show']
}
</script>
<style lang="scss">
    .modal_container {
        width: 150px;
        height: 150px;
        background-color: white;
        position: absolute;
        top:70px;
        left: 1550px;
        border-radius: 25px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        transition: all ease-in-out;
    }
    li {
        list-style: none;
    }
    li:nth-child(2) {
        margin-top: 25px;
    }
    li:nth-child(3) {
        margin-top: 25px;
    }

    .fade-enter-active,
    .fade-leave-active {
    transition: transform 0.4s cubic-bezier(0.5, 0, 0.5, 1), opacity 0.4s linear;
    }

    .fade-enter,
    .fade-leave-to {
    opacity: 0;
    transform: scale(0.3) translateY(-50%);
    }


</style>