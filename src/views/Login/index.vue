<template>
  <div class="login">
    <account-panel />
  </div>
</template>
<script>
import AccountPanel from "@/views/Login/components/AccountPanel.vue";
export default {
  name: "homeLogin",
  components: {
    AccountPanel,
  },
  mounted() {},
};
</script>
<style lang="less" scoped>
.login {
  background-color: #d5bed4;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 900px;
}
</style>
