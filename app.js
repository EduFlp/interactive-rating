const rating_cards = document.querySelectorAll(".footer span");
const submit_btn = document.querySelector(".btn");
const rate_point = document.getElementById("rate");
const card_first = document.querySelector(".card-first");
const card_sec = document.querySelector(".card-sec");

let rate = null;

rating_cards.forEach((card) => {
    card.addEventListener("click", (e) => {
        const active = document.querySelector('.checked');
        if (active){
            active.classList.remove('checked');
        }
        const card = e.target;
        card.classList.add('checked');
        rate = e.target.innerText;
    });
});
submit_btn.addEventListener('click', () => {
    if(rate) {
        rate_point.innerText = rate;
        card_first.classList.add("hidden");
        card_sec.classList.remove("hidden");
    }
});