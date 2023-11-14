const toggleSidebar = () => {
    const sidebar = document.getElementById("sidebar");
    const openSidebarButton = document.getElementById("openSidebarButton");
    const main = document.getElementsByClassName("mainContent")[0];
    if (sidebarActive) {
        sidebar.style.display = "none";
        openSidebarButton.style.display = "block";
        sidebarActive = false;
        main.style.marginRight = "0%";
    } else {
        sidebar.style.display = "block";
        openSidebarButton.style.display = "none";
        sidebarActive = true;
        main.style.marginRight = "25%";
    }
};

var sidebarActive = true;