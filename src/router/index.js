import Vue from 'vue';
import Router from 'vue-router';
import ItemsList from '@/components/ItemsList';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'items',
      component: ItemsList,
    },
  ],
});
