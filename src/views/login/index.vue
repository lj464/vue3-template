<template>
  <div class="login-box">
    <div class="contet">
      <el-form
        ref="formRef"
        :model="numberValidateForm"
        label-width="100px"
        class="demo-ruleForm"
        :rules="loginRules"
      >
        <el-form-item label="用户名" prop="user">
          <el-input v-model="numberValidateForm.user" type="text" autocomplete="off" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            v-model="numberValidateForm.password"
            type="password"
            autocomplete="off"
          />
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            class="login-btn"
            @click="submitForm(formRef)"
            :loading="loading"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
  import { reactive, ref } from "vue";
  import { validatePass } from "./validate.js";
  import { useStore } from "vuex";
  import { useRouter } from "vue-router";
  import { setTimeStamp } from "@/utils/auth.js";
  const loginRules = ref({
    user: [{ required: true, message: "请输入用户名" }],
    password: [{ required: true, validator: validatePass() }],
  });

  const formRef = ref();

  const numberValidateForm = reactive({
    user: "",
    password: "",
  });
  const store = useStore();
  const router = useRouter();
  const loading = ref(false);
  const submitForm = (formEl) => {
    if (!formEl) return;
    formEl.validate(async (valid) => {
      if (valid) {
        // debugger;
        loading.value = true;
        try {
          let res = await store.dispatch("login/login", numberValidateForm);
          if (res) {
            router.push("/");
            // 记录成功登录时间
            setTimeStamp();
          } else {
            console.log("登录失败");
          }
          loading.value = false;
        } catch (err) {
          loading.value = false;
        }
      } else {
        return false;
      }
    });
  };
</script>

<style scoped lang="scss">
  $bg: #2d3a4b;
  $dark_gray: #889aa4;
  $light_gray: #eee;
  $cursor: #fff;
  .login-box {
    background-color: $bg;
    height: 100%;
    .contet {
      background-color: $light_gray;
      padding: 60px 50px;
      width: 500px;
      margin: 0 auto;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 5px;
    }
  }
  .login-btn {
    margin-top: 20px;
    width: 150px;
  }
</style>
