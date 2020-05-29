<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" type="text/css" href="./css/popup.css">
</head>
    <body>

    	<div class="overlay" id="overlay">
            <div class = "popup" id = "popup">
                <h1 class = nuevo>NUEVO ACCESOWEB</h1>
                
                <p>Introducir DNI del alumno al que se quiera asignar el nuevo accesoWeb.</p>
                <p>¡Para alumnos a los que les haya caducado el acceso o bien nunca se les fuese asignado!</p>
                
                <form action="?controller=WebTest&action=enviar" class="form-container" method = "post">

                    <div class = "inputText">
                        <label for="titulo"><b>DNI</b></label>
                        <input type="text" placeholder="DNI" name="dni" pattern="[0-9]{8}[A-Z]{1}" required>
                    </div>

                    <div class = "botones">
                        <button type="button" class="volver" id='closePopup'> < Volver</button>
                        <button type="submit" class="enviar">Añadir</button>
                    </div>

                </form>

            </div>
             
        </div>

    </body>
</html>