const ctx = document.getElementById("ccrustChart").getContext("2d");

new Chart(ctx, {
  type: "doughnut",
  data: {
    labels: ["?", "Stage 1"],
    datasets: [{
      data: [90, 10],
      backgroundColor: ["#111", "#36d400"],
      borderColor: "#000",
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: "#fff",
          font: {
            size: 14
          }
        }
      }
    }
  }
});
