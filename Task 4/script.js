/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const endpoint = 'cars.json';
const results = document.getElementById('output');
const table = document.createElement("table");
results.append(table);

const getCars = () =>
fetch(endpoint).then((response) =>{
    if(!response.ok) {
        throw new Error("Error: " + response.status);
    }
    return response.json()
})

