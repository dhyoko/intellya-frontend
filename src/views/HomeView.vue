<script lang="ts">
  import api from '@/libs/axios';
  import type { User } from '@/utils/types';
  import { defineComponent } from 'vue';
  import Layout from '@/components/Layout.vue';
  import UserTable from '@/components/UserTable.vue';
  import PageLoader from '@/components/PageLoader.vue';

  export default defineComponent({
    name: 'HomeView',
    data() {
      return {
        userList: [] as User[],
        isLoading: false,
        errorMessage: ""
      }
    },
    components: {
      Layout,
      UserTable,
      PageLoader
    },
    async mounted() {
      try {
        this.isLoading = true;
        const response = await this.fetchUserList();
        this.userList = response?.data;
      } catch(error) {
        this.errorMessage = (error as Error).message;
      } finally {
        this.isLoading = false;
      }
    },
    methods: {
      async fetchUserList() {
        return api.get('/users', {
          headers: {
            'x-api-key': import.meta.env.VITE_API_KEY
          }
        });
      }
    }
  })
</script>

<template>
  <main>
    <Layout
      title='Listagem de Usuário'
      subtitle='Visualize os usuários que acessam sua plataforma.'
    >
      <PageLoader v-if='isLoading'></PageLoader>
      <p v-else-if='!isLoading && errorMessage'>
        Ocorreu um problema, tente novamente mais tarde.
      </p>
      <UserTable
        v-else
        :user-list='userList'
      ></UserTable>
    </Layout>
  </main>
</template>
