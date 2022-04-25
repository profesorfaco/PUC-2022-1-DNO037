### Diseño y Nuevos Medios → Clase 08 → 27/04/2021

# HTML5 + CSS3 + otras bibliotecas de JavaScript

### Teoría

Las [bibliotecas de JavaScript](https://en.wikipedia.org/wiki/List_of_JavaScript_libraries) que hemos explorado, son:

- [p5.js](https://p5js.org/es/) - [p5.js](https://p5js.org/es/) - *Una biblioteca de JavaScript para la programación creativa*.

- [Chart.js](https://www.chartjs.org/) – *Simple, clean and engaging HTML5 based JavaScript charts*.

- [jQuery](https://jquery.com/) - *A fast, small, and feature-rich JavaScript library*.

Nos queda por explorar:

- [Papa Parse](https://www.papaparse.com/) - *The powerful, in-browser CSV parser for big boys and girls*

- [Leaflet.js](https://leafletjs.com/) – *The leading open-source JavaScript library for mobile-friendly interactive maps*.

- - - - - - - - 

En la clase de hoy revisaremos las que quedan pendientes.

**[Papa Parse](https://www.papaparse.com/) nos permite hacer un análisis sintáctico de una estructura de datos contenidos en un archivo [CSV](https://es.wikipedia.org/wiki/Valores_separados_por_comas) para asignarla a una variable en JavaScript. En inglés, y más breve: CSV parsing.**

Con [Papa Parse](https://www.papaparse.com/) podemos simplificar la instrucción para tal análisis con:

```
Papa.parse("https://raw.githubusercontent.com/datasciencedojo/datasets/master/titanic.csv", {
download: true,
header: true,
dynamicTyping: true,
complete: function (respuesta) {…}
})
```

Paso a paso, la instrucción es:

1. En este script vamos a usar `Papa.parse()`.
2. Esta biblioteca irá por el CSV en tal dirección `Papa.parse("https://…",{})`.
3. La misma biblioteca se encargará de descargarlo `download: true,` 
4. tomando la primera línea de valores separados por coma como encabezado `header: true,`
5. cuidando el tipo de dato de las líneas siguientes `dynamicTyping: true,` y
6. cuando se complete corresponde abrir una función `complete: function (respuesta) {…}`.
7. La variable `respuesta` será reconocida dentro de tal función, conteniendo el resultado del análisis sintáctido de aquél CSV como un objeto:

```
{
data: [ ... ],    // parsed data
errors: [ ... ],  // errors encountered
meta: {	... }     // extra parse info
}
```

Cada línea de valores separado por coma pasa a ser un elemento en un arreglo al que nos podemos referir con un `respuesta.data` para comenzar a construir desde allí, como en siguiente ejemplo que pueden copiar, pegar y guardar como `ejemplo-con-chartjs.html`:

```
<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Ejemplar</title>
    </head>
    <body>
        <canvas id="unaDona" width="100" height="100"></canvas>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/PapaParse/5.3.0/papaparse.min.js" integrity="sha512-rKFvwjvE4liWPlFnvH4ZhRDfNZ9FOpdkD/BU5gAIA3VS3vOQrQ5BjKgbO3kxebKhHdHcNUHLqxQYSoxee9UwgA==" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.7.1/chart.min.js" integrity="sha512-QSkVNOCYLtj73J4hbmVoOV6KVZuMluZlioC+trLpewV8qMjsWqlIQvkn1KGX2StWvPMdWGBqim1xlC8krl1EKQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
        <script>
            Papa.parse("https://raw.githubusercontent.com/datasciencedojo/datasets/master/titanic.csv", {
                download: true,
                header: true,
                dynamicTyping: true,
                complete: function (respuesta) {
                    console.log(respuesta.data);
                    var primeraClase = 0;
                    var segundaClase = 0;
                    var terceraClase = 0;
                    respuesta.data.forEach((d) => {
                        if (d.Pclass == 3 && d.Survived == 0) {
                            terceraClase = terceraClase + 1;
                        } else if (d.Pclass == 2 && d.Survived == 0) {
                            segundaClase = segundaClase + 1;
                        } else if (d.Pclass == 1 && d.Survived == 0) {
                            primeraClase = primeraClase + 1;
                        }
                    });
                    new Chart(document.getElementById("unaDona").getContext("2d"), {
                        type: "doughnut",
                        data: {
                            labels: ["Fallecidos de primera clase", "Fallecidos de segunda clase", "Fallecidos de tercera clase"],
                            datasets: [{ label: "Fallecidos", data: [primeraClase, segundaClase, terceraClase], backgroundColor: ["#fed98e", "#d95f0e", "#993404"] }],
                        },
                        options: {
                            plugins: {
                                title: { display: true, text: "CLASISMO TITÁNICO" }
                            }
                        }
                    });
                },
            });
        </script>
    </body>
</html>
```
[Papa Parse](https://www.papaparse.com/) nos resultará de mucha utilidad cada vez que podamos usar un CSV estructurado como el del [Titanic](https://github.com/datasciencedojo/datasets/blob/master/titanic.csv), donde sólo tenemos en la primera fila las indicaciones respecto de lo que sigue.

Para comprender mejor este punto, conviene echarle un vistazo a otros datos que pueden encontrar en la carpeta Drive del Curso: https://docs.google.com/spreadsheets/d/10NT4bLORgxB14kcRa1md4iRa3JnqoOZYkjsH1TGj2Rg/edit?usp=sharing

Sin la primera fila en aquel documento, no podrían interpretar lo que sigue. También notarán que todo nombre en la primera fila podría convertirse, sin problemas, en el índice dentro de un objeto: Porque no parte con un número, no se usan "caracteres extraños" ni hay espacios.

Pueden hacer la prueba de bajar los `datos_para_un_csv` con formato CSV. Luego subir el CSV a un repositorio en GitHub. Cuando esté en GitHub, vayan por el vínculo a su versión *Raw*. Y con ese vínculo completen lo que sigue: 

```
<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Vea la consola</title>
    </head>
    <body>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/PapaParse/5.3.0/papaparse.min.js" integrity="sha512-rKFvwjvE4liWPlFnvH4ZhRDfNZ9FOpdkD/BU5gAIA3VS3vOQrQ5BjKgbO3kxebKhHdHcNUHLqxQYSoxee9UwgA==" crossorigin="anonymous"></script>
        <script>
            Papa.parse("para completarlo debes reemplazando esto con el vínculo al CSV", {
                download: true,
                header: true,
                dynamicTyping: true,
                complete: function (respuesta) {
                    var datos = respuesta.data;
                    console.log(datos);
                }
            });
        </script>
    </body>
</html>
```

Podrían guardar el ejemplo como `ejemplo-con-consola.html`, porque el resultado de la consulta se verá sólo en allí: [Cómo abrir la consola de desarrollador](https://support.monday.com/hc/es/articles/360002197259-C%C3%B3mo-abrir-la-consola-de-desarrollador)

Para que el resultado en consola sea más útil, podríamos aprovechar una función:

```
function guiatura(profesor) {
    let notas = [];
    datos.forEach((t) => {
        if (t.nombre_guia == profesor) {
            notas.push(Number(t.nota_titulo.replace(/,/g, ".")));
        }
    });
    console.log(notas);
    let promedio = notas.reduce((a, b) => a + b, 0) / notas.length;
    let frase = promedio.toFixed(2) + " fue el promedio de notas finales para estudiantes guiados por " + profesor;
    return console.log(frase);
}
guiatura("APELLIDO, N.");
```

El código recién presentado tendría que pegarse justo debajo de `console.log(datos);` y antes del cierre del paréntesis de llave `}`. En el lugar de `"APELLIDO, N."` se tendría que escribir el nombre de la profesora o profesor guía, tal como aparece en la correspondiente columna del CSV.

Si recordamos el ejercicio de la clase recién pasada, donde las opciones de un `<selector></selector>` ofrecían interactividad para la página, podríamos intentar avanzar en la utilidad del código con lo siguiente, que pueden copiar y pegar en un documento nuevo, de nombre `ejemplo-sin-consola.html`:

```
<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Salgamos de la consola</title>
    </head>
    <body>
        <select id="profes" style="margin-bottom: 1rem;">
            <option value="">Guiaturas</option>
            <option value="HERNÁNDEZ, R.">Ricardo Hernández</option>
            <option value="MANNS, P.">Patricia Manns</option>
            <option value="PARADA, M.">Marcela Parada</option>
            <option value="MOLLENHAUER, K.">Katherine Mollenhauer</option>
            <option value="TIRONI, M.">Martín Tironi</option>
        </select>

        <div class="promedio" style="margin-left: 0.5rem;"></div>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/PapaParse/5.3.0/papaparse.min.js" integrity="sha512-rKFvwjvE4liWPlFnvH4ZhRDfNZ9FOpdkD/BU5gAIA3VS3vOQrQ5BjKgbO3kxebKhHdHcNUHLqxQYSoxee9UwgA==" crossorigin="anonymous"></script>
        <script>
            Papa.parse("para completarlo debes reemplazando esto con el vínculo al CSV", {
                download: true,
                header: true,
                dynamicTyping: true,
                complete: function (respuesta) {
                    var datos = respuesta.data;
                    console.log(datos);
                    // mantengamos la función, con un pequeño cambio en el return
                    function guiatura(profesor) {
                        let notas = [];
                        datos.forEach((t) => {
                            if (t.nombre_guia == profesor) {
                                notas.push(Number(t.nota_titulo.replace(/,/g, ".")));
                            }
                        });
                        const promedio = notas.reduce((a, b) => a + b, 0) / notas.length;
                        let frase = promedio.toFixed(2) + " fue el promedio de notas finales de estudiantes guiados por " + profesor;
                        return frase;
                    }
                    // sumemos esto para el selector
                    document.querySelector("#profes").addEventListener("change", function () {
                        var x = this.value;
                        const resultado = document.querySelector(".promedio");
                        if (x !== "") {
                            resultado.textContent = guiatura(x);
                        } else {
                            resultado.textContent = "Seleccione una guiatura…";
                        }
                    });
                },
            });
        </script>
    </body>
</html>
```
Podríamos seguir creciendo desde el `ejemplo-sin-consola.html`. Podríamos, por ejemplo, hacer un listado que muestre nombres de los estudiantes con cada guiatura, acompañada del nombre de su proyecto. Ambos nombres podrían vincular a una página aparte en que se desplieguen *qué* y *para qué* del proyecto.

Dedíquenle un tiempo a pensarlo. Pueden pensarlo grupalmente. No estaría mal revisar otros ejercicios y copiar partes. No hay nada de malo en demorarse o en copiar. 

<img src="https://user-images.githubusercontent.com/7999767/156002975-2dfbf580-f6e2-4bd8-8e40-7110457a4cb4.png" width="300" height="300">

Meme que podríamos complementar con: 

<img src="https://i.redd.it/s2n41qn1wuu11.jpg" width="300" height="200">

Conviene insistir: [Papa Parse](https://www.papaparse.com/) nos resultará de mucha utilidad cada vez que podamos usar un CSV estructurado como el del [Titanic](https://github.com/datasciencedojo/datasets/blob/master/titanic.csv) o estos datos sobre los proyectos de título entregados el segundo semestre de 2021, donde sólo tenemos en la primera fila las indicaciones respecto de lo que sigue.

Para lo ofrecido por el Ministerio de Ciencia sobre el [COVID-19 en Chile](https://github.com/MinCiencia/Datos-COVID19/blob/master/output/producto5/TotalesNacionales.csv), donde la primera columna es tanto o más relevante que la primera fila, conviene seguir usando [el Fetch](https://youtu.be/RfMkdvN-23o) con nuestros "ajustes a manos".

Pero en casos como el siguiente, [Papa Parse](https://www.papaparse.com/) funciona bien:

```
region,lat,lon,boric,kast
"Arica y Parinacota",-18.475,-70.314444,50.58,49.42
"Tarapacá",-20.283333,-69.333333,48.68,51.32
"Antofagasta",-23.644167,-70.410833,59.78,40.22
"Atacama",-27.366667,-70.332222,65.43,34.57
"Coquimbo",-29.907778,-71.254167,63.29,36.71
"Valparaíso",-33.063056,-71.639444,59.30,40.70
"Metropolitana",-33.437778,-70.650278,60.33,39.67
"O'Higgins",-34.371944,-71.124528,57.33,42.67
"Maule",-35.426667,-71.671667,48.96,51.04
"Ñuble",-36.616667,-71.95,41.45,58.55
"Biobío",-36.772778,-73.063056,48.17,51.83
"Araucanía",-38.9,-72.666667,39.86,60.14
"Los Ríos",-39.808333,-73.241667,50.47,49.53
"Los Lagos",-41.471667,-72.936667,50.05,49.95
"Aysén",-45.57,-72.066111,56.26,43.74
"Magallanes",-53.1625,-70.9225,61.29,38.71
```

**Allí tenemos a la primera línea definiendo lo que será contenido en las siguientes: Región de Chile, latitut y longitud para la capital de la región, porcentaje de votos para Boric y porcentajes de votos para Kast.**. 

Con datos de latitud y longitud podemos pasar a [Leaflet.js](https://leafletjs.com/): Una biblioteca de JavasScript que ofrece una alternativa ligera para trabajar con mapas interactivos**. Para usarla necesitamos conocer las coordenadas geográficas de lo que se quiera apuntar para, primero, establecer un centro del mapa y luego hacer las marcas correspondientes. También corresponde decidir por un tipo de mapa a usar: 

- [mapbox/light-v10](https://api.mapbox.com/styles/v1/mapbox/light-v10.html?title=true&access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA#10/-33.47/-70.64); 
- [mapbox/dark-v10](https://api.mapbox.com/styles/v1/mapbox/dark-v10.html?title=true&access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA#10/-33.47/-70.64); 
- [mapbox/streets-v11](https://api.mapbox.com/styles/v1/mapbox/streets-v11.html?title=true&access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA#10/-33.47/-70.64); 
- [mapbox/outdoors-v11](https://api.mapbox.com/styles/v1/mapbox/outdoors-v11.html?title=true&access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA#10/-33.47/-70.64); o 
- [mapbox/satellite-v9](https://api.mapbox.com/styles/v1/mapbox/satellite-v9.html?title=true&access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA#10/-33.47/-70.64).

La creación de un mapa con [Leaflet.js](https://leafletjs.com/) puede verse así:

```
var miMapa = L.map('aqui').setView([-33.4189754,-70.6181116], 12);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', { 
  maxZoom: 17, 
  id: 'mapbox/light-v10', 
  tileSize: 512, 
  zoomOffset: -1 
}).addTo(miMapa);

L.marker([-33.4189754,-70.6181116]).addTo(miMapa).bindPopup("<strong>Escuela de Diseño</strong><br>Campus Lo Contador");
```

En la instrucción hay tres L de [Leaflet.js](https://leafletjs.com/), las que se usan para:

1. Crear un mapa dentro del elemento con la identidad `aqui`. El mapa debe tener en su centro tal coordenada, con un zoom inicial de 12. Y corresponde referir a lo creado como `miMapa`. 
2. Crear una capa aprovechando un mapa de [Mapbox](https://www.mapbox.com/maps/) al que se le podrá hacer un zoom máximo de 17, y agrega esta capa a `miMapa`.
3. Crear un marcador en tal coordenada y agregarlo a `miMapa`. Tal marcador tiene que desplegar un mensaje.

Dos maneras sencillas para encontrar las coordenadas necesarias: 

- En la dirección de Google Maps, son los dos números que siguen después del arroba en `https://www.google.com/maps/@`

- A la derecha del título principal de cada artículo de Wikipedia, en letra azul y pequeña, habitualmente están las coordenadas con vínculo a GeoHack.

- - - - - - - 

### Práctica

El ejercicio se completa cuando cada estudiante publica, [con GitHub Pages](https://docs.github.com/es/free-pro-team@latest/github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site), su versión ajustada del sitio web contenido en [esta carpeta de repositorio](https://profesorfaco.github.io/dno037-2022/clase-08/).

El ejercicio completo puede ser evaluado con:

- **0 punto** → no logrado.

- **1 punto** → logrado.

- **2 puntos** → logrado, con aporte descatado.

El ejercicio incompleto es evaluado con 0 punto.

- - - - - - - 

###### [← CLASE ANTERIOR](https://github.com/profesorfaco/dno037-2022/tree/main/clase-07) — [SIGUIENTE CLASE →](https://github.com/profesorfaco/dno037-2022/tree/main/clase-09)
