<template>
  <div>
    <el-container>
      <el-header>
        <div class="header">
          <h1>行思后台管理系统</h1>
        </div>
      </el-header>
      <el-container>
        <el-aside width="180px">
          <el-row class="tac">
            <el-col :span="24">
              <el-menu
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                unique-opened
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b"
                :default-active="activePath"
                router
              >
                <el-submenu index="1">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>新闻管理</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="/editor" @click="saveNavState('/' + 'editor')">编辑新闻</el-menu-item>
                    <el-menu-item index="/article" @click="saveNavState('/' + 'article')">文章列表</el-menu-item>
                    <!-- <el-menu-item index="1-3">选项3</el-menu-item> -->
                  </el-menu-item-group>
                </el-submenu>
                <el-submenu index="2">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>图片管理</span>
                  </template>
                  <el-menu-item-group>
                    <!-- <el-menu-item index="/swiper" @click="saveNavState('/' + 'swiper')">添加相册</el-menu-item>
                    <el-menu-item index="/addimg" @click="saveNavState('/' + 'addimg')">添加图片</el-menu-item> -->
                    <el-menu-item index="/wall" @click="saveNavState('/' + 'wall')">相册列表</el-menu-item>
                    <!-- <el-menu-item index="2-3">选项3</el-menu-item> -->
                  </el-menu-item-group>
                </el-submenu>
                <el-submenu index="3">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>历史管理</span>
                  </template>
                  <el-menu-item-group>
                    <!-- <el-menu-item index="/AddHistory" @click="saveNavState('/' + 'AddHistory')">添加历史</el-menu-item> -->
                    <el-menu-item index="/History" @click="saveNavState('/' + 'History')">历史列表</el-menu-item>
                    <!-- <el-menu-item index="3-3">选项3</el-menu-item> -->
                  </el-menu-item-group>
                </el-submenu>
                <el-submenu index="4">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>链接管理</span>
                  </template>
                  <el-menu-item-group>
                    <!-- <el-menu-item index="/AddLink" @click="saveNavState('/' + 'AddLink')">添加链接</el-menu-item> -->
                    <el-menu-item index="/Link" @click="saveNavState('/' + 'Link')">链接列表</el-menu-item>
                    <!-- <el-menu-item index="4-3">选项3</el-menu-item> -->
                  </el-menu-item-group>
                </el-submenu>
              </el-menu>
            </el-col>
          </el-row>
        </el-aside>
        <div style="width:180px"></div>
        <el-main>
          <!-- style="style:min-height:500px;background-color:red;overflow:scroll" -->
          <el-card shadow="always">
            <router-view />
          </el-card>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activePath: "welcome",
      flag:true
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    saveNavState(activePath) {
      window.sessionStorage.setItem("activePath", activePath);
      this.activePath = activePath;
    },
  },
  created() {
    this.activePath = window.sessionStorage.getItem("activePath");
    // if(this.flag){      
    //   this.$router.push(this.activePath);
    //   this.flag = false
    // }
  },
};
</script>

<style scoped>
.header {
  width: 100%;
  height: 60px;
  background-color: #ffff;
  line-height: 60px;
  margin: 0;
  padding: 0;
  position: fixed;
  box-shadow: 0px 1px 10px #c8cdd3 !important;
}
.el-header {
  padding: 0;
  z-index: 99;
}
.el-menu-item {
  /* padding: 0px; */
}
.el-submenu__title {
  /* padding-left: 20px; */
}
.el-submenu .el-menu-item {
  min-width: 198px;
}
.el-aside {
  position: fixed;
  height: 100%;
  background-color: #545c64;
  border-right: 1px solid #545c64;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 70px;
  height: 70px;
}
.el-menu {
  border-right: 1px solid #545c64;
}
</style>