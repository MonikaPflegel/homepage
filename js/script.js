{
    const welcome=() =>{ console.log("Cześć!");}
     welcome();

    let button = document.querySelector(".button");
    let body = document.querySelector(".body");
    let button__pagecolor = document.querySelector(".button__pagecolor");
    button.addEventListener("click", () => {
        body.classList.toggle("dark"); button__pagecolor.innerText = body.classList.contains("dark") ? "jasny" : "ciemny";
    })
}