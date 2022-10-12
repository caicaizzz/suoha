<template>
  <div class="accountPanel">
    <el-card>
      <div class="box-card">
        <div class="leftArea"></div>
        <div class="rightArea">
          <div class="subTitle">
            <div class="item">登录</div>
            <div class="item">注册</div>
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  name: "AccountPanel",
  data() {
    return {
      activeName: "second",
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>
<style scoped lang="less">
.accountPanel {
  display: flex;
  align-items: center;
  justify-content: center;
  // width: 800px;
  // height: 800px;
  margin-bottom: 150px;
  /deep/.el-card {
    box-shadow: 0px 0px 50px 0px rgba(179, 124, 218, 0.5);
    border-radius: 8px;
    .box-card {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 1200px;
      height: 600px;

      .leftArea {
        height: 100%;
        width: 51%;
        background: url("@/assets/01.jpg") no-repeat center center;
        background-size: cover;
      }
      .rightArea {
        height: 100%;
        width: 49%;
        background-color: #fff;
        .subTitle {
          display: flex;
          .item {
            width: 50%;
            height: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
      }
    }
  }
}
</style>
