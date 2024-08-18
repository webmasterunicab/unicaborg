import toastr from "toastr";
import "../../styles/personalizados/unicabNotificaciones.scss";

// para llamar la clase para llamar las notificaciones se usa de la siguente manera
//      notificacion._iniciar("Error","MENSAJE Error");
//      notificacion._iniciar("Exito","MENSAJE EXITO");
//      notificacion._iniciar("Alerta","MENSAJE Alerta");
//      notificacion._iniciar("Informacion","MENSAJE Informacion");

export default class primaxNotificaciones {

  _iniciar(tipoMensaje, mensaje) {
    this.mensaje = mensaje;
    this.tipoMensaje = tipoMensaje;
    this._asignarMensaje();
  }

  _asignarMensaje() {
    switch (this.tipoMensaje) {
      case "Exito":
        this._mostrarMensajeExito();
        break;
      case "ExitoDatos":
        this._mostrarMensajeExitoDatos();
        break;
      case "Error":
        this._mostrarMensajeError();
        break;
      case "Alerta":
        this._mostrarMensajeAlerta();
        break;
      case "Informacion":
        this._mostrarMensajeInformacion();
        break;
      default:
        this._mostrarMensajeError();
    }
  }

  _mostrarMensajeExito() {
    toastr.options = {
      closeButton: true,
      progressBar: true,
      positionClass: "toast-bottom-center",
      timeOut: 5000,
    };
    toastr.success(this.mensaje, "Correcto");
  }

  _mostrarMensajeExitoDatos() {
    toastr.options = {
      closeButton: true,
      progressBar: true,
      positionClass: "toast-bottom-center",
      timeOut: 0,
    };
    toastr.success(this.mensaje, "Correcto");
  }

  _mostrarMensajeError() {
    toastr.options = {
      closeButton: true,
      progressBar: true,
      positionClass: "toast-bottom-center",
      timeOut: 0,
    };
    toastr.error(this.mensaje, "Error");
  }

  _mostrarMensajeInformacion() {
    toastr.options = {
      closeButton: true,
      progressBar: true,
      positionClass: "toast-bottom-center",
      timeOut: 5000,
    };
    toastr.info(this.mensaje, "Información");
  }

  _mostrarMensajeAlerta() {
    toastr.options = {
      closeButton: true,
      progressBar: true,
      positionClass: "toast-bottom-center",
      timeOut: 4000,
    };
    toastr.warning(this.mensaje, "Alerta");
  }
}
