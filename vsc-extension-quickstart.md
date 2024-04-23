# Welcome to your Visual Studio Code Extension

## What's in the folder

* This folder contains all of the files necessary for your extension.
* `package.json` - this is the manifest file where you declare your extension and command.
  * The template registers a command and defines its title and command name. With this information, VS Code can show the command in the command palette.
* `src/extension.ts` - this is the main file where you will provide the implementation of your command.
  * The file exports a function, `activate`, which is called the very first time your extension is activated. Inside the `activate` function, we call `registerCommand` to register the command.

## Setup

* Install the recommended extensions (amodio.tsl-problem-matcher, ms-vscode.extension-test-runner, and dbaeumer.vscode-eslint).

## Get up and running straight away

* Press `F5` to open a new window with your extension loaded.
* Run your command from the command palette by pressing (`Ctrl+Shift+P` or `Cmd+Shift+P` on Mac) and typing `Hello World`.
* Set breakpoints in your code inside `src/extension.ts` to debug your extension.
* Find output from your extension in the debug console.

## Make changes

* You can relaunch the extension from the debug toolbar after changing code in `src/extension.ts`.
* You can also reload (`Ctrl+R` or `Cmd+R` on Mac) the VS Code window with your extension to load your changes.

## Go further

* Explore the full VS Code API to add more functionalities to your extension.
* Reduce the extension size and improve the startup time by [bundling your extension](https://code.visualstudio.com/api/working-with-extensions/bundling-extension).
* [Publish your extension](https://code.visualstudio.com/api/working-with-extensions/publishing-extension) on the VS Code extension marketplace.
* Automate builds by setting up [Continuous Integration](https://code.visualstudio.com/api/working-with-extensions/continuous-integration).

---

# Bienvenido a tu Extensión para Visual Studio Code

## Contenido de la Carpeta

* Esta carpeta contiene todos los archivos necesarios para tu extensión.
* `package.json` - este es el archivo de manifiesto donde declaras tu extensión y comando.
  * La plantilla registra un comando y define su título y nombre de comando. Con esta información, VS Code puede mostrar el comando en el paquete de comandos.
* `src/extension.ts` - este es el archivo principal donde proporcionarás la implementación de tu comando.
  * El archivo exporta una función, `activate`, que se llama la primera vez que tu extensión es activada. Dentro de la función `activate`, llamamos a `registerCommand` para registrar el comando.

## Configuración

* Instala las extensiones recomendadas (amodio.tsl-problem-matcher, ms-vscode.extension-test-runner y dbaeumer.vscode-eslint).

## Empezar a trabajar de inmediato

* Presiona `F5` para abrir una nueva ventana con tu extensión cargada.
* Ejecuta tu comando desde el paquete de comandos presionando (`Ctrl+Shift+P` o `Cmd+Shift+P` en Mac) y escribiendo `Hello World`.
* Establece puntos de interrupción en tu código dentro de `src/extension.ts` para depurar tu extensión.
* Encuentra la salida de tu extensión en la consola de depuración.

## Realizar cambios

* Puedes reiniciar la extensión desde la barra de herramientas de depuración después de cambiar el código en `src/extension.ts`.
* También puedes recargar (`Ctrl+R` o `Cmd+R` en Mac) la ventana de VS Code con tu extensión para cargar tus cambios.

## Ir más allá

* Explora la API completa de VS Code para agregar más funcionalidades a tu extensión.
* Reduce el tamaño de la extensión y mejora el tiempo de inicio [empaquetando tu extensión](https://code.visualstudio.com/api/working-with-extensions/bundling-extension).
* [Publica tu extensión](https://code.visualstudio.com/api/working-with-extensions/publishing-extension) en el mercado de extensiones de VS Code.
* Automatiza los builds configurando la [Integración Continua](https://code.visualstudio.com/api/working-with-extensions/continuous-integration).
