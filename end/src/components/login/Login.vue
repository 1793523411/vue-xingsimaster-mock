<template>
<div class="bg">
    <!-- <div class="bg"></div> -->
    <el-card class="box-card">
        <el-container>
            <el-header>行思后台管理</el-header>
            <el-main style="padding-bottom:0">
                <el-form label-position="left" label-width="80px" :model="formLabelAlign">
                    <el-form-item label="用户名">
                        <el-input v-model="username" placeholder="请输入用户名"></el-input>
                    </el-form-item>
                    <el-form-item label="密码">
                        <el-input v-model="password" placeholder="请输入密码"></el-input>
                    </el-form-item>
                </el-form>
            </el-main>
            <el-footer>
                <el-button type="primary" @click="login">登录</el-button>
            </el-footer>
        </el-container>
    </el-card>
</div>
</template>

<script>
export default {
    data() {
        return {
            formLabelAlign: {
                name: "",
                region: "",
            },
            username: "",
            password: "",
        };
    },
    methods: {
        async login() {
            // let data = {
            //   username: this.username,
            //   password: this.password,
            // };
            // console.log(`${this.username}+${this.password}`);
            // await this.$http.post('/login', data, {headers: {'Content-Type': 'application/json'}}).then(res => {
            //   window.sessionStorage.setItem('token',res.headers.authorization)
            // });
            this.$router.push("/home");
            // let data = {
            //     "year":"2020",
            //     "description":"123456"
            // }
            // const res =await this.$http.post('/history/add',data)
            // console.log(res)
        },
    },
};
</script>

<style>
.box-card {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 450px;
    height: 300px;
}

el.main {
    padding: 0;
}

.el-header,
.el-footer {
    background-color: #ffffff;
    color: #333;
    text-align: center;
    line-height: 60px;
}

.bg {
    height: 100%;
    width: 100%;
    background: url(../../assets/img/background.gif) no-repeat;
    background-position: center center;
    background-attachment: fixed;
    background-size: cover;
    background-color: #464646;
}
</style>
