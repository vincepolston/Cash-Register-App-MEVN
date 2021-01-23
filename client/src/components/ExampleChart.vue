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
    <div class="row">
      <div class="col">
        <h2>dynamic chart data from db</h2>
        <span>movie names: </span><span v-for="movie in movieNames"> {{ movie.name }}, </span><br />
        <span>ticket counts: </span><span v-for="count in ticketCounts"> {{ count.count }}, </span>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import TicketService from '../services/TicketService'
import ChartData from '../services/ChartData'
import Chart from 'chart.js'

export default {
  data() {
    return {
      ChartData,
      tickets: [],
      movieNames: [],
      ticketCounts: [],
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
    },

  },

  mounted() {
    this.createChart('example-chart', this.ChartData)
  },

   async created() {
        try {
            this.tickets = await TicketService.getTickets()

            // separate the movie names and ticket counts into own arrays for chart
            this.tickets.forEach(d => {
                const {
                    name,
                    count
                } = d

                this.movieNames.push({name})
                this.ticketCounts.push({count})

            })
        
        } catch(err) {
            this.error = err.message
        }
    },

}


</script>

<style>
  
</style>