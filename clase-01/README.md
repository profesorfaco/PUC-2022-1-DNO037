### Diseño y Nuevos Medios → Clase 01 → 09/03/2021

# HTML5 + CSS3 + p5.js

### Teoría

Escribir "código fuente" implica describir y/o programar. 

Para reconocer los lenguajes de descripción y programación que son claves para el desarollo de sitios web profesionales o prototipos avanzados de aplicaciones web, trabajaremos con un "editor de código fuente" (puede ser [Atom.io](https://atom.io/) o [Sublime Text](https://www.sublimetext.com/)).

El "editor de código fuente" nos dará indicaciones para poder escribir nuestro "código fuente" con:

- **HTML (HyperText Markup Language)**. Lenguaje estándar que describe la estructura de las páginas web (qué es lo que contiene la página). HTML5 es la versión más reciente de este lenguaje. El bloque constructivo más básico del HTML es el elemento. Cada elemento de HTML se escribe, generalmente, entre etiquetas: `<etiqueta>contenido</etiqueta>` → Podemos complementar esta breve introducción a HTML con una revisión de la página: https://developer.mozilla.org/es/docs/Learn/Getting_started_with_the_web/HTML_basics

- **CSS (Cascading Style Sheets)**. Lenguaje estándar que describe la presentación de las páginas web (cómo se muestra lo que contiene la página). CSS3 es la versión más reciente de este lenguaje. Su unidad más básica es la regla. Cada regla se inicia con un selector, seguido de paréntesis de llave `{…}`. Tal paréntesis contiene un bloque de declaraciones. En tal bloque, cada declaración se separa de otra mediante punto y coma `;`. Una declaración se compone del par `propiedad: valor`. Con todo lo dicho, una regla se escribirá, generalmente, de la siguiente manera: `selector{ propiedad: valor; }`  →  Podemos complementar esta breve introducción a CSS con una revisión de la página: https://developer.mozilla.org/es/docs/Learn/Getting_started_with_the_web/CSS_basics (no es necesario realizar el ejercicio que allí se propone).

- **JS (JavaScript)**. Lenguaje de programación que controla el comportamiento de las páginas web (qué hace la página). Con JS se pueden escribir secuencias de instrucciones con las que una computadora realizará una tarea determinada. Su estructura puede variar dependiendo de la lógica de cada instrucción, la [versión](https://www.w3schools.com/js/js_versions.asp) en uso, la *library* en la que nos apoyemos, o el *framework* de programación en el que se basa el trabajo; podemos imaginar que una *library* como una selección de ingredientes listos para poder preparar determinado tipo de comida, mientras que el *framework* te permite preparar un banquete si es que ya tienes suficiente experiencia en la cocina → Podemos complementar esta breve introducción a JS con una revisión de la página: https://developer.mozilla.org/es/docs/Learn/JavaScript/First_steps/What_is_JavaScript

Los lenguajes de descripción pueden dominarse en un menor tiempo que los lenguajes de programación; HTML puede dominarse tan pronto se memorizan [los elementos HTML](https://developer.mozilla.org/es/docs/Web/HTML/Element) y sus [atributos](https://developer.mozilla.org/es/docs/Web/HTML/Attributes); CSS podría exigir algo más que HTML, porque implica memorizar propiedades, valores y sus unidades, además de [los selectores](https://developer.mozilla.org/es/docs/Web/CSS/CSS_Selectors) (para seleccionar elementos del HTML por tipo, atributo, identidad, clase, pseudoclase y un largo etcétera). 

Pero JavaScript, y la programación en general, puede tomarnos mucho más tiempo; una cosa es escribir descriptores y otra es estructurar instrucciones ajustadas a circunstancias y objetivos:

![meme](https://user-images.githubusercontent.com/7999767/156002975-2dfbf580-f6e2-4bd8-8e40-7110457a4cb4.png)

- - - - - - - - - - - - - - 

### Práctica

Para reconocer los lenguajes mencionados más arriba, podemos aprovechar los documentos contenidos en esta carpeta, comenzando con [index.html](https://github.com/profesorfaco/dno037-2022/blob/main/clase-01/index.html):

Allí podemos ver la estructura típica de toda página HTML: 

```
<!DOCTYPE html>
<html lang="es">
    <head>…</head>
    <body>…</body>
</html>
```

Dentro de la cabeza (`<head></head>`), podemos ver un vínculo a un [style.css](https://github.com/profesorfaco/dno037-2022/blob/main/clase-01/style.css) que revisaremos luego:

```
<link href="style.css" rel="stylesheet" />
```

En las líneas finales del `index.html`, dentro de unas etiquetas de script (`<script></script>`), podemos ver una [variable de JavaScript](https://developer.mozilla.org/es/docs/Learn/JavaScript/First_steps/Variables#%C2%BFqu%C3%A9_es_una_variable); esta variable se llama `palabras` y contiene un arreglo con 8 cadenas de caracteres entre comillas. 

```
var palabras = ["siguiente", "repüyen", "seguente", "suivant", "next", "Nächster", "次の", "다음의"];
```

Cada cadena de caracteres, contenida entre comillas, tiene una posición dentro del arreglo. Las posiciones se identifican con un número, partiendo a la izquierda con el 0. Considerando lo recién dicho, `palabras[0]` refiere a `siguiente` y `palabras[7]` refiere a `다음의` 

El contenido de la variable se aprovecha para programar algo sencillo, a través de [p5.js](https://p5js.org/es/get-started/): una bibliteca de JS que reinterpreta Processing para la Web. Según la analogía de más arriba, esta es como "una selección de ingredientes listos para poder preparar determinado tipo de comida", que podemos encontrar en https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/p5.min.js

Para continuar reconociendo los lenguajes mencionados más arriba, y seguir aprovechando los documentos contenidos en esta carpeta, pasemos a [page.html](https://github.com/profesorfaco/dno037-2022/blob/main/clase-01/page.html), donde hay mucho más líneas de código contenidas entre etiquetas de script (`<script></script>`).

**Llegado a este punto, es necesario que descarguen lo contenido en la carpeta de esta clase, y hagan algunos ajustes para cumplir con la primera parte del ejercicio; el ejercicio se completa cuando cada estudiante publica, [con GitHub Pages](https://docs.github.com/es/free-pro-team@latest/github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site), [su versión ajustada de un sitio web](https://profesorfaco.github.io/dno037-2022/clase-01).**

El ejercicio completo puede ser evaluado con:

- **0 punto** → no logrado.

- **1 punto** → logrado.

- **2 puntos** → logrado, con aporte descatado.

El ejercicio incompleto es evaluado con 0 punto.

| NOMBRE | CUENTA EN GITHUB | EJERCICIO EN GITHUB PAGES |
|:-------|:------------|:------------|
| CATA | https://github.com/catabrtvls | https://catabrtvls.github.io/dno037/clase-1/ |
| MAGDALENA | https://github.com/manealcalder | https://manealcalder.github.io/dno037-clase-1/ |
| SOFÍA | https://github.com/sofialvarez4 | https://sofialvarez4.github.io/dno037-clase-1/ |
| MARÍA EMILIA | — | — |
| ANTONIA | https://github.com/AntoCvP | https://antocvp.github.io/Clase-01/ |
| MATÍAS | https://github.com/mcostaa | https://mcostaa.github.io/Clase1-DNO037/ |
| CATA | https://github.com/catalinadiazg | https://catalinadiazg.github.io/dno0037-clase-1/ |
| PAULA | https://github.com/paulaerrazuriz | https://paulaerrazuriz.github.io/dno037-clase--1 |
| TRINIDAD | https://github.com/Trinidad-Forster | https://trinidad-forster.github.io/Clase1-09-03/ |
| NICOLÁS | https://github.com/NicoGaona | https://nicogaona.github.io/clase-1-nuevos-medios/ |
| FERNANDA | — | — |
| ÁNGELES | https://github.com/angeleshurtado | https://angeleshurtado.github.io/Clase-1/ |
| REGINA | https://github.com/reginalatife | https://reginalatife.github.io/clase1-regina/ |
| JOSEFA  | — | … |
| CLEMENTE | https://github.com/clementemackay | https://clementemackay.github.io/clase-1/ |
| CATALINA | Pendiente | Pendiente |
| DANIELA | https://github.com/danielamejiiasr | https://danielamejiiasr.github.io/dno037-clase-1/ |
| CECILIA | Pendiente | Pendiente |
| ISIDORA | https://github.com/iximillas | https://iximillas.github.io/dno037-clase1/ |
| VICENTE | https://github.com/vicentemunozenr | https://vicentemunozenr.github.io/Diseno-y-nuevos-medios/clase-01/ |
| SEBASTIÁN | — | — |
| ANTONIA | https://github.com/antoniariescoc | https://antoniariescoc.github.io/dno037-clase-1/ |
| CAMILA | — | — |
| DOMINIQUE | https://github.com/domisaezk | https://domisaezk.github.io/dno037-clase-1/ |
| JACINTA | https://github.com/jacintasanchez | https://jacintasanchez.github.io/dno037-clase-1/ |
| IGNACIO | https://github.com/ISQUELLA | https://isquella.github.io/clase-1/ |
| CAMILA | https://github.com/cstrauszer | https://cstrauszer.github.io/clase-01/ |
| SARAH | https://github.com/st4fur | https://st4fur.github.io/Primera-clase/ |
| JUAN | https://github.com/JUAN21TAPIA | https://juan21tapia.github.io/dno037-clase-1/ |
| DUSANKA | https://github.com/dwvalle | https://dwvalle.github.io/Clase-1-/ |
| MARÍA DEL ROSARIO | — | — |

- - - - - - - 

###### [SIGUIENTE CLASE →](https://github.com/profesorfaco/dno037-2022/tree/main/clase-02)
