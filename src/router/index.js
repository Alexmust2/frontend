import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "@/Pages/HomePage"
import SignInPage from "@/Pages/SignInPage"
import ForumsPage from "@/Pages/ForumsPage"
import ProfilePage from "@/Pages/ProfilePage"
import SignUpPage from "@/Pages/SignUpPage"



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
    }
  },
  {
    path:"/profile",
    component: ProfilePage
  },
  {
    path:"/forums",
    component: ForumsPage
  },
  {
    path:"/signup",
    component: SignUpPage,
    meta: {
      hideNavbar: true,
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
