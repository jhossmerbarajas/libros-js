class UI {

    addLibro(libro) {
        localStorage.setItem('libro', JSON.stringify(libro));
    }

    getLibro() {
        const get = localStorage.getItem('libro');
        const getLibro = JSON.parse(get);
        
        const listaLibro = document.getElementById('lista-libro');
        const element = document.createElement('div');

        element.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body">
                    <strong> Nombre del Libro </strong>: ${getLibro.nameLibro} -
                    <strong> Autor del Libro </strong>: ${getLibro.autor} -
                    <strong> Editorial del Libro </strong>: ${getLibro.editLibro} -
                    <strong> Precio del Libro </strong>: ${getLibro.precio} -
                    <a name="eliminar" class="btn btn-danger"> Eliminar </a>
                </div>
            </div>
        `;

        listaLibro.appendChild(element);
    }

    resetForm() {
        document.getElementById('libro-form').reset();
    }

    eliminarLibro(element) {
        if(element.name === 'eliminar') {
            localStorage.removeItem('libro');
            element.parentElement.parentElement.remove();
        }
    }

}

