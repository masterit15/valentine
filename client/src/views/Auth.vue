<template>
  <div id="auth">
    <form method="post" @submit.prevent="auth">
      <label for="name">
        ФИО
        <input v-model="name" type="text" name="name" id="name">
      </label>
      <label for="password">
        Пароль
        <input v-model="password" type="password" name="password" id="password">
      </label>
      <select name="departament" id="departament">
        <option value="#">Выберите свой департамент</option>
      </select>
      <button type="submit">Войти</button>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: '',
      password: ''
    }
  },
  methods: {
    auth(){
      localStorage.setItem('user', 'qweqeqwe')
      console.log({name:this.name, password: this.password});
    }
  },
}
</script>