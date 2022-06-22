
const data = {
   labels: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
   datasets: [
      {
         label: "",
         data: [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48],
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
         // barPercentage: 0.5,
         // barThickness: 6,
         // maxBarThickness: 8,
         // minBarLength: 2,
         // data: [10, 20, 30, 40, 50, 60, 70],
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
      // interaction: {
      // 	mode: "index",
      // 	axis: "y",
      // },
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
            height:60,
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
