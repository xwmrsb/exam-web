<template>
  <a-layout style="margin-top: -60px" id="components-layout-demo-custom-trigger">
    <a-layout-sider v-model:collapsed="collapsed" collapsible>
      <div class="logo">前端小站</div>
      <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
        <a-menu-item key="/question/list">
          <snippets-outlined />
          <span>
            <router-link class="link" to="/question/list">题库</router-link>
          </span>
        </a-menu-item>
        <a-menu-item key="/user/list">
          <UserOutlined />
          <span>
            <router-link class="link" to="/user/list">用户管理</router-link>
          </span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0 30px 0 16px; display: flex; justify-content: space-between;">
        <div>列表页 / 标准列表</div>
        <div style="cursor: pointer;">
          <a-dropdown>
            <div>
              <a-badge dot>
                <a-avatar shape="square" style="width: 25px; height: 25px">
                  <template #icon>
                    <UserOutlined />
                  </template>
                </a-avatar>
              </a-badge>
              <span style="margin-left: 8px">xwmrss</span>
            </div>
            <template #overlay>
              <a-menu>
                <a-menu-item>
                  <UserOutlined /> <span style="margin-left: 8px; padding-right: 25px;">个人信息</span>
                </a-menu-item>
                <a-menu-item>
                  <BellOutlined /> <span style="margin-left: 8px; padding-right: 25px;">消息通知</span>
                </a-menu-item>
                <a-menu-item>
                  <LogoutOutlined /><span style="margin-left: 8px; padding-right: 25px;">退出登陆</span>
                </a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>
        </div>
      </a-layout-header>
      <a-layout-content>
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script scoped>
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  BellOutlined,
  LogoutOutlined,
  SnippetsOutlined
} from '@ant-design/icons-vue'
import { defineComponent, ref } from 'vue'
// import appRoutes from '@/router/appRoutes'

export default defineComponent({
  components: {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    BellOutlined,
    LogoutOutlined,
    SnippetsOutlined
  },
  setup() {
    const path = ref(['/question/list'])
    console.log(window.location);
    return {
      selectedKeys: ref(['/question/list']),
      collapsed: ref(false),
      // appRoutes
    };
  },
});
</script>
<style>
#components-layout-demo-custom-trigger {
  min-height: 100vh;
}

#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  /* background: rgba(255, 255, 255, 0.3); */
  margin: 16px;
  padding-left: 10px;
  display: flex;
  align-items: center;
  font-weight: 800;
  color: #fff;
}

.site-layout .site-layout-background {
  background: #fff;
}

.link {
  color: #fff !important;
}
</style>
