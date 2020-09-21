<template>
  <div class="card">
    <el-row :gutter="20">
      <el-col :span="15">
        <el-page-header @back="goBack" :content="response.albumName" style="margin-bottom:25px"></el-page-header>
      </el-col>
      <el-col :span="9">
        <div>{{response.albumDesc}}</div>
      </el-col>
    </el-row>

    <div v-for="(items,index) in img" :key="index">
      <el-row :gutter="20">
        <el-col :span="6" v-for="(item,index) in items" :key="index">
          <el-card :body-style="{ padding: '0px' }">
            <img
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              class="image"
            />
            <div style="padding: 14px;">
              <i style="font-size:10px">{{item.reateTime}}</i>
              <div class="bottom clearfix">
                <time class="time">{{item.photoDesc}}</time>
                <el-button type="text" class="button">删除</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <el-dialog title="添加照片" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="照片名字" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="照片描述" :label-width="formLabelWidth">
          <el-input v-model="form.desc" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <el-upload
        class="upload-demo"
        action="https://jsonplaceholder.typicode.com/posts/"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :file-list="fileList"
        list-type="picture"
      >
        <el-button size="small" type="primary">点击上传</el-button>
        <div slot="tip" class="el-upload__tip">上传照片</div>
      </el-upload>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submit">确 定</el-button>
      </div>
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
      response: {},
      img: [],
      dialogFormVisible: false,
      form: {
        name: "",
        desc: "",
      },
      formLabelWidth: "120px",
      fileList: [
        // {
        //   name: "food.jpeg",
        //   url:
        //     "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
        // },
      ],
    };
  },
  components: {
    Add,
  },
  methods: {
    chunk(array, size) {
      const length = array.length;
      if (!length || !size || size < 1) {
        return [];
      }
      let index = 0;
      let resIndex = 0;
      let result = new Array(Math.ceil(length / size));
      while (index < length) {
        result[resIndex++] = array.slice(index, (index += size));
      }
      return result;
    },
    goBack() {
      this.$router.back(-1);
    },
    add() {
      this.dialogFormVisible = true;
    },
    submit() {
      this.dialogFormVisible = false;
      console.log(this.form);
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
  },
  async created() {
    console.log(this.$route.params.id);
    await this.$http
      .get("/ablimdetails?id=" + this.$route.params.id)
      .then((res) => {
        // console.log(res.data);
        this.response = res.data.data;
        // console.log(this.response)
        // console.log(res.data.data.photoList)
        this.img = this.chunk(res.data.data.photoList, 4);
        console.log(this.img);
        // console.log(this.img);
      });
  },
};
</script>

<style scope>
.card {
  margin-top: 5px;
  min-height: 500px;
  min-width: 1110px;
  background-color: rgba(255, 0, 0, 0);
}
.box-card2 {
  margin-bottom: 10px;
}
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
.el-card {
  margin-bottom: 20px;
}
</style>