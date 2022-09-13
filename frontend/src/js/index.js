//Define DOM variables, with the "$" sign to distinguish it from the others
const $productsContainer = document.querySelector("#productsContainer");
const $categoriesContainer = document.querySelector("#categoriesContainer");
const $pagesContainer = document.querySelector("#pagesContainer");
const $cbxOrder = document.querySelector("#cbxOrder");
const $pagination = document.querySelector("#pagination");
const $spnCountProducts = document.querySelector("#spnCountProducts");
const $txtBuscador = document.querySelector("#txtBuscador");
const $loaderButton = document.querySelector("#loaderButton");
const $prevPage = document.querySelector("#prevPage");
const $nextPage = document.querySelector("#nextPage");

const url_api = "http://localhost:3000"; //URL API
let prevPageOption, nextPageOption, currentPageOption, orderOption, searchOption; //Variables globales

getCategories(); //Call to the function that brings the categories
getProduct(); // Call to the function that brings the categories


/**
* Function that brings all the categories of the API,
* to show them on the screen later
*/
function getCategories() {
  fetch(`${url_api}/getCategories`) // Call to API
    .then(response => response.json())
    .then((resp) => {
      (resp.status === "success") 
        ? renderCategoriesHTML(resp.data) // Render categories
        : console.error(resp.error); // Error message
    })
    .catch(err => console.log(err));//Error message
}

/**
 * Function that prints the categories brought from the API in the HTML DOM.
 * @param {object} categories We receive the CATEGORIES in JSON object format.
 */
function renderCategoriesHTML(categories) {

  // Add to first filter
  $categoriesContainer.innerHTML = `
    <a id="todos" class="category cursor-pointer rounded-full focus:outline-none focus:ring-2  focus:bg-indigo-50 focus:ring-indigo-800" onclick="changeCategory();">
        <div class="py-2 px-8 bg-indigo-100 text-indigo-700 rounded-full">
        Todos
        </div>
    </a>
    `;

  // Render the other filters
  categories.forEach((element) => {
    $categoriesContainer.innerHTML += `
        <a id="category-${(element.id)}" class="category cursor-pointer rounded-full focus:outline-none focus:ring-2 focus:bg-indigo-50 focus:ring-indigo-800 ml-4 sm:ml-8" onclick="changeCategory(this.id);" data-id-category="${element.id}">
            <div class="py-2 px-8 text-gray-600 hover:text-indigo-700 hover:bg-indigo-100 rounded-full ">
                <p>${capitalizeFirsLetter(element.name)}</p>
            </div>
        </a>
        `
  });

}

/**
 * Function that brings all the products of the API, 
 * to show them on the screen later
 */
function getProduct(page = 1) {

  loader(true); // Show loader

  const order = orderOption === undefined ? 'ASC' : orderOption; // Validate if there is an existing order by price option, default: 'ASC'
  const search = searchOption === undefined ? '' : `&text=${searchOption}`; // Validate if an existing search text exists, default: ''
  
  fetch(`${url_api}/getProducts?page=${page}&order_by=price&order_direction=${order}${search}`) // Call to API
    .then(response => response.json())
    .then((resp) => {
      (resp.status === "success" && resp.data.data.length > 0) 
        ? renderProductsHTML(resp.data) // Render products
        : noProductFound(); // Render error message HTML
    })
    .catch(err => console.log(err)); // Error message
}

/**
 * Function that renders a "Not Found" message to the user in the HTML DOM.
 */
function noProductFound() {

  loader(false); //Hide loader

  //Render error message HTML
  $productsContainer.innerHTML = `
  <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative w-full flex justify-center m-10" role="alert">                
      <span class="block sm:inline">Lo sentimos 🙁, no hemos encontrado resultados para: "<strong>${$txtBuscador.value}</strong>"</span>                
  </div>`;

  $pagination.classList.add('hidden');
  $spnCountProducts.innerHTML = 'Mostrando (0) productos de (0)';
  
}


/**
 * Function that prints the products brought from the API in the HTML DOM.
 * @param {object} products We receive the PRODUCTS in JSON object format.
 */
function renderProductsHTML(allData) {

  loader(false); // Hidde loader

  const { data, limit, total, currentPage, nextPage, previousPage } = allData; // Extract the variables that come from the JSON

  let url_image,
  discount,
  price_format,
  symbol_money = "S./";
  
  validatePagination(total, limit, currentPage, nextPage, previousPage); // Assign pagination actions
  
  $productsContainer.innerHTML = '';
  $spnCountProducts.innerHTML = `Mostrando (${data.length}) productos de (${total})`; // Informative detail for the user
  data.forEach(product => {
    // Parse/validate the value of variables to paint them directly
    url_image = ((product.url_image) === '' || (product.url_image) === null) ? './src/img/not-available.png' : product.url_image,
      discount = (product.discount == 0) ? '' : `<span class="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-red-400 rounded-full">-${product.discount}%</span>`,
      price_format = `${symbol_money} ${(product.price).toString().slice(0, -2)}.${(product.price).toString().slice(-2)}`;

    // Render products
    $productsContainer.innerHTML +=
      `<div class="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col hover:grow hover:shadow-lg">
                <img alt="Image not available" src="${url_image}">
                <div class="pt-3 flex items-center justify-between">
                    <p class="">${(product.name)}</p>
                    ${discount}
                </div>
                <p class="pt-1 text-gray-900">${price_format}</p>
        </div>`;
  });

}

