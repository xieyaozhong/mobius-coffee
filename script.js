const navToggle = document.querySelector("#navToggle");
const nav = document.querySelector("#nav");

if (navToggle && nav) {
  navToggle.addEventListener("click", () => nav.classList.toggle("open"));
}

document.querySelectorAll(".filter").forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    document.querySelectorAll(".filter").forEach((btn) => {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    document.querySelectorAll(".menu-item").forEach((item) => {
      const match = filter === "all" || item.dataset.category === filter;
      item.style.display = match ? "block" : "none";
    });
  });
});
