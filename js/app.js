document.getElementById('libro-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const nameLibro = document.getElementById('nombreLibro').value,
          autor = document.getElementById('autor').value,
          editLibro = document.getElementById('editLibro').value,
          precio = document.getElementById('precio').value;

    const libro = new Libro(nameLibro, autor, editLibro, precio);
    
    const ui = new UI;
    ui.addLibro(libro);
    ui.getLibro();
    ui.resetForm();
});

document.getElementById('lista-libro').addEventListener('click', (e) => {
    e.preventDefault();

    const ui = new UI;
    ui.eliminarLibro(e.target);
})