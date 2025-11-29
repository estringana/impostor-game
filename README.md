# Impostor 👤⚽

Juego social para jugar en grupo donde un móvil actúa como *master* de la partida.

Un jugador es el **impostor** y no conoce el jugador de fútbol secreto; el resto de jugadores sí lo conocen.  
En cada ronda, los jugadores hablan entre ellos y, al final, el grupo decide a quién eliminar.  
Si eliminan al impostor, ganan los ciudadanos. Si el impostor logra llegar al final con solo un ciudadano vivo, gana el impostor.

---

## 🎯 Objetivo del MVP

MVP muy simple, jugable en un único dispositivo:

- Configurar número de jugadores.
- Introducir nombres de los jugadores (o usar nombres por defecto: Jugador 1, Jugador 2, ...).
- Asignar aleatoriamente:
  - 1 impostor.
  - 1 jugador de fútbol secreto de una lista fija.
- Mostrar a cada jugador su rol (ciudadano / impostor) pasando el móvil.
  - Ciudadanos ven el jugador secreto.
  - El impostor solo ve que es impostor.
- Bucle de partida:
  - Los jugadores hablan/pistas fuera de la app.
  - En la app solo se selecciona **a quién eliminar** entre los jugadores vivos.
  - La app comprueba si:
    - Han eliminado al impostor → ganan ciudadanos.
    - Queda solo el impostor + 1 ciudadano → gana el impostor.
    - En otro caso, la partida sigue con otra ronda de eliminación.
- Pantalla final con:
  - Ganador (ciudadanos / impostor).
  - Quién era el impostor.
  - Cuál era el jugador de fútbol secreto.
  - Botón de “Jugar de nuevo”.

**Fuera del MVP (por ahora):**

- Registro de palabras o pistas.
- Gestión automática de turnos de palabra.
- Login / usuarios / online.
- Persistencia de partidas o estadísticas.
- Diseño avanzado, animaciones, avatares, etc.

---

## 🛠 Stack técnico

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/) (template React)
- JavaScript
- Node.js + npm

---

## 🚀 Cómo arrancar el proyecto

Clonar el repo y después:

```bash
npm install
npm run dev