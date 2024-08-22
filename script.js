const allSideMenu = document.querySelectorAll("#sidebar .side-menu.top li a");

allSideMenu.forEach((item) => {
    const li = item.parentElement;
    item.addEventListener("click", () => {
        allSideMenu.forEach((e) => {
            e.parentElement.classList.remove("active");
        })
        li.classList.add("active");
    })
})


// Toggle sidebar

const menuBar = document.querySelector("#content nav .bx.bx-menu");
const sidebar = document.querySelector("#sidebar");

menuBar.addEventListener("click", () => {
    sidebar.classList.toggle("hide");
    }
)