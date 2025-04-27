// Capturo los botones de navegación
const btnFinalProject = document.getElementById("btnFinalProject");
const btnLogin = document.getElementById("btnLogIn");
const btnCards = document.getElementById("btnCards");

// Capturo el contenedor principal (main)
const main = document.querySelector(".main");

// Capturo el aside donde mostraré el perfil del usuario
const aside = document.querySelector(".aside");

// Capturo el botón y el body para cambiar de tema
const btnToggle = document.getElementById("btnToggler");
const body = document.getElementById("finalProject--grid");

// Carrito vacío
const shoppingCart = [];

// Contenedor de Tarjetas
const cardContainer = document.createElement("section");
cardContainer.id = "card__container";
cardContainer.style.display = "flex";
cardContainer.style.flexWrap = "wrap";
cardContainer.style.gap = "20px";
cardContainer.style.justifyContent = "center";
main.appendChild(cardContainer);

// Contenedor del Carrito
const cartContainer = document.createElement("div");
cartContainer.id = "cart__container";
cartContainer.style.marginTop = "40px";
cartContainer.style.padding = "20px";
cartContainer.style.borderTop = "2px solid #333";
main.appendChild(cartContainer);

// Tarjetas (array de objetos)
const cards = [
    {
        id: 1,
        character: "Captain America",
        universe: "Marvel",
        price: 20,
        edition: "Civil War",
        image: "images/marvel-civilWar/captainAmerica.png"
    },
    {
        id: 2,
        character: "Iron Man",
        universe: "Marvel",
        price: 20,
        edition: "Civil War",
        image: "images/marvel-civilWar/ironman.png"
    },
    {
        id: 3,
        character: "Spider-Man",
        universe: "Marvel",
        price: 20,
        edition: "Civil War",
        image: "images/marvel-civilWar/spiderman.png"
    },
    {
        id: 4,
        character: "Bucky Barnes",
        universe: "Marvel",
        price: 12,
        edition: "Civil War",
        image: "images/marvel-civilWar/buckyBarnes.png"
    },
    {
        id: 5,
        character: "Falcon",
        universe: "Marvel",
        price: 12,
        edition: "Civil War",
        image: "images/marvel-civilWar/falcon.png"
    },
    {
        id: 6,
        character: "Vision",
        universe: "Marvel",
        price: 12,
        edition: "Civil War",
        image: "images/marvel-civilWar/vision.png"
    },
    {
        id: 7,
        character: "Ant-Man",
        universe: "Marvel",
        price: 10,
        edition: "Civil War",
        image: "images/marvel-civilWar/antman.png"
    },
    {
        id: 8,
        character: "Black Panther",
        universe: "Marvel",
        price: 20,
        edition: "Civil War",
        image: "images/marvel-civilWar/blackPanther.png"
    },
    {
        id: 9,
        character: "Black Widow",
        universe: "Marvel",
        price: 20,
        edition: "Civil War",
        image: "images/marvel-civilWar/blackWidow.png"
    },
    {
        id: 10,
        character: "Hawkeye",
        universe: "Marvel",
        price: 10,
        edition: "Civil War",
        image: "images/marvel-civilWar/hawkeye.png"
    },
    {
        id: 11,
        character: "War Machine",
        universe: "Marvel",
        price: 8,
        edition: "Civil War",
        image: "images/marvel-civilWar/warMachine.png"
    },
    {
        id: 12,
        character: "Wanda Maximoff",
        universe: "Marvel",
        price: 15,
        edition: "Civil War",
        image: "images/marvel-civilWar/wanda.png"
    }
];


