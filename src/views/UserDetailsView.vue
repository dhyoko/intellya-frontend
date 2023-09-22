<script lang="ts">
  import api from '@/libs/axios';
  import type { User } from '@/utils/types';
  import { defineComponent } from 'vue';
  import Layout from '@/components/Layout.vue';
  import PageLoader from '@/components/PageLoader.vue';
  import UserDetailsTable from '@/components/UserDetailsTable.vue';

  export default defineComponent({
    name: 'UserDetailsView',
    data() {
      return {
        user: {} as User,
        isLoading: false,
        errorMessage: ""
      }
    },
    components: {
      Layout,
      PageLoader,
      UserDetailsTable
    },
    async mounted() {
      try {
        this.isLoading = true;
        const response = await this.fetchUserDetails();
        this.user = response?.data;
      } catch(error) {
        this.errorMessage = (error as Error).message;
      } finally {
        this.isLoading = false;
      }
    },
    methods: {
      async fetchUserDetails() {
        return api.get(`/users/${this.$route.params.id}`, {
          headers: {
            'x-api-key': import.meta.env.VITE_API_KEY
          }
        });
      }
    },
    computed: {
      pageTitle() {
        return `Usuário n° ${this.user?.id}`
      }
    }
  })
</script>

<template>
  <main>
    <Layout
      :title='pageTitle'
      subtitle='Visualize as informações do usuário solicitado abaixo'
    >
      <PageLoader v-if='isLoading'></PageLoader>
      <p v-else-if='!isLoading && errorMessage'>
        Ocorreu um problema, tente novamente mais tarde.
      </p>
      <UserDetailsTable
        :user='user'
      />
    </Layout>
  </main>
</template>
