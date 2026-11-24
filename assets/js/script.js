// Reference all buttons 
let btns = document.getElementsByClassName("card-recipe");

// Reference all recipe containers
let recipes = document.getElementsByClassName("recipe")

console.log(btns)

for(let btn of btns){
    btn.addEventListener("click", () => {
        // 1 -> hide all recipes
        for(let recipe of recipes){
            recipe.style.display="none"
        }

        // 2 Display only the target recipe
        // Get the data Target
        let target = btn.dataset.target;
        
        document.getElementById(target).style.display = "block";
    })
}