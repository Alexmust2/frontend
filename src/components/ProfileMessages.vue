<template>
    <div class="message__container">
        <slot></slot>
    </div>
</template>
<script>
import UserStatus from '@/mixins/UserStatus';

export default {
    mixins: [UserStatus]
}
</script>
<style lang="scss">
    .message__container {
        width: 98%;
        min-height: 15%;
        background-color: aliceblue;
        position: relative;
        left: 15px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        border-radius: 25px;
        padding: 15px;
        margin-top: 25px;
        word-wrap: break-word;
        h5 {
            align-self: flex-end;
            font-size: 12px;
        }
    }
</style>