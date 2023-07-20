<template>
    <div class="main__container">
        <div class="profile__container">
            <div class="profile__bio">
                <img class="profile__img" @click="changePhoto()" :src="image"/>
                <h2 class="profile__page-name">Имя: {{ name }} </h2>
                <ul class="profile__achivments">
                    <li>Репутация: {{ reputation }}</li>
                    <li style="margin-top: 15px;">Сообщений: {{ messages }}</li>
                    <li style="margin-top: 15px;">Создано форумов: {{ forumsCount }}</li>
                    <li style="margin-top: 15px;">Лайки: {{ likes }}</li>
                </ul>
            </div>
            <div class="profile__status">
                <div class="profile__status-list">
                    <profile-messages @click="deleteStatus(status.id)" class="message__container" v-for="(status, index) in statusList" :key="index">
                        <h2>{{ status.body }}</h2>
                        <h5>{{ status.date }}</h5>
                    </profile-messages>
                    </div>
                <input type="text" placeholder="Поделитесь тем, что у вас произошло" v-model="statusBody" @keyup.enter="addStatus()"/>
                <button @click="addStatus()"><i class="las la-paper-plane"></i></button>
            </div>
        </div>
    </div>
</template>
<script>
import GetUserInfo from '../mixins/GetUserInfo'
import UserStatus from '../mixins/UserStatus'
import ProfileMessages from '@/components/ProfileMessages.vue'

export default {
    data() {
        return {
            reputation: 0,
            messages: 0,
            forumsCount: 0,
            likes: 0,
        }
    },
    components: {
        ProfileMessages
    },
    mixins: [GetUserInfo, UserStatus]

}
</script>
<style scoped lang="scss">
    .profile__container {
        width: 80%;
        height: 90%;
        background-color: rgba(31, 30, 30, 0.596);
        display: flex;
        flex-direction: row;
        padding: 55px;
        border-radius: 25px;
        position: relative;
        top: 25px;
    }
    .profile__bio {
        height: 100%;
        display: flex;
        flex-direction: column;
        background-color: rgba(0, 0, 0, 0.514);
        padding: 25px;
        border-radius: 25px;
    }

    .profile__img {
        width: 250px;
        height: 250px;
        background: gray;
        border: none;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    }

    .profile__img:hover {
        background: rgba(54, 53, 53, 0.493);
        cursor: pointer;
    }
    .profile__page-name {
        position: relative;
        top: 25px;
        color: white;
        font-weight: 400;
    }

    ul {
        position: relative;
        top: 45px;
        li {
            list-style: none;
            align-self: flex-start;
            color: white;
            font-weight: 700;
        }
    }

    .profile__status {
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.493);
        position: relative;
        left: 30px;
        align-self: flex-end;
        display: flex;
        border-radius: 25px;
        padding: 15px;
        input {
            align-self: flex-end;
            width: 92%;
            height: 50px;
            padding: 15px;
            border-radius: 25px;
        }
        button {
            align-self: flex-end;
            width: 50px;
            height: 50px;
            position: relative;
            left: 25px;
            border-radius: 50%;
            border: none;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            .las {
                font-size: 36px;
            }
        }
    }
    .profile__status-list {
        width: 95%;
        min-height: 50%;
        max-height: 88%;
        overflow-x: hidden;
        overflow-y: auto;
        position: absolute;
    }

</style>