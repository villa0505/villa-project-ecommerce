
const create_product = document.querySelector(".create_product");
const table_container = document.querySelector("table");
const newcreate =document.querySelector(".newcreate");
const newedit = document.querySelector(".newedit");

let productnew = [
    {
        imgs:"../img/T1.jpg", nameProduct: "black T-shirt", price: "125$"
    },
    {
        imgs:"../img/T2.jpg", nameProduct: "T-shirt sweet", price: "200$"
    },
    {
        imgs:"../img/T3v.jpg", nameProduct: "T-shirt boss", price: "135$"
    },
    {
        imgs:"../img/T4.jpg", nameProduct: "Shoes", price: "100$"
    },
    {
        imgs:"../img/T5.jpg", nameProduct: "Shorts", price: "500$"
    },
    {
        imgs:"../img/T6.jpg", nameProduct: "Watches", price: "1125$"
    },
    {
        imgs:"../img/T7.jpg", nameProduct: "Belt", price: "200$"
    },
    {
        imgs:"../img/T8.jpg", nameProduct: "Bage Cute", price: "50$"
    }
]

function hide(element){
    element.style.display = "none";
}

function show(element){
    element.style.display = "block";
}
hide(create_product)

function add(){

//-------make it for clear_data----    
    clearProdutce()
//----------//--------------------
    show(create_product)

//------make it for edit_product---
    index = null
//--------------------------------
}
function cancel(){
    hide(create_product)
}
//Create table ======================//======================
function reanderProduct(){
    let make_title = document.querySelector(".tbody");
    make_title.remove();
    make_title = document.createElement("tbody");
    make_title.className = "tbody"
    table_container.appendChild(make_title);
   
    for (let index = 0; index < productnew.length; index++){

        let tr = document.createElement("tr");

        //dataset for remove
        tr.dataset.index =index
        
        make_title.appendChild(tr);

        let td_one = document.createElement("td");
        
        // td_one.textContent = productnew[index].img;

        tr.appendChild(td_one);
        
       
        let imgs = document.createElement("img");
        imgs.src = productnew[index].img;
        td_one.appendChild(imgs)
        
       let addimge = document.createElement("div");
       addimge.className = "add_img";
       addimge.appendChild(imgs)
       td_one.appendChild(addimge)
       

        let td_two = document.createElement("td");
        td_two.textContent = productnew[index].name;
        tr.appendChild(td_two);

        let td_Three = document.createElement("td");
        td_Three.textContent = productnew[index].price + " $";
        tr.appendChild(td_Three);

        let td_four = document.createElement("td");
        td_four.textContent = productnew[index].action;
        tr.appendChild(td_four);
        

        let make_edit = document.createElement("button");
        make_edit.className = "edit";
        make_edit.textContent = "edit";
        td_four.appendChild(make_edit);
        //for edit
        make_edit.addEventListener("click", editProduct);
        
        let make_delete = document.createElement("button");
        make_delete.className = "delete";
        make_delete.textContent = "delete";
        td_four.appendChild(make_delete);

        // for remove
        make_delete.addEventListener("click", removeProduct);
    } 
    savePorduct()
}
//======For setData in to the broswer====
function savePorduct() {
    localStorage.setItem("productnew",JSON.stringify(productnew));
}
//====for save data in the locolstoreg===
function loadProduct(){
    let productsStorage = JSON.parse(localStorage.getItem("productnew"));
    if (productsStorage !== null){
        productnew = productsStorage;
    }
    else{
        savePorduct()
    }
}
//=====Create it for Create_product and Edit==//======
let index = 0
function Oncreate(){
    hide(create_product);
    if (index !== null ){ 
        productnew[index].img=document.querySelector("#chose_img").value
        productnew[index].name= document.querySelector("#chose_name").value 
        productnew[index].price= document.querySelector("#chose_price").value 
    }else{
        let newproduct = {}; 
        newproduct.img = document.querySelector("#chose_img").value;
        newproduct.name = document.querySelector("#chose_name").value;
        newproduct.price = document.querySelector("#chose_price").value;
        productnew.unshift(newproduct);
    }
    Create_Edit.textContent = "Create";
    savePorduct()
    reanderProduct()
}
//-----------------------------------------------------
//Create for edit_product===//===
function editProduct(event){
    show(create_product)
    index = event.target.parentElement.parentElement.dataset.index;

    document.querySelector("#chose_img").value = productnew[index].img;
    document.querySelector("#chose_name").value = productnew[index].name;
    document.querySelector("#chose_price").value = productnew[index].price;

    Create_Edit.textContent = "Edit";
    savePorduct();
}
///Create for Delete_product -------------------------

function removeProduct(event) {
    let index = event.target.parentElement.parentElement.dataset.index;
    let text = "Do you really want to delete it?";
    if (confirm(text) == true){
        productnew.splice(index, 1);
    }
    savePorduct();
    reanderProduct();
  }
//Create it for clear_data_product when input---------
function clearProdutce(){
    document.querySelector("#chose_img").value = "";
    document.querySelector("#chose_name").value = "";
    document.querySelector("#chose_price").value = "";
}
// savePorduct()
loadProduct()
reanderProduct()