const apiURL = "https://api.github.com/users/paolasgomes/repos";

const article = document.querySelector("article");

const loadingElement = document.querySelector(".loading");

const getRepositories = async () => {
  try {
    loadingElement.classList.add("active");

    const response = await fetch(apiURL);

    const data = await response.json();

    const hasError = !response.ok;

    if (hasError) {
      throw new Error(data.message);
    }

    createCard(data);
  } catch (error) {
    alert(error.message);
  } finally {
    loadingElement.classList.remove("active");
  }
};

const createCard = (data) => {
  data.map((item) => {
    const createACard = document.createElement("div");

    createACard.className = "cards";

    createACard.innerHTML = `<a href="${item.html_url}" target="_blank"">
            <h1><img src="../assets/assets/folder.svg"</img>
            <span>${item.name.toLowerCase()}</span></h1>
            <p class="card-description">${item.description}</p>
  
            <ul type="none" class="stars-branches"> 
            <li><img src="../assets/assets/star.svg"></img></li>
            <li>${item.watchers}</li>
            <li><img src="../assets/assets/git-branch.svg"></img></li>
            <li>${item.forks}</li>
            </ul>
        </a>`;

    article.appendChild(createACard);
  });
};

getRepositories();
//A declaração async function define uma função assíncrona, que retorna um objeto AsyncFunction.
