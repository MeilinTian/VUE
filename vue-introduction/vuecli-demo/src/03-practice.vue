<template>
  <div>
    <table width=800 style="text-align: center; margin: 0 auto;" border=1>
            <caption>欢迎光临_vue开发的收银系统_水果店</caption>
            <tr>
                <th>苹果 {{ price }} ¥ / 斤, 折扣 &lt; {{ dis * 10 }} 折 &gt;</th>
            </tr>
            <tr>
                <td>
                    请输入你要购买的斤数 <input type="number" v-model="count"  placeholder="斤数">
                </td>
            </tr>
            <tr>
                <td>
                  <!-- 静态页面6个变量使用后, 绑定点击事件 -->
                    <button @click="cel">结账买单~</button>
                </td>
            </tr>
            <tr>
                <td>
                    结账单:
                    <span>总价: {{ allPrice }} ¥元</span>
                    <span>折后价: {{ disPrice }} ¥元</span>
                    <span>省了: {{ savePrice }} ¥元</span>
                </td>
            </tr>
        </table>
  </div>
</template>

<script>
export default {
  data(){
    return {
      price: 10, // 苹果单价
      dis: 0.8, // 折扣
      count: 0, // 购买的斤数
      allPrice: 0, // 总价
      disPrice: 0, // 折后价格
      savePrice: 0, // 省了多钱
    }
  },
  methods: {
    cel(){
      // 把count保存的数量-和单价和折扣等计算
      this.allPrice = this.price * this.count;
      this.disPrice = this.allPrice * this.dis;
      this.savePrice = this.allPrice - this.disPrice;
    }
  }
}
</script>

<style>

</style>