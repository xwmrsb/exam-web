<template>
  <a-button type="primary" @click="showDrawer">新增</a-button>
  <a-drawer v-model:visible="visible" class="custom-class" style="color: red" title="新增问题" placement="right"
    :closable="false" width="700px" @after-visible-change="afterVisibleChange">
    <a-form :model="formState" name="basic" :wrapper-col="{ span: 24 }" layout="vertical" autocomplete="off"
      @finish="onFinish" @finishFailed="onFinishFailed">
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
      <a-form-item label="正确答案" name="rightAnswer"
        :rules="[{ required: true, message: 'Please input your password!' }]">
        <a-input-password v-model:value="formState.password" />
      </a-form-item>
      <a-form-item label="正确答案" name="rightAnswer"
        :rules="[{ required: true, message: 'Please input your password!' }]">
        <a-input-password v-model:value="formState.password" />
      </a-form-item>
    </a-form>
    <template #extra>
      <a-space>
        <a-button @click="onClose">取消</a-button>
        <a-button type="primary" @click="onClose">提交</a-button>
      </a-space>
    </template>
  </a-drawer>
</template>

<script>
import { ref } from 'vue'
import { CarryOutOutlined, SmileTwoTone } from '@ant-design/icons-vue'

export default {
  setup() {
    const visible = ref(false)
    const formState = {

    }

    const afterVisibleChange = (bool) => {
      console.log('visible', bool)
    };

    const showDrawer = () => {
      visible.value = true
    };
    return {
      visible,
      afterVisibleChange,
      showDrawer,
      formState
    };
  },
  components: {
    CarryOutOutlined,
    SmileTwoTone,
  },
}
</script>

<style scoped>
</style>
