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


En la clase pasada y en esta también aprovecharmos la instrucción de [`loadJSON()`](https://p5js.org/es/reference/#/p5/loadJSON), y el JSON que aprovechamos tiene la siguiente estructura 

```
{
"count": 82,
"next": "https://swapi.dev/api/people/?page=2&format=json",
"previous": null,
"results": […] //10 items
}
```

Dentro del arreglo `results`, tenemos 10 ítems. Cada uno de ellos tiene la siguiente estructura:

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

Si necesito exclusivamente los nombres de los 10 items podría aprovechar dos métodos de JavaScript: 

- El método [`forEach()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) que ejecuta la función indicada una vez por cada elemento del array.

- El método [`push()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/push) que añade uno o más elementos al final de un array y devuelve la nueva longitud del array.

Con tales métodos y lo que ofrece la biblioteca de p5.js, podría hacer lo siguiente: 

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

Creo una variable global, de nombre `starWars`. Dentro del `preload()` puedo guardar en tal variable la información que está en línea gracias al JSON. Ahora, dentro del `setup()` puedo crear la variable de `lasOpciones` como un arreglo vacío. Luego, tomo la variable `starWars` y le pregunto por los `results` para que cada uno de los `name` en los 10 ítems se sume al arreglo que antes estaba vacío:

```
var lasOpciones = ['Luke Skywalker', 'C-3PO', 'R2-D2', 'Darth Vader', 'Leia Organa', 'Owen Lars', 'Beru Whitesun lars', 'R5-D4', 'Biggs Darklighter', 'Obi-Wan Kenobi']
```

- - - - - - - - - - - - -

### Práctica


Para darle una vuelta a lo recién presentado y lo que hemos visto hasta esta clase, aprovechemos los contenidos en [esta carpeta](https://github.com/profesorfaco/dno037-2022/blob/main/clase-03).


El ejercicio se completa cuando cada estudiante publica, [con GitHub Pages](https://docs.github.com/es/free-pro-team@latest/github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site), su versión ajustada del sitio web.

El ejercicio completo puede ser evaluado con:

- **0 punto** → no logrado.

- **1 punto** → logrado.

- **2 puntos** → logrado con aporte destacado.

El ejercicio incompleto es evaluado con 0 punto.

- - - - - - - 

###### [← CLASE ANTERIOR](https://github.com/profesorfaco/dno037-2022/tree/main/clase-01) — [SIGUIENTE CLASE →](https://github.com/profesorfaco/dno037-2022/tree/main/clase-03)

