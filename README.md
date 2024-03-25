# 💻 Prueba Cuidadon con el Perro

Applicación de prueba realiza con Next.js

## 🧰 Pre-requisitos

Para poder iniciar el siguiente proyecto se necesita contar las siguientes instalaciones:

-   **[NodeJS](https://nodejs.org/en/download/) :** Es un entorno en tiempo de ejecución multiplataforma, de código abierto, para la capa del servidor basado en el lenguaje de programación, la versión LTS actual es 16.13.1 _ECMAScript_.

-   **[Yarn](https://classic.yarnpkg.com/en/docs/install#debian-stable) :** Es un tipo de instalador de paquetes JavaScript y gestor de dependencias lanzado por _Facebook_.

-   **[IDE]:** Se recomienda el uso de [VisualCode](https://code.visualstudio.com/) con la instalación de los siguientes plugins. [Eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) y [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## ⚙️ Instalación

### 👟 Paso 1

Iniciaremos clonando el repositorio, esto lo podemos hacer se la siguiente manera.

```shell
    git clone git@github.com:Alfredo-Herrera/LoginCms.git
```

> **🔖 Nota :** Es importante recordar que para clonar el repo se tiene que hacer mediante `SSH`, en caso de no saber cómo se pueden seguir las siguiente guía [Connecting to GitHub with SSH](https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh).

### 👟 Paso 2

Procederemos a realizar la instalación de las dependencias que utiliza el proyecto.

```shell
    $ yarn install
```

### 👟 Paso 3

Procederemos a ejecutar el siguiente comando:

```shell
    $ yarn dev
```

### 👟 Paso 4

Genere un archico .env en donde agregue las siguientes variables de entorno.

```shell
   URL_LOGIN=https://app.cuidadoconelperro.com.mx/graphql
```

### 👟 Paso 5

Al levantar el proyecto, podremos ver la `Prueba` en la siguiente `url`, [http://localhost:3000](http://localhost:3000).

## 🔗 Url

[https://shop-cuidado-con-el-perro.vercel.app/](https://shop-cuidado-con-el-perro.vercel.app/)

### 🧐 Como se abordó el problema ?

-   Revisión de la documentación de la API.
-   Generación los archivos necesarios para crear la aplicacion en next.js
-   Se agregaron de los archivos para implementar eslint, prettier, jest, typecript, tailwind Css
-   Generación las páginas de la aplicación
-   Generación de api para consumir el servidor de Graphql
-   Generación de componentes reutilizables
-   Generación de lógica para los componentes
-   Generación de lógica para los formularios
-   Obtención de datos desde la API
-   Generación de cookie para almacenar el token
-   Renderización de los datos de la API
-   Deploy en producción (se agregaron variables de entorno)
-   Corrección de errores

### ✍🏻 Features Adicionales

-   [Module path aliases] En el proyecto se implementó la integración de Module path aliases.
-   [Eslint] En el proyecto se integro Eslint para evitar errores.
-   [Tailwind] En el proyecto se integró la tecnologia Tailwind.
-   [Next.js] En el proyecto se integró Next/GetServerSideProps Next/Link, Next/GetLayout, Next/Image Next/Head .
-   [Cookies] En el proyecto se integró cookies para renderización de paginas.
-   [Alerts] En el proyecto se integraron Notificaciones para darle feedback al usuario cuando sucede un error del lado del servidor.
-   [Forms] En el proyecto se integró react-hook-form para realizar las validaciones de los formularios.
-   [Next.js] Obtención de la información de la API de lado del servidor.
-   [404] En el proyecto se integró la página de 404.
