<template>
  <div class="list_box">
    <div class="title_box">
      <span style="display: flex; align-items: center">
        <strong>当前节点</strong>
        ：知识库/前端
      </span>
      <TreeSelect />
    </div>
    <div class="header_box">
      <div class="opera_box">
        <Create/>
      </div>
      <div class="query_box">
        <SearchRefresh placeholder="检索问题|创建人" />
      </div>
    </div>
    <a-table :columns="columns" :data-source="data">
      <template #headerCell="{ column }">
        <template v-if="column.key === 'name'">
          <span>
            <smile-outlined />
            Name
          </span>
        </template>
      </template>

      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'name'">
          <a>
            {{ record.name }}
          </a>
        </template>
        <template v-else-if="column.key === 'tags'">
          <span>
            <a-tag v-for="tag in record.tags" :key="tag"
              :color="tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'">
              {{ tag.toUpperCase() }}
            </a-tag>
          </span>
        </template>
        <template v-else-if="column.key === 'action'">
          <span>
            <a>修改</a>
            <a-divider type="vertical" />
            <a>删除</a>
          </span>
        </template>
      </template>
    </a-table>
  </div>
</template>

<script scoped>
import { SmileOutlined, DownOutlined, SyncOutlined, ApartmentOutlined, SwapOutlined } from '@ant-design/icons-vue'
import SearchRefresh from '@/components/search-refresh'
import TreeSelect from '@/components/tree-select'
import Create from './create'
import { defineComponent } from 'vue'

const columns = [
  {
    name: 'id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: '问题',
    dataIndex: 'question',
    key: 'question',
  },
  {
    title: '题目类型',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: '创建人',
    key: 'createUser',
    dataIndex: 'createUser',
  },
  {
    title: '创建时间',
    key: 'createTime',
    dataIndex: 'createTime',
  },
  {
    title: '修改时间',
    key: 'updateTime',
    dataIndex: 'updateTime',
  },
  {
    title: '操作',
    key: 'action',
  },
]

const data = [
  {
    key: '1',
    id: '1',
    question: '这是一个问题',
    type: '简答',
    createUser: 'admin',
    createTime: '2011-1-21',
    updateTime: '2011-1-21',
  },
]

export default {
  name: "List",
  components: {
    SmileOutlined,
    DownOutlined,
    SyncOutlined,
    SearchRefresh,
    ApartmentOutlined,
    SwapOutlined,
    TreeSelect,
    Create
  },
  setup() {
    return {
      data,
      columns,
      placeholder: '14242'
    };
  },
};
</script>

<style scoped>
.list_box {
  background-color: #fff;
  margin: 24px 16px;
  padding: 24px;
  height: calc(100% - 48px);
}

.header_box {
  width: 100%;
  margin-top: 10px;
  padding-bottom: 20px;
  display: flex;
  justify-content: space-between;
}

.header_box .query_box {
  display: flex;
}

.title_box {
  display: flex;
}

.opera_box {
  display: flex;
  align-items: center;
}
</style>



