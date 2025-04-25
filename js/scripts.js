//Capturo mis botones de mi aside de navegación.
const btnFinalProject = document.getElementById("btnFinalProject");
const btnLogin = document.getElementById("btnLogIn");
const btnCards = document.getElementById("btnCards");



const btnToggle = document.getElementById("btnToggler");
const body = document.getElementById("finalProject--grid");

btnToggle.addEventListener("click", () => {
    if (body.classList.contains("dc-theme")) {
        body.classList.remove("dc-theme");
        body.classList.add("marvel-theme");
    } else {
        body.classList.remove("marvel-theme");
        body.classList.add("dc-theme");
    }
})



const containerLogIn = document.querySelector(".main__login");

btnLogin.addEventListener("click", () => {
    const form = containerLogIn.innerHTML = `<!-- From Uiverse.io by Yaya12085 --> 
<form class="form">
    <p class="title">Register </p>
    <p class="message">Signup now and get full access to our app. </p>
        <div class="flex">
        <label>
            <input required="" placeholder="" type="text" class="input">
            <span>Firstname</span>
        </label>

        <label>
            <input required="" placeholder="" type="text" class="input">
            <span>Lastname</span>
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
})