// Función para renderizar el Carrito
function renderCart() {
    cartContainer.innerHTML = `<img src="images/shoppingCart.png" alt="carrito de compras" style="width:50px;">`;

    if (shoppingCart.length === 0) {
        cartContainer.innerHTML += "<p>Carrito vacío</p>";
        return;
    }

    // Lista de productos en el carrito
    const list = document.createElement("ul");
    shoppingCart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.character} - ${item.edition} - $${item.price}`;
        list.appendChild(li);
    });

    cartContainer.appendChild(list);

    // Total del carrito
    const total = shoppingCart.reduce((sum, item) => sum + item.price, 0);
    const totalMsg = document.createElement("p");
    totalMsg.style.fontWeight = "bold";
    totalMsg.textContent = `Total: $${total}`;
    cartContainer.appendChild(totalMsg);

    // Botón de Comprar
    const buyButton = document.createElement("button");
    buyButton.textContent = "Comprar";
    buyButton.style.marginTop = "20px";
    buyButton.style.padding = "10px 20px";
    buyButton.style.backgroundColor = "#28a745";
    buyButton.style.color = "white";
    buyButton.style.border = "none";
    buyButton.style.borderRadius = "5px";
    buyButton.style.cursor = "pointer";

    buyButton.addEventListener("click", () => {
        if (shoppingCart.length === 0) {
            alert("El carrito está vacío. Agrega productos antes de comprar.");
            return;
        }

        alert("¡Compra realizada exitosamente!");
        shoppingCart.length = 0; // Vacío el carrito
        renderCart(); // Actualizo la vista del carrito
    });

    cartContainer.appendChild(buyButton);
}

// Función para renderizar las Tarjetas
function renderCards() {
    cardContainer.innerHTML = ""; // Limpio el contenedor antes de renderizar

    cards.forEach(card => {
        const cardDiv = document.createElement("div");
        cardDiv.className = "characterCard";
        cardDiv.style.border = "1px solid #ccc";
        cardDiv.style.borderRadius = "10px";
        cardDiv.style.padding = "15px";
        cardDiv.style.width = "200px";
        cardDiv.style.textAlign = "center";
        cardDiv.style.boxShadow = "0 2px 5px rgba(0,0,0,0.2)";

        //Imagen de la tarjeta
        const img = document.createElement("img");
        img.src = card.image;
        img.alt = card.character;
        img.style.width = "100%";
        img.style.borderRadius = "2rem";

        //Nombre del personaje
        const title = document.createElement("h3");
        title.textContent = card.character;

        //Universo
        const universe = document.createElement("p");
        universe.textContent = `Universo: ${card.universe}`;

        //Edición
        const edition = document.createElement("p");
        edition.textContent = `Edición: ${card.edition}`;

        //Precio
        const price = document.createElement("p");
        price.textContent = `Precio: $${card.price}`;

        // Botón para agregar al carrito
        const button = document.createElement("button");
        button.textContent = "Agregar al carrito";
        button.style.marginTop = "10px";

        button.addEventListener("click", () => {
            shoppingCart.push(card); // Agrego al carrito
            renderCart(); // Actualizo el carrito
        });

        // Armado de la tarjeta
        cardDiv.appendChild(img);
        cardDiv.appendChild(title);
        cardDiv.appendChild(universe);
        cardDiv.appendChild(edition);
        cardDiv.appendChild(price);
        cardDiv.appendChild(button);

        // Agrego la tarjeta al contenedor
        cardContainer.appendChild(cardDiv);
    });
}

// Mostrar carrito vacío al cargar la página
renderCart();


// Función para manejar el evento click del botón 'Proyecto Final'
btnFinalProject.addEventListener("click", () => {
    main.innerHTML = `
        <h2>Proyecto Final: Simulador interactivo en JavaScript</h2>
        <section class="main--assignment">
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
        </section>
    `;
});

// Función para manejar el evento click del botón 'LogIn'
btnLogin.addEventListener("click", () => {
    main.innerHTML = `
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
        </form>
    `;
});

// Función para manejar el evento click del botón 'Cards'
btnCards.addEventListener("click", () => {
    main.innerHTML = ""; // Limpiar el main antes

    main.appendChild(cardContainer);
    main.appendChild(cartContainer);

    renderCards();
    renderCart();
});

// Verificar tema guardado en localStorage
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
    body.classList.add(savedTheme);
} else {
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
});



























































































































































// //Capturo mis botones de mi aside de navegación.
// const btnFinalProject = document.getElementById("btnFinalProject");
// const btnLogin = document.getElementById("btnLogIn");
// const btnCards = document.getElementById("btnCards");

// //Articulo mis Eventos de navegacion, creando dinamismo en la etiqueta main; Tipo formato Single Page Application.
// const main = document.querySelector(".main");

// //Evento click de mi boton 'Proyecto final' (Consigna del trabajo).
// btnFinalProject.addEventListener("click", () => {
//     const assignment = main.innerHTML = `
//     <h2>Proyecto Final: Simulador interactivo en JavaScript</h2>
//     <section class='main--assignment'>
//         <section class='card'>
//             <article>
//                 <h5>Objetivos generales:</h5>
//                 <ul>
//                     <li>Crear un simulador interactivo.</li>
//                     <li>Puede ser un Ecommerce, Cotizador de productos/servicios, Simulador de Home banking con
//                         transacciones, Convertidor de monedas/criptomonedas, entre otros.</li>
//                 </ul>
//                 <h5>Objetivos específicos:</h5>
//                 <ul>
//                     <li>Utilizar datos remotos (o simularlos con JSON).</li>
//                     <li>HTML interactivo (generado desde JS).</li>
//                     <li>Uso de las herramientas más importantes de JS, y librerías externas.</li>
//                     <li>Tiene que ser 100% funcional y con la lógica de negocio de tu proyecto elegido (Ejemplo: si
//                         creas un Ecommerce, simula el proceso completo de compra).</li>
//                 </ul>
//                 <h5>Se debe entregar:</h5>
//                 <ul>
//                     <li>Proyecto HTML + CSS + JS funcional.</li>
//                 </ul>
//                 <h5>Formato</h5>
//                 <ul>
//                     <li>Archivo en formato .ZIP (NO en formato RAR).</li>
//                     <li>Link a subcarpeta de GDrive.</li>
//                     <li>Link a repositorio de Github (el preferido).</li>
//                     <li>Debe tener el nombre “ProyectoFinal+Apellido”.</li>
//                 </ul>
//                 <h5>Sugerencias</h5>
//                 <ul>
//                     <li>Elimina console.log y derivados.</li>
//                     <li>Reemplaza alert, prompt, confirm por una librería JS.</li>
//                     <li>Si incluyes formularios a completar,
//                         precarga datos en los campos.</li>
//                 </ul>
//             </article>
//         </section>

