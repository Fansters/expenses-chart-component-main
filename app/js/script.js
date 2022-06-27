'use strict';
async function fetchData() {
   const url = '../../data.json'
   const response = await fetch(url)
   const dataPoints = await response.json();
   return dataPoints;
}

fetchData().then(dataP => {
   const day = dataP.map(function (i) {
      return i.day;
   })
   console.log(day);
   const amount = dataP.map(function (i) {
      return i.amount;
   })
   // console.log(amount);
   myChart.data.labels = day;
   myChart.data.datasets[0].data = amount;
   myChart.update();
});

const data = {
   // labels: [],
   datasets: [
      {
         // label: " ",
         // data: [],
         backgroundColor: [
            "rgb(236, 119, 95)",
            "rgb(236, 119, 95)",
            "rgb(236, 119, 95)",
            "rgb(236, 119, 95)",
            "rgb(236, 119, 95)",
            "rgb(236, 119, 95)",
            "rgb(236, 119, 95)",
         ],
         borderWidth: 0,
         borderRadius: 3,
         borderSkipped: false,
         hoverBackgroundColor: "hsl(186, 34%, 60%)",
      },
   ],
};
const ctx = document.getElementById("myChart");
const myChart = new Chart(ctx, {
   type: "bar",
   data: data,
   options: {
      maintainAspectRatio: false,
      responsive: true,
     
      plugins: {
         tooltip: {
            // enabled:false,
            backgroundColor: "hsl(25, 47%, 15%)",
            position: "nearest",
            title: false,
            callbacks: {
               labelColor: function () {
                  return {
                     borderColor: "hsl(25, 47%, 15%)",
                     backgroundColor: "hsl(25, 47%, 15%)",
                  };
               },
               title: function () { },
            },
         },
         chartAreaBorder: {
            borderWidth: 6,
         },
         legend: {
            display: false,
         },
      },
      scales: {
         x: {
            height: 60,
            ticks: {
               color: "hsl(28, 10%, 53%)",
            },
            gridLine: {
               display: false,
            },
            grid: {
               drawBorder: false,
               display: false,
            },
         },
         y: {
            display: false,
         },
      },
   },
});