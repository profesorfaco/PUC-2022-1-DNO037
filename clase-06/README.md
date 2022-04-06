### Diseño y Nuevos Medios → Clase 06 → 13/04/2021

# HTML5 + CSS3 + otras bibliotecas de JavaScript

### Teoría

Las [bibliotecas de JavaScript](https://en.wikipedia.org/wiki/List_of_JavaScript_libraries) que exploraremos, además de [p5.js](https://p5js.org/es/), son:

- [Chart.js](https://www.chartjs.org/) – *Simple, clean and engaging HTML5 based JavaScript charts*.

- [jQuery](https://jquery.com/) - *A fast, small, and feature-rich JavaScript library*.

- [Papa Parse](https://www.papaparse.com/) - *The powerful, in-browser CSV parser for big boys and girls*

- [Leaflet.js](https://leafletjs.com/) – *The leading open-source JavaScript library for mobile-friendly interactive maps*.

- - - - - - - - 

Valores numéricos pueden ser visualizados mediante gráficos de [línea](https://www.chartjs.org/docs/latest/charts/line.html), [barra](https://www.chartjs.org/docs/latest/charts/bar.html), [radar](https://www.chartjs.org/docs/latest/charts/radar.html), [torta](https://www.chartjs.org/docs/latest/charts/doughnut.html), [área polar](https://www.chartjs.org/docs/latest/charts/polar.html), [burbujas](https://www.chartjs.org/docs/latest/charts/bubble.html) y [dispersión](https://www.chartjs.org/docs/latest/charts/scatter.html), que son los tipos de gráficos disponibles en una de las bibliotecas de JavaScript recién mencionadas:

**[Chart.js](https://www.chartjs.org/docs/latest/charts/?h=type) nos permite implementar tales gráficos desde su promesa, en inglés de ser *Simple yet flexible JavaScript charting for designers & developers*. Al ubicarse en ese lugar intermedio puede provocar dolores de cabeza en los extremos caricaturizados: muy complejo para *designers* o muy simple para *developers*.** 

Para poder usarlo corresponde reconocer sus partes: 

```
var contexto = document.getElementById('nombre').getContext('2d');
var configuracion = {type: '…', data: {…}, options: {…}}
var chart = new Chart(contexto, configuracion);
```

1. Requiere la creación del contexto 
2. Requiere la configuración de tipo, datos y opciones para el gráfico 
3. Contexto y configuración permiten indicar que en este script vamos a crear un `new Chart()`.

Nos referimos a tres partes. No se trata de tres pasos. También sería válido escribir:

```
new Chart(document.getElementById('nombre').getContext('2d'), {type: '…', data: {…}, options: {…}});
```

Ahora, si necesitamos datos, podemos volver a aprovechar aquellos que se ofrecen en línea, a través de JSON. 

**Pero en esta ocasión no estamos trabajando con p5.js, sólo con la biblioteca de Charts.js, por ello no contamos con [la función loadJSON](https://p5js.org/es/reference/#/p5/loadJSON); ya nos corresponde avanzar al [uso de Fetch](https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch)**.

**Para aprender lo necesario respecto del uso de Fetch, es recomedable tomarse 47 minutos para ver tres videos de Daniel Shifmann**:

- https://youtu.be/tc8DU14qX6I
- https://youtu.be/RfMkdvN-23o
- https://youtu.be/uxf0--uiX0I

Una vez obtenemos los datos mediante el [uso de Fetch](https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch), podemos estructurar los datos obtenidos a la manera que convenga al tipo de gráfico que estemos usando en [Chart.js](https://www.chartjs.org/docs/latest/charts/?h=type).

Podemos tomar datos de un JSON y luego organizarlos para definir lo que corresponda a cada eje en un gráfico de barras. 

```
<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.7.1/chart.min.js" integrity="sha512-QSkVNOCYLtj73J4hbmVoOV6KVZuMluZlioC+trLpewV8qMjsWqlIQvkn1KGX2StWvPMdWGBqim1xlC8krl1EKQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
        <title>Charts.js</title>
    </head>
    <body>
        <canvas id="miGrafico" width="400" height="200"></canvas>
        <script>
            async function todito() {
                const consulta = await fetch("https://swapi.dev/api/people/?page=1&format=json");
                const data = await consulta.json();
                let nombres = [];
                let estaturas = [];
                data.results.forEach((s) => {
                    nombres.push(s.name);
                    estaturas.push(s.height);
                });
                new Chart(document.getElementById("miGrafico").getContext('2d'), {
                    type: "bar",
                    data: {
                        labels: nombres,
                        datasets: [{label: "StarWars", data: estaturas, backgroundColor: "#778"}]
                    }
                });
            }
            todito().catch((error) => console.error(error));
        </script>
    </body>
</html>
```

También podemos tomar los datos de un JSON y contarlos bajo alguna condición, así tener números para graficar que resulten del conteo. Por ejemplo, puedo tomar la información de todos los movimientos telúricos 4.5+ registrados y [compartidos por la USGS](https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php) durante los últimos 7 días. En el JSON no encontramos el detalle de cuántos movimientos telúricos 4.5+ han ocurrido en Chile o Japón, pero podemos encargarle al computador revisar cada registros preguntando si acaso ocurren en un lugar que incluye `Chile` o `Japan` en su nombre:

```
<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.7.1/chart.min.js" integrity="sha512-QSkVNOCYLtj73J4hbmVoOV6KVZuMluZlioC+trLpewV8qMjsWqlIQvkn1KGX2StWvPMdWGBqim1xlC8krl1EKQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
        <title>Charts.js</title>
    </head>
    <body>
        <canvas id="miDona" width="100" height="100"></canvas>
        <script>
            async function todo() {
                //Voy por un JSON
                const consulta = await fetch("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_month.geojson");
                const data = await consulta.json();
                //Declaro variables que parten en cero;
                let chileno = 0; 
                let japones = 0; 
                let otro = 0; 
                //Con un forEach reviso todo el contenido con algunas condiciones
                data.features.forEach(t => {
                    if(t.properties.place.includes("Chile")){
                        chileno = chileno + 1;
                    } else if(t.properties.place.includes("Japan")){
                        japones = japones + 1;
                    } else {
                        otro = otro + 1;
                    }
                });
                //Creo una variable como un arreglo vacío
                var numeros = [];
                //Empujo a la variable los resultados del contador
                numeros.push(chileno,japones,otro);
                var nombres = ["En Chile", "En Japón", "En el resto del mundo"];
                //Los colores los tomé de https://color.adobe.com/es/create/image
                var colores = ["#F24444", "#F29D35", "#52B3D9"]
                //Ahora puedo armar el gráfico
                new Chart(document.getElementById("miDona").getContext('2d'), {
                    type: "doughnut",
                    data: {
                        labels: nombres,
                        datasets: [{label: "Earthquakes", data: numeros, backgroundColor: colores}]
                    }
                });
            }
            todo().catch((error) => console.error(error));
        </script>
    </body>
</html>
```

Así como tomamos datos de un JSON (JavaScript Objecto Notation), también podemos tomarlos desde un CSV (Comma Separated Values) y repetir el proceso de organización para los ejes del gráfico de barras:

```
<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.7.1/chart.min.js" integrity="sha512-QSkVNOCYLtj73J4hbmVoOV6KVZuMluZlioC+trLpewV8qMjsWqlIQvkn1KGX2StWvPMdWGBqim1xlC8krl1EKQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
        <title>Charts.js</title>
    </head>
    <body>
       <canvas id="muchasBarritas" class="my-4"></canvas>
        <script>
            async function visualizacion() {
                const consulta = await fetch("https://raw.githubusercontent.com/MinCiencia/Datos-COVID19/master/output/producto5/TotalesNacionales.csv");
                const data = await consulta.text();
                const filas = data.split("\n");
                const fechas = filas[0].split(",").slice(1);
                const activos = filas[5].split(",").slice(1);
                new Chart(document.querySelector("#muchasBarritas").getContext("2d"), {
                    type: "bar",
                    data: {
                        labels: fechas,
                        datasets: [{ data: activos,  backgroundColor: "#d00" }]
                    },
                    options: {
                        scales: {
                            y: {
                                ticks: {
                                    callback: function (numero) {
                                        return numero.toLocaleString("es-CL");
                                    }
                                }
                            }
                        },
                        plugins: {
                            legend: { display: false },
                            title: { display: true, text: "CASOS ACTIVOS DE COVID-19 EN CHILE" },
                        }
                    }
                })
            }
            visualizacion().cath((error) => console.error(error));
        </script>
    </body>
</html>
```

- - - - - - -

### Práctica

Un gráfico que puede resultar de mayor interés, y actualidad, se puede obtener con

- los [indicadores económicos diarios](https://mindicador.cl/api); y

- un [gráfico de líneas](https://www.chartjs.org/docs/latest/charts/line.html)

Habrá algunos ajustes que podremos resolver con los métodos:

- [`forEach()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/forEach);
- [`Object.values()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object/values);
- [`push()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/push); 
- [`reverse()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse); y 
- [`splice()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/splice).

Además, corresponde tener a mano la [documentación de Charts.js](https://www.chartjs.org/docs/latest/).

El ejercicio se completa cuando cada estudiante publica, [con GitHub Pages](https://docs.github.com/es/free-pro-team@latest/github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site), una versión ajustada del sitio web que está contenido en [esta carpeta del repositorio](https://profesorfaco.github.io/dno037-2022/clase-06/).

El ejercicio completo puede ser evaluado con:

- **0 punto** → no logrado.

- **1 punto** → logrado.

- **2 puntos** → logrado, con aporte descatado.

El ejercicio incompleto es evaluado con 0 punto.

- - - - - - - - - - - -

###### [← CLASE ANTERIOR](https://github.com/profesorfaco/dno037-2022/tree/main/clase-05) — [SIGUIENTE CLASE →](https://github.com/profesorfaco/dno037-2022/tree/main/clase-07)