//         <section class='card'>
//             <h3>Criterios de evaluación</h3>
//             <article>
//                 <h4>Funcionalidad</h4>
//                 <p>Se simula uno o más flujo de trabajo en trmino de entrada-procesamiento-salida y no se advierten
//                     errores de cómputo.</p>
//             </article>
//             <article>
//                 <h4>Interactividad</h4>
//                 <p>Se capturan entradas empleando inputs y eventos adecuados. Las salidas son coherentes en relación a
//                     los datos ingresados y se visualizan en el HTML de forma asíncrona.</p>
//             </article>
//             <article>
//                 <h4>Escalabilidad</h4>
//                 <p>Se declaran funciones con parámetros para definir instrucciones con una tarea específica. Se definen
//                     objetos con propiedades y métodos relevantes al contexto. Se emplean arrays para agrupar valores y
//                     objetos de forma dinámica. El recorrido de las colecciones es óptimo.</p>
//             </article>
//             <article>
//                 <h4>Integridad</h4>
//                 <p>Se definen el código JavaScript en un archivo .js, referenciándolo correctamente desde el HTML. La
//                     información estática en formato JSON se utiliza adecuadamente, cargandose de forma asíncrona.</p>
//             </article>
//             <article>
//                 <h4>Legibilidad</h4>
//                 <p>Los nombres de variables. funciones y objetos son significativos para el contexto, las instrucciones
//                     se escriben de forma legible y se emplean comentarios oportunos. El código fuente es ordenado en
//                     términos de declaración y secuencia.</p>
//             </article>
//         </section>
//     </section>`;

//     return assignment;
// })


// //Evento click de mi boton 'LogIn'.
// btnLogin.addEventListener("click", () => {
//     const form = main.innerHTML = `<!-- From Uiverse.io by Yaya12085 -->
//         <form class="form">
//             <p class="title">Register </p>
//             <p class="message">Signup now and get full access to our app. </p>
//             <div class="flex">
//                 <label>
//                     <input required="" placeholder="" type="text" class="input">
//                     <span>Name</span>
//                 </label>

//                 <label>
//                     <input required="" placeholder="" type="text" class="input">
//                     <span>LastName</span>
//                 </label>
//             </div>

//             <label>
//                 <input required="" placeholder="" type="email" class="input">
//                 <span>Email</span>
//             </label>

//             <label>
//                 <input required="" placeholder="" type="password" class="input">
//                 <span>Password</span>
//             </label>
//             <label>
//                 <input required="" placeholder="" type="password" class="input">
//                 <span>Confirm password</span>
//             </label>
//             <button class="submit">Submit</button>
//             <p class="signin">Already have an acount ? <a href="#">Signin</a> </p>
//         </form>`;
//     return form;
// })

// // //Trabajo el form
// const form = document.querySelector(".form");
// const aside = document.querySelector(".aside");

// // Array vacío donde vamos a guardar el usuario
// const usuarioCreado = [];

// form.addEventListener("submit", function (e) {
//     e.preventDefault();

//     const inputs = document.querySelectorAll(".input");

//     //Map: recorremos los inputs y limpiamos los espacios
//     const values = Array.from(inputs).map(function (input) {
//         return input.value.trim();
//     });

//     //Some: verificamos si hay algún campo vacío
//     const hayEspaciosVacios = values.some(function (valor) {
//         return valor === "";
//     });

//     if (hayEspaciosVacios) {
//         alert("Es obligatorio completar los datos");
//         return;
//     }
//     //Corroboro que las contraseñas coincidan
//     const password = valores[3];
//     const confirmarPassword = valores[4];

//     if (password !== confirmarPassword) {
//         alert("Las contraseñas no coinciden");
//         return;
//     }

//     const user = {
//         name: values[0],
//         lastName: values[1],
//         email: values[2],
//         password: password,
//     };

//     //Guardamos el usuario en el array
//     usuarioCreado.push(user);

//     //Lo guardamos en localStorage
//     localStorage.setItem("usuario", JSON.stringify(usuarioCreado));

//     //Creamos un div para mostrar el perfil dentro del aside
//     const divPerfil = document.createElement("div");
//     divPerfil.classList.add("perfilUsuario");

//     //Creamos un array con los datos a mostrar
//     const datosAMostrar = [
//         "Nombre: " + user.name,
//         "Apellido: " + user.lastName,
//         "Email: " + user.email,
//     ];

//     // forEach: mostramos cada dato en un <p> y lo agregamos al div
//     datosAMostrar.forEach(function (dato) {
//         const p = document.createElement("p");
//         p.textContent = dato;
//         divPerfil.appendChild(p);
//     });

//     // Agregamos el div al aside
//     aside.appendChild(divPerfil);

//     //Limpiamos el formulario
//     form.reset();
// });

//

// //Instancio Array Carrito de compras.
// const shoppingCart = [];

// //Creo contenedor para las Tarjetas.
// const cardContainer = document.createElement("section");
// //Agrego sus caracteristicas.
// cardContainer.id = "card__container";
// cardContainer.style.display = "flex";
// cardContainer.style.flexWrap = "wrap";
// cardContainer.style.gap = "20px";
// cardContainer.style.justifyContent = "center";
// document.body.main.appendChild(cardContainer);

// //Creo el contenedor del carrito de compras.
// const cartContainer = document.createElement("div");
// //Agrego sus caracteristicas.
// cartContainer.id = "cart__container";
// cartContainer.style.marginTop = "40px";
// cartContainer.style.padding = "20px";
// cartContainer.style.borderTop = "2px solid #333";
// document.body.appendChild(cartContainer);

// //Funcion Render del carrito.
// function renderCart() {
//     cartContainer.innerHTML = `<img src='images/shoppingCart'> alt='carrito de compras'`
//     if (cart.length === 0) {
//         cartContainer.innerHTML += "<p>0</p>";
//         return;
//     }
// }

// const list = document.createElement("ul");
// cart.forEach(item => {
//     const li = document.createElement("li");
//     li.textContent = `${item.name} - ${item.edition} - $${item.price}`;
//     list.appendChild(li);
// });

// cartContainer.appendChild(list);

// // Calcular total
// const total = cart.reduce((sum, item) => sum + item.price, 0);

