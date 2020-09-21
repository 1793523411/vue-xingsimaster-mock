<template>
  <div>
    <el-table
      ref="singleTable"
      :data="tableData"
      highlight-current-row
      @current-change="handleCurrentChange"
      style="width: 100%"
    >
      <el-table-column type="index" width="50"></el-table-column>
      <el-table-column property="newsTitle" label="标题" width="120"></el-table-column>
      <el-table-column property="authorName" label="姓名" width="120"></el-table-column>
      <el-table-column property="newsContentView" label="描述"></el-table-column>
      <el-table-column property="visited" label="访问量"></el-table-column>
      <el-table-column property="createTime" label="时间"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
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
      tableData: [],
      currentRow: null,
    };
  },
  components: {
    Add,
  },
  methods: {
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
  },
  async created() {
    await this.$http.get("/news").then((res) => {
      console.log(res);
      this.tableData = [...res.data.data.list];
    });
  },
};
</script>

<style>
</style>