fetch("https://personal-portfolio-b2gb.onrender.com/api/projects")
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
  .catch(error => console.log(error));