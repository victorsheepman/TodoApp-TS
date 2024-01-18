
## TodoApp - Documentación de la Aplicación de Tareas
TaskIt es una aplicación simple de gestión de tareas que te permite agregar, completar y eliminar tareas. La aplicación ha sido desarrollada utilizando React para la interfaz de usuario y localStorage para almacenar los datos de las tareas localmente en el navegador. A continuación, encontrarás detalles sobre la estructura del proyecto, las funcionalidades implementadas y cómo ejecutar la aplicación.

## Índice

1. [Estructura del Proyecto](#estructura-del-proyecto)
2. [Componentes](#componentes)
3. [Funcionalidades](#funcionalidades)

## 1. Estructura del Proyecto

La estructura del proyecto es simple y se organiza de la siguiente manera:

- **public**: Contiene archivos estáticos como el ícono de la aplicación.
- **src**
  - **components**: Contiene los componentes de React utilizados en la aplicación.
  - **containers**: Contiene contenedores de componentes.
  - **Db**: Servicios para utilizar Supabase.
  - **reducers**: Contiene los slices, las acciones y el store de la libreria redux.
  - **reducers**: Contiene el modelo de los datos de todo.

## 2. Componentes

La aplicación TaskIt utiliza varios componentes de React para gestionar las tareas y la interfaz de usuario:

- **TodoCheck**: Componente componente del todo utilizando antd.
- **TodoCompleted**: Componente que representa la tarea completada con opcion a eliminar.
- **TodoForm**: Componente que muestra un formulario para agregar nuevas tareas.
- **Tab**: Componente de antd donde se maneja las sectiones de la app.

## 3. Funcionalidades
- **Añadir una Nueva Tarea**: Utiliza la caja de texto en la parte superior de la aplicación para agregar una nueva tarea.
Presiona la tecla "Enter" para confirmar la tarea.

 - **Completar una Tarea**: Haz clic en la casilla de verificación junto a una tarea para marcarla como completada.
La tarea completada se tachará visualmente.
- **Cambiar Entre Todos, Activos y Completados**: Utiliza los botones "All", "Active" y "Completed" en la parte inferior para filtrar las tareas según su estado.
- **Eliminar Tareas Completadas**: En la pestaña "Completed", utiliza el botón "Clear completed" para eliminar todas las tareas completadas.
- **Almacenamiento en Supabase**: Los datos de las tareas se almacenan en una base de datos llamado Supabase.

