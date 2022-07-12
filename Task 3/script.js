/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const endpoint = 'https://api.github.com/users';

let users = {};

const results = document.querySelector('#output');
results.innerHTML = '';
const img = document.createElement('img');
const btn = document.getElementById('btn');
btn.addEventListener('click', fetchData);
const userCard = document.createElement('p');
results.append(userCard);
const login = document.createElement('p');
img.src = card.avatar_url;
img.setAttribute('alt', 'userPhoto');
const avatar_url = document.createElement('p');
avatar_url.append(img);
userCard.append(login, avatar_url);

const fetchData = async () => {
    try {
        const response = await fetch (endpoint);
        if(response.ok) {
            URLSearchParams.avatars = await response.json();
            enterData(users.avatars);
        }
    }catch(error){
        console.error(error);
    }
};

        

