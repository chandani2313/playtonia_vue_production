import Vue from 'vue';
import axios from 'axios';
import Notifications from 'vue-notification';
import VueProgressBar from 'vue-progressbar';
import CountryFlag from 'vue-country-flag';
import VuejsDialog from 'vuejs-dialog';
import VueTour from 'vue-tour';
import VuePhoneNumberInput from 'vue-phone-number-input';
import 'vue-phone-number-input/dist/vue-phone-number-input.css';
import VueCropper from 'vue-cropperjs';
import GSignInButton from 'vue-google-signin-button';
import 'cropperjs/dist/cropper.css';
// import VuejsDialogMixin from 'vuejs-dialog/dist/vuejs-dialog-mixin.min.js';
import 'vuejs-dialog/dist/vuejs-dialog.min.css';
import vueCountryRegionSelect from 'vue-country-region-select';
import App from './App.vue';
import router from './router';
import store from './store/store';
import Default from './layouts/Default.vue';
import NoSidebar from './layouts/NoSidebar.vue';
import Nofooter from './layouts/Nofooter.vue';

require('vue-tour/dist/vue-tour.css');

const options = {
  color: '#2e88ef',
  failedColor: '#874b4b',
  thickness: '5px',
  transition: {
    speed: '0.9s',
    opacity: '0.6s',
    termination: 800,
  },
  autoRevert: true,
  location: 'top',
  inverse: false,
};

Vue.config.productionTip = false;
// for layout seperation
Vue.component('default', Default);
Vue.component('no-sidebar', NoSidebar);
Vue.component('no-footer', Nofooter);
Vue.component('country-flag', CountryFlag);
Vue.use(vueCountryRegionSelect);
Vue.component('VuePhoneNumberInput', VuePhoneNumberInput);
Vue.component('vue-cropper', VueCropper);
Vue.use(require('vue-moment'));

Vue.use(VueTour);


Vue.use(Notifications);
Vue.use(VuejsDialog);
Vue.use(VueProgressBar, options);
Vue.use(GSignInButton);


// axios default base url
/*eslint-disable */
axios.defaults.baseURL = 'https://api.playtonia.com/v1';
// axios.defaults.baseURL = 'http://localhost:8000/v1';
axios.interceptors.request.use(
  
  (config) => {
    let token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `JWT ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

router.beforeEach((to, from, next) => {
  if(to.name === "Home" || to.name === 'AuthMobile' && !to.query.s === 'steam' ){
    let token = localStorage.getItem('token');
    if(token){
      next({
        path: '/dashboard'
      });
    }
  }
  if (to.matched.some(record => record.meta.requiresAuth)) {
    let token = localStorage.getItem('token');
    if (!token) {
      if (to.name === 'Tournament' || to.name === 'TOverview' || to.name === 'AllTournament' || to.name === 'Upcoming') {
        next();
      } else {
        next({
          path: '/'
        });
      }
    }
    else {
      next();
    }
  }else {
    next();
  }
})


router.beforeEach((to, from, next) => {
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // eg. if we have /some/deep/nested/route and /some, /deep, and /nested have titles, nested's will be chosen.
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);
  const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  // If a route with a title was found, set the document (page) title to that value.
  if(nearestWithTitle) document.title = nearestWithTitle.meta.title;

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));

  // Skip rendering meta tags if there are none.
  if(!nearestWithMeta) return next();

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags.map(tagDef => {
    const tag = document.createElement('meta');

    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key]);
    });

    // We use this to track which meta tags we create, so we don't interfere with other ones.
    tag.setAttribute('data-vue-router-controlled', '');

    return tag;
  })
  // Add the meta tags to the document head.
  .forEach(tag => document.head.appendChild(tag));

  next();
});

/*  eslint-enable */
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
