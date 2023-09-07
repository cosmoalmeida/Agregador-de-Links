function toggleMode() {
    //Pegando o HTML:
    const html = document.documentElement
    //Fazendo a troca das classes:
    html.classList.toggle("light")
    //Pegando a imagem, mesmo seletor do CSS:
    const img = document.querySelector("#profile img")
    //Substituir a imagem:
    if (html.classList.contains("light")) {
      img.setAttribute('src', './assets/avatar-light.png')
    } else {
      img.setAttribute('src', './assets/avatar.png')
    }
}