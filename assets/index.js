
let input_value = document.getElementById("input-value");
let btn = document.getElementById("btn");
let res_dice = document.getElementById("res-dice");
let image_container = document.getElementById("image-container");
let total = document.getElementById("total");

function action(){
    iv = input_value.value;
    res_dice.textContent =`Random Dices Rolled: ${iv}`;
    
    values = [];
    images = [];
    for(i=1;i<=iv;i++){
        rand = Math.floor(Math.random() *6)+1;
        values.push(rand);
        images.push(`<img src='./dice_images/dice${rand}.svg'>`);
        
    }
    sum =0;
    for (num of values){
        sum+=num;
    }
    total.textContent = `Total: ${sum}`;
    image_container.innerHTML = images.join(" ");

}