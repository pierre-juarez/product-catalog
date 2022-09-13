# Online Store - BSALE 

<hr>

_Desarrollo, despliegue y uso de una API de **/Consulta de Productos**  de  [BSALE](https://www.bsale.com.pe/).💪_

## Módulos realizados 🤩

- Creación y consumo de la [API](https://pierre-juarez.github.io/product-catalog/).
- Carga de productos.
- Filtro de productos por categorías.
- Búsquedad de productos por texto ingresado.
- Ordenamiento por precio (mayor o menor).
- Paginación

_Toda la documentación y explicación a detalle, se encuentra dentro de los propios archivos._
_Pase o no pase, ¡Gracias por lo oportunidad!_ 🙌⚡

## Backend
El Backend es una API REST que está conectada a una base de datos MySQL. 
Está implementado con NodeJS, Express, Sequelize y MySqli PDO para las conexiones a BD, y evitar las inyecciones sql.

#### Tecnologías usadas
* NodeJS
* Express
* Sequelize
* MySQL2

<hr>


## Frontend
El Frontend se desarrolló principalmente con la librería CSS :TailwindCSS, HTML y JavaScript Vanilla. 
Este consume la API REST de Backend, y muestra en pantalla la lista de productos como tarjetas en una lista de 12 productos por página.

Ofrece al usuario la posibilidad de buscar productos a través de un campo de entrada y un botón de búsquedad, filtrar los productos por categoría mediante un opción de menús en la barra de navegación y ordenar por precio de menor a mayor, e incluye un filtro de precios según resultados.

#### Tecnologías usadas
* HTML
* TailwindCSS
* Javascript

<hr>

## Cómo instalar/ejecutar

### Prerequisitos
- Tener instalado npm-

1. Clonar proyecto, y abrirlo, tendrá a disposición la carpeta API(Backend) y CATALÓGO(Frontend) respectivamente
```
git clone https://github.com/pierre-juarez/product-catalog
cd product-catalog
```
2. Para ejecutar el BACKEND debe abrir la carpeta _backend_ y ejecutar los comandos de instalación con npm. 
```
cd backend
npm install 
node app
```
3. El proyecto FRONTEND no necesita ninguna instalación. Solo necesita abrir el archivo _index.html_ con cualquier navegador

<hr>

## Running deployments
* Frontend: https://pierre-juarez.github.io/product-catalog/
* Backend: https://api-product-catalog.herokuapp.com/

## Créditos

⌨️ Desarrollado y diseñado con ♥️ por [Pierre Juarez](https://github.com/pierre-juarez) 😊