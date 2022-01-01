### Diseño y Nuevos Medios → Clase 07 → 20/04/2021

# HTML5 + CSS3 + otras bibliotecas de JavaScript

### Lectura

Las [bibliotecas de JavaScript](https://en.wikipedia.org/wiki/List_of_JavaScript_libraries) que hemos explorado, son:

- [p5.js](https://p5js.org/es/)

- [Chart.js](https://www.chartjs.org/) – *Simple, clean and engaging HTML5 based JavaScript charts*.

Nos queda por explorar:

- [jQuery](https://jquery.com/) - *A fast, small, and feature-rich JavaScript library*.

- [Papa Parse](https://www.papaparse.com/) - *The powerful, in-browser CSV parser for big boys and girls*

- [Leaflet.js](https://leafletjs.com/) – *The leading open-source JavaScript library for mobile-friendly interactive maps*.


En la clase de hoy nos referiremos a [jQuery](https://jquery.com/).

**[jQuery](https://jquery.com/) es una biblioteca que nos simplifica la redacción de instrucciones en JavaScript, sobre todo cuando se busca manipular el DOM y hacer transiciones animadas**. Su primera versión estable fue lanzada el año 2006, lo que es anterior a la primera revisión importante del [estándar de JavaScript](https://en.wikipedia.org/wiki/ECMAScript), la [ES5 del 2009](https://www.w3schools.com/js/js_es5.asp), con la que se comenzó a simplificar la redacción del mismo lenguaje.

Conviene partir con un ejemplo: En una página web tenemos varios elementos con una clase a la que denominamos "media". Para afectar a todos los elementos que tienen esa clase con un cambio de color desde JavaScript, sin usar bibliotecas, hace algunos años habríamos escrito la siguiente instrucción:

```
var elementos = Array.from(document.getElementsByClassName("media"));
elementos.forEach(function(elemento){
  elemento.style.color="red";
});
```

Pero con el [estándar de JavaScript actual](https://www.w3schools.com/js/js_versions.asp) se simplifica un poco:

```
var elementos = document.querySelectorAll(".media");
elementos.forEach(elemento => elemento.style.color="red");
```

Ahora bien, usando [jQuery](https://jquery.com/), basta con escribir:

```
$(".media").css("color","red");
```

Para la primera década del 2000, [jQuery](https://jquery.com/) ofrecía una simplificación radical en el trabajo con JavaScript. Pero en los años más recientes el mismo lenguaje ha tendido a simplificarse; no conviene perder de vista esta tendencia por prestarle mucha atención a la biblioteca, esto sería casi como olvidar el modo correcto de escribir algunas palabras por prestarle mucha atención a las abreviaciones de mensajería instantánea.

Hecha la advertencia, agreguemos un nivel más al ejemplo para poder entender el uso de la biblioteca: 

```
function enrojece() {
  $(".media").css("color","red");
}
$("#cambio").on("click", enrojece);
```

Tal instrucción está abreviando, mediante [jQuery](https://jquery.com/), lo siguiente:

```
function enrojece(){
  var elementos = document.querySelectorAll(".media");
  elementos.forEach(elemento => elemento.style.color="red");  
}
document.querySelector("#cambio").addEventListener("click", enrojece);
```

Con la última instrucción de jQuery, el cambio de color sobre todos los elementos de clase "media" se hace al presionar el botón de identidad "cambio". Y ya resulta evidente que la clave del uso de [jQuery](https://jquery.com/) está en la concatenación de un selector y una acción: `$(selector).action()`. 

Las opciones de selectores y acciones son descritas detalladamente en https://api.jquery.com/, y de manera muy abreviada en https://htmlcheatsheet.com/jquery/



- - - - - - -


### Exploración

La exploración estará enfocada en jQuery, por lo que conviene tener a la manos las opciones de selectores y acciones que son descritas detalladamente en https://api.jquery.com/, y de manera muy abreviada en https://htmlcheatsheet.com/jquery/


Además, es necesario contar con un editor de código fuente; allí vamos a crear un documento nuevo, pegar el código que sigue y guardarlo con el nombre ejemplo.html:

```
<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="utf-8">
        <title>Esto es un ejemplo</title>
        <style>
            select { margin: 1%; }
            main { display: flex; flex-flow: row wrap; }
            article { width: calc(16% - 2px); padding: 1%; margin: 1%; border: 1px solid black; }
        </style>
    </head>
    <body>
        <select>
            <option selected>Todos</option>
            <option>Pares</option>
            <option>Impares</option>
        </select>
        <main></main>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossorigin="anonymous"></script>
        <script>
            $(document).ready(function () {
                for (var n = 1; n < 11; n++) {
                    if (n % 2 == 0) {
                        $("main").append('<article class="par">' + n + "</article>");
                    } else {
                        $("main").append('<article class="impar">' + n + "</article>");
                    }
                }
                var v;
                $("select").on("change", function () {
                    v = this.value;
                    if (v == "Pares") {
                        $(".par").fadeTo("slow", 1);
                        $(".impar").fadeTo("slow", 0.1);
                    } else if (v == "Impares") {
                        $(".par").fadeTo("slow", 0.1);
                        $(".impar").fadeTo("slow", 1);
                    } else {
                        $(".par, .impar").fadeTo("slow", 1);
                    }
                });
            }); //cierro ready(function(){})
        </script>
    </body>
</html>
```

Podemos abrir este ejemplo.html en Chrome o Firefox. 

- - - - - - -

### Práctica

El ejercicio se completa cuando cada estudiante publica, [con GitHub Pages](https://docs.github.com/es/free-pro-team@latest/github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site), su versión ajustada del sitio web contenido en [esta carpeta de repositorio](https://profesorfaco.github.io/dno037-2022/clase-06/).

El ejercicio completo puede ser evaluado con:

- **0 punto** → no logrado.

- **1 punto** → logrado.

- **2 puntos** → logrado, con aporte descatado.

El ejercicio incompleto es evaluado con 0 punto.

- - - - - - - -

###### [← CLASE ANTERIOR](https://github.com/profesorfaco/dno037-2022/tree/main/clase-06) — [SIGUIENTE CLASE →](https://github.com/profesorfaco/dno037-2022/tree/main/clase-08)
