    
    let bResumen = document.getElementById("btnResumen");
    let canTickets = document.getElementById("inputCantidad");
    let categoria = document.getElementById("inputCategoria");
    let pCostoTotal = document.getElementById("totalPagar");


    function calcularCosto(e){
            e.preventDefault();
            pCostoTotal.innerHTML = "Total a Pagar : $ "
            let valTicket = 0;
            let ticketDescuento = 0;

        if(canTickets.value > 0){
                          valTicket = 200 * (canTickets.value);
        }else{
                 console.log(" INGRESE ALGO MAYOR QUE CERO ");
        }
        if( categoria.value == 1){
                    valTicket = valTicket - (valTicket * 0.80);
        }else if( categoria.value == 2){    
                    valTicket = valTicket - (valTicket * 0.50);
        }else{
                    valTicket = valTicket - (valTicket * 0.15);
             }
                    pCostoTotal.innerHTML = pCostoTotal.innerHTML + `${valTicket}`;
    
    }


    bResumen.onclick = calcularCosto;

////////////////////////////////////////////////////////////////////////////////////////////////////////////
    let btnBorrar = document.getElementById("btnResetear");

    function resetearCosto(a){
        a.preventDefault();
        pCostoTotal.innerHTML = "Total a Pagar : $ "; 
        canTickets.value = " ";
        categoria.value = 1;

    }


    btnBorrar.onclick = resetearCosto;


    


