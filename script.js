fetch("http://localhost:5000/projects")
  .then(response => response.json())
  .then(data => {

    const projectList = document.getElementById("project-list");

    data.forEach(project => {

      projectList.innerHTML += `
        <div class="project">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
        </div>
      `;

    });

  })
  .catch(error => {
    console.log("Error:", error);
  });