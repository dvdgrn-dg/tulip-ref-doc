# Tulip Reference Doc

<b>Background of Project</b>

This project was created to combine reference information from multiple PDFs used by staff at Tulip Cremation
so that as information was updated, all staff would have access to this shared information.

Before this project, the information was outdated, hard to find, and not everyone had the same information.

This project taught me root elements, responsive design with media queries, and local storage keys with Javascript.

I implemented root elements to provide a consistent look through each section while allowing the website to change
depending on what display mode was selected. I utilized local storage keys to remember display modes and if the
navigation bar was collapsed.

<b>Technical Design</b>

This website was designed as one page to allow the staff to be able to use search functions to find information quicker.

The navigation bar was designed so as users decreased the window size to be on display with other windows,
the bar could collapse so it did not interfer with the reference information.

The navigation bar also allows quicker access to specific information.

I created a display mode as the staff works remotely and looks at monitors all day.

I also utilized local storage keys so staff could maintain their preferred look.

<code>
 Local Storage Keys and Toggles for Collapsed NavBar and Display Theme
 
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
   </code>
