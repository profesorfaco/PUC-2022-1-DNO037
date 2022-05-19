### Diseño y Nuevos Medios → Clase 12 → 25/05/2021

# Bootstrap v5.1

Hoy trabajaremos con dos "themes":

- Ejemplo de Bootstrap --> https://getbootstrap.com/docs/5.1/examples/album/

- Theme de StartBoostrap --> https://startbootstrap.com/theme/landing-page

Tomaremos partes de ambos para generar uno "propio", con:

- el `<header>…</header>` y el `<footer>…</footer>` del ejemplo de Bootstrap.

- las `<section>…</section>` del Theme de StartBootstrap, descartando la que tiene identidad `signup` y modificando la que tiene clase `showcase` y `testimonials`.

**Para la modificación del `showcase` utilizaremos una variable que contendrá un arreglo con los datos a desplegar.**

```
var datos = [
    {
        picsum: "https://picsum.photos/900/600?random=1",
        title: "Fully Responsive Design",
        text: "When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!",
    },
    {
        picsum: "https://picsum.photos/900/600?random=2",
        title: "Updated For Bootstrap 5",
        text: "Newly improved, and full of great utility classes, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5!",
    },
    {
        picsum: "https://picsum.photos/900/600?random=3",
        title: "Easy to Use & Customize",
        text: "Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!",
    }
];

```

Con un [`forEach()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) y un [`if...else`](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/if...else) reconstruiremos la sección:

```
datos.forEach((d,i) => {
    if (i % 2 == 0) {
      // par
    } else {
      // impar
    }
});
```

La condición `(i % 2 == 0)` pregunta si acaso el residuo o resto de la división de `i` por 2 es igual a cero. 

Por lo definido en el `forEach()` ofrecido para copiar, `i` se usa para contar el elemento del arreglo referido como `d` cada vez. Cuando se tiene un arreglo con tres `d`, el valor de `i` es primero `0`, luego `1` y finalmente `2`. En la división de 0 y 2 por 2, el residuo es 0. Por ese residuo 0 sabemos que es par. Y el número que no cumpla la condición es impar.

**Para la modificación del `testimonials` haremos `fetch()` de una *free, open-source API for generating random user data. Like Lorem Ipsum, but for people*:**

```
async function users() {
    const consulta = await fetch("https://randomuser.me/api/?results=3");
    const data = await consulta.json();
    var resultados = data.results;
    console.log(resultados);
}
users().catch((error) => console.error(error));
```
Aprovechemos `picture`, `name` (`first` & `last`), `location`(`city` & `country`) e `email`. Con tales datos, la sección cambiará de un *What people are saying...* a algo como *Contact us*.


- - - - - - - 

#### Ejercicio

El ejercicio se completa cuando cada estudiante publica, [con GitHub Pages](https://docs.github.com/es/free-pro-team@latest/github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

El ejercicio completo puede ser evaluado con:

- **0 punto** → no logrado.

- **1 punto** → logrado.

- **2 puntos** → logrado, con aporte descatado.

El ejercicio incompleto es evaluado con 0 punto.

- - - - - - - 

###### [← CLASE ANTERIOR](https://github.com/profesorfaco/dno037-2022/tree/main/clase-11) — [SIGUIENTE CLASE →](https://github.com/profesorfaco/dno037-2022/tree/main/clase-13)
