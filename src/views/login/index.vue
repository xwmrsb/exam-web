<template>
  <div class="register_main_box">
    <div class="form_box">
      <div class="form_left">
        <h3 style="text-align: center; margin-top: 50px;">刷题小站</h3>
      </div>
      <div class="form_right">
        <h3 style="text-align: center; margin-top: 50px;">登 陆</h3>
        <a-form class="form" :model="formData" :rules="rules" laba-width="120px" ref="formRef" :label-col="{ span: 4 }"
          laba-position="top">
          <a-form-item label="用户名" prop="email" style="font-weight: bold; width: 450px">
            <a-input v-model="formData.email" placeholder="请输入用户名" />
          </a-form-item>
          <a-form-item label="密码" prop="password" style="font-weight: bold; width: 450px">
            <a-input v-model="formData.password" type="password" placeholder="请输入密码" />
          </a-form-item>
          <div
            style="width: 450px; display: flex; align-items: center; justify-content: space-between; padding-left: 75px;">
            <a-checkbox v-model="checked1" size="large">记住密码</a-checkbox>
            <a-link type="primary">忘记密码</a-link>
          </div>
          <a-button class="button" type="primary" @click="submitForm" style="margin-top: 100px; text-align: center">确定登陆
          </a-button>
        </a-form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.register_main_box {
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(61, 58, 58);
  width: 100vw;
  height: 100vh;
}

.title {
  color: #fff;
  font-weight: bold;
  font-size: 20px;
  padding-top: 150px;
}

.form_box {
  width: 60%;
  height: 548px;
  background-color: #fff;
  border-radius: 5px;
  display: flex;
}

.form_box .form_left {
  width: 35%;
  height: 100%;
  background-color: rgb(86, 83, 83);
  border-radius: 5px 0 5px 0;
}

.form_box .form_right {
  width: 65%;
  height: 100%;
  border-radius: 0 5px 0 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form_box .form_right .form {
  width: 300px;
  margin-top: 35px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form_box .form_right .form .button {
  width: 120px;
  margin-top: 30px;
}
</style>

<script scoped>
import { reactive, ref, unref } from "vue";
// import { registerApi } from '@/apis/user';

const formRef = ref(null);

const rules = reactive({
  password2: [
    {
      required: true,
      message: "请再次输入密码",
      trigger: "blur",
    },
    {
      trigger: "blur",
      validator: (rule, value, callback) => {
        if (value !== formData.password) {
          callback(new Error("两次密码不相同！"));
        } else {
          callback();
        }
      },
    },
  ],
  identity: [
    {
      required: true,
      message: "请选择角色",
      trigger: "blur",
    },
  ],
});

const formData = reactive({
  name: "",
  email: "",
  password: "",
  password2: "",
  identity: "",
});

const submitForm = async () => {
  const formEl = unref(formRef);
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      // registerApi({ ...formData });
      console.log("submit!");
    } else {
      console.log("error submit!", fields);
    }
  });
};

export default {
  name: "Login",
  components: {},
  setup() {
    return {
      formData,
      rules,
      formRef,
      submitForm,
      // background: {
      //   backgroundImage: "url(" + require("@/assets/register.png") + ")",
      //   backgroundSize: "cover",
      //   width: "100vw",
      //   height: "100vh"
      // }
    };
  },
};
</script>



