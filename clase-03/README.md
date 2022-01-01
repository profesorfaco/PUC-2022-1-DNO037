### Diseño y Nuevos Medios → Clase 03 → 23/03/2021

# HTML5 + CSS3 + p5.js

### Teoría

Para comenzar a comprender JavaScript, aprovechamos [p5.js](https://p5js.org/es/): una biblioteca de JavaScript que es una reinterpretación de [Processing](https://processing.org/) para la web. Por tal reinterpretación, lo más común es que tenemos dos funciones, una que se ejecuta una única vez y otra que se ejecuta una y otra vez. 

```
function setup(){
  //colocas acá lo que se ejecuta una única vez
}

function draw(){
  //colocas acá lo que necesitas dibujar una y otra vez
}
```

A estas funciones podemos agregarle una función previa:

```
function preload(){
  //cargas algo antes que se ejecute cualquier cosa
}
function setup(){
  //colocas acá lo que se ejecuta una única vez
}

function draw(){
  //colocas acá lo que necesitas dibujar una y otra vez
}
```

En [las referencias de p5.js](https://p5js.org/es/reference/#/p5/preload), esta función se describe así:

> La función `preload()` es ejecutada antes de `setup()`, es usada para manejar la carga asíncrona de archivos externos. Si se define una función `preload()`, `setup()` esperará hasta que las llamadas a funciones load hayan terminado. Solo se deben incluir instrucciones de carga dentro de `preload()` (`loadImage`, `loadJSON`, `loadFont`, `loadStrings`, etc).


En la clase pasada y en esta también vamos a aprovecharnos de la instrucción de [`loadJSON()`](https://p5js.org/es/reference/#/p5/loadJSON), para obtener [datos de un JSON](https://swapi.dev/api/people/?format=json) que tiene la siguiente estructura:

```
{
"count": 82,
"next": "https://swapi.dev/api/people/?page=2&format=json",
"previous": null,
"results": […] //10 items
}
```

En `results` tenemos un arreglo que contiene 10 ítems. Cada uno de éstos tiene la siguiente estructura:

```
{
"name": "Luke Skywalker",
"height": "172",
"mass": "77",
"hair_color": "blond",
"skin_color": "fair",
"eye_color": "blue",
"birth_year": "19BBY",
"gender": "male",
"homeworld": "https://swapi.dev/api/planets/1/",
"films": […],
"species": […],
"vehicles": […],
"starships": […],
"created": "2014-12-09T13:50:51.644000Z",
"edited": "2014-12-20T21:17:56.891000Z",
"url": "https://swapi.dev/api/people/1/"
}
``` 

Si necesito exclusivamente los `name` dentro de cada uno de los 10 items podría aprovechar dos métodos de JavaScript: 

- El método [`forEach()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) que ejecuta la función indicada una vez por cada elemento del array.

- El método [`push()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/push) que añade uno o más elementos al final de un array y devuelve la nueva longitud del array.

Con tales métodos, y lo que ofrece la biblioteca de p5.js, podemos escribir la siguiente instrucción:

```
var starWars;

function preload() {
    starWars = loadJSON("https://swapi.dev/api/people/?format=json");
}

function setup() {
    var lasOpciones = [];
    starWars.results.forEach((personaje) => lasOpciones.push(personaje.name));
    console.log(lasOpciones);
}

function draw(){
    noCanvas();
}
```

Creo una variable global, de nombre `starWars`. Dentro del `preload()` puedo guardar en tal variable la información que está en línea gracias a [un JSON](https://swapi.dev/api/people/?format=json). Ahora, dentro del `setup()` puedo crear la variable de `lasOpciones` como un arreglo vacío. Luego, tomo la variable `starWars` y dentro de cada ítem dentro de `results` tomo el `name`, para sumarlo al arreglo que antes estaba vacío. Así se obtiene:

```
var lasOpciones = ['Luke Skywalker', 'C-3PO', 'R2-D2', 'Darth Vader', 'Leia Organa', 'Owen Lars', 'Beru Whitesun lars', 'R5-D4', 'Biggs Darklighter', 'Obi-Wan Kenobi']
```

- - - - - - - - - - - - -

### Práctica

Para darle una vuelta a lo recién presentado **es necesario que descarguen lo contenido en la carpeta de esta clase, y hagan algunos ajustes para cumplir con la primera parte del ejercicio; el ejercicio se completa cuando cada estudiante publica, [con GitHub Pages](https://docs.github.com/es/free-pro-team@latest/github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site), [su versión ajustada de un sitio web](https://profesorfaco.github.io/dno037-2022/clase-03).**

El ejercicio completo puede ser evaluado con:

- **0 punto** → no logrado.

- **1 punto** → logrado.

- **2 puntos** → logrado con aporte destacado.

El ejercicio incompleto es evaluado con 0 punto.

- - - - - - - 

###### [← CLASE ANTERIOR](https://github.com/profesorfaco/dno037-2022/tree/main/clase-02) — [SIGUIENTE CLASE →](https://github.com/profesorfaco/dno037-2022/tree/main/clase-04)

