<template>
  <div class="card">
    <el-row>
      <el-col :span="24">
        <div
          class="grid-content bg-purple-dark"
          style="height:40px;line-height：40px;background-color:#fff;font-size:24px;margin-bottom:20px"
        >为行思工作室添加历史任职情况</div>
      </el-col>
    </el-row>
    <el-form label-position="center" label-width="80px" :model="formLabelAlign">
      <el-row :gutter="20">
        <el-col :span="12">
          <el-form-item label="年份">
            <el-input v-model="formLabelAlign.year" placeholder="输入年份，例如：2020"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="描述">
            <el-input v-model="formLabelAlign.description" placeholder="输入一些描述，例如：第十四届"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <el-form label-position="center" label-width="80px" :model="formLabelAlign">
      <el-row :gutter="20">
        <el-col :span="12">
          <el-form-item label="名字">
            <el-input v-model="formLabelAlign.name" placeholder="输入名字，例如：张三"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="任职情况">
            <el-input v-model="formLabelAlign.job" placeholder="输入任职情况，例如：设计组组长"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <el-form label-position="center" label-width="80px" :model="formLabelAlign">
      <el-row :gutter="20">
        <el-col :span="12">
          <el-form-item label="专业班级">
            <el-input v-model="formLabelAlign.grade" placeholder="输入班级，例如：软件1801"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="任职时间">
            <el-form-item>
              <el-date-picker
                type="date"
                placeholder="选择任职日期"
                v-model="formLabelAlign.workTime"
                style="width: 100%;"
              ></el-date-picker>
            </el-form-item>
            <!-- <el-input v-model="formLabelAlign.workTime" placeholder="选择任职时间"></el-input> -->
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      labelPosition: "right",
      formLabelAlign: {
        year: "",
        description: "",
        name: "",
        job: "",
        grade: "",
        workTime: "",
      },
    };
  },
};
</script>

<style scoped>
.card {
  padding-top: 25px;
  min-height: 500px;
}
</style>