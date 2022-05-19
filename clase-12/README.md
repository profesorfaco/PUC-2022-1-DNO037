### Diseño y Nuevos Medios → Clase 12 → 25/05/2021

# Bootstrap v5.1

Hoy trabajaremos con dos "themes":

- Ejemplo de Bootstrap --> https://getbootstrap.com/docs/5.1/examples/album/

- Theme de StartBoostrap --> https://startbootstrap.com/theme/landing-page

Tomaremos partes de ambos para generar uno "propio", con:

- el `<header>…</header>` y el `<footer>…</footer>` del ejemplo de Bootstrap.

- las `<section>…</section>` del Theme de StartBootstrap, descartando la que tiene identidad `signup` y modificando la que tiene clase `showcase`.

Para la modificación utilizaremos una variable que contendrá un arreglo con los datos a desplegar.

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
    },
    {
        picsum: "https://picsum.photos/900/600?random=4",
        title: "Lorem ipsum dolor sit amet",
        text: "Phasellus tempus eros massa, in bibendum felis posuere ac. Nullam vestibulum erat metus, vel semper magna congue non. Ut placerat accumsan eros, commodo tempor ante sollicitudin sit amet.",
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

Tan pronto la sección esté operativa, puede agregar más elementos al arreglo.

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
