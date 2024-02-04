let template_venta = ''
const venta = document.querySelector('#venta')


const propiedades_venta = [ {
    nombre: 'Apartamento de lujo en zona exclusiva',
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
    ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
    habitaciones: 4,
    banos: 4,
    costo: 5.000,
    smoke: false,
    pets: false
},
{
    nombre: 'Apartamento acogedor en la montaña',
    src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
    descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
    ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
    habitaciones: 2,
    banos: 1,
    costo: 1.200,
    smoke: true,
    pets: true   
},
{
    nombre: 'Penthouse de lujo con terraza panorámica',
    src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
    descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
    ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
    habitaciones: 3,
    banos: 3,
    costo: 4.500,
    smoke: false,
    pets: true   
},
{
    nombre: 'Apartamento moderno en barrio industrial',
    src: 'https://images.unsplash.com/photo-1465804575741-338df8554e02?q=80&w=2946&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    descripcion: 'Este apartamento moderno se encuentra ubicado en el centro del barrio industrial',
    ubicacion: '176 Industrial Avenue, Downtown City, CA 23456 ',
    habitaciones: 3,
    banos: 2,
    costo: 3.500,
    smoke: false,
    pets: true   
}
]


// Verificar la página actual
const esPaginaVentas = window.location.pathname.includes('propiedades_venta.html');

// Número de propiedades a mostrar en la página principal
const propiedadesEnPaginaPrincipal = 3;

for (let i = 0; i < (esPaginaVentas ? propiedades_venta.length : propiedadesEnPaginaPrincipal); i++) {
    let propiedad_venta = propiedades_venta[i];

    let fumar = '';
    let mascota = '';

    if (propiedad_venta.smoke === true) {
        fumar = '<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>';
    } else {
        fumar = '<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>';
    }

    if (propiedad_venta.pets === true) {
        mascota = '<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>';
    } else {
        mascota = '<p class="text-danger"><i class="fas fa-ban"></i> No se permiten mascotas</p>';
    }

    template_venta += `
        <div class="col-md-4 mb-4">
            <div class="card">
              <img
                src="${propiedad_venta.src}"
                class="card-img-top"
                alt="Imagen del departamento"
              />
              <div class="card-body">
                <h5 class="card-title">
                  ${propiedad_venta.nombre}
                </h5>
                <p class="card-text">
                  ${propiedad_venta.descripcion}
                </p>
                <p>
                  <i class="fas fa-map-marker-alt"></i> ${propiedad_venta.ubicacion} 
                </p>
                <p>
                  <i class="fas fa-bed"></i> ${propiedad_venta.habitaciones} Habitaciones |
                  <i class="fas fa-bath"></i> ${propiedad_venta.banos} Baños
                </p>
                <p><i class="fas fa-dollar-sign"></i> ${propiedad_venta.costo} </p>
                ${fumar}
                ${mascota}
              </div>
            </div>
        </div>
    `;
}

template_venta = `
    <h2>${esPaginaVentas ? 'Propiedades en venta' : 'Propiedades Destacadas en Ventas'}</h2>
    <div class="row">` +
    template_venta +
    ` </div>`;

venta.innerHTML = template_venta;