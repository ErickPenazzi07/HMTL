  // //troca de tema para dark para light
  trocaTema = () => {
    // // //sempre conferir button
    // document.querySelector("body").style.background = "pINK"

    document.documentElement.classList.toggle("light");


  const inLight = document.documentElement.classList.contains("light");

  const imagem = inLight ? "./img/homemaranha.jpg" : "./img/miles.jpg"

  document.querySelector("#perfil img").setAttribute("src", imagem)

  const trocaAlt = inLight ? "Imagem de Perfil do tema light" : "Imagem de Perfil do tema black"

  document.querySelector("#perfil img").setAttribute("alt", trocaAlt)
  };
