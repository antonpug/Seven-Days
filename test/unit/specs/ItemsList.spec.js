import Vue from 'vue';
import ItemsList from '@/components/ItemsList';

describe('ItemsList.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(ItemsList);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('div ul li').textContent)
      .toEqual('One');
  });
});
