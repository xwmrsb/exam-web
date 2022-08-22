<template>
  <div class="search_refresh_box">
    <a-input-search v-model:value="value" :placeholder='placeholder' enter-button @search="onSearch" style="width: 300px"/>
    <a-button class="refresh_box">
      <sync-outlined />
    </a-button>
  </div>

</template>

<script>
import { SyncOutlined } from '@ant-design/icons-vue'

export default {
  name: 'SearchRefresh',
  props: ['placeholder'],
  components: {
    SyncOutlined
  },
}
</script>

<style scoped>
.search_refresh_box {
  display: flex;
}

.search_refresh_box .refresh_box {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  margin-left: 2px;
  background-color: #cccccc;
  cursor: pointer;
  border-radius: 2px;
}
</style>
