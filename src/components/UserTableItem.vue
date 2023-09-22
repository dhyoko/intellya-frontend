<script lang='ts'>
  import type { User } from '@/utils/types';
  import type { PropType } from 'vue';
  import { RouterLink } from 'vue-router';
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'UserTableItem',
    props: {
      user: Object as PropType<User>
    },
    components: {
      RouterLink
    },
    computed: {
      userDetailLink() {
        return `/user/${this.user?.id}`
      },
      userRole() {
        return this.user?.role === 'member' 
          ? 'Membro'
          : 'Administrador'
      }
    }
  })
</script>

<template>
    <tr>
      <th scope="row">{{ user?.id }}</th>
      <td>{{ user?.name }}</td>
      <td>{{ user?.email }}</td>
      <td>{{ userRole }}</td>
      <td>
        <RouterLink class='custom-link' :to="userDetailLink">Visualizar</RouterLink>
      </td>
    </tr>
</template>

<style scoped lang='scss'>
  .custom-link {
    text-decoration: none;
    color: map-get($colors, 'camel')
  }
</style>