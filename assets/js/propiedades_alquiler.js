let template_alquiler = ''
const alquiler = document.querySelector('#alquiler')

const propiedades_alquiler = [ {
    nombre: 'Apartamento en el centro de la ciudad',
    src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
    descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
    ubicacion: '123 Main Street, Anytown, CA 91234',
    habitaciones: 2,
    banos: 2,
    costo: 2.000,
    smoke: false,
    pets: true
},
{
    nombre: 'Apartamento luminoso con vista al mar',
    src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
    ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
    habitaciones: 3,
    banos: 3,
    costo: 2.500,
    smoke: true,
    pets: true
},
{
    nombre: 'Condominio moderno en zona residencial',
    src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
    descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
    ubicacion: '123 Main Street, Anytown, CA 91234',
    habitaciones: 2,
    banos: 2,
    costo: 2.200,
    smoke: false,
    pets: false
},
{
    nombre: 'Apartamento con terminaciones de madera',
    src: 'https://images.unsplash.com/photo-1596139656325-a20654ff514e?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    descripcion: 'Hermoso departamento con detalles rusticos en zona  residencial',
    ubicacion: '867 No Street, Nowhere, WA 75648',
    habitaciones: 3,
    baños: 2,
    costo: 3.000,
    smoke: false,
    pets: true
}
]

// Verificar la página actual
const esPaginaAlquiler = window.location.pathname.includes('propiedades_alquiler.html');

// Número de propiedades a mostrar en la página principal
const propiedadesEnPaginaIndex = 3;

for (let i = 0; i < (esPaginaAlquiler ? propiedades_alquiler.length : propiedadesEnPaginaIndex); i++) {
    let propiedad_alquiler = propiedades_alquiler[i];

    let fumar = '';
    let mascota = '';

    if (propiedad_alquiler.smoke === true) {
        fumar = '<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>';
    } else {
        fumar = '<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>';
    }

    if (propiedad_alquiler.pets === true) {
        mascota = '<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>';
    } else {
        mascota = '<p class="text-danger"><i class="fas fa-ban"></i> No se permiten mascotas</p>';
    }

    template_alquiler += `
        <div class="col-md-4 mb-4">
            <div class="card">
              <img
                src="${propiedad_alquiler.src}"
                class="card-img-top"
                alt="Imagen del departamento"
              />
              <div class="card-body">
                <h5 class="card-title">
                  ${propiedad_alquiler.nombre}
                </h5>
                <p class="card-text">
                  ${propiedad_alquiler.descripcion}
                </p>
                <p>
                  <i class="fas fa-map-marker-alt"></i> ${propiedad_alquiler.ubicacion} 
                </p>
                <p>
                  <i class="fas fa-bed"></i> ${propiedad_alquiler.habitaciones} Habitaciones |
                  <i class="fas fa-bath"></i> ${propiedad_alquiler.banos} Baños
                </p>
                <p><i class="fas fa-dollar-sign"></i> ${propiedad_alquiler.costo} </p>
                ${fumar}
                ${mascota}
              </div>
            </div>
        </div>
    `;
}

template_alquiler = `
    <h2>${esPaginaAlquiler ? 'Propiedades en alquiler' : 'Propiedades Destacadas en Alquiler'}</h2>
    <div class="row">` +
    template_alquiler +
    ` </div>`;

alquiler.innerHTML = template_alquiler;