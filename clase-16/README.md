### Diseño y Nuevos Medios → Clase 16 → 22/06/2020

# Diseño y desarrollo

**Lo primero** será revisar pesos de imágenes que están usando en REAME.md y style guide. 

Copio/pego un texto escrito para otro curso, al que ya me había referido: :rotating_light:  En lo publicado, varios cometen el mismo error: **Descuidan el peso de las imágenes** :rotating_light: 

Para no repetirlo, por favor revisen: 

- https://helpx.adobe.com/es/photoshop-elements/using/optimizing-images.html

- https://nbadiola.com/peso-ideal-fotografia-para-web/

- https://www.espacios.media/guia-definir-optimizar-imagenes/ 

- https://bluekea.com/blog/fotografia/cual-es-la-resolucion-correcta-para-fotografia-en-web 

- https://www.targetinternet.com/a-complete-guide-to-squoosh-what-is-it-and-how-to-use-it/

En la última referencia mencionada, se describe cómo usar https://squoosh.app/

**Si ustedes construyen algo para la Web con imágenes de peso excesivo: Están abusando de la transferencia de datos en la conexión a Internet de cada visitante**. Esta transferencia puede demorar, y en la demora la imagen no se carga. Luego, quien visita lo construído se decepciona porque no ve nada y en cosa de segundos puede retirarse a otro lugar:

- [Tienes 5 segundos](http://www.tienes5segundos.cl/) se llama un viejo clásico local sobre gestión de contenidos digitales. 

- [5-Second Usability Test](https://www.nngroup.com/videos/5-second-usability-test/) se llama una técnica que permite evaluar la primera impresión de un sitio web. 

**La regla general: Si demora 5 segundos en cargar, no existe. El peso de las imágenes no da lo mismo. No lo descuiden**. 

**Regla para el caso particular, adaptando la idea de [Nahuai Badiola](https://nbadiola.com/peso-ideal-fotografia-para-web/): Que todas las imágenes que deban desplegarse a primera vista en una página (antes del *scroll*) pesen, en conjunto, menos de 1MB (menos de 1024KB)**. 

Pensémoslo con 5 imágenes en un `README.md`: Si son todas similares, podrían considerar que el peso máximo para cada una debe ser de 200kb. Si tienen 3 con pocos detalles y que puedan ser pequeñas, aprovechen de bajarles su peso máximo (hasta 100kb), así pueden agregar dos con mayor peso (hasta 350kb) y aún se mantienen debajo de los 1024KB (1MB)

- - - - - - - - - - - - - - - - - - - 

**Lo segundo** será comenzar el proceso de usar su propio dominio, para ello vuelvo a usar la técnica del [copy/paste](https://github.com/profesorfaco/dno037-2022/tree/main/clase-14):

- [Configurar GitHub Pages para usar dominios.cl](https://ggerena.medium.com/configurar-github-pages-para-usar-dominios-cl-13c1a644699f)

- [Reglamentación para el funcionamiento del Registro de Nombres del Dominio .CL](https://www.nic.cl/normativa/reglamentacion.html)

Y puedes ver parte de estos videos: 

- [Hosteando tu sitio en Github Pages](https://www.youtube.com/watch?v=wyRfN5oLzx4&t=155s)

- [Hosting gratuito con GitHub Pages y dominio personalizado](https://www.youtube.com/watch?v=nbUR1jzVI5g&t=328s)


- - - - - - - - - - - - - - - - - - - -

Teniendo listo lo primero, segundo y tercero, completan 3 puntos para la calificación final, [cuyos detalles encontrarán en Google Drive](https://docs.google.com/spreadsheets/d/1Jq_JWwmwsCHphn6ObXPPuwVcePRhkDPyd5IeEVATWO8/edit?usp=sharing). 

Recuerden que los puntos pendientes se obtienen de una auditoria de la portada de su sitio web profesional o prototipo avanzado de aplicación web. Haré la auditoría con [Google Lighthouse](https://developers.google.com/web/tools/lighthouse?hl=es), lo que implica revisar 4 dimensiones:

- Performance
- Accessibility
- Best Practices
- SEO

Cada dimension en verde es 1 punto. Cada dimensión en amarillo es 0.75 y cada dimensión en rojo es 0.5 

- - - - - - - 

###### [← CLASE ANTERIOR](https://github.com/profesorfaco/dno037-2022/tree/main/clase-15) — [SIGUIENTE CLASE →](https://github.com/profesorfaco/dno037-2022/tree/main/clase-17)
