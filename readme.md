# Online Store - BSALE 

<hr>

_Desarrollo, despliegue y uso de una API de **/Consulta de Productos**  de  [BSALE](https://www.bsale.com.pe/).馃挭_

## M贸dulos realizados 馃ぉ

- Creaci贸n y consumo de la [API](https://documenter.getpostman.com/view/22291554/2s7YYr9kHN).
- Carga de productos.
- Filtro de productos por categor铆as.
- B煤squedad de productos por texto ingresado.
- Ordenamiento por precio (mayor o menor).
- Paginaci贸n

_Toda la documentaci贸n y explicaci贸n a detalle, se encuentra dentro de los propios archivos._
_Pase o no pase, 隆Gracias por lo oportunidad!_ 馃檶鈿?

## Backend
El Backend es una API REST que est谩 conectada a una base de datos MySQL. 
Est谩 implementado con NodeJS, Express, Sequelize y MySqli PDO para las conexiones a BD, y evitar las inyecciones sql.

#### Tecnolog铆as usadas
* NodeJS
* Express
* Sequelize
* MySQL2

<hr>


## Frontend
El Frontend se desarroll贸 principalmente con la librer铆a CSS :TailwindCSS, HTML y JavaScript Vanilla. 
Este consume la API REST de Backend, y muestra en pantalla la lista de productos como tarjetas en una lista de 12 productos por p谩gina.

Ofrece al usuario la posibilidad de buscar productos a trav茅s de un campo de entrada y un bot贸n de b煤squedad, filtrar los productos por categor铆a mediante un opci贸n de men煤s en la barra de navegaci贸n y ordenar por precio de menor a mayor, e incluye un filtro de precios seg煤n resultados.

#### Tecnolog铆as usadas
* HTML
* TailwindCSS
* Javascript

<hr>

## C贸mo instalar/ejecutar

### Prerequisitos
- Tener instalado npm-

1. Clonar proyecto, y abrirlo, tendr谩 a disposici贸n la carpeta API(Backend) y CATAL脫GO(Frontend) respectivamente
```
git clone https://github.com/pierre-juarez/product-catalog
cd product-catalog
```
2. Para ejecutar el BACKEND debe abrir la carpeta _backend_ y ejecutar los comandos de instalaci贸n con npm. 
```
cd backend
npm install 
node app
```
3. El proyecto FRONTEND no necesita ninguna instalaci贸n. Solo necesita abrir el archivo _index.html_ con cualquier navegador

<hr>

## Running deployments
* Frontend: https://pierre-juarez.github.io/product-catalog/
* Backend: https://api-product-catalog.herokuapp.com/
* Documentaci贸n API: https://documenter.getpostman.com/view/22291554/2s7YYr9kHN

## Cr茅ditos

鈱笍 Desarrollado y dise帽ado con 鈾ワ笍 por [Pierre Juarez](https://github.com/pierre-juarez) 馃槉