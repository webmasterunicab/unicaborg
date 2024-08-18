import unicabNotificaciones from "../personalizados/unicabNotificaciones.js";

let notificacion;
//let instanciaUnicabFormatoNumerico;
//let instanciaSelect2;
//let modalFormularioIdentificador;

$(function () {
    notificacion = new unicabNotificaciones();
    //instanciaUnicabFormatoNumerico = new unicabFormatoNumerico();
    //instanciaSelect2 = new primaxSelect2();
    //inicializarModal();
    /*setTimeout(function () {
        instanciaSelect2.InicializarSelects('#cbClienteCoesco');
        instanciaSelect2.InicializarSelects('#cboEstado');
    }, 0);*/

    ConsultarDatosCliente();
    
});

async function ConsultarDatosCliente() {
    /*$(buttonSend).attr('disabled', true);

    let datos = {
        "clienteCoesco": clienteCoesco
    };
    console.log(datos);*/

    notificacion._iniciar("Informacion", "Consultando datos del cliente...");
    
    /*const response = await fetch('/IdentificadoresCoesco/ConsultarDatosCliente', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    });

    const datosClienteRespuesta = await response.json();
    console.log(datosClienteRespuesta.resultado + " " + datosClienteRespuesta.mensaje);
    if (datosClienteRespuesta.resultado == 0) {
         notificacion._iniciar("Error", "Error al consultar datos cliente: " + datosClienteRespuesta.mensaje);
    }
    else {
        $("#divTablaDatosCliente").html(datosClienteRespuesta.tablaDatosCliente);
        InicializarTablaDatosClientes(200);
    }

    ConsultarContratoNoMarco(buttonSend, clienteCoesco, clienteSapFinal);*/    
}