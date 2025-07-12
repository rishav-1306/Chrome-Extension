fetch("http://localhost:5000/api/sites/report")
  .then((res) => res.json())
  .then((data) => {
    const list = document.getElementById("report");
    data.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = `${item.url} - ${item.timeSpent.toFixed(2)}s`;
      list.appendChild(li);
    });
  });
