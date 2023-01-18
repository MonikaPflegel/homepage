{
    const welcome = () => {
        console.log("Cześć!");
    }

    const onChangeBackgroundClick =
        () => {
            const buttonText =
                document.querySelector(".js-buttonText");
            const body =
                document.querySelector(".js-body");

            body.classList.toggle("dark"
            ); buttonText.innerText =
                body.classList.contains("dark")
                    ? "jasny" : "ciemny";
        };

    const init = () => {

        const button =
            document.querySelector(".js-button");
        button.addEventListener("click",
            onChangeBackgroundClick);

        welcome();

    };
    init();
}