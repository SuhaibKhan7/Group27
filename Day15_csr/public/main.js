document.addEventListener("DOMContentLoaded", () => {
    const contentDiv = document.getElementById('content');

    document.getElementById('home').addEventListener('click', () => {
        contentDiv.innerHTML = `
            <h2>Home</h2>
            <p>This is the home page content, loaded dynamically.</p>
        `;
    });

    document.getElementById('about').addEventListener('click', () => {
        contentDiv.innerHTML = `
            <h2>About</h2>
            <p>This page contains information about our demo project.</p>
        `;
    });

    document.getElementById('products').addEventListener('click', () => {
        fetch('data.json')
            .then(response => response.json())
            .then(data => {
                const productHTML = data.products.map(product => `
                    <div class="product">
                        <h3>${product.name}</h3>
                        <p>${product.description}</p>
                        <p>Price: $${product.price}</p>
                    </div>
                `).join('');

                contentDiv.innerHTML = `
                    <h2>Products</h2>
                    ${productHTML}
                `;
            });
    });
});
