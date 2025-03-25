prueba = "Esta ventana es arrastrable puedes colocarla en cualquier lugar que quieras, acerca el cursor a un departamento para visualizar informacion basica";
const pathid1 = document.getElementById('SV-CA'); //cabañas
const pathid2 = document.getElementById('SV-CH');//chalatenango
const pathid3 = document.getElementById('SV-CU');//cuscatlan
const pathid4 = document.getElementById('SV-LI');//la libertad
const pathid5 = document.getElementById('SV-MO');//morazan
const pathid6 = document.getElementById('SV-PA');//la paz
const pathid7 = document.getElementById('SV-SA');//santa ana
const pathid8 = document.getElementById('SV-SM');//san miguel
const pathid9 = document.getElementById('SV-SO');//sonsonate
const pathid10 = document.getElementById('SV-SS');//san salvador
const pathid11 = document.getElementById('SV-SV');//san vicente
const pathid12 = document.getElementById('SV-UN');//la union
const pathid13 = document.getElementById('SV-US');//usulutan
const pathid14 = document.getElementById('SV-AH');//ahuachapan
const reset = document.getElementById('tuqui');

const arraydep = [prueba];
const contenedorarray = document.getElementById("contenedor");
arraydep.forEach((valor) =>{
    const p = document.createElement("p");
    p.innerHTML = valor;
    contenedorarray.appendChild(p);
});

function actualizador(){
    const contenedorarray = document.getElementById("contenedor");
    contenedorarray.innerHTML = "";
    const p = document.createElement("p");
    arraydep.forEach((valor) => {
        p.innerHTML = valor;
        contenedorarray.appendChild(p);
    }
)};
document.addEventListener('mouseleave', (event) => {
      prueba = "Esta ventana es arrastrable puedes colocarla en cualquier lugar que quieras, acerca el cursor a un departamento para visualizar informacion basica";
      arraydep[0] = prueba; 
      actualizador(); 
  }, true); 
pathid1.addEventListener ('mouseover', () =>{
    prueba = ``;
    arraydep[0] = prueba;
    actualizador();
} );
pathid2.addEventListener ('mouseover', () =>{
    prueba = `pipi`;
    arraydep[0] = prueba;
    actualizador();
} );
pathid3.addEventListener ('mouseover', () =>{
    prueba = `tuqui`;
    arraydep[0] = prueba;
    actualizador();
} );
pathid4.addEventListener ('mouseover', () =>{
    prueba = `sos`;
    arraydep[0] = prueba;
    actualizador();
} );
pathid5.addEventListener ('mouseover', () =>{
    prueba = `lili`;
    arraydep[0] = prueba;
    actualizador();
} );
pathid6.addEventListener ('mouseover', () =>{
    prueba = `sasa`;
    arraydep[0] = prueba;
    actualizador();
} );
pathid7.addEventListener ('mouseover', () =>{
    prueba = `<h3>Santa Ana</h3>
    <strong>Cabecera departamental</strong><br>
    Santa Ana Centro<br>
    <strong>Extensión territorial</strong><br>
    2,023 km²<br>
    <strong>Fecha de fiestas patronales</strong><br>
    -31 de Enero<br>
    -25 de Junio<br>
    -01 de Julio<br>
    -25 de Noviembre<br>
    -25 de Diciembre<br>
    <strong>Número de habitantes</strong><br>
    552,938 habitantes<br>`;
    arraydep[0] = prueba;
    actualizador();
} );
pathid8.addEventListener ('mouseover', () =>{
    prueba = `paupau`;
    arraydep[0] = prueba;
    actualizador();
} );
pathid9.addEventListener ('mouseover', () =>{
    prueba = `<h3>Sonsonante</h3>
    <strong>Cabecera departamental</strong><br>
    Sonsonate Centro<br>
    <strong>Extensión territorial</strong><br>
    1,226 km²<br>
    <strong>Fecha de fiestas patronales</strong><br>
    -08 de Enero<br>
    -22 de Enero<br>
    -25 de Enero<br>
    -22 de Mayo<br>
    -19 de Junio<br>
    -23 de Junio<br>
    -01 de Agosto<br>
    -07 de Agosto<br>
    -25 de Agosto<br>
    -07 de Noviembre<br>
    -20 de Noviembre<br>
    <strong>Número de habitantes</strong><br>
    470,455 habitantes<br>
    `;
    arraydep[0] = prueba;
    actualizador();
} );
pathid10.addEventListener ('mouseover', () =>{
    prueba = `tutu`;
    arraydep[0] = prueba;
    actualizador();
} );
pathid11.addEventListener ('mouseover', () =>{
    prueba = `aa`;
    arraydep[0] = prueba;
    actualizador();
});
pathid12.addEventListener ('mouseover', () =>{
    prueba = `aaa`;
    arraydep[0] = prueba;
    actualizador();
});
pathid13.addEventListener ('mouseover', () =>{
    prueba = `aaaaa`;
    arraydep[0] = prueba;
    actualizador();
});
pathid14.addEventListener ('mouseover', () =>{
  
    prueba = `<h3>Ahuachapan</h3>
    <strong>Cabecera departamental</strong><br>
    Ahuachapán Centro<br>
    <strong>Extensión territorial</strong><br>
    1,240 km²<br>
    <strong>Fecha de fiestas patronales</strong><br>
    -05 de Febrero<br>
    -17 de Marzo<br>
    -17 de Julio<br>
    -29 de Noviembre<br>
    -27 de Noviembre<br>
    -15 de Diciembre<br>
    <strong>Número de habitantes</strong><br>
    348,880 habitantes<br>
    `;
    arraydep[0] = prueba;
    actualizador();
});
tituloA();
actualizador();