/**
 * Function that sends an order filter for the products brought from the API, 
 * it can be HIGHER PRICE or LOWER PRICE
 */
function orderProductByPrice() {
  const filterOrder = ($cbxOrder.value === 'higher_price') ? 'DESC' : 'ASC';
  orderOption = filterOrder;
  getProduct(currentPageOption);
}

/**
  * Function that validates/assigns the respective paging actions as appropriate
  * @param {int} total Total amount of products
  * @param {Int} limit Maximum number of products displayed
  * @param {int} currentPage Current page number
  * @param {int} nextPage Next page number
  * @param {Int} previousPage Previous page number
  */
function validatePagination(total, limit, currentPage, nextPage, previousPage){
    
    const nroPages = Math.round(total/limit); // Page numbers
    console.log("🚀 ~ file: index.js ~ line 162 ~ validatePagination ~ total", total)
    console.log("🚀 ~ file: index.js ~ line 162 ~ validatePagination ~ nroPages", nroPages)
    
    if(nroPages <= 1 || total === 0){ $pagination.classList.add('hidden'); return; } // If page number is <= 1, we stop the function and hide the HTML pagination
        
    prevPageOption = previousPage; // Assign value to global variables
    nextPageOption = nextPage;
    currentPageOption = currentPage;

    if(previousPage === null){ // Validate if it is possible to RETURN to add or remove visual styles for the user
      $prevPage.setAttribute('disabled',true);
      $prevPage.classList.remove('hover:bg-indigo-400','hover:text-white');
    }else{
      $prevPage.removeAttribute('disabled'); 
      $prevPage.classList.add('hover:bg-indigo-400','hover:text-white');
      
    }

    if(nextPage === null){ // Validate if it is possible to go to the NEXT to add or remove visual styles for the user
      $nextPage.setAttribute('disabled',true);
      $nextPage.classList.remove('hover:bg-indigo-400','hover:text-white');
    }else{
      $nextPage.removeAttribute('disabled');
      $nextPage.classList.add('hover:bg-indigo-400','hover:text-white');
    }
    
    $pagesContainer.innerHTML = '';
    for (let i = 1; i <= nroPages; i++) {
      const bg = currentPage === i ? 'bg-indigo-300' : 'bg-gray-300';   
      $pagesContainer.innerHTML += `
      <button onclick="getProduct(${i})" class="flex items-center px-4 py-2 text-gray-500 ${bg} rounded-md hover:bg-indigo-400 hover:text-white">
        ${i}
      </button>
        `
    }

}

/** * Function that performs the product search according to the TEXT entered by the user 
* @param {*} value Text/search parameter entered by the user 
*/
function searchParams() {
  let valor = $txtBuscador.value.trim(); // Text search
  if (valor !== '' || valor === ' ') { // If the text is not null we perform the search
    searchOption = valor; // Assign value to global variables 
  } else { 
    searchOption = undefined; 
    // getProduct(currentPageOption);
    // changeCategory();
    
  }
  getProduct(currentPageOption); // Call to API
}

/**
 * Function that shows/hides the loader in the HTML DOM
 * @param {Boolean} status Boolean parameter to indicate the visibility of the loader
 */
function loader(status){
  console.log("🚀 ~ file: index.js ~ line 219 ~ loader ~ status", status)
  if(status){ // Show loader
    $productsContainer.classList.add('hidden');
    $loaderButton.classList.remove('hidden');
    $pagination.classList.add('hidden');
  }else{ // Hide loader
    $productsContainer.classList.remove('hidden');
    $loaderButton.classList.add('hidden');
    $pagination.classList.remove('hidden');
  }
}

/**
* Function that capitalizes the first letter of some entered text
* @param {*} str String or text to capitalize
* @returns Returns the String or entered text capitalized only by the first letter
*/
const capitalizeFirsLetter = (str) =>  str.charAt(0).toUpperCase() + str.slice(1); 

$cbxOrder.addEventListener('change', () =>{ orderProductByPrice(); }); // Assign order by price function
$prevPage.addEventListener('click',() => { getProduct(prevPageOption) }); // Assign the 'prevPage' parameter to the API call
$nextPage.addEventListener('click',() => { getProduct(nextPageOption) }); // Assign the 'nextPage' parameter to the API call
$txtBuscador.addEventListener('keyup', (e) => { if(e.keyCode === 13){ searchParams(); } }); // Validate if the user has pressed ENTER to perform the search