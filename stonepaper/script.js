document.addEventListener("DOMContentLoaded", () => {
    const gameContainer = document.querySelector(".main");
    const userResult = document.querySelector(".user_result img");
    const cpuResult = document.querySelector(".cpu_result img");
    const result = document.querySelector(".title");
    const optionimg = document.querySelectorAll(".option img");

    optionimg.forEach((image, index) => {
        image.addEventListener("click", (e) => {
            image.parentElement.classList.add("active");
            userResult.src = cpuResult.src = "image/fist.png"; // Set default images
            result.textContent = "Wait...";
            optionimg.forEach((image2, index2) => {
                index !== index2 && image2.parentElement.classList.remove("active");
            });
            gameContainer.classList.add("start");

            let time = setTimeout(() => {
                gameContainer.classList.remove("start");
                let imageSrc = e.target.src;
                userResult.src = imageSrc;
                let randomNumber = Math.floor(Math.random() * 3);
                let cpuImages = ["image/fist.png", "image/hello.png", "image/scissors.png"];
                cpuResult.src = cpuImages[randomNumber];
                let cpuValue = ["R", "P", "S"][randomNumber];
                let userValue = ["R", "P", "S"][index];
                let outcomes = {
                    RR: "Draw",
                    RP: "Cpu",
                    RS: "User",
                    PP: "Draw",
                    PR: "User",
                    PS: "Cpu",
                    SS: "Draw",
                    SR: "Cpu",
                    SP: "User",
                };
                let outComeValue = outcomes[userValue + cpuValue];
                result.textContent = userValue === cpuValue ? "Match Draw" : `${outComeValue} Won!!`;
            }, 2500);
        });
    });
});