
function display(){

    //Creo los elementos

    let input$$ = document.getElementById('input')
    let li = document.createElement('li')  
    let btn= document.createElement("button")

    //Darle cualidades

    btn.innerText= "X"
    btn.classList.add("kit");
    li.innerText = input$$.value 

    //Hijos 

    list.appendChild(li) 
    list.appendChild(btn)
    
    //eliminar
    
    btn.addEventListener("click", () => {

    const selectlis = document.querySelector("li");
    
    selectlis[selectliss.length - 1].remove();});
    
}  
