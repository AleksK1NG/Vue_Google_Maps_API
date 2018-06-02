import Vue from 'vue';
import Router from 'vue-router';
import GoogleMap from '@/components/home/GoogleMap'
import Signup from '@/components/auth/Signup'
import Login from '@/components/auth/Login'
import ViewProfile from '@/components/profile/ViewProfile'
import firebase from 'firebase'

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'GoogleMap',
      component: GoogleMap,
      meta: {
        requiresAuth: true
      }

    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/profile/:id',
      name: 'ViewProfile',
      component: ViewProfile,
      meta: {
        requiresAuth: true
      }
    },
  ],
});

router.beforeEach((to, from, next) => {
  // Check is route reqiresAuth
  if (to.matched.some(req => req.meta.requiresAuth)){
    // check auth state of user
    let user = firebase.auth().currentUser
    if (user){
      // user singed in proceed to route
      next()
    } else {
      // no user singed in redirect
      next({ name: 'Login' })
    }
  } else {
    next()
  }
});

export default router;