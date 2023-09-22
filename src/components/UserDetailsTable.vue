<script lang='ts'>
  import type { User } from '@/utils/types';
  import type { PropType } from 'vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'UserDetailsTable',
    props: {
      user: Object as PropType<User>
    },
    computed: {
      userRole() {
        return this.user?.role === 'member' 
          ? 'Membro'
          : 'Administrador'
      },
      userStatus() {
        return this.user?.active ? "Ativo" : "Inativo"
      },
      userRegisterDate() {
        if (!this.user?.created_at) {
          return;
        }

        const registerDate = new Date(this.user?.created_at);
        return `${registerDate.toLocaleDateString()} às ${registerDate.toLocaleTimeString()}`;
      }
    }
  })
</script>

<template>
  <table class="table table-hover align-middle">
    <tbody>
      <tr>
        <th scope="row">Nome</th>
        <td>{{ user?.name }}</td>
      </tr>
      <tr>
        <th scope="row">E-mail</th>
        <td>{{ user?.email }}</td>
      </tr>
      <tr>
        <th scope="row">Nível de Acesso</th>
        <td>{{ userRole }}</td>
      </tr>
      <tr>
        <th scope="row">Status</th>
        <td>{{ userStatus }}</td>
      </tr>
      <tr>
        <th scope="row">Data de Cadastro</th>
        <td>{{ userRegisterDate }}</td>
      </tr>
    </tbody>
  </table>
</template>