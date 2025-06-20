# 🐳 EBIS - Chamo: Curso de Docker

Repositorio del curso completo de Docker que cubre desde conceptos básicos hasta implementaciones full stack con orquestación multi-contenedor.

## 📋 Tabla de Contenidos

- [Acerca del Curso](#-acerca-del-curso)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Días del Curso](#-días-del-curso)
- [Prerrequisitos](#-prerrequisitos)
- [Instalación Global](#-instalación-global)
- [Tecnologías Utilizadas](#-tecnologías-utilizadas)
- [Comandos Útiles](#-comandos-útiles)
- [Recursos Adicionales](#-recursos-adicionales)

## 🎯 Acerca del Curso

Este curso progresivo de Docker está diseñado para enseñar desde los fundamentos hasta implementaciones avanzadas. Cada día construye sobre el conocimiento anterior, proporcionando una comprensión completa de la containerización y orquestación.

### Objetivos de Aprendizaje

- ✅ Dominar los conceptos fundamentales de Docker
- ✅ Implementar aplicaciones web con contenedores
- ✅ Integrar bases de datos y herramientas de administración
- ✅ Desarrollar aplicaciones full stack multi-contenedor
- ✅ Configurar entornos de desarrollo y producción
- ✅ Aplicar mejores prácticas de Docker Compose

## 📁 Estructura del Proyecto

```
EBIS - Chamo/
├── 📄 README.md                    # Este archivo
├── 📂 Día 1/                       # Fundamentos: Nginx + HTML
│   ├── 🐳 docker-compose.yml
│   └── 📂 html/
│       └── 📄 index.html
├── 📂 Día 2/                       # Node.js + Redis
│   ├── 🐳 docker-compose.yml
│   ├── 🐳 Dockerfile
│   ├── 📄 app.js
│   └── 📄 package.json
├── 📂 Día 3/                       # MySQL + phpMyAdmin
│   ├── 🐳 docker-compose.yml
│   └── 📂 init/
│       └── 📄 schema.sql
└── 📂 Día 4/                       # Full Stack: React + Express + PostgreSQL
    ├── 🐳 docker-compose.yml
    ├── 🐳 docker-compose.prod.yml
    ├── 📄 README.md
    ├── 📂 api/
    ├── 📂 frontend/
    └── 📂 db/
```

## 📚 Días del Curso

### 🌟 [Día 1: Fundamentos con Nginx](./Día%201/)

**Objetivo**: Introducción a Docker con un servidor web estático

**Tecnologías**:
- 🌐 Nginx (Alpine)
- 📄 HTML/CSS

**Conceptos Aprendidos**:
- Primeros pasos con Docker Compose
- Volúmenes para archivos estáticos
- Mapeo de puertos
- Configuración básica de servicios

**Ejecución**:
```bash
cd "Día 1"
docker-compose up -d
# Visitar: http://localhost:8080
```

---

### 🚀 [Día 2: Backend con Node.js y Redis](./Día%202/)

**Objetivo**: Crear una API REST con persistencia en Redis

**Tecnologías**:
- 🟢 Node.js + Express
- 🔴 Redis
- 📦 npm

**Conceptos Aprendidos**:
- Construcción de imágenes personalizadas con Dockerfile
- Comunicación entre contenedores
- Variables de entorno
- Persistencia de datos con Redis
- API REST endpoints

**Ejecución**:
```bash
cd "Día 2"
docker-compose up --build
# API: http://localhost:3000
```

**Endpoints**:
- `GET /` - Incrementa y retorna visitas
- `GET /visits` - Obtiene total de visitas

---

### 🗄️ [Día 3: Base de Datos MySQL](./Día%203/)

**Objetivo**: Implementar MySQL con interfaz de administración

**Tecnologías**:
- 🐬 MySQL 8.0
- 🔧 phpMyAdmin
- 🌐 Nginx (opcional)

**Conceptos Aprendidos**:
- Configuración de bases de datos relacionales
- Inicialización automática con scripts SQL
- Herramientas de administración web
- Redes internas vs externas
- Dependencias entre servicios

**Ejecución**:
```bash
cd "Día 3"
docker-compose up -d
# phpMyAdmin: http://localhost:8080
```

**Credenciales**:
- Usuario: `root` / Contraseña: `toortoor`
- Usuario: `usuario` / Contraseña: `clave123`

---

### ⚡ [Día 4: Aplicación Full Stack](./Día%204/)

**Objetivo**: Desarrollo completo con frontend, backend y base de datos

**Tecnologías**:
- ⚛️ React 18
- 🟢 Node.js + Express
- 🐘 PostgreSQL 14
- 🌐 Nginx (producción)

**Conceptos Aprendidos**:
- Orquestación multi-contenedor avanzada
- Configuraciones separadas (dev/prod)
- Live reload en desarrollo
- Builds optimizados para producción
- Redes personalizadas
- Manejo de errores robusto

**Ejecución**:
```bash
cd "Día 4"
# Desarrollo
docker-compose up --build

# Producción
docker-compose -f docker-compose.prod.yml up --build
```

**Servicios**:
- Frontend: http://localhost:3000 (dev) / http://localhost:80 (prod)
- API: http://localhost:8000
- PostgreSQL: localhost:5432 (solo en desarrollo)

## 🛠 Prerrequisitos

### Software Requerido

- **Docker**: versión 20.10 o superior
- **Docker Compose**: versión 2.0 o superior
- **Git**: para clonar el repositorio

### Verificación de Instalación

```bash
# Verificar Docker
docker --version
docker info

# Verificar Docker Compose
docker-compose --version

# Verificar Git
git --version
```

### Instalación (Ubuntu/Debian)

```bash
# Actualizar el sistema
sudo apt update

# Instalar Docker
sudo apt install docker.io docker-compose-plugin

# Agregar usuario al grupo docker
sudo usermod -aG docker $USER

# Reiniciar sesión para aplicar cambios
```

## 🚀 Instalación Global

### 1. Clonar el Repositorio

```bash
git clone <repository-url>
cd "EBIS - Chamo"
```

### 2. Ejecutar Todos los Días (Opcional)

```bash
# Script para ejecutar todos los proyectos
#!/bin/bash

echo "🌟 Iniciando Día 1 (puerto 8080)..."
cd "Día 1" && docker-compose up -d && cd ..

echo "🚀 Iniciando Día 2 (puerto 3000)..."
cd "Día 2" && docker-compose up -d --build && cd ..

echo "🗄️ Iniciando Día 3 (puerto 8081)..."
cd "Día 3" && docker-compose up -d && cd ..

echo "⚡ Iniciando Día 4 (puertos 3001, 8001)..."
cd "Día 4" && docker-compose up -d --build && cd ..

echo "✅ Todos los servicios iniciados!"
echo "Día 1: http://localhost:8080"
echo "Día 2: http://localhost:3000"
echo "Día 3: http://localhost:8081"
echo "Día 4: http://localhost:3001"
```

## 🔧 Tecnologías Utilizadas

### Frontend
- **React 18**: Biblioteca para interfaces de usuario
- **HTML5/CSS3**: Estructura y estilos
- **JavaScript ES6+**: Lógica del frontend

### Backend
- **Node.js**: Runtime de JavaScript
- **Express.js**: Framework web minimalista
- **Nginx**: Servidor web y proxy reverso

### Bases de Datos
- **Redis**: Base de datos en memoria (clave-valor)
- **MySQL 8.0**: Base de datos relacional
- **PostgreSQL 14**: Base de datos relacional avanzada

### Herramientas de Desarrollo
- **Docker**: Plataforma de containerización
- **Docker Compose**: Orquestación multi-contenedor
- **phpMyAdmin**: Administración web de MySQL
- **nodemon**: Live reload para Node.js

## 📝 Comandos Útiles

### Docker Básico

```bash
# Ver contenedores activos
docker ps

# Ver todas las imágenes
docker images

# Limpiar sistema
docker system prune -a

# Ver logs de un contenedor
docker logs <container_name>
```

### Docker Compose

```bash
# Iniciar servicios
docker-compose up -d

# Reconstruir e iniciar
docker-compose up --build

# Detener servicios
docker-compose down

# Ver logs en tiempo real
docker-compose logs -f

# Escalar servicios
docker-compose up --scale web=3
```

### Debugging

```bash
# Acceder a un contenedor
docker-compose exec <service_name> sh

# Ver estado de servicios
docker-compose ps

# Reiniciar un servicio específico
docker-compose restart <service_name>
```

## 🎓 Progresión del Aprendizaje

| Día | Nivel | Conceptos Clave | Dificultad |
|-----|-------|----------------|------------|
| 1 | Básico | Docker Compose, Volúmenes, Puertos | ⭐ |
| 2 | Intermedio | Dockerfile, Multi-contenedor, APIs | ⭐⭐ |
| 3 | Intermedio | Bases de datos, Redes, Dependencias | ⭐⭐⭐ |
| 4 | Avanzado | Full Stack, Prod/Dev, Orquestación | ⭐⭐⭐⭐ |

## 🐛 Solución de Problemas

### Errores Comunes

1. **Puerto en uso**: Cambiar puertos en docker-compose.yml
2. **Permisos**: Agregar usuario al grupo docker
3. **Falta de memoria**: Aumentar recursos de Docker
4. **Conectividad**: Verificar nombres de servicios en redes

### Comandos de Limpieza

```bash
# Detener todos los contenedores
docker stop $(docker ps -aq)

# Eliminar todos los contenedores
docker rm $(docker ps -aq)

# Eliminar volúmenes huérfanos
docker volume prune

# Limpieza completa (¡CUIDADO!)
docker system prune -a --volumes
```

## 📚 Recursos Adicionales

### Documentación Oficial
- [Docker Documentation](https://docs.docker.com/)
- [Docker Compose Reference](https://docs.docker.com/compose/)
- [Dockerfile Best Practices](https://docs.docker.com/develop/dev-best-practices/)

### Tutoriales Recomendados
- [Docker Tutorial for Beginners](https://docker-curriculum.com/)
- [React Official Tutorial](https://reactjs.org/tutorial/tutorial.html)
- [Express.js Guide](https://expressjs.com/en/starter/installing.html)

### Comunidad
- [Docker Community](https://www.docker.com/community)
- [Stack Overflow - Docker](https://stackoverflow.com/questions/tagged/docker)
- [Reddit - r/docker](https://reddit.com/r/docker)

---

## 👨‍💻 Sobre el Curso

**EBIS - Chamo** es un curso práctico diseñado para proporcionar experiencia hands-on con Docker y tecnologías modernas de desarrollo web. Cada día está cuidadosamente estructurado para construir conocimiento de forma progresiva.

### 🎯 Resultados de Aprendizaje

Al completar este curso, los estudiantes serán capaces de:

- Crear y gestionar contenedores Docker
- Diseñar arquitecturas multi-contenedor
- Implementar aplicaciones full stack
- Configurar entornos de desarrollo y producción
- Aplicar mejores prácticas de containerización

---

**¡Feliz aprendizaje! 🚀**

*Para preguntas o sugerencias, consulta la documentación de cada día individual.*
