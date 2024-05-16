
function loguear()
{
    let user=document.getElementById("usuario").value;
    let pass=document.getElementById("Input").value;
    
    if(user=="mi_niña" && pass=="13052023")
        {
            window.location="./galeriadefotos-master/galeria.html";
        }

    else
    {
        alert("Datos incorrectos");
    }

    
}
