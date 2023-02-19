var AllProducts= document.querySelectorAll(".parent2 div")
var div1 = document.querySelector(".content")
var btn1 = document.querySelector("#btn1")
var price =document.querySelector("totalprice")
var totalPrice = 0;
AllProducts.forEach(function(item)
{
    item.onclick=function()
    {
        totalPrice +=   parseInt (item.getAttribute ("price"))
        div1.innerHTML +=item.textContent + "   / "

        if (div1.innerHTML != ""){
                         btn1.style.display = "block";
                         
                     }
    }
}
)
btn1.onclick = function () {
         console.log("$"+totalPrice)
        document.getElementById("totalprice").innerHTML= "Total Price is"+" /"+"$"+totalPrice

     }
     $(document).ready(function()
     {
        $('[data-toggle="tooltip"]'.tooltip())
     }
     )