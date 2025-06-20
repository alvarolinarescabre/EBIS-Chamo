# 🐳 Día 4 - Aplicación Full Stack con Docker

Una aplicación completa de **contador de visitas** que demuestra la orquestación de múltiples servicios usando Docker Compose. Incluye frontend React, API REST con Node.js/Express y base de datos PostgreSQL.

## 📋 Tabla de Contenidos

- [Características](#-características)
- [Tecnologías](#-tecnologías)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Instalación y Configuración](#-instalación-y-configuración)
- [Cómo Ejecutar](#-cómo-ejecutar)
- [Servicios](#-servicios)
- [API Endpoints](#-api-endpoints)
- [Variables de Entorno](#-variables-de-entorno)
- [Solución de Problemas](#-solución-de-problemas)

## ✨ Características

- **Frontend React** con interfaz moderna y responsive
- **API REST** con Express.js para manejo de datos
- **Base de datos PostgreSQL** con persistencia de datos
- **Docker Compose** para orquestación multi-contenedor
- **Live reload** en desarrollo para frontend y backend
- **Configuración separada** para desarrollo y producción
- **Manejo de errores** robusto en toda la aplicación

## 🛠 Tecnologías

- **Frontend**: React 18, HTML5, CSS3
- **Backend**: Node.js, Express.js
- **Base de Datos**: PostgreSQL 14
- **Contenedores**: Docker, Docker Compose
- **Proxy Reverso**: Nginx (en producción)

## 📁 Estructura del Proyecto

```
Día 4/
├── 📄 docker-compose.yml          # Configuración para desarrollo
├── 📄 docker-compose.prod.yml     # Configuración para producción
├── 📄 README.md                   # Este archivo
├── 📄 .gitignore                  # Archivos ignorados por Git
├── 📂 api/                        # Backend API
│   ├── 🐳 Dockerfile.dev          # Dockerfile desarrollo
│   ├── 🐳 Dockerfile.prod         # Dockerfile producción
│   └── 📂 src/
│       ├── 📄 index.js            # Servidor Express
│       └── 📄 package.json        # Dependencias del API
├── 📂 frontend/                   # Frontend React
│   ├── 🐳 Dockerfile.dev          # Dockerfile desarrollo
│   ├── 🐳 Dockerfile.prod         # Dockerfile producción
│   ├── 📄 package.json            # Dependencias React
│   ├── 📂 public/
│   │   └── 📄 index.html          # Template HTML
│   └── 📂 src/
│       ├── 📄 App.js              # Componente principal
│       └── 📄 index.js            # Punto de entrada React
└── 📂 db/
    └── 📂 init/
        └── 📄 schema.sql          # Esquema inicial de la DB
```

## 🚀 Instalación y Configuración

### Prerrequisitos

- [Docker](https://www.docker.com/get-started) (versión 20.10+)
- [Docker Compose](https://docs.docker.com/compose/install/) (versión 2.0+)
- Git (para clonar el repositorio)

### Verificar instalación

```bash
docker --version
docker-compose --version
```

## 🏃‍♂️ Cómo Ejecutar

### Modo Desarrollo

1. **Clonar y navegar al directorio:**
   ```bash
   cd "/home/alinares/Documents/EBIS - Chamo/Día 4"
   ```

2. **Construir y ejecutar todos los servicios:**
   ```bash
   docker-compose up --build
   ```

3. **Ejecutar en segundo plano:**
   ```bash
   docker-compose up -d --build
   ```

4. **Ver logs en tiempo real:**
   ```bash
   docker-compose logs -f
   ```

### Modo Producción

1. **Construir y ejecutar en producción:**
   ```bash
   docker-compose -f docker-compose.prod.yml up --build
   ```

2. **Ejecutar en segundo plano:**
   ```bash
   docker-compose -f docker-compose.prod.yml up -d --build
   ```

### Comandos Útiles

```bash
# Detener todos los servicios
docker-compose down

# Detener y eliminar volúmenes
docker-compose down -v

# Ver estado de los contenedores
docker-compose ps

# Acceder al contenedor del API
docker-compose exec api sh

# Acceder a la base de datos
docker-compose exec db psql -U postgres -d ejemplo

# Reconstruir un servicio específico
docker-compose build frontend
```

## 🌐 Servicios

| Servicio | Desarrollo | Producción | Descripción |
|----------|------------|------------|-------------|
| **Frontend** | http://localhost:3000 | http://localhost:80 | Aplicación React con interfaz de usuario |
| **API** | http://localhost:8000 | http://localhost:8000 | Servidor Express con endpoints REST |
| **Base de Datos** | localhost:5432 | (interno) | PostgreSQL para persistencia de datos |

### Detalles de los Servicios

#### 🎨 Frontend (React)
- **Puerto**: 3000 (dev) / 80 (prod)
- **Live Reload**: ✅ Habilitado en desarrollo
- **Build**: Optimizado para producción con Nginx
- **Variables de Entorno**: Configurable para diferentes APIs

#### 🔧 API (Express.js)
- **Puerto**: 8000
- **Live Reload**: ✅ Habilitado con nodemon
- **Base de Datos**: Conecta automáticamente a PostgreSQL
- **CORS**: Habilitado para desarrollo

#### 🗄️ Base de Datos (PostgreSQL)
- **Puerto**: 5432 (solo expuesto en desarrollo)
- **Usuario**: `postgres`
- **Contraseña**: `rootpass`
- **Base de Datos**: `ejemplo`
- **Inicialización**: Automática con esquema incluido

## 📡 API Endpoints

### GET /visitas
Obtiene el contador actual de visitas.

```bash
curl http://localhost:8000/visitas
```

**Respuesta:**
```json
{
  "contador": 42
}
```

### POST /visitas/incrementar
Incrementa el contador de visitas en 1.

```bash
curl -X POST http://localhost:8000/visitas/incrementar
```

**Respuesta:** `204 No Content`

## 🔧 Variables de Entorno

### Frontend
| Variable | Descripción | Valor por Defecto |
|----------|-------------|-------------------|
| `REACT_APP_API_URL` | URL del API backend | `http://localhost:8000` |
| `NODE_ENV` | Entorno de ejecución | `development` |

### API
| Variable | Descripción | Valor por Defecto |
|----------|-------------|-------------------|
| `DB_HOST` | Host de la base de datos | `db` |
| `DB_USER` | Usuario de PostgreSQL | `postgres` |
| `DB_PASSWORD` | Contraseña de PostgreSQL | `rootpass` |
| `DB_NAME` | Nombre de la base de datos | `ejemplo` |
| `DB_PORT` | Puerto de PostgreSQL | `5432` |
| `PORT` | Puerto del servidor API | `8000` |

## 🐛 Solución de Problemas

### Problemas Comunes

#### ❌ Error: "Puerto ya en uso"
```bash
# Encontrar y detener procesos en el puerto 3000
sudo lsof -ti:3000 | xargs kill -9

# O cambiar el puerto en docker-compose.yml
ports:
  - "3001:3000"  # Cambia 3000 por 3001
```

#### ❌ Error: "Cannot connect to database"
```bash
# Verificar que el contenedor de DB esté ejecutándose
docker-compose ps

# Revisar logs de la base de datos
docker-compose logs db

# Reiniciar solo el servicio de DB
docker-compose restart db
```

#### ❌ Error: "Module not found"
```bash
# Reconstruir los contenedores desde cero
docker-compose down
docker-compose build --no-cache
docker-compose up
```

#### ❌ Frontend no se actualiza en desarrollo
```bash
# Verificar que los volúmenes estén montados correctamente
docker-compose down
docker-compose up --build
```

### Logs y Debugging

```bash
# Ver logs de todos los servicios
docker-compose logs

# Ver logs de un servicio específico
docker-compose logs frontend
docker-compose logs api
docker-compose logs db

# Seguir logs en tiempo real
docker-compose logs -f api
```

### Limpieza del Sistema

```bash
# Eliminar contenedores, redes y volúmenes
docker-compose down -v

# Limpiar imágenes no utilizadas
docker image prune -f

# Limpiar todo el sistema Docker (¡CUIDADO!)
docker system prune -a --volumes
```

## 🔄 Correcciones Realizadas

Durante el desarrollo se corrigieron los siguientes problemas:

1. **🌐 Configuración de redes**: Unificada en una sola red `app-network`
2. **📦 Volúmenes**: Corregidos para live-reload y preservación de node_modules
3. **🐳 Dockerfiles**: Optimizados para cada entorno (dev/prod)
4. **🔧 Variables de entorno**: Agregadas para configuración flexible
5. **⚠️ Manejo de errores**: Mejorado en el frontend con estados de carga
6. **📁 Estructura**: Reorganizada para seguir convenciones de React
7. **📦 Dependencias**: Corregido uso de `npm install` vs `npm ci`
8. **🔗 Conectividad**: Agregado `depends_on` para orden de inicio correcto

## 📝 Notas de Desarrollo

- **Live Reload**: Habilitado para desarrollo tanto en frontend como backend
- **Persistencia**: Los datos se mantienen entre reinicios gracias a volúmenes Docker
- **Networking**: Todos los servicios se comunican a través de la red `app-network`
- **Seguridad**: En producción, la base de datos no está expuesta al host
- **Performance**: Build optimizado para producción con imágenes multi-stage

---

📚 **Recursos Adicionales:**
- [Docker Compose Documentation](https://docs.docker.com/compose/)
- [React Documentation](https://reactjs.org/docs)
- [Express.js Guide](https://expressjs.com/en/guide/routing.html)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
