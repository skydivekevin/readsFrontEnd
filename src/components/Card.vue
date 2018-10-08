<template>
<el-row>
  <el-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
    <el-card :body-style="{ padding: '0px' }">
      <img src="https://via.placeholder.com/50x100" class="image">
      <div style="padding: 14px;">
        <span>Card information</span>
        <div class="bottom clearfix">
        </div>
      </div>
    </el-card>
  </el-col>
</el-row>
  
</template>

<script>
export default {
  name: 'Card'
};
</script>


<style>
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
  /* width: 100%; */
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: '';
}

.clearfix:after {
  clear: both;
}
</style>