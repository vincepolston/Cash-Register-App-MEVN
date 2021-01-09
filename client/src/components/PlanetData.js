const movies = ['Bloodsport', 'Rambo: First Blood', 'Wonder Woman 1984']
const data = [4, 1, 2]


const planetChartData = {
    type: 'pie',
    data: {
      labels: movies,
      datasets: [
        { 
          label: 'Number of Moons',
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
  
  export default planetChartData;