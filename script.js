document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('nav button');
    const galleryItems = document.querySelectorAll('.gallery-item');
    const featuredImage = document.getElementById('main-image');
    const imageDescription = document.getElementById('image-description');

    const featuredData = {
        anime: { src: 'dibujos_destacados/destacado-anime.PNG', description: 'Dibujo destacado de Anime' },
        videojuegos: { src: 'dibujos_destacados/destacado-videojuego.PNG', description: 'Dibujo destacado de Videojuegos' },
        "hecho-a-mano": { src: 'dibujos_destacados/destacado.mano.PNG', description: 'Dibujo destacado hecho a mano' }
    };

    // Cambiar imagen destacada y filtrar galería
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');
            featuredImage.src = featuredData[category].src;
            imageDescription.textContent = featuredData[category].description;

            // Filtrar imágenes de la galería
            galleryItems.forEach(item => {
                if (item.classList.contains(category)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Efecto de movimiento 3D para la imagen destacada
    const featuredContainer = document.querySelector('.featured-container');
    featuredContainer.addEventListener('mousemove', (e) => {
        const rect = featuredContainer.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        const depth = 20;

        featuredImage.style.transform = `rotateY(${x / depth}deg) rotateX(${-y / depth}deg)`;
    });

    featuredContainer.addEventListener('mouseleave', () => {
        featuredImage.style.transform = 'rotateY(0deg) rotateX(0deg)';
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const featuredImage = document.getElementById('main-image');
    const imageDescription = document.getElementById('image-description');

    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            // Actualiza la imagen destacada
            featuredImage.src = item.src;
            // Actualiza la descripción con el texto alternativo de la imagen
            imageDescription.textContent = item.alt;
        });
    });
});
