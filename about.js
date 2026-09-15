function toggleRoute() {
    const card = document.getElementById("routeCard");
    card.classList.toggle("open");
}

const routeHeaders = document.querySelectorAll(".route-header");

routeHeaders.forEach(header => {

    header.addEventListener("click", () => {

        const card = header.closest(".route-card");
        const details = card.querySelector(".route-details");

        card.classList.toggle("open");

        if (card.classList.contains("open")) {

            details.style.maxHeight = details.scrollHeight + "px";

        } else {

            details.style.maxHeight = "0px";

        }

    });

});
