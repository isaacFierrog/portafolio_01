const d = document;

const TECLAS_VALIDAS = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];
const TECLAS = [
    {
        letra: 'a',
        descrip: 'clap'
    },
    {
        letra: 's',
        descrip: 'hihat'
    },
    {
        letra: 'd',
        descrip: 'kick'
    },
    {
        letra: 'f',
        descrip: 'openhat'
    },
    {
        letra: 'g',
        descrip: 'boom'
    },
    {
        letra: 'h',
        descrip: 'ride'
    },
    {
        letra: 'j',
        descrip: 'snare'
    },
    {
        letra: 'k',
        descrip: 'tom'
    },
    {
        letra: 'l',
        descrip: 'tink'
    },
];

//Metodos
const renderizarTeclas = () => {
    const templateTecla = d.getElementById('tecla-component').content;
    const fragmet = d.createDocumentFragment();

    TECLAS.forEach(({ letra, descrip }) => {
        templateTecla.querySelector('.tecla').setAttribute('data-id', letra);
        templateTecla.querySelector('.tecla__letra').textContent = letra;
        templateTecla.querySelector('.tecla__descrip').textContent = descrip;
        const teclaComponent = templateTecla.cloneNode(true);
        fragmet.appendChild(teclaComponent);
    });

    d.querySelector('.teclas').appendChild(fragmet);
};

const seleccionarTecla = () => {
    d.addEventListener('keydown', e => {
        if(!TECLAS_VALIDAS.includes(e.key)) return;
        const teclaPresionada = d.querySelector(`[data-id="${e.key}"]`);
        teclaPresionada.style.borderColor = '#f1ff2e';
    })

    d.addEventListener('keyup', e => {
        if(!TECLAS_VALIDAS.includes(e.key)) return;
        const teclaSoltada = d.querySelector(`[data-id="${e.key}"]`);
        teclaSoltada.style.borderColor = '#000'
    })
}

d.addEventListener('DOMContentLoaded', e => {
    renderizarTeclas();
    seleccionarTecla();
});