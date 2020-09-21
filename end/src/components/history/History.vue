<template>
  <div class="card">
    <el-form label-position="center" label-width="80px">
      <el-row :gutter="20">
        <el-col :span="12">
          <el-select v-model="value" placeholder="请选择" @change="change">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-col>
        <el-col :span="12">
          <el-card shadow="never">{{desc}}</el-card>
        </el-col>
      </el-row>
    </el-form>
    <el-table
      :data="tableData"
      ref="singleTable"
      highlight-current-row
      @current-change="handleCurrentChange"
      style="width: 100%"
    >
      <!-- <el-table-column prop="date" label="年份" width="180"></el-table-column> -->
      <!-- <el-table-column prop="name" label="描述" width="180"></el-table-column> -->
      <el-table-column prop="name" label="名字"></el-table-column>
      <el-table-column prop="job" label="任职情况"></el-table-column>
      <el-table-column prop="grade" label="专业班级"></el-table-column>
      <el-table-column prop="workTime" label="任职时间"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog :visible.sync="dialogVisible" width="50%" :before-close="handleClose">
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="添加年份" name="first">
          <el-form :model="form">
            <el-form-item label="输入年份" :label-width="formLabelWidth">
              <el-input v-model="form.year" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="输入描述" :label-width="formLabelWidth">
              <el-input v-model="form.desc" autocomplete="off"></el-input>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="添加任职" name="second">
          <el-form :model="form">
            <el-form-item label="名字" :label-width="formLabelWidth">
              <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="专业班级" :label-width="formLabelWidth">
              <el-input v-model="form.grade" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="任职" :label-width="formLabelWidth">
              <el-input v-model="form.job" autocomplete="off"></el-input>
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
      dialogVisible: false,
      options: [],
      value: "",
      response: [],
      tableData: [],
      desc: "",
      activeName: "first",
      formLabelWidth: "120px",
      form: {
        year: "",
        desc: "",
        name: "",
        grade: "",
        job: "",
      },
    };
  },
  components: {
    Add,
  },
  methods: {
    change() {
      //   alert(this.value);
      //   console.log(this.response);
      let tmp = this.response;
      let tmpres = tmp.filter((item) => {
        return item.year === this.value;
      });
      console.log(tmpres);
      this.desc = tmpres[0].description;
      let tmpres2 = [];
      tmpres.forEach((item) => {
        tmpres2.push(...item.personList);
      });
      console.log(tmpres2);
      this.tableData = tmpres2;
    },
    add() {
      //   alert("add,haha1");
      //   @click="dialogVisible = t rue"
      this.dialogVisible = true;
    },
    setCurrent(row) {
      this.$refs.singleTable.setCurrentRow(row);
    },
    handleCurrentChange(val) {
      this.currentRow = val;
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
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
    submit() {
      this.dialogVisible = false;
      console.log(this.form)
      this.form = {
        year: "",
        desc: "",
        name: "",
        grade: "",
        job: "",
      }
    },
  },
  async created() {
    //   alert('data')
    await this.$http.get("/history").then((res) => {
      //   console.log(res.data);
      this.response = res.data.data;
      let year = new Set();
      res.data.data.forEach((item) => {
        year.add(item.year);
      });
      for (let item of year) {
        let tmp = {
          value: item,
          label: item,
        };
        this.options.push(tmp);
      }

      let tmp = this.response;
      let tmpres = tmp.filter((item) => {
        return item.year === 2020;
      });
      //   console.log(tmpres);
      this.desc = tmpres[0].description;
      let tmpres2 = [];
      tmpres.forEach((item) => {
        tmpres2.push(...item.personList);
      });
      //   console.log(tmpres2);
      this.tableData = tmpres2;
      //   console.log(this.options);
    });
  },
};
</script>

<style scope>
.el-card {
  border: none;
}
.card {
  padding-top: 25px;
  min-height: 500px;
}
</style>