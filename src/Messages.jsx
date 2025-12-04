import { PlayerRole } from "./Player";

const KILLED_CITIZEN = [
  "Habéis matado a un ciudadano. Buen trabajo, Sherlocks.",
  "Otro inocente al hoyo. Muy bien, equipo.",
  "Ciudadano eliminado. 10/10 en intuición inversa.",
  "Era inocente. Pero oye, la intención es lo que cuenta… ¿no?",
  "Enhorabuena: era ciudadano. Bravo, cracks.",
  "Pues nada, otro inocente fuera. Lo vuestro es un talento natural.",
  "Si seguís así, el impostor ni tiene que jugar.",
  "Muy bien, habéis matado al que no era. Otra vez.",
  "El impostor tomando un café mientras os matáis entre vosotros.",
  "Un ciudadano menos. Igual así pensáis mejor. Spoiler: no."
];

const IMPOSTOR_WIN = [
  "Y vosotros ayudando, básicamente.",
  " Ni disimulando os salváis.",
  "GG EZ.",
  "El impostor os ha toreado como ha querido.",
  "El impostor se ha reído de todos. Literalmente.",
  "Qué shock… nadie lo vio venir, ¿verdad?",
  "Ha ganado sin despeinarse.",
  "Os ha hecho un speedrun.",
  "Habéis perdido. Pero el impostor os lo agradece.",
  "Os manda saludos y un ‘gracias por participar’."
];

const CITIZEN_WIN = [
  "¡Milagro!",
  "Algo habrá salido bien por accidente.",
  "Ciudadanos: 1 — Impositor: 0. Toma ya.",
  "Han ganado los inocentes. Era hora.",
  "No sé cómo, pero oye, bien.",
  "El impostor está llorando en una esquina.",
  "Qué raro se siente esto…",
  "Vais mejorando. Un poco. Muy poco.",
  "Victoria limpia. Casi parece que supierais jugar.",
  "Esto sí que no me lo esperaba."
];

const INTRO = [
  "Uno de vosotros es el impostor. Sí, alguien está mintiendo. Los demás… intentad no hacer el ridículo.",
  "Hay un impostor entre vosotros. No, no es sorpresa. A ver si esta vez acertáis alguna.",
  "Uno es el impostor. Los demás sois víctimas potenciales. ¡A jugar!",
  "Un jugador será el impostor. Buena suerte adivinando quién… visto lo visto, os hará falta.",
  "Hay un impostor. Ya veréis cómo lo liáis en la primera ronda. Pero oye… confiamos en vosotros. Más o menos.",
  "Uno de vosotros va a mentir mejor que los demás. Spoiler: normalmente no.",
  "Hay un impostor. Sí, tú también podrías ser. Pero probablemente no. O sí.",
  "Uno entre vosotros quiere veros caer. Y conociéndoos, no hace falta mucho.",
  "Bienvenidos al juego. Que gane el menos inútil.",
  "El impostor está oculto. Vosotros estáis perdidos. Todo normal."
];

const CITIZEN_ASSIGNMENT = [
  "Eres un simple ciudadano. Qué glamour.",
  "No eres el impostor… vaya, qué sorpresa.",
  "Eres ciudadano. Haz lo que puedas, que tampoco es mucho.",
  "Inocente total. Como tu historial de decisiones. Eres ciudadano.",
  "Te ha tocado ser ciudadano. No te duermas, crack.",
  "Ciudadano otra vez. No llores, podría ser peor.",
  "Eres ciudadano. Así que piensa. O intenta aparentarlo.",
  "No eres el impostor, pero tampoco eres especial. Eres ciudadano.",
  "Eres ciudadano. Observa, sospecha y… bueno, suerte.",
  "Inocente como siempre. Úsalo a tu favor. O no. Eres ciudadano"
];

const PASS_PHONE = [
  "Pásale el móvil a {{player}}. Y no mires, cotilla.",
  "Turno de {{player}}. Los demás, a mirar al techo.",
  "{{player}}, te toca. Los demás, comportaos… por una vez.",
  "Entrega el teléfono a {{player}}. Sí, con cuidado, que es caro.",
  "Pásaselo a {{player}}. Y respira lejos del móvil, gracias.",
  "Ahora es turno de {{player}}. Intentad no romper nada.",
  "Dale el móvil a {{player}}. Y no aproveches para espiar.",
  "{{player}}, ven aquí. Es tu momento… bueno, tu momento raro.",
  "Móvil para {{player}}. Todos los demás, manos quietas.",
  "Es turno de {{player}}. No preguntes, no mires, no pienses."
];

const IMPOSTOR_ASSIGNMENT = [
  "Eres el IMPOSTOR. Intenta no sonreír demasiado.",
  "IMPOSTOR. Ya puedes activar tu modo rata.",
  "Te ha tocado ser impostor. A ver si esta vez no te pillan al minuto.",
  "Eres el impostor. Procura no celebrarlo en voz alta.",
  "IMPOSTOR detectado. Tú sabrás qué haces con ese poder.",
  "Eres el impostor. No lo digas en voz alta, por favor.",
  "Te ha tocado mentir. Como en tu vida diaria, vamos.",
  "Eres el impostor. Que no se te note la cara de culpable.",
  "Impostor. Tu misión: no hacer el ridículo demasiado pronto.",
  "IMPOSTOR MODE: ON. Mucha suerte, la vas a necesitar."
];

export const CHOOSE_PLAYERS_MESSAGES = [
  "Elegid quién juega.",
  "Decid quién se apunta.",
  "¿Quién juega? Decidlo.",
  "Elijan a los valientes.",
  "Marcando jugadores… suerte.",
  "¿Quién participa hoy?",
  "Toca elegir jugadores.",
  "A ver, ¿quién juega?",
  "Seleccionad jugadores.",
  "Jugadores, por favor.",
  "Hora de apuntarse.",
  "Nombraos, si os atrevéis.",
  "Pon los nombres y rezad.",
  "Decid quién entra al caos.",
  "Elegid rápido, que me duermo."
];

export const NAME_PLACEHOLDER_MESSAGES = [
  "Escribe tu nombre, genio.",
  "Venga, piensa un nombre.",
  "Pon tu nombre, máquina…",
  "Nombre aquí, lumbreras.",
  "A ver si sabes escribir.",
  "¿Tu nombre? Sorpréndeme.",
  "Venga crack, tu nombre.",
  "Pon tu nombre, campeón.",
  "Escribe tu nombre bien, por una vez.",
  "No pongas tonterías, escribe tu nombre.",
  "Tu nombre. Sin liarla, por favor.",
  "Nombre… sí, eso que nunca te acuerdas.",
  "Identifícate, figura.",
  "Venga artista, nombre.",
  "Escribe tu nombre, criatura.",
  "Tu nombre aquí, fenómeno.",
  "Pon tu nombre. El real, no el de gamer.",
];

export const WAIT_PLAYERS = [
  "Ya sabéis quiénes sois. O eso creéis. Cuando estéis listos… empezad el caos.",
  "Todos tienen su rol. Ahora mirad a vuestros amigos con sospecha.",
  "Roles entregados. No confiéis en nadie. Ni en vosotros mismos.",
  "Vale, ya sois todos unos expertos en disimular. Cuando queráis, empieza la carnicería.",
  "Fin del reparto de papeles. Empieza el reparto de culpas.",
  "Ya está. Uno de vosotros miente. Descubrid quién… o morid en el intento.",
  "Roles listos. Mirad alrededor y elegid a quién odiar primero.",
  "Perfecto. Un impostor entre vosotros. Cuando estéis listos, que empiece el drama.",
  "Todo listo. Decid mentiras, desconfiad, acusad… lo normal entre amigos.",
  "Roles entregados. A partir de aquí: suerte, intuición… y puñaladas verbales.",
  "Ya podéis empezar la partida. O seguir discutiendo, que también es divertido.",
  "Listo. Uno de vosotros ya está disfrutando demasiado.",
  "Cuando estéis listos para destruir amistades, empezad.",
  "Nada raro. Solo un impostor intentando parecer normal.",
  "OK. Misterio activado. Ahora haced como que sabéis lo que hacéis."
]

export const WORDSETS = [
  "✨ Elegid un tema para romper amistades con estilo.",
  "✨ ¿Qué universo queréis explorar hoy?",
  "✨ Seleccionad categoría… el drama empieza en breve.",
  "✨ Elegid el tema. La tensión está servida.",
  "✨ Tema del día: decididlo juntos. O no, ya veremos.",
  "😂 Seleccionad tema, que tengo prisa por veros discutir.",
  "😂 Elegid categoría. El impostor necesita excusas nuevas.",
  "😂 ¿Qué os apetece adivinar hoy? ¿Animales? ¿Comida? ¿Vuestras vidas?",
  "😂 Elegid un tema. Si falláis, culpad al impostor.",
  "😂 Vamos, elegid lo que sea. De verdad… lo que sea.",
  "😈 Elegid un tema… y que empiece la manipulación.",
  "😈 Escoged el terreno donde el impostor morirá. O no.",
  "😈 Elegid la categoría. El impostor ya está sudando.",
  "😈 Seleccionad vuestro destino. Literalmente.",
  "😈 ¿Qué mentira colectiva os apetece hoy?"
]


function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function replace(template, data) {
  return Object.entries(data).reduce(
    (text, [key, value]) => text.replaceAll(`{{${key}}}`, value),
    template
  );
}

const Messages = {
  random: {
    intro: () => pickRandom(INTRO),
    choosePlayers: () => pickRandom(CHOOSE_PLAYERS_MESSAGES),
    namePlaceholder: () => pickRandom(NAME_PLACEHOLDER_MESSAGES),
    killedCitizen: () => pickRandom(KILLED_CITIZEN),
    getWaitUntilReady: () => pickRandom(WAIT_PLAYERS),
    chooseWordset: () => pickRandom(WORDSETS),
    passPhone: (playerName) =>
      replace(pickRandom(PASS_PHONE), { player: playerName }),
  },

  for(role) {
    return {
      assignment() {
        return role === PlayerRole.CITIZEN
          ? pickRandom(CITIZEN_ASSIGNMENT)
          : pickRandom(IMPOSTOR_ASSIGNMENT);
      },

      win() {
        return role === PlayerRole.CITIZEN
          ? pickRandom(CITIZEN_WIN)
          : pickRandom(IMPOSTOR_WIN);
      },
    };
  },
};

export default Messages;
