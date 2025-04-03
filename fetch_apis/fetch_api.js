const te = document.querySelector("#fact");
const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";
const button = document.querySelector("#fact_btn");

const fetch_api = async () => {
    try {
        let response = await fetch(URL);
        let final_answer = await response.json();
        
        console.log(final_answer);  // Check API response
        
        if (final_answer.drinks && final_answer.drinks.length > 0) {
            te.innerText = final_answer.drinks[0].strInstructions; // Corrected access
        } else {
            te.innerText = "No instructions found.";
        }
    } catch (error) {
        console.error("Error fetching data:", error);
        te.innerText = "Failed to fetch data.";
    }
};

button.addEventListener("click", fetch_api);
