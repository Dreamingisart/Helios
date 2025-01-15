const msg1 = document.querySelector(".msg1");
const msg2 = document.querySelector(".msg2");
const btns = document.querySelectorAll(".btn");
const msg3 = document.querySelector(".msg3");
const final_btn = document.querySelector("#final")
const container = document.querySelector(".container")
const show_lights_btn = document.querySelector("#decoration")
const container1 = document.querySelector(".container1");
const video = document.querySelector("#myVideo")
const final_msg = document.querySelector(".message");
const flags = document.querySelector("#flags")
const cake = document.querySelector("#cake")

function musicPlay(){
    let audio = new Audio("Content/Tu Banja Gali Benaras Ki - Asit Tripathy.mp3");
    audio.play();
}


msg1.addEventListener("click", () => {
    msg1.classList.add("hidden");
    msg2.classList.remove("hidden");
})

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        msg2.classList.add("hidden");
        msg3.classList.remove("hidden");
    })
})

final_btn.addEventListener("click", () => {
    container.classList.add("hidden");
    container.classList.remove("container");
    show_lights_btn.classList.remove("hidden");
    document.body.style.backgroundColor = "black";
    video.classList.add("hidden")
})

let count = 1

show_lights_btn.addEventListener("click", (e) => {
    if (count == 1) {
        document.body.style.backgroundColor = "white";
        e.target.textContent = "Play Music"
        e.target.style.backgroundColor = "#D2042D"
        count++
    }else if (count == 2) {
        e.target.textContent = "Decorate";
        musicPlay();
        count++
    }else if (count == 3) {
        e.target.textContent = "Let's cut the cake Madam Ji";
        flags.classList.remove("hidden");
        count++
    }else if (count == 4) {
        e.target.textContent = "Well, I have a message for You Madam Ji";
        show_lights_btn.style.width = "25rem";
        cake.classList.remove("hidden");
        count++
    }else if (count == 5) {
        video.classList.remove("hidden");
        container.classList.remove("hidden");
        container.classList.add("container");
        msg3.classList.add("hidden");
        final_msg.classList.remove("hidden");
        flags.classList.add("hidden");
        count++
    }
})

show_lights_btn.addEventListener("mouseenter", (e) => {
    e.target.style.width = "30rem"
    e.target.style.height = "4rem";
})

show_lights_btn.addEventListener("mouseleave", (e) => {
    e.target.style.width = "25rem"
    e.target.style.height = "3.2rem"
})
