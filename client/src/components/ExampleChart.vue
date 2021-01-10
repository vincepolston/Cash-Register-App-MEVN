<template>
  <h1>Example Chart</h1>
  <span>Still in development.</span>
<div id="app">
  <div class="container">
    <div class="row">
      <div class="col">
          <canvas id="example-chart"></canvas>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import ChartData from '../services/ChartData'
import Chart from 'chart.js'

export default {
  data() {
    return {
      ChartData,
    }
  },

  methods: {
    createChart(chartId, ChartData) {
      const ctx = document.getElementById(chartId);
      const myChart = new Chart(ctx, {
        type: ChartData.type,
        data: ChartData.data,
        options: ChartData.options,
      });
    }
  },

  mounted() {
    this.createChart('example-chart', this.ChartData)
  }
}
</script>

<style>
  
</style>