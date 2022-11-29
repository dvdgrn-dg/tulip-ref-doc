{
    // Collapse Menu with Local Storage

    const collapsedClass = "sidebar--collapsed";
    const collapsekey = "sidebar--collapsed";

    const sidebar = document.querySelector(".sidebar");
    const collapse = document.querySelector(".collapse__content");

    if (localStorage.getItem(collapsekey) === "true") {
        sidebar.classList.add(collapsedClass);
    }

    collapse.addEventListener("click", () => {
        sidebar.classList.toggle(collapsedClass);
        localStorage.setItem(collapsekey, sidebar.classList.contains(collapsedClass));
    });

    // Dark Mode with Local Storage

    const modeClass = "dark-theme";
    const modekey = "dark-theme";

    const page = document.querySelector(".page-container");
    const mode = document.querySelector(".mode__content");

    if (localStorage.getItem(modekey) === "true") {
        page.classList.add(modeClass);
    }

    mode.addEventListener("click", () => {
        page.classList.toggle(modeClass);
        localStorage.setItem(modekey, page.classList.contains(modeClass));
    });

}