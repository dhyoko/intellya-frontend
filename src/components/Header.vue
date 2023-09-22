<script lang='ts'>
  import { RouterLink } from 'vue-router'
  import SearchIcon from './icons/SearchIcon.vue'
  export default {
    name: 'header-app',
    components: {
      RouterLink,
      SearchIcon
    }
  }
</script>

<template>
  <nav class='navbar navbar-expand-lg navbar-light border-bottom'>
    <div class='container-xxl'>
      <a class="navbar-brand" href="#">
        <img src='@/assets/logo.png' alt='logo' height='50'/>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item active">
            <RouterLink class="nav-link" aria-current="page" to="#">Usuário</RouterLink>
          </li>
        </ul>
        <form class="search d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button type="submit"><SearchIcon></SearchIcon></button>
        </form>
      </div>
    </div>    
  </nav>
</template>

<style scoped lang='scss'>
  .navbar-brand {
    margin-right: 30px;
  }
  .navbar-collapse {
    padding-top: 10px;
  }
  .nav-item {
    position: relative;
    font-weight: 700;
    
    @include breakpoint-md {
      &.active,
      &:hover {
        &::after {
          position: absolute;
          content: "";
          bottom: -17px;
          left: 0;
          width: 100%;
          height: 3px;
          background-color: map-get($colors, 'camel');
        }
      }
    }        
  }

  .search {
    position: relative;

    input {
      text-indent: 25px;
    }

    button {
      position: absolute;
      top: 3px;
      left: 5px;
      background-color: transparent;
      border: none;
    }
  }
</style>