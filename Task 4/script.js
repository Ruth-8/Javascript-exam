/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */
const endpoint = 'cars.json';

fetch(endpoint)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                appendData(data);
            })
            .catch(function (err) {
                console.log('error: ' + err);
            });
        function appendData(data) {
            const mainContainer = document.getElementById("output");
            for (let i = 0; i < data.length; i++) {
                const div = document.createElement("div");
                div.innerHTML = 'Brand: ' + data[i].brand;
                const div1 = document.createElement("div");
                div1.innerHTML = 'Models: ' + data[i].models;
                mainContainer.appendChild(div);
                mainContainer.appendChild(div1);
            }
        }