function Ocultar()
{
       document.getElementById("Ocultar").style.display="block";  
       document.getElementById("Mostrar").style.display="none";  
}


function Mostrar()
{
       document.getElementById("Mostrar").style.display="block";   
       document.getElementById("Ocultar").style.display="none"; 
}



function Sumar()
{
       num1 = document.getElementById("Número 01").value;
       num2 = document.getElementById("Número 02").value;
       if (num1 =="" || num2 == "")
       { 
               alert ("Rellenar ambas Celdas");
       } else {
               document.getElementById("Resultado:").innerHTML = parseFloat(num1) + parseFloat(num2);
       }
}

function Restar() 
{ 
       num1 = document.getElementById("Número 01").value;
       num2 = document.getElementById("Número 02").value;
       if (num1 =="" || num2 == "")
       { 
               alert ("Rellenar ambas Celdas");
       } else {
               document.getElementById("Resultado:").innerHTML = num1 - num2;
       }
}

function Multiplicar() 
{ 
       num1 = document.getElementById("Número 01").value;
       num2 = document.getElementById("Número 02").value;
       if (num1 =="" || num2 == "")
       { 
               alert ("Rellenar ambas Celdas");
       } else {
               document.getElementById("Resultado:").innerHTML = num1 * num2;
       }
}

function Limpiar() {

        document.getElementById("Número 01").value = "";
        document.getElementById("Número 02").value = "";
   }
