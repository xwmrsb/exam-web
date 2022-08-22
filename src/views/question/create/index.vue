<template>
  <a-form :model="formState" name="basic" class="create_main" :label-col="{ span: 5 }" :wrapper-col="{ span: 14 }"
    autocomplete="off" @finish="onFinish" @finishFailed="onFinishFailed">
    <a-card class="form_box" title="基础信息" :bordered="false">
      <a-form-item label="问题" name="question" :rules="[{ required: true, message: '请输入问题' }]">
        <a-input v-model:value="formState.question" />
      </a-form-item>
      <a-form-item label="大类" name="username" :rules="[{ required: true, message: 'Please input your username!' }]">
        <a-input v-model:value="formState.username" />
      </a-form-item>
      <a-form-item label="小类" name="password" :rules="[{ required: true, message: 'Please input your password!' }]">
        <a-input-password v-model:value="formState.password" />
      </a-form-item>
      <a-form-item label="题目类型" name="type" :rules="[{ required: true, message: 'Please input your password!' }]">
        <a-input-password v-model:value="formState.password" />
      </a-form-item>
      <a-form-item label="选项" name="options" :rules="[{ required: true, message: 'Please input your password!' }]">
        <a-input-password v-model:value="formState.password" />
      </a-form-item>
      <a-form-item label="正确答案" name="rightAnswer" :rules="[{ required: true, message: 'Please input your password!' }]">
        <a-input-password v-model:value="formState.password" />
      </a-form-item>
      <a-form-item label="正确答案" name="rightAnswer" :rules="[{ required: true, message: 'Please input your password!' }]">
        <a-input-password v-model:value="formState.password" />
      </a-form-item>
    </a-card>
    <div class="submit_box">
      <a-space>
        <a-button type="primary">取消</a-button>
        <a-button type="primary" html-type="submit">确定</a-button>
      </a-space>
    </div>
  </a-form>
</template>

<script scoped>
const formState = {

}

export default {
  name: "Create",
  components: {
  },
  setup() {
    return {
      formState
    };
  },
};
</script>

<style scoped>
.create_main {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.create_main .form_box {
  width: calc(100% - 48px);
  margin-top: 24px;
}

.create_main .submit_box {
  width: 100%;
  height: 48px;
  background-color: #fff;
  position: absolute;
  bottom: 0;
  padding-right: 24px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
</style>



