<template>
  <div class="card">
    <el-card v-for="item in response" :key="item.id">
      <div slot="header" class="clearfix">
        <span>{{item.type}}</span>
        <el-button style="float: right; padding: 3px 0" type="text" @click="addlink(item.type)">添加</el-button>
      </div>
      <el-row :gutter="20" v-for="item2 in item.all" :key="item2.id">
        <el-col :span="2">
          <div class="grid-content bg-purple link">{{item2.name}}</div>
        </el-col>
        <el-col :span="18">
          <div class="grid-content bg-purple link">{{item2.link}}</div>
        </el-col>
        <el-col :span="4">
          <el-button type="danger" icon="el-icon-delete" circle size="mini" @click="del(item2.id)"></el-button>
        </el-col>
      </el-row>
    </el-card>
    <el-dialog :visible.sync="dialogVisible" width="50%" :before-close="handleClose">
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="添加类目" name="first">
          <el-form :model="form">
            <el-form-item label="类目" :label-width="formLabelWidth">
              <el-input v-model="form.description" autocomplete="off"></el-input>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="添加链接" name="second">
          <el-form :model="form">
            <el-form-item label="类目" :label-width="formLabelWidth">
              <el-input v-model="form.desc" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="名字" :label-width="formLabelWidth">
              <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="URL" :label-width="formLabelWidth">
              <el-input v-model="form.url" autocomplete="off"></el-input>
            </el-form-item>
          </el-form>
        </el-tab-pane>
      </el-tabs>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="submit">确 定</el-button>
      </span>
    </el-dialog>
    <div @click="add()">
      <add></add>
    </div>
  </div>
</template>

<script>
import Add from "../common/Add";
export default {
  data() {
    return {
      response: [],
      dialogVisible: false,
      activeName: "first",
      form: {
        description: "",
        desc: "",
        name: "",
        url: "",
      },
      formLabelWidth: "120px",
    };
  },
  components: {
    Add,
  },
  methods: {
    addlink(type) {
      alert(type);
    },
    del(id) {
      console.log(id);
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(() => {
          done();
        })
        .catch(() => {});
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    add() {
      this.dialogVisible = true;
    },
    submit() {
      this.dialogVisible = false;
      console.log(this.form);
      this.form = {
        description: "",
        desc: "",
        name: "",
        url: "",
      };
    },
  },
  async created() {
    await this.$http.get("/link").then((res) => {
      console.log(res);
      this.response = res.data.data;
    });
  },
};
</script>

<style scope>
.card {
  padding-top: 25px;
  min-height: 500px;
}
.el-card {
  margin-bottom: 20px;
}
.link {
  margin-bottom: 20px;
}
</style>