menu_list_array=[
"Chicken Tandori Pizza",
"Veg Supreme Pizza",
"Paneer Tikka Pizza",
"Duluxe Vegetable Pizza",
"Veg Extravaganza Pizza"
];

function add_item(){
    var htmldata;
    var Item= document.getElementById("add_item").value;
    menu_list_array.push(Item);
    menu_list_array.sort();
    htmldata="<section class='cards'>";
    for (var i=0;i<menu_list_array.length;i++){
        htmldata=htmldata+'<div class="cards"'+'images/pizzaImg.png/>'+ menu_list_array[i] + '</div>'   
    }

    htmldata=htmldata + '</section>';

    document.getElementById("display_add_menu").innerHTML= htmldata;

}