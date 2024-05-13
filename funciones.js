
$(document).ready(function () {
    $('#btnEnviar').click(function () {
        // Get the value of the Rut field
        var rutValue = $('#txtRut').val().trim();

        // Perform validation
        if (rutValue === '') {
            // Rut field is empty, show error message or take appropriate action
            alert('Por favor, ingrese su Rut.');
            return false; // Prevent form submission
        } else if (rutValue.length < 9 || rutValue.length > 10) {
            // Rut field does not have between 9 and 10 characters
            alert('El Rut debe tener entre 9 y 10 caracteres.');
            return false; // Prevent form submission
        } else {
            // Rut field is valid
            console.log('Rut:', rutValue);
            // Proceed with form submission or other actions
        }
    });
});



$(document).ready(function () {
    $('#btnEnviar').click(function () {
        // Get the value of the Nombre field
        var nombreValue = $('#txtNombre').val().trim();

        // Perform validation
        if (nombreValue === '') {
            // Nombre field is empty, show error message or take appropriate action
            alert('Por favor, ingrese su nombre.');
            return false; // Prevent form submission
        } else if (nombreValue.length < 3 || nombreValue.length > 20) {
            // Nombre field does not have between 3 and 20 characters
            alert('El nombre debe tener entre 3 y 20 caracteres.');
            return false; // Prevent form submission
        } else {
            // Nombre field is valid
            console.log('Nombre:', nombreValue);
            // Proceed with form submission or other actions
        }
    });
});


$(document).ready(function () {
    $('#btnEnviar').click(function () {
        // Get the value of the Apellido Paterno field
        var AppaternoValue = $('#txtAppaterno').val().trim();

        // Perform validation
        if (AppaternoValue === '') {
            // Apellido Paterno field is empty, show error message or take appropriate action
            alert('Por favor, ingrese su apellido paterno.');
            return false; // Prevent form submission
        } else if (AppaternoValue.length < 3 || AppaternoValue.length > 20) {
            // Apellido Paterno field does not have between 3 and 20 characters
            alert('El apellido paterno debe tener entre 3 y 20 caracteres.');
            return false; // Prevent form submission
        } else {
            // Apellido Paterno field is valid
            console.log('Apellido Paterno:', AppaternoValue);
            // Proceed with form submission or other actions
        }
    });
});


$(document).ready(function () {
    $('#btnEnviar').click(function () {
        // Get the value of the Nombre field
        var maternoValue = $('#txtApmaterno').val().trim();

        // Perform validation
        if (maternoValue === '') {
            // Nombre field is empty, show error message or take appropriate action
            alert('Por favor, ingrese su apellido materno.');
            return false; // Prevent form submission
        } else if (maternoValue.length < 3 || maternoValue.length > 20) {
            // Nombre field does not have between 3 and 20 characters
            alert('Su apellido materno debe tener entre 3 y 20 caracteres.');
            return false; // Prevent form submission
        } else {
            // Nombre field is valid
            console.log('Apmaterno:', maternoValue);
            // Proceed with form submission or other actions
        }
    });
});



$(document).ready(function () {
    $('#btnEnviar').click(function () {
        // Get the value of the Edad field
        var edadValue = parseInt($('#txtEdad').val().trim());

        // Perform validation
        if (isNaN(edadValue)) {
            // Edad field is not a number, show error message or take appropriate action
            alert('Por favor, ingrese una edad válida.');
            return false; // Prevent form submission
        } else if (edadValue < 18 || edadValue > 35) {
            // Edad is not within the specified range
            alert('La edad debe estar entre 18 y 35 años.');
            return false; // Prevent form submission
        } else {
            // Edad field is valid
            console.log('Edad:', edadValue);
            // Proceed with form submission or other actions
        }
    });
});


$(document).ready(function () {
    $('#btnEnviar').click(function () {
        // Get the value of the selected option for optGenero
        var generoValue = $('input[name=optGenero]:checked').val();

        // Perform validation
        if (typeof generoValue === 'undefined') {
            // No option is selected, show error message or take appropriate action
            alert('Por favor, seleccione una opción de género.');
            return false; // Prevent form submission
        } else {
            // One option is selected
            console.log('Género seleccionado:', generoValue);
            // Proceed with form submission or other actions
        }
    });
});




$(document).ready(function () {
    $('#btnEnviar').click(function () {
        // Get the value of the Teléfono field
        var telefonoValue = $('#txtTelefono').val().trim();

        // Perform validation
        if (telefonoValue === '') {
            // Teléfono field is empty, show error message or take appropriate action
            alert('Por favor, ingrese su número de teléfono.');
            return false; // Prevent form submission
        } else if (telefonoValue.length < 9 || telefonoValue.length > 12) {
            // Teléfono field does not have between 9 and 12 characters
            alert('El número de teléfono debe tener entre 9 y 12 caracteres.');
            return false; // Prevent form submission
        } else {
            // Teléfono field is valid
            console.log('Teléfono:', telefonoValue);
            // Proceed with form submission or other actions
        }
    });
});
