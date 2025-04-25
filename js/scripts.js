//Capturo mis botones de mi aside de navegación.
const btnFinalProject = document.getElementById("btnFinalProject");
const btnLogin = document.getElementById("btnLogIn");
const btnCards = document.getElementById("btnCards");

//Articulo mis Eventos de navegacion, creando dinamismo en la etiqueta main; Tipo formato Single Page Application.
const main = document.querySelector(".main");

//Evento click de mi boton 'Proyecto final' (Consigna del trabajo).
btnFinalProject.addEventListener("click", () => {
    const assignment = main.innerHTML = `
    <h2>Proyecto Final: Simulador interactivo en JavaScript</h2>
    <section class='main--assignment'>
        <section class='card'>
            <article>
                <h5>Objetivos generales:</h5>
                <ul>
                    <li>Crear un simulador interactivo.</li>
                    <li>Puede ser un Ecommerce, Cotizador de productos/servicios, Simulador de Home banking con
                        transacciones, Convertidor de monedas/criptomonedas, entre otros.</li>
                </ul>
                <h5>Objetivos específicos:</h5>
                <ul>
                    <li>Utilizar datos remotos (o simularlos con JSON).</li>
                    <li>HTML interactivo (generado desde JS).</li>
                    <li>Uso de las herramientas más importantes de JS, y librerías externas.</li>
                    <li>Tiene que ser 100% funcional y con la lógica de negocio de tu proyecto elegido (Ejemplo: si
                        creas un Ecommerce, simula el proceso completo de compra).</li>
                </ul>
                <h5>Se debe entregar:</h5>
                <ul>
                    <li>Proyecto HTML + CSS + JS funcional.</li>
                </ul>
                <h5>Formato</h5>
                <ul>
                    <li>Archivo en formato .ZIP (NO en formato RAR).</li>
                    <li>Link a subcarpeta de GDrive.</li>
                    <li>Link a repositorio de Github (el preferido).</li>
                    <li>Debe tener el nombre “ProyectoFinal+Apellido”.</li>
                </ul>
                <h5>Sugerencias</h5>
                <ul>
                    <li>Elimina console.log y derivados.</li>
                    <li>Reemplaza alert, prompt, confirm por una librería JS.</li>
                    <li>Si incluyes formularios a completar,
                        precarga datos en los campos.</li>
                </ul>
            </article>
        </section>

        <section class='card'>
            <h3>Criterios de evaluación</h3>
            <article>
                <h4>Funcionalidad</h4>
                <p>Se simula uno o más flujo de trabajo en trmino de entrada-procesamiento-salida y no se advierten
                    errores de cómputo.</p>
            </article>
            <article>
                <h4>Interactividad</h4>
                <p>Se capturan entradas empleando inputs y eventos adecuados. Las salidas son coherentes en relación a
                    los datos ingresados y se visualizan en el HTML de forma asíncrona.</p>
            </article>
            <article>
                <h4>Escalabilidad</h4>
                <p>Se declaran funciones con parámetros para definir instrucciones con una tarea específica. Se definen
                    objetos con propiedades y métodos relevantes al contexto. Se emplean arrays para agrupar valores y
                    objetos de forma dinámica. El recorrido de las colecciones es óptimo.</p>
            </article>
            <article>
                <h4>Integridad</h4>
                <p>Se definen el código JavaScript en un archivo .js, referenciándolo correctamente desde el HTML. La
                    información estática en formato JSON se utiliza adecuadamente, cargandose de forma asíncrona.</p>
            </article>
            <article>
                <h4>Legibilidad</h4>
                <p>Los nombres de variables. funciones y objetos son significativos para el contexto, las instrucciones
                    se escriben de forma legible y se emplean comentarios oportunos. El código fuente es ordenado en
                    términos de declaración y secuencia.</p>
            </article>
        </section>
    </section>`;
    
        return assignment;
})


//Evento click de mi boton 'LogIn'.
btnLogin.addEventListener("click", () => {
    const form = main.innerHTML = `<!-- From Uiverse.io by Yaya12085 -->
        <form class="form">
            <p class="title">Register </p>
            <p class="message">Signup now and get full access to our app. </p>
            <div class="flex">
                <label>
                    <input required="" placeholder="" type="text" class="input">
                    <span>Name</span>
                </label>

                <label>
                    <input required="" placeholder="" type="text" class="input">
                    <span>LastName</span>
                </label>
            </div>

            <label>
                <input required="" placeholder="" type="email" class="input">
                <span>Email</span>
            </label>

            <label>
                <input required="" placeholder="" type="password" class="input">
                <span>Password</span>
            </label>
            <label>
                <input required="" placeholder="" type="password" class="input">
                <span>Confirm password</span>
            </label>
            <button class="submit">Submit</button>
            <p class="signin">Already have an acount ? <a href="#">Signin</a> </p>
        </form>`;
    return form;
})


//Evento click de mi boton 'Cards'.
btnCards.addEventListener("click", () => {
    const container = main.innerHTML = `<p>Hola, este es el apartado de Tarjetas</p>`;
})


//Capturo boton toggle para darle estilo a mi website.
const btnToggle = document.getElementById("btnToggler");
const body = document.getElementById("finalProject--grid");

// Verifico si hay un tema guardado en localStorage al cargar la página
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
    body.classList.add(savedTheme);
} else {
    // Si no hay tema guardado, aplico uno por defecto
    body.classList.add("dc-theme");
}

// Evento para alternar tema y guardar en localStorage
btnToggle.addEventListener("click", () => {
    if (body.classList.contains("dc-theme")) {
        body.classList.remove("dc-theme");
        body.classList.add("marvel-theme");
        localStorage.setItem("theme", "marvel-theme");
    } else {
        body.classList.remove("marvel-theme");
        body.classList.add("dc-theme");
        localStorage.setItem("theme", "dc-theme");
    }
})




