{
    const welcome = () => {
        console.log("Cześć!");
    }

    const onChangeBackgroundClick = () => {

        const button__pagecolor = document.querySelector(".button__pagecolor");
        const body = document.querySelector(".body");

        body.classList.toggle("dark"); button__pagecolor.innerText = body.classList.contains("dark") ? "jasny" : "ciemny";
    };

    const init = () => {

        const button = document.querySelector(".button");
        button.addEventListener("click", onChangeBackgroundClick);

        welcome();

    };
    init();
}