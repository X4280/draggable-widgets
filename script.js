document.addEventListener('DOMContentLoaded', (event) => {
    const containers = [
        document.querySelector('.widget-sidebar'),
        ...document.querySelectorAll('.drop-zone')
    ];

    const drake = dragula(containers);

    // Listen for the 'drop' event from Dragula
    drake.on('drop', (el, target, source) => {
        // Check if the dropped element is our iframe widget AND if it was dropped into a drop-zone
        if (el.classList.contains('iframe-widget') && target.classList.contains('drop-zone')) {
            
            // Check if the iframe has already been created to avoid duplicating it
            const existingIframe = el.querySelector('iframe');
            if (existingIframe) {
                return; // Do nothing if the iframe is already there
            }

            // Get the URL from our data attribute
            const iframeSrc = el.dataset.iframeSrc;
            if (!iframeSrc) return; // Exit if there's no src URL

            // Clear the placeholder text (like "Drag to a drop zone...")
            const placeholder = el.querySelector('p');
            if (placeholder) {
                placeholder.style.display = 'none';
            }

            // Create the container and the iframe elements
            const iframeContainer = document.createElement('div');
            iframeContainer.className = 'widget-iframe-container';

            const iframe = document.createElement('iframe');
            iframe.src = iframeSrc;
            
            // Append the iframe to the container, and the container to the widget
            iframeContainer.appendChild(iframe);
            el.appendChild(iframeContainer);
        }
    });
});
