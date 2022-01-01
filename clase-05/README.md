### Diseño y Nuevos Medios → Clase 05 → 06/04/2021

# HTML5 + CSS3 + otras bibliotecas de JS

### Teoría

Existen [muchas bibliotecas de JavaScript](https://en.wikipedia.org/wiki/List_of_JavaScript_libraries), además de [p5.js](https://p5js.org/es/). 

Antes de explorar algunas de ellas, nos conviene tener completa claridad respecto de los tipos de datos con los que JavaScript y sus respectivas bibliotecas pueden operar.

Para comenzar a clarificar las cosas, partamos con el número 18261884. 

Si nos entregan tal número, sin contexto alguno, resultaría inútil. Pero es distinto de la siguiente manera: 

| País      |  Población       | Superficie     |
|:----------|:-----------------|:---------------|
| Chile     | 18261884         | 756102         |

Entendiendo cómo funciona una tabla, contamos con una clara orientación para la utilización de tal número como información sobre algo concreto: La población en Chile. 

Además del dato de la población de Chile, contamos con su superficie. Si dividimos el primer dato numérico por el segundo, obtenemos la densidad de la población en Chile. El resultado de aquella división es 24,15267252.

Los números 18261884 y 24,15267252 tienen una diferencia que corresponde apuntar:

- **18261884** es un número entero, un `int` (del inglés *integer*).

- **24,15267252** es un número de coma flotante, un `float` (del inglés *floating point number*; y no se olviden de esta diferencia, lo que para nosotros es coma, *for them* es punto, y el *coding* se hace en *english*).

A estos dos tipos de datos, podemos agregar: 

- **true** o **false** como las dos opciones posibles de un [tipo de dato lógico](https://es.wikipedia.org/wiki/Tipo_de_dato_l%C3%B3gico) (bool: *boolean*)

- **"A"** como un carácter (char: *character*)

- **"ALGUNAS PALABRAS"** como una cadena de caracteres (en inglés: *string*)

¡En el tipo de dato numérico y booleano no se usan comillas, pero cuando se involucran los caracteres aislados o en cadena, sí!

Mencionamos `int`, `float`, `bool`, `char` y `string`, porque son palabras que en lenguajes de programación más clásicos se reservan para **declarar que tal variable almacenará tal tipo de dato. Pero en JavaScript podemos crear toda variables con una única palabra reservada,`var`**. También podemos usar `let` y `const`. Para entender la diferencia, nos conviene consultar el artículo [Var, let y const. ¿Donde, cuando y por qué?](https://medium.com/@tatymolys/var-let-y-const-donde-cuando-y-por-qu%C3%A9-d4a0ee66883b).

Usando únicamente `var`, en JavaScript podemos asignar como contenido de la variable todas las siguientes alternativas:

```
var a = 18261884;
var b = 24.15267252;
var c = true;
var d = "Lisa the Vegetarian";
var e = ["Marge Simpson", "Homer Simpson", "Bart Simpson", "Lisa Simpson", "Maggie Simpson"];
var f = {
    mom: "Luann Van Houten",
    dad: "Kirk Van Houten",
    child: "Milhouse Van Houten"
};
var g = {
    mom: "Marge Simpson",
    dad: "Homer Simpson",
    children: ["Bart Simpson", "Lisa Simpson", "Maggie Simpson"]
};
var h = [
    {
        mom: "Luann",
        dad: "Kirk",
        children: ["Milhouse"]
    },
    {
        mom: "Marge",
        dad: "Homer",
        children: ["Bart", "Lisa", "Maggie"]
    },
    {
        mom: "Manjula",
        dad: "Apu",
        children: ["Poonam", "Sashi", "Pria", "Uma", "Anoop", "Sandeep", "Nabendu", "Gheet"]
    }
];
```
**Lo que cambia viene después del signo igual `=`, que en este caso está asignando contenido a cada variable.** 

Las variables `a`, `b` y `c` no requieren comillas. La variable `d`, que contiene una cadena de caracteres (*string*) sí usa comillas. 

La variable `e`, que contiene un arreglo, usa paréntesis cuadrado y cada elemento, por tratarse de un *string*, usa comillas (si fuesen números o booleanos no las usarían). 

La variable `f`, que contiene un objeto, usa paréntesis de llave que en su interior contiene pares de `nombre:valor`. 

Las variables `g` y `h` son mezclas de las anteriores.

Las variables `f`, `g` y `h` pueden verse como algo que ya hemos usado para intercambiar datos: **JSON (JavaScript Object Notation; Notación de Objetos de JavaScript), un formato ligero de intercambio de datos constituído por dos estructuras**:

- **Una colección de pares de nombre/valor**. En varios lenguajes esto es conocido como un objeto, registro, estructura, diccionario, tabla hash, lista de claves o un arreglo asociativo.

- **Una lista ordenada de valores**. En la mayoría de los lenguajes, esto se implementa como arreglos, vectores, listas o sequencias.

Esas dos estructuras son las que encontramos en la notación original de objetos de JavaScript; **lo que diferencia a JSON de la redacción de un pedazo de Javascript es un par de comillas**: en `var h`, los nombres `mom`, `dad` y `children` no llevan comillas. Pero [en JSON los nombres, del par nombre/valor, sí llevan comillas](https://myjson.dit.upm.es/api/bins/1wo6). 

Para cerrar, recordemos que existen servicios que ofrecen datos en línea. Mucho más útiles que los datos de personajes de [StarWars](https://swapi.dev/api/people/?format=json), pueden ser los datos sobre:

- tiempo atmosférico: https://openweathermap.org/current#current_JSON
- indicadores económicos diarios en Chile: https://mindicador.cl/api
- movimientos telúricos: https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php
- etcétera: https://github.com/juanbrujo/listado-apis-publicas-en-chile

Ustedes pueden hacer pruebas rápidas de consulta a tales servicios con el [editor de p5.js](https://editor.p5js.org/profesorfaco/sketches/611nBVIY2).

- - - - - - - - - 

### Práctica

Ahora es necesario:

- Crear un usuario en [OpenWeather](https://home.openweathermap.org/users/sign_in) y activar su propia API Key.

- Descargar lo contenido en la carpeta de esta clase y personalizarlo.

Recuerden que el ejercicio se completa cuando cada estudiante publica, [con GitHub Pages](https://docs.github.com/es/free-pro-team@latest/github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site), [su versión ajustada de un sitio web](https://profesorfaco.github.io/dno037-2022/clase-05).

El ejercicio completo puede ser evaluado con:

- **0 punto** → no logrado.

- **1 punto** → logrado.

- **2 puntos** → logrado con aporte destacado.

El ejercicio incompleto es evaluado con 0 punto.

- - - - - - -

###### [← CLASE ANTERIOR](https://github.com/profesorfaco/dno037-2022/tree/main/clase-04) — [SIGUIENTE CLASE →](https://github.com/profesorfaco/dno037-2022/tree/main/clase-06)
