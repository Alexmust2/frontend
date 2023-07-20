import { db } from '@/main'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { addDoc, collection, doc, deleteDoc, onSnapshot, orderBy, query} from 'firebase/firestore'


export default {
    data() {
        return {
            statusList: [
            ],
            statusBody: '',
            image: require('@/assets/logo.png'),
        }
    },
    mounted() {
        this.getStatusList()
    },
    methods: {
        async getStatusList() {
            const auth = getAuth()
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    const getUser = getAuth().currentUser.email
                    const statusRef = collection(db, getUser)
                    const listQueue = query(statusRef, orderBy('date', 'desc'))
                    onSnapshot(listQueue, (snapshot) => {
                        snapshot.docs.forEach((doc) => {
                            const status = []
                            status.push({
                                'id': doc.id,
                                'body': doc.data().body,
                                'date': doc.data().date
                            })
                            this.statusList.push(...status)
                        })
                    })
                }
                else {
                    console.log('loggetout')
                }
            });
        },
        addStatus() {
            const getUser = getAuth().currentUser.email
            const id = Object.keys(this.statusList).length
            const statusRef = collection(db, getUser )
            const date = new Date()
            if (this.statusBody != ''){
                addDoc(statusRef, {
                    body: this.statusBody,
                    date: date.toLocaleString('ru'),
                })
                this.statusBody = ''
                this.statusList = []
            } else {
                alert("Заполните поле статуса")
            }
        },
        changePhoto() {
            this.image = require('@/assets/ava.png')
        },
        deleteStatus(id) {
            const getUser = getAuth().currentUser.email
            const statusRef = collection(db, getUser)
            deleteDoc(doc(statusRef, id))
            this.statusList = []
        }
    }
}