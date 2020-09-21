var express = require("express");
var router = express.Router();
var Mock = require("mockjs");
var Random = Mock.Random;

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/history", function (req, res) {
  var data = Mock.mock({
    code: 0,
    msg: "success",
    "data|9-18": [
      {
        "id|+1": 1,
        "year|2017-2020": 2020,
        "description|1": ["第十四届","第十五届","第十六届","第十七届"],
        "personList|1-3": [
          {
            "id|+1": 1,
            "name|1": ["张三", "李四", "王五", "赵六", "云七"],
            "job|1": [
              "程序组组长",
              "设计组组长",
              "视创组组长",
              "运营组组长",
              "文案组组长",
            ],
            "grade|1": ["软件-1801", "软件-1802", "软件-1803", "软件-1804"],
            workTime: Mock.mock("@date"),
            yearId: "不知道这个字段是干嘛的",
          },
        ],
      },
    ],
  });
  res.send(data);
});

router.get("/link", (req, res) => {
  Random.url();
  var data = Mock.mock({
    code: 0,
    msg: "success",
    "data|3-8": [
      {
        "id|+1": 1,
        "type|1": ["类型一", "类型二", "类型三", "类型四"],
        "all|6-10": [
          {
            "id|+1": 1,
            "name|1":["谷歌","百度","夸克"],
            "link": Random.url()+Random.url()+Random.url()+Random.url()+Random.url(),
          },
        ],
      },
    ],
  });
  res.send(data);
});

router.get("/ablum", (req, res) => {
  var data = Mock.mock({
    code: 0,
    msg: "success",
    "data|6-9": [
      {
        "albumId|+1": 1,
        "albumName|1": ["名字一", "名字二", "名字三", "名字四", "名字五"],
        albumDesc: "这是一段该相册的描述",
        albumTime: Mock.mock("@date"),
      },
    ],
  });
  res.send(data);
});

router.get("/ablimdetails", (req, res) => {
  var data = Mock.mock({
    code: 0,
    msg: "success",
    data: {
      "albumId|1": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      "albumName|1": ["名字一", "名字二", "名字三", "名字四", "名字五"],
      albumDesc: "这是一段该相册的描述",
      albumTime: Mock.mock("@date"),
      "photoList|8-15": [
        {
          "id|+1": 1001,
          photoUrl: Mock.mock("@url"),
          photoDesc: "这是该照片的描述",
          createTime: Mock.mock("@date"),
        },
      ],
    },
  });
  res.send(data);
});
router.get("/swiper", (req, res) => {
  var data = Mock.mock({
    code: 0,
    msg: "success",
    "list|4": [{ url: Random.url(), jumpUrl: Random.url() }],
  });
  res.send(data);
});

router.get("/singleNew", (req, res) => {
  var data = Mock.mock({
    code: 0,
    msg: "success",
    data: {
      "newsId|1": [1, 2, 3, 4, 5, 67, 8, 9, 10],
      newsTitle: "这是一个标题",
      authorName: "云鹏鹏",
      createTime: Mock.mock("@date"),
      "visited|1": [321, 234, 543, 1102],
      newsContent: Mock.mock("@cparagraph"),
    },
  });
  res.send(data);
});

router.get("/news", (req, res) => {
  var data = Mock.mock({
    code: 0, //成功0，不成功-1
    msg: "success",
    data: {
      "total|1": [100, 123, 132, 223], //数据总条数
      "list|8-15": [
        {
          "newsId|+1": 1,
          "newsTitle|1": ["标题零","标题一","标题二","标题三","标题四","标题五"],
          "authorName|1": ["张三", "李四", "王五", "赵六", "云七"],
          "createTime": Mock.mock("@date"),
          "visited|1": [58,32,45,67,89,12,32,34,54],
          "newsPictureViewUrl": Mock.mock("@url"),
          "newsContentView|1": ["这是新闻的简短描述","阿巴阿巴阿巴","啊啊啊啊"]
        },
      ],
      "pageNum|1": [2, 3, 4, 12, 11, 8], //第几页
      pageSize: 8, //每页数据数
      "size|1": [8, , 3, 5, 6], //本页数据数
      startRow: 4,
      endRow: 5,
      pages: 2, //总页数
      prePage: 1,
      nextPage: 0,
      isFirstPage: false, //是否是第一页
      isLastPage: true, //是否是最后一页
      hasPreviousPage: true,
      hasNextPage: false,
      navigatePages: 8,
      navigatepageNums: [1, 2],
      navigateFirstPage: 1,
      navigateLastPage: 2,
    },
  });
  res.send(data)
});
module.exports = router;
