// labels and data arrays
const movies = ['Bloodsport', 'Rambo: First Blood', 'Wonder Woman 1984']
const data = [4, 1, 2]


// data and options for chart
const ChartData = {
    type: 'pie',
    data: {
      labels: movies,
      datasets: [
        { 
          label: 'Movies',
          data: data,
          backgroundColor: ["#0074D9", "#FF4136", "#2ECC40"]
        }]
    },
    options: {
      responsive: true,
      title: {
        display: true,
        text: 'Movie Tickets Sold'
      }
    },

    
  }
  
  export default ChartData;