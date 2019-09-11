<template>
  <div class='login'>
      <form class="login-form">
        <!-- <img src="../assets/login/logo.png" class="logo"> -->
        <div class="form">
          <div class="form-header">欢迎登录</div>
          <div class="form-input">
            <i class="start-icon">
              <i class="iconfont iconyonghu"></i>
            </i>
            <!-- <Input @keyup="toLogin" v-model="form.username" placeholder="请输入用户名......" width="357px" type="text" /> -->
          </div>
          <div class="form-input">
            <i class="start-icon">
              <i class="iconfont iconmima"></i>
            </i>
            <!-- <Input @keyup="toLogin" placeholder="请输入密码......" v-model="form.password" width="357px" :type="types.password" /> -->
          
          </div>

          <div class="buttons">
            <div class="btn-item"  @click="toLogin">登录</div>
          </div>
           </div>
      </form>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
export interface HomeData {
  types: Type;
  form: From;
}
interface Type {
  comfirmPassword: string;
  password: string;
}
interface From {
  username: string;
  password: string;
}

export default Vue.extend({
    name: 'Login',
    data() {
      return {
        types: {
          password: 'password',
          comfirmPassword: 'password',
        },
        form: {
          username: '',
          password: '',
        },
      };
    },
    methods: {
      toLogin(): void {
        this.$store.dispatch('LoginByUsername', this.form).then(() => {
          this.$router.push({ path: '/' });
        });
      },
      changeType(input: keyof Type, type: string): void {
        this.types[input] = type;
      },
      cleanText () {
        this.form.username = '';
      },
    },
});
</script>
<style lang="scss" scoped>

</style>