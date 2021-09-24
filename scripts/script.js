var flag = true;
var elemento;
var showingInfo = false;
var showFromHome = true;

document.addEventListener("DOMContentLoaded", ()=>{
    elemento = document.getElementById("info");
    home = document.getElementById("home");
    option1 = document.getElementById("option1");
    option2 = document.getElementById("option2");
    option3 = document.getElementById("option3");
    aboutId = document.getElementById("container-info");
    btnburger = document.getElementById("btnburger");
    
    const boton = document.getElementById("burger");
    boton.addEventListener("click", ()=> {
        toggle();
    });
});

function toggle() {

    if (flag && !showingInfo && showFromHome) {
        $("#welcomediv").hide("fast");
        $("#classes-message").hide("fast");
        elemento.classList.add("show");
        elemento.classList.remove("hide");
        home.classList.add("show1");
        option1.classList.add("show2");
        option2.classList.add("show3");
        option3.classList.add("show4");
        flag = false;
    } else if (!flag && !showingInfo && showFromHome) {
        $("#welcomediv").show("fast");
        $("#classes-message").show("fast");
        elemento.classList.remove("show");
        elemento.classList.add("hide");
        home.classList.remove("show1");
        option1.classList.remove("show2");
        option2.classList.remove("show3");
        option3.classList.remove("show4");
        flag = true;
        showFromHome = true;
    } else if (showingInfo) {
        flag = !flag;
        aboutId.classList.remove("showInfo");
        aboutId.classList.add("hideInfo");
        elemento.classList.add("show");
        elemento.classList.remove("hide");
        showingInfo = false;
        showFromHome = true;
    }
}

function showHome() {
    $("#welcomediv").show("fast");
    $("#classes-message").show("fast");
    elemento.classList.remove("show");
    elemento.classList.add("hide");
    home.classList.remove("show1");
    option1.classList.remove("show2");
    option2.classList.remove("show3");
    option3.classList.remove("show4");
    aboutId.classList.remove("showInfo");
    aboutId.classList.add("hideInfo");
    showFromHome = true;
    showingInfo = false;
    flag = true;
}

function addAboutInfo() {

    $("#container-info").empty();
    elemento.classList.remove("show");
    elemento.classList.add("hide");
    showingInfo = true;

    var form = `
        <div class="about">
            <div class="profileImage">
                <img src="./img/profileImage.jpeg">
            </div>
            <h2>Un poco sobre mí</h2>
            <p> 
                Mi nombre completo es Brian Racioppi, tengo 22 años, estudio música a nivel universitario y me metí en el mundo de la guitarra y la música hace 10 años. 
                Me dedico a escribir canciones desde ese entonces, y con ello investigar todo lo que refiere con los elementos que constituyen la música actual en todos sus ejes. 
                La idea es transmitir todos estos valores musicales que a veces van más allá de lo estrictamente técnico, y son un proceso de crecer a la par en conocimiento y en sensibilidad para ejecutar tanto como transmitir respectivamente.
            </p>
        </div>
    `;
  
  $("#container-info").append(form).show();
  aboutId.classList.remove("hideInfo");
  aboutId.classList.add("showInfo");
  showFromHome = false;
}

function addSocialInfo() {

    $("#container-info").empty();
    elemento.classList.remove("show");
    elemento.classList.add("hide");
    showingInfo = true;

    var form = `
        <div class="social">
            <h2>Mis redes</h2>
            <div>
                <span><a href="https://api.whatsapp.com/send?phone=‎+541155964960&text=¡Quiero aprender guitarra!"><img src="./img/iconoWpp.png" alt="whatsapp">+54 11 5596-4960</a></span>
                <span><a href="https://www.instagram.com/_brianracioppi/"><img src="./img/iconoIg.png" alt="instagram">@_brianracioppi</a></span>
            </div>
        </div>
    `;
  
  $("#container-info").append(form).show();
  aboutId.classList.remove("hideInfo");
  aboutId.classList.add("showInfo");
  showFromHome = false;
}

function addClassesInfo() {

    $("#container-info").empty();
    elemento.classList.remove("show");
    elemento.classList.add("hide");
    showingInfo = true;

    var form = `
        <div class="classes">
            <h2>¿Qué vamos a aprender?</h2>
            <div>
                <span><span>Guitarra clásica y acústica</span></span>
                <span><span>Teoría musical</span></span>
                <span><span>Composición de canciones</span></span>
                <span><span>Escalas, armonía y modos</span></span>
                <span><span>Ejercitación</span></span>
            </div>
            
            <div id="container-guitar">
                <img src="./img/guitar.png" alt="acoustic guitar image">
            </div>
        </div>
    `;
  
  $("#container-info").append(form).show();
  aboutId.classList.remove("hideInfo");
  aboutId.classList.add("showInfo");
  showFromHome = false;
}