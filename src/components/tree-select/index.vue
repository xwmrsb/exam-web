<template>
  <a-button type="link" @click="showDrawer">
    <template #icon>
      <swap-outlined />
    </template>
    点击切换
  </a-button>
  <a-drawer v-model:visible="visible" class="custom-class" style="color: red" title="节点选择" placement="right"
    :closable="false" width="500px" @after-visible-change="afterVisibleChange">
    <a-tree :show-line="showLine" :show-icon="showIcon" :default-expanded-keys="['0-0-0']" :tree-data="treeData"
      @select="onSelect">
      <template #icon>
        <carry-out-outlined />
      </template>
      <template #title="{ dataRef }">
        <template v-if="dataRef.key === '0-0-0-1'">
          <div>multiple line title</div>
          <div>multiple line title</div>
        </template>
        <template v-else>{{ dataRef.title }}</template>
      </template>
      <template #switcherIcon="{ dataRef, defaultIcon }">
        <SmileTwoTone v-if="dataRef.key === '0-0-2'" />
        <component :is="defaultIcon" v-else />
      </template>
    </a-tree>

  </a-drawer>
</template>

<script>
import { ref } from 'vue'
import { CarryOutOutlined, SmileTwoTone } from '@ant-design/icons-vue'

export default {
  setup() {
    const visible = ref(false)
    const showLine = ref(true);
    const showIcon = ref(false);
    const treeData = ref([
      {
        title: 'parent 1',
        key: '0-0',
        children: [
          {
            title: 'parent 1-0',
            key: '0-0-0',
            children: [
              { title: 'leaf', key: '0-0-0-0' },
              {
                key: '0-0-0-1',
              },
              { title: 'leaf', key: '0-0-0-2' },
            ],
          },
          {
            title: 'parent 1-1',
            key: '0-0-1',
            children: [{ title: 'leaf', key: '0-0-1-0' }],
          },
          {
            title: 'parent 1-2',
            key: '0-0-2',
            children: [
              { title: 'leaf 1', key: '0-0-2-0' },
              {
                title: 'leaf 2',
                key: '0-0-2-1',
              },
            ],
          },
        ],
      },
      {
        title: 'parent 2',
        key: '0-1',
        children: [
          {
            title: 'parent 2-0',
            key: '0-1-0',
            children: [
              { title: 'leaf', key: '0-1-0-0' },
              { title: 'leaf', key: '0-1-0-1' },
            ],
          },
        ],
      },
    ]);
    const onSelect = (selectedKeys, info) => {
      console.log('selected', selectedKeys, info);
    };

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
      showLine,
      showIcon,
      onSelect,
      treeData,
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