// const totalEl = document.createElement("p");
// totalEl.style.fontWeight = "bold";
// totalEl.textContent = `Total: $${total}`;
// cartContainer.appendChild(totalEl);
//     }

// // Función para renderizar las tarjetas
// function renderCards() {
//     cards.forEach(card => {
//         const cardDiv = document.createElement("div");
//         cardDiv.className = "card";
//         cardDiv.style.border = "1px solid #ccc";
//         cardDiv.style.borderRadius = "10px";
//         cardDiv.style.padding = "15px";
//         cardDiv.style.width = "200px";
//         cardDiv.style.textAlign = "center";
//         cardDiv.style.boxShadow = "0 2px 5px rgba(0,0,0,0.2)";

//         const img = document.createElement("img");
//         img.src = card.image;
//         img.alt = card.name;
//         img.style.width = "100%";
//         img.style.borderRadius = "5px";

//         const title = document.createElement("h3");
//         title.textContent = card.name;

//         const universe = document.createElement("p");
//         universe.textContent = `Universo: ${card.universe}`;

//         const edition = document.createElement("p");
//         edition.textContent = `Edición: ${card.edition}`;

//         const price = document.createElement("p");
//         price.textContent = `Precio: $${card.price}`;

//         const button = document.createElement("button");
//         button.textContent = "Agregar al carrito";
//         button.style.marginTop = "10px";

//         // Evento para agregar al carrito
//         button.addEventListener("click", () => {
//             cart.push(card); // Agregamos al array
//             renderCart(); // Re-renderizamos el carrito
//         });

//         // Armar tarjeta
//         cardDiv.appendChild(img);
//         cardDiv.appendChild(title);
//         cardDiv.appendChild(universe);
//         cardDiv.appendChild(edition);
//         cardDiv.appendChild(price);
//         cardDiv.appendChild(button);

//         // Agregar al contenedor
//         container.appendChild(cardDiv);
//     });
// }

// // Llamar funciones principales
// renderCards();
// renderCart(); // mostrar carrito vacío al principio

// //Evento click de mi boton 'Cards'.
// btnCards.addEventListener("click", () => {
//     const container = main.innerHTML = `<p>Hola, este es el apartado de Tarjetas</p>`;
// })


// //Capturo boton toggle para darle estilo a mi website.
// const btnToggle = document.getElementById("btnToggler");
// const body = document.getElementById("finalProject--grid");

// // Verifico si hay un tema guardado en localStorage al cargar la página
// const savedTheme = localStorage.getItem("theme");
// if (savedTheme) {
//     body.classList.add(savedTheme);
// } else {
//     // Si no hay tema guardado, aplico uno por defecto
//     body.classList.add("dc-theme");
// }

// // Evento para alternar tema y guardar en localStorage
// btnToggle.addEventListener("click", () => {
//     if (body.classList.contains("dc-theme")) {
//         body.classList.remove("dc-theme");
//         body.classList.add("marvel-theme");
//         localStorage.setItem("theme", "marvel-theme");
//     } else {
//         body.classList.remove("marvel-theme");
//         body.classList.add("dc-theme");
//         localStorage.setItem("theme", "dc-theme");
//     }
// })

// Capturo mis botones de navegación


// // Botones
// const btnFinalProject = document.getElementById("btnFinalProject");
// const btnLogin = document.getElementById("btnLogIn");
// const btnCards = document.getElementById("btnCards");

// // Main
// const main = document.querySelector(".main");

// // Aside
// const aside = document.querySelector(".aside");

// // Carrito vacío
// const shoppingCart = [];

// // Contenedor de Tarjetas
// const cardContainer = document.createElement("section");
// cardContainer.id = "card__container";
// cardContainer.style.display = "flex";
// cardContainer.style.flexWrap = "wrap";
// cardContainer.style.gap = "20px";
// cardContainer.style.justifyContent = "center";
// main.appendChild(cardContainer);

// // Contenedor del Carrito
// const cartContainer = document.createElement("div");
// cartContainer.id = "cart__container";
// cartContainer.style.marginTop = "40px";
// cartContainer.style.padding = "20px";
// cartContainer.style.borderTop = "2px solid #333";
// main.appendChild(cartContainer);

// // Tarjetas (array de objetos)
// const cards = [ /* tus objetos de tarjetas acá */];

// // Función para renderizar el Carrito
// function renderCart() {
//     cartContainer.innerHTML = `<img src="images/shoppingCart.png" alt="carrito de compras" style="width:50px;">`;

//     if (shoppingCart.length === 0) {
//         cartContainer.innerHTML += "<p>Carrito vacío</p>";
//         return;
//     }

//     // Lista de productos en el carrito
//     const list = document.createElement("ul");
//     shoppingCart.forEach(item => {
//         const li = document.createElement("li");
//         li.textContent = `${item.character} - ${item.edition} - $${item.price}`;
//         list.appendChild(li);
//     });

//     cartContainer.appendChild(list);

//     // Total del carrito
//     const total = shoppingCart.reduce((sum, item) => sum + item.price, 0);
//     const totalEl = document.createElement("p");
//     totalEl.style.fontWeight = "bold";
//     totalEl.textContent = `Total: $${total}`;
//     cartContainer.appendChild(totalEl);

//     // Botón de Comprar
//     const buyButton = document.createElement("button");
//     buyButton.textContent = "Comprar";
//     buyButton.style.marginTop = "20px";
//     buyButton.style.padding = "10px 20px";
//     buyButton.style.backgroundColor = "#28a745";
//     buyButton.style.color = "white";
//     buyButton.style.border = "none";
//     buyButton.style.borderRadius = "5px";
//     buyButton.style.cursor = "pointer";

//     buyButton.addEventListener("click", () => {
//         if (shoppingCart.length === 0) {
//             alert("El carrito está vacío. Agrega productos antes de comprar.");
//             return;
//         }

//         alert("¡Compra realizada exitosamente!");
//         shoppingCart.length = 0; // Vacío el carrito
//         renderCart(); // Actualizo la vista del carrito
//     });

//     cartContainer.appendChild(buyButton);
// }

// // Función para renderizar las Tarjetas
// function renderCards() {
//     cardContainer.innerHTML = ""; // Limpio el contenedor antes de renderizar

//     cards.forEach(card => {
//         const cardDiv = document.createElement("div");
//         cardDiv.className = "card";
//         cardDiv.style.border = "1px solid #ccc";
//         cardDiv.style.borderRadius = "10px";
//         cardDiv.style.padding = "15px";
//         cardDiv.style.width = "200px";
//         cardDiv.style.textAlign = "center";
//         cardDiv.style.boxShadow = "0 2px 5px rgba(0,0,0,0.2)";

//         // Imagen de la tarjeta
//         const img = document.createElement("img");
//         img.src = card.image;
//         img.alt = card.character;
//         img.style.width = "100%";
//         img.style.borderRadius = "5px";

//         // Nombre del personaje
//         const title = document.createElement("h3");
//         title.textContent = card.character;

//         // Universo
//         const universe = document.createElement("p");
//         universe.textContent = `Universo: ${card.universe}`;

//         // Edición
//         const edition = document.createElement("p");
//         edition.textContent = `Edición: ${card.edition}`;

//         // Precio
//         const price = document.createElement("p");
//         price.textContent = `Precio: $${card.price}`;

//         // Botón para agregar al carrito
//         const button = document.createElement("button");
//         button.textContent = "Agregar al carrito";
//         button.style.marginTop = "10px";

//         button.addEventListener("click", () => {
//             shoppingCart.push(card); // Agrego al carrito
//             renderCart(); // Actualizo el carrito
//         });

//         // Armado de la tarjeta
//         cardDiv.appendChild(img);
//         cardDiv.appendChild(title);
//         cardDiv.appendChild(universe);
//         cardDiv.appendChild(edition);
//         cardDiv.appendChild(price);
//         cardDiv.appendChild(button);

//         // Agrego la tarjeta al contenedor
//         cardContainer.appendChild(cardDiv);
//     });
// }

// //Mostrar carrito vacío al cargar la página
// renderCart();

// //Botón para ver las tarjetas
// btnCards.addEventListener("click", () => {
//     renderCards();
// });
