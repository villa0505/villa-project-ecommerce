
const createnew_dialog = document.querySelector(".display_dialog")

const Card_containers  = document.querySelector("Card_container");

function hide(element){
    element.style.display = "none";
}
function show(element){
    element.style.display = "block";
}
function hideDialog(){
    hide(createnew_dialog);
    
}
function hideCancel(){
    hide(createnew_dialog);
}

//================create_Card=================
let productnew = [
    // {
    //     imgs:"../img/T1.jpg", nameProduct: "black T-shirt", price: "125$"
    // },
    // {
    //     imgs:"../img/T2.jpg", nameProduct: "T-shirt sweet", price: "200$"
    // },
    // {
    //     imgs:"../img/T3v.jpg", nameProduct: "T-shirt boss", price: "135$"
    // },
    // {
    //     imgs:"../img/T4.jpg", nameProduct: "Shoes", price: "100$"
    // },
    // {
    //     imgs:"../img/T5.jpg", nameProduct: "Shorts", price: "500$"
    // },
    // {
    //     imgs:"../img/T6.jpg", nameProduct: "Watches", price: "1125$"
    // },
    // {
    //     imgs:"../img/T7.jpg", nameProduct: "Belt", price: "200$"
    // },
    // {
    //     imgs:"../img/T8.jpg", nameProduct: "Bage Cute", price: "50$"
    // }
]

function savePorduct() {
    localStorage.setItem("productnew",JSON.stringify(productnew));
}
//====for save data in the locolstoreg===
function loadProduct(){
    let productnewStorage = JSON.parse(localStorage.getItem("productnew"));
    if (productnewStorage !== null){
        productnew = productnewStorage;
    }
    else{
        savePorduct()
    }
}


let container_card = document.querySelector(".Card_container");
function CardProduct(){
    for ( value = 0; value< productnew.length; value++){
        
        let div1 = document.createElement("div");
        div1.className = "Shirt";
        div1.dataset.index = value


        container_card.appendChild(div1)
        
        let div2 = document.createElement("div");
        div2.className = "T-shirt";
        div1.appendChild(div2);
        
        let imgs = document.createElement("img");
        imgs.src = productnew[value].img;
        div2.appendChild(imgs)

        let div3 = document.createElement("div");
        div3.className = "product_name";
        div3.textContent = productnew[value].name
        div1.appendChild(div3)
        
    
        let div4 = document.createElement("div");
        div4.className = "value";
        div4.textContent = productnew[value].price + " $";
        div1.appendChild(div4)

        let div5 = document.createElement("div");
        div5.className = "product-btn";
        div1.appendChild(div5)

        let button = document.createElement("button");
        button.className = "buy";
        button.textContent = "Details";
    
        div5.appendChild(button);

        button.addEventListener("click", buy)
    }
    savePorduct()
}
// let productnewStorage = JSON.parse(localStorage.getItem("productnew"));

let Card_dialog = document.querySelector(".display_dialog");
function buy(event){
    show(Card_dialog);
    let olddialog = document.createElement("dialog");
    olddialog.remove();

    let dialog = document.createElement("dialog") ;
    dialog.open = true;
    dialog.className = "dialog_alert"
    let index = event.target.parentElement.parentElement.dataset.index;
    Card_dialog.appendChild(dialog);
    console.log(index)
    if (index){
        
        let lists = document.createElement("div");
        lists.className = "lists";
        dialog.appendChild(lists);
        
        let wel_come = document.createElement("div");
        wel_come.className = "Wel_come";
        lists.appendChild(wel_come);

        let h2 = document.createElement("h2");
        wel_come.appendChild(h2);
        h2.textContent = "Welcome to BlackPink_Shop";
        
        let add_imgproduct = document.createElement("div");
        add_imgproduct.className = "add_imgproduct";
        lists.appendChild(add_imgproduct);
        
        let detil_img = document.createElement("div");
        detil_img.className = "detil_img";
        add_imgproduct.appendChild(detil_img);
        
        let stor_img = document.createElement("img");
        stor_img.src = productnew[index].img;
        detil_img.appendChild(stor_img);
        
        let value_pro = document.createElement("div");
        value_pro.className = "value_pro";
        add_imgproduct.appendChild(value_pro);

        let New = document.createElement("div");
        New.className = "New";
        value_pro.appendChild(New);
        
        let h3 = document.createElement("h3");
        New.appendChild(h3);
        h3.textContent = "Wow New Product!";
        
        let name_product = document.createElement("div");
        name_product.className = "name_product" ;
        value_pro.appendChild(name_product);
        
        let p1 = document.createElement("p");
        name_product.appendChild(p1);
        p1.textContent = "Product: "+productnew[index].name;
        
        let price_product = document.createElement("div");
        price_product.className = "price_product";
        value_pro.appendChild(price_product);

        let p2 = document.createElement("p");
        price_product.appendChild(p2);
        p2.textContent = "Price: " +productnew[index].price +"$";

        let position_product = document.createElement("div");
        position_product.className = "position_product";
        value_pro.appendChild(position_product);

        let p3 = document.createElement("p");
        position_product.appendChild(p3);
        p3.textContent = "Position: Phonm Phen"

        let p4 = document.createElement("p");
        value_pro.appendChild(p4);
        p4.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,!.. "
        let star = 5 ;
        for (let i=0; i<star; i++){
            let stars = document.createElement("i");
            stars.className = "fa fa-star";
            p4.appendChild(stars);
           
        }

        let btn_costomer = document.createElement("div");
        btn_costomer.className = "btn_costomer";
        value_pro.appendChild(btn_costomer);

        let button = document.createElement("button");
        btn_costomer.appendChild(button);
        button.textContent = "Cancel";
        button.addEventListener("click", hideCancel);

        let buynow = document.createElement("div");
        buynow.className = "buynow";
        btn_costomer.appendChild(buynow);

        let button1 = document.createElement("button");
        buynow.appendChild(button1);
        button1.textContent = "Buy Now";
        button1.addEventListener("click", hideDialog);

    }
    console.log(dialog)
    savePorduct()
}

// --------searc_button-------------
function search_cloths(){
    let input = document.getElementById("searchbar").value;
    input = input.toLowerCase();
    let T_product = document.getElementsByClassName("Shirt");
    console.log(T_product);

    for (index = 0; index < T_product.length; index++){
        if (!T_product[index].innerHTML.toLowerCase().includes(input)){
            T_product[index].style.display = "none";
        }else {
            T_product[index].style.display = ""
        }
    }
}

loadProduct()
// savePorduct()
// display_dialog()
CardProduct()
