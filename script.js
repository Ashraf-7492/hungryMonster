    const displayMenuList = () => {
    const getInputValue = document.getElementById('searchInput').value;

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${ getInputValue}`
    fetch(url)
    .then(response => response.json())
    .then(data => mealName(data.meals));
}
// show menu list
const mealName = meals => {
    const searchResult = document.getElementById('searchResultContainer');

    meals.forEach(element => {
        const mealList = document.createElement('div');
        mealList.className = ' text-center menuItems';
        mealList.innerHTML = `
        <h3 class="menuHeadings">${element.strMeal}</h3>
        <p>"${element.strArea}"</p>
        <img onClick="fullDetails(${element.idMeal})" src="${element.strMealThumb}" class="menuImage">
        
        `
        // display hide and show
        searchResult.appendChild(mealList);
        const displayHide = document.getElementById('searchResultContainer');
        displayHide.style.display = 'grid';
        const displayHideDetails = document.getElementById('showDetailsMenu');
        displayHideDetails.style.display = 'none';


    });
}
// fetch full details..
    const fullDetails = (idMeal) =>{
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
     fetch(url)
    .then(res => res.json())
    .then(data => showFullDetails (data.meals[0]));

}
// show full details in ui
const showFullDetails = meals => {
    const menuDetails = document.getElementById('showDetailsMenu');
    menuDetails.innerHTML=`
    <img class="menuImage" src="${meals.strMealThumb}">
    <h2>${meals.strMeal}</h2>
    <h4>Origin</h4>
    <h4>${meals.strArea}</h4>
    <h4>Ingredients</h4>
    <p>${meals.strIngredient1}</p>
    <p>${meals.strIngredient2}</p>
    <p>${meals.strIngredient3}</p>
    <p>${meals.strIngredient4}</p>
    <p>${meals.strIngredient5}</p>
    <p>${meals.strIngredient6}</p>
    <p>${meals.strIngredient7}</p>
    <p>${meals.strIngredient8}</p>
    <p>${meals.strIngredient9}</p>
    <p>${meals.strIngredient10}</p>
    `
    // display hide and show 
        const displayHide = document.getElementById('searchResultContainer');
        displayHide.style.display = 'none';
        const displayHideDetails = document.getElementById('showDetailsMenu');
        displayHideDetails.style.display = 'block';
}