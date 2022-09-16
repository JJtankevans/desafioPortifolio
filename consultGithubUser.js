const perfilContainer = document.getElementById('perfil');

const postCardContainer = document.getElementById('postCard');

function userInfos() {
    fetch('https://api.github.com/users/JJtankevans')
    .then(async res => {
        
        if(!res.ok) {
            throw new Error(res.status);
        }

        let data = await res.json();
    
        let nome = document.createElement('h3');
        nome.innerText = `${data.name}`
            
        let div = document.createElement('div');
        div.setAttribute('id','perfilImg');
        div.innerHTML = `
            <img src=${data.avatar_url} alt="perfilImage">
        `;

        let area = document.createElement('p');
        area.innerText = `${data.bio}`

        perfilContainer.appendChild(div);
        perfilContainer.appendChild(nome);
        perfilContainer.appendChild(area);


        let img = document.createElement('img');
        img.setAttribute('src', data.avatar_url);

        let divTextContainer = document.createElement('div');
        divTextContainer.setAttribute('id','textContainer');
        divTextContainer.innerHTML = `
            <div id="postCardHeader">
                <h3>Erro adb devices no Genymotion e Android Studio (React Native).</h3>
                <p>2 anos atrás</p>
            </div>
            <div id="postCardBody">
                <p>Erro adb devices no Genymotion e Android Studio (React Native)</p>
                <div class="tags">
                    <p>#react-native</p>
                    <p>#genimotion</p>
                    <p>#genimonion</p>
                    <p>#genimotion</p>
                    <p>#react-native</p>
                    <p>#genimotion</p>
                    <p>#genimonion</p>
                    <p>#genimotion</p>
                </div>
            </div>
        `;
        postCardContainer.appendChild(img);
        postCardContainer.appendChild(divTextContainer)
        

    })
    .catch(e => console.log(e))

};


userInfos();