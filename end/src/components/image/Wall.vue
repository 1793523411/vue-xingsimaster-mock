<template>
  <div class="card">
    <div v-for="(items,index) in response" :key="index">
      <el-row :gutter="20">
        <el-col :span="6" v-for="(item,index) in items" :key="index">
          <el-card :body-style="{ padding: '0px' }">
            <img
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              class="image"
              @click="details(item.albumId)"
            />
            <div style="padding: 14px;">
              <span style="margin-right:30px">{{item.albumName}}</span>
              <i style="font-size:10px">{{item.albumTime}}</i>
              <div class="bottom clearfix">
                <time class="time">{{item.albumDesc}}</time>
                <el-button type="text" class="button" @click="del(item.albumId)">删除</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>

      <el-dialog title="添加相册" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="相册名字" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="相册描述" :label-width="formLabelWidth">
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
          <div slot="tip" class="el-upload__tip">上传该相册的封面</div>
        </el-upload>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="submit">确 定</el-button>
        </div>
      </el-dialog>
    </div>
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
      dialogFormVisible: false,
      form: {
        name: "",
        desc: "",
      },
      fileList: [
        {
          name: "food.jpeg",
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
        }
      ],
      formLabelWidth: "120px",
      src:
        "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
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
      let index = 0; //用来表示切割元素的范围start
      let resIndex = 0; //用来递增表示输出数组的下标
      let result = new Array(Math.ceil(length / size));
      while (index < length) {
        //循环过程中设置result[0]和result[1]的值。该值根据array.slice切割得到。
        result[resIndex++] = array.slice(index, (index += size));
      }
      //输出新数组
      return result;
    },
    details(id) {
      console.log(id);
      this.$router.push({
        path: `/swiper/${id}`,
      });
    },
    add() {
      this.dialogFormVisible = true;
    },
    submit() {
      this.dialogFormVisible = false;
      console.log(this.form);
    },
    del(id) {
      alert(id);
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
  },
  async created() {
    await this.$http.get("/ablum").then((res) => {
      console.log(res.data);
      this.response = this.chunk(res.data.data, 4);
      console.log(this.response);
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