const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", (event) => {
    event.preventDefault();

    navigation.classList.toggle("show");
    menuButton.classList.toggle("show");

    const isOpen = navigation.classList.contains("show");
    menuButton.setAttribute("aria-expanded", isOpen);
});