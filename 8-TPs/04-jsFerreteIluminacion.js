/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" 
se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” 
se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, 
si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 175

 */
function CalcularPrecio () 
{
    Precio=35;
    var cantidad;
    var marcaLampara;
    var descuento;
    var importeFinal;
    var iibb;
    var precioDescuento;

    cantidad= parseInt(cantidad);
    marcaLampara=Marca.value;
    cantidad=txtIdCantidad.value;

    switch(cantidad)
    {
        case 1:
        case 2:
            descuento = 0;
        break;
        case 3:
            if(marca=="ArgentinaLuz")
            {
                descuento=15;
            }
            else
                if(marca=="FelipeLamparas")
                {
                    descuento=10;
                }
                else
                {
                    descuento=5;
                }
        break;
        case 4:
            if(marca=="ArgentinaLuz" || marca=="FelipeLamparas")
            {
                descuento=25;
            }
            else
            {
                descuento = 20;
            }
        break;
        case 5:
            if( marca== "ArgentinaLuz")
            {
                descuento = 40;
            }
            else
            {
                descuento=30;

            }

        break;
       default:
        descuento= 50;

    }

    precioDescuento=Precio - Precio*descuento/100;
    txtIdprecioDescuento.value= precioDescuento;
    importeFinal= precioDescuento * cantidad;
    if(importeFinal > 120)
    {
        iibb=importeFinal*10/100;
        importeFinal=importeFinal+iibb;

        alert("IIBB Usted pago : $"+importeFinal+"Y además pago $:" + iibb+"de ingresos brutos");
    }
    else
    {
        alert("Total a pagar : $ "+importeFinal);
    }






}








 /*

{
 	var cantidadLamparas;
    var Totalidad;
    var precioFinal;
    var precioDescuento1;
    var precioUnidad;
    var marcaLampara;
    var iibb
    var impuesto
    
    precioUnidad=35;
    marcaLampara=Marca.value;
    
    cantidadLamparas=parseInt(cantidadLamparas);
    cantidadLamparas=txtIdCantidad.value;
    precioFinal=(cantidadLamparas*precioUnidad);
    
    if(cantidadLamparas>5)
    {
        precioDescuento1=(precioFinal*0.5);
        Totalidad=precioFinal-precioDescuento1;
        txtIdprecioDescuento.value=Totalidad;
    }
    else
    {
        if(cantidadLamparas==5)
        {
            if(marcaLampara == "ArgentinaLuz")
            {
                precioDescuento1=(precioFinal*0.4);
                Totalidad=precioFinal-precioDescuento1;
                txtIdprecioDescuento.value=Totalidad;
            }
            else
            {
                precioDescuento1=(precioFinal*0.3);
                Totalidad=precioFinal-precioDescuento1;
                txtIdprecioDescuento.value=Totalidad;
            }
        }
        else
        { 
            if(cantidadLamparas==4)
            {
                if(marcaLampara=="ArgentinaLuz" || marcaLampara=="FelipeLamparas")
                {
                   precioDescuento1=(precioFinal*0.25);
                   Totalidad=precioFinal-precioDescuento1;
                   txtIdprecioDescuento.value=Totalidad;
                }
                else    
                {
                precioDescuento1=(precioFinal*0.2);
                Totalidad=precioFinal-precioDescuento1;
                txtIdprecioDescuento.value=Totalidad;
                }
            }
            else 
            {  
 
                if(cantidadLamparas==3 && marcaLampara=="ArgentinaLuz")
            {
                precioDescuento1=(precioFinal*0.15);
                Totalidad=precioFinal-precioDescuento1;
                txtIdprecioDescuento.value=Totalidad;
            }
                else{
                    if(marcaLampara=="FelipeLamparas")
                {
                    precioDescuento1=(precioFinal*0.10);
                    Totalidad=precioFinal-precioDescuento1;
                    txtIdprecioDescuento.value=Totalidad;
                }
                    else
                {
                    precioDescuento1=(precioFinal*0.05);
                    Totalidad=precioFinal-precioDescuento1;
                    txtIdprecioDescuento.value=Totalidad;
                }
            }
        }
    }

    }
    impuesto=Totalidad*0.1
 if(Totalidad>120)
    {Totalidad+impuesto
      alert("Usted pago "+impuesto+ " pesos de impuesto ");
      }



}

    
/*saca afuera 
 Totalidad=precioFinal-precioDescuento1;
                    txtIdprecioDescuento.value=Totalidad;*/
                