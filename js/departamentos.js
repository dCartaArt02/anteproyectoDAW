const arraydep = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor et nisi eu pretium. Vestibulum eros magna, aliquet ut gravida et, vehicula quis risus. Duis at lectus vitae metus maximus sagittis nec et risus. Suspendisse varius nisl egestas, facilisis nisi vitae, condimentum mi. Nullam lectus augue, iaculis in est nec, aliquet dictum metus. Curabitur quis nisl augue. Sed vel consequat leo, et egestas arcu. Ut porttitor vitae nunc a commodo. Suspendisse pulvinar rhoncus egestas. Duis aliquet orci vitae urna tempor, non condimentum ligula dignissim. "];
const contenedorarray = document.getElementById("contenedor");
arraydep.forEach((caca) =>{
    const p = document.createElement("p");
    p.textContent = caca;
    contenedorarray.appendChild(p);
});


