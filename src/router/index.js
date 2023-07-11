import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "@/Pages/HomePage"
import SignInPage from "@/Pages/SignInPage"
import ForumsPage from "@/Pages/ForumsPage"
import ProfilePage from "@/Pages/ProfilePage"
import SignUpPage from "@/Pages/SignUpPage"
import {getAuth, onAuthStateChanged} from 'firebase/auth'



function guardRout (to, from, next) {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      next()
    } else {
      next("/signin")
    }
  });
}


const routes = [
  {
    path:"/",
    component: HomePage,
    meta: {
      hideNavbar: true,
    }
  },
  {
    path:"/signin",
    component: SignInPage,
    meta: {
      hideNavbar: true,
      title: "Login"
    },
  },
  {
    path:"/profile",
    component: ProfilePage,
    meta: {
      title: "Profile"
    },
    beforeEnter: guardRout
  },
  {
    path:"/forums",
    component: ForumsPage,
    meta: {
      title: "Forums"
    },
    beforeEnter: guardRout
  },
  {
    path:"/signup",
    component: SignUpPage,
    meta: {
      hideNavbar: true,
      title: "Register"
    },
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
})

export default router
