// Función para borrar los datos
function borrarDatos() {
    const campos = document.querySelectorAll("input, select");
    for (const campo of campos) {
        campo.value = "";
    }
}

// Función para validar el formulario
function validarFormulario() {
    if (!this.checkValidity()) {
        this.reportValidity();
    }
}

// Función para abrir el PDF
function verPDF() {
    var rutaPDF = "./cv.pdf";
    alert("El CV en formato PDF se abrirá en una nueva ventana.");
    window.open(rutaPDF, "_blank");
}

// Función para cambiar el estilo
function cambiarEstilo() {
    document.body.className = this.value;
    const columnas = document.querySelectorAll('.columna-izquierda, .columna-derecha');
    for (const columna of columnas) {
        columna.style.backgroundColor = getComputedStyle(document.body).backgroundColor;
    }
}

// Evento DOMContentLoaded
document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('selectorEstilo').addEventListener('change', cambiarEstilo);
});
