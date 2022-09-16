/* Pega o elemento em que desejo renderizar os cards */
const cardContainer = document.getElementById('cardContainer');

/* Cria a função que vai renderizar os cards */
function renderCard () {
    fetch('https://api.github.com/users/JJtankevans/repos')
    .then(async res => {

        if(!res.ok){
            throw new Error(res.status)
        }

        let data = await res.json();

        data.map(repo => {
            let section = document.createElement('a');
            section.setAttribute('id','cards');
            section.setAttribute('href', repo.html_url)
            section.setAttribute('target', '__blank');

            section.innerHTML = `
            <div class="cardTitle">
                    <img src="./assets/folder.svg" alt="folderIcon">
                    <p>${repo.name}</p>
            </div>
            <p id="description">${repo.description ? repo.description : "Sem descrição"}</p>
            <div class="cardFooter">
                <img src="./assets/star.svg" alt="starIcon">
                <p>${repo.stargazers_count}</p>
                <img src="./assets/git-branch.svg" alt="githubBranchIcon">
                <p>${repo.branchs_url ? repo.branchs_url : 0}</p>
                <div id="cardBall"></div>
                <p>${repo.language}</p>
            </div>
        `;

        cardContainer.appendChild(section);

        })
    })
    .catch(e => console.log(e))
}


renderCard();

/* 
    userInfos: https://api.github.com/users/JJtankevans
    repositoriesInfos: https://api.github.com/users/JJtankevans/repos
*/