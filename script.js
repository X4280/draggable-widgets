document.addEventListener('DOMContentLoaded', (event) => {
    const containers = [
        document.querySelector('.widget-sidebar'),
        ...document.querySelectorAll('.drop-zone')
    ];

    const drake = dragula(containers);

    drake.on('drop', (el, target, source) => {
        // Check if it's our special widget and is being dropped for the first time
        if (el.classList.contains('iframe-widget') && !el.dataset.configured) {
            
            // Prompt the user for a URL
            const userUrl = prompt("Please enter the URL to embed:", "https://");

            // If the user entered a URL
            if (userUrl && userUrl.trim() !== "") {
                // Clear the widget's placeholder content
                el.innerHTML = ''; 

                // Create the iframe
                const iframe = document.createElement('iframe');
                iframe.src = userUrl;
                
                // SECURITY: Sandbox the iframe to restrict its permissions
                iframe.sandbox = 'allow-scripts allow-same-origin allow-forms allow-popups';

                // Append the iframe to the widget
                el.appendChild(iframe);

                // Add a data attribute to mark this widget as 'configured'
                el.dataset.configured = 'true';

                 // Change the class to fill the container
                el.classList.add('iframe-loaded');

            } else {
                // If the user cancels, update the widget text
                el.innerHTML = '<h4>Iframe Canceled</h4><p>Drag back to the sidebar to remove.</p>';
            }
        }
    });
});
