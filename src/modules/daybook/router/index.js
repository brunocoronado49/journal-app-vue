export default {
  name: 'daybook',
  component: () => import(
    /* webpackChunkName: "daybook" */ 
    '@/modules/daybook/layouts/DayBookLayout.vue'
  ),
  children: [
    {
      path: '',
      name: 'no-entry',
      component: () => import(
        /* webpaclChunkName: "daybook-no-entry" */
        '../views/NoEntrySelected.vue'
      ),
    },
    {
      path: ':id',
      name: 'entry',
      component: () => import(
        /* webpaclChunkName: "entry" */
        '../views/EntryView.vue'
      ),
      props: (route) => {
        return {
          id: route.params.id
        }
      }
    }
  ],
}