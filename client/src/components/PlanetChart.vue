<template>
  <h1>chart</h1>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col">
          <canvas id="planet-chart"></canvas>
        </div>
      </div>
    </div>
    <div class="row">
        <div v-for="cart in carts" :key="cart.id">
    <strong>
       <span v-for="item in carts.cart">
            {{item.name}}, 
        </span>
    </strong>
  </div>
    </div>
  </div>


</template>

<script>
import planetChartData from './PlanetData.js'
import ReceiptService from '../services/ReceiptService'
import Chart from 'chart.js'

export default {
  data() {
    return {
      planetChartData,
      carts: []
    }
  },

async created() {
        try {
            this.carts = await ReceiptService.getCarts()
            console.log(this.carts)
            
        } catch(err) {
            this.error = err.message
        }
    },

  methods: {
    createChart(chartId, chartData) {
      const ctx = document.getElementById(chartId);
      const myChart = new Chart(ctx, {
        type: chartData.type,
        data: chartData.data,
        options: chartData.options,
      });
    }
  },

  mounted() {
    this.createChart('planet-chart', this.planetChartData)
  }
}


</script>

<style>
  
</style>