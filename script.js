document.addEventListener('DOMContentLoaded', (event) => {
    // Collect all containers into an array
    const containers = [
        document.querySelector('.widget-sidebar'),
        ...document.querySelectorAll('.drop-zone')
    ];

    dragula(containers);
});
