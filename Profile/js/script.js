function mode() {
    const html = document.documentElement
    html.classList.toggle("dark")

   const img = document.querySelector(".profile img")
   if (html.classList.contains("dark")) {
    img.setAttribute("src", "./img/logodark.png")
    
   } else {
    img.setAttribute("src", "./img/logolight.png")
   }

   console.log(html)
}

