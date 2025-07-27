document.addEventListener('DOMContentLoaded', (event) => {
    const mainContent = document.getElementById('main-content');
    const widgetSidebar = document.getElementById('widget-sidebar');

    dragula([mainContent, widgetSidebar]);
});
