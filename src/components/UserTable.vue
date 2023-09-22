<script lang='ts'>
  import type { User } from '@/utils/types';
  import type { PropType } from 'vue';
  import { defineComponent } from 'vue';
  import UserTableItem from './UserTableItem.vue';

  export default defineComponent({
    name: 'UserTable',
    props: {
      userList: [] as PropType<User[]>
    },
    components: {
      UserTableItem
    }
  })
</script>

<template>
  <div class='table-responsive-lg'>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Nome</th>
          <th scope="col">E-mail</th>
          <th scope="col">Nível de Acesso</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <template v-for='user in userList' :key='user?.id'>
          <UserTableItem
            :user='user'
          ></UserTableItem>
        </template>
      </tbody>
    </table>
  </div>  
</template>