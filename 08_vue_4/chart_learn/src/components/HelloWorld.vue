<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ve-line :data="chartData"></ve-line>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data: function () {
    return {
      chartData: {
        columns: ["日期", "销售额"],
        rows: [
          { 日期: "1月1日", 销售额: 123 },
          { 日期: "1月2日", 销售额: 1223 },
          { 日期: "1月3日", 销售额: 2123 },
          { 日期: "1月4日", 销售额: 4123 },
          { 日期: "1月5日", 销售额: 3123 },
          { 日期: "1月6日", 销售额: 7123 },
        ],
      },
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
