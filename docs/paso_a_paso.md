# Guía de Entorno y Comandos (Paso a Paso) - InkWell

Este documento registra las dependencias del sistema operativo y los comandos utilizados para levantar el entorno de desarrollo de **InkWell** en Ubuntu/Linux.


## 1. Dependencias del Sistema Operativo (Ubuntu / Debian)

Tauri utiliza el motor web nativo de Linux (`webkit2gtk`). Antes de compilar el proyecto, instala las librerías base del sistema:

```bash
sudo apt update
sudo apt install -y libwebkit2gtk-4.1-dev \
  build-essential \
  curl \
  wget \
  file \
  libxdo-dev \
  libssl-dev \
  libayatana-appindicator3-dev \
  librsvg2-dev

## 2. Herramientas de Desarrollo (Toolchains)

El proyecto requiere Node.js (para gestionar dependencias del frontend y el CLI de Tauri) y Rust (para compilar el backend nativo)

Node.js (vía nvm)
    curl -o- [https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh](https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh) | bash
    source ~/.bashrc
    nvm install --lts

Rust (vía rustup - Evitar versión antigua de apt)
    sudo apt remove -y rustc cargo
    curl --proto '=https' --tlsv1.2 -sSf [https://sh.rustup.rs](https://sh.rustup.rs) | sh
    source "$HOME/.cargo/env"

Verificación de versiones
    node -v && npm -v
    rustc --version && cargo --version

## 3. Creación e Inicialización del Proyecto
Comandos ejecutados para generar el esqueleto base con Tauri + Vanilla JS:
    # 1. Crear proyecto desde la plantilla oficial
    npm create tauri-app@latest
    # Opciones elegidas:
    # - Project name: inkwell
    # - Identifier: com.adrian.inkwell
    # - Frontend language: TypeScript / JavaScript
    # - Package manager: npm
    # - UI template: Vanilla
    # - UI flavor: JavaScript

    # 2. Entrar al directorio e instalar dependencias de Node
    cd inkwell
    npm install

## 4. Comandos de Uso Diario

    Ejecutar la aplicación en modo desarrollo (con recarga en vivo):
    npm run tauri dev

    Compilar el instalador final para producción (.deb / .AppImage):
    npm run tauri build

## 5. Archivos de Dependencias del Proyecto

    package.json: Dependencias del Frontend y CLI de Tauri.
    src-tauri/Cargo.toml: Dependencias nativas de Rust (crates).
