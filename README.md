# Ecommerce VGStore

_[ESP] Proyecto de e-commerce realizado con React JS, SASS y Firebase_
_[ENG] E-commerce site made with React JS, SASS & Firebase_

## Construido con 🛠️

_Algunas herramientas usadas en el proyecto_

* [React v17.0.1](https://reactjs.org/) - El framework Front-end creado por Facebook
* [React Router v5.2.0](https://reactrouter.com/) - Enrrutador de React
* [SASS](https://sass-lang.com/) - Preprocesador de estilos CSS
* [Firebase](https://firebase.google.com/) - Plataforma de Google para el desarrollo de aplicaciones Web
* [Ant Design](https://ant.design/) - Design System


## Instrucciones para arrancar el proyecto

1. Clonar el repositorio
```sh
git clone https://github.com/lemicba/vg_store.git
```

2. Cambiamos el directorio al de repositorio que acabamos de clonar
```sh
cd vgstores
```

3. Instalamos las dependencias con Yarn:
```sh
npm install
```

4. Creamos el archivo `.env` donde estarán todos los datos de configuración de Firebase:

```dosini
REACT_APP_API_KEY=Aquí-va-tu-apiKey
REACT_APP_AUTH_DOMAIN=Aquí-va-tu-authDomain
REACT_APP_PROJECT_ID=Aquí-va-tu-projectId
REACT_APP_BUCKET=Aquí-va-tu-storageBucket
REACT_APP_MSG_SENDER_ID=Aquí-va-tu-messagingSenderId
REACT_APP_APP_ID=Aquí-va-tu-appId
```

## Scripts disponibles

`npm start`

Para arrancar el proyecto en modo desarrollo. El proyecto estará disponible en [http://localhost:3000](http://localhost:3000) y se recargará automáticamente cada vez que se edite algún archivo, adicionalmente en la consola mostrará los errores de linting.

`npm build`

Compila la aplicación para producción en la carpeta `build`\
Esta versión estará con React en modo de producción con todas las optimizaciones y minificaciones necesarias. Después de compilarla, la aplicación quedará lista para el deploy. 

## Autor ✒️

* **Emiliano Ceballos** - *Desarrollador FrontEnd* -

