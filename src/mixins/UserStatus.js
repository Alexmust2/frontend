export default {
    data() {
        return {
            statusList: [
                {body: "Всем привет, я тут новенький, поставьте мне лайк пожалуйста", date: Date()},
                {body: "Чем у вас тут можно заниматься?", date: Date()}
            ],
            statusBody: '',
            image: require('@/assets/logo.png')
        }
    },
    methods: {
        addStatus() {
            this.statusList.push({
                body: this.statusBody,
                date: Date()
            })
            this.statusBody = ''
            console.log('successeful')
        },
        changePhoto() {
            this.image = require('@/assets/ava.png')
        }
    },
}