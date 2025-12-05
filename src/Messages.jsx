import { PlayerRole } from "./Player";

const KILLED_CITIZEN = [
  "😵 Habéis matado a un ciudadano. Buen trabajo, Sherlocks.",
  "😵 Otro inocente al hoyo. Muy bien, equipo.",
  "😵 Ciudadano eliminado. 10/10 en intuición inversa.",
  "😵 Era inocente. Pero oye, la intención es lo que cuenta… ¿no?",
  "😵 Enhorabuena: era ciudadano. Bravo, cracks.",
  "😵 Pues nada, otro inocente fuera. Lo vuestro es un talento natural.",
  "😵 Si seguís así, el impostor ni tiene que jugar.",
  "😵 Muy bien, habéis matado al que no era. Otra vez.",
  "😵 El impostor tomando un café mientras os matáis entre vosotros.",
  "😵 Un ciudadano menos. Igual así pensáis mejor. Spoiler: no."
];

const KILLED_IMPOSTOR = [
  "😈 Habéis pillado a un impostor… pero aún queda el otro 😈.",
  "😈 Bien, un impostor menos. Ahora a por su amiguito.",
  "😈 Habéis cazado a un impostor. Su socio se está riendo ahora mismo.",
  "😈 Un impostor caído. Queda su socio, que no es mejor que él.",
  "😈 Buen trabajo… habéis matado a un impostor. Aún queda otro suelto.",
  "😈 Un impostor atrapado. El otro sigue haciendo de las suyas.",
  "😈 Habéis acertado por fin: era impostor. Os falta uno. Suerte.",
  "😈 Un impostor cayó. Bueno, uno de ellos. Relajaos lo justo.",
  "😈 Era impostor. Ahora queda su colega pensando cómo liarla.",
  "😈 Habéis eliminado a un impostor. Respira… pero poco.",
  "😈 Impostor al hoyo. Su compañero está afilando el caos.",
  "😈 Buen tiro: era impostor. Ahora queda el que sigue vivo.",
  "😈 Un impostor fuera. El segundo está aplaudiendo desde la sombra.",
]

const IMPOSTOR_SOLO_WIN = [
  "Y vosotros ayudando, básicamente.",
  "Ni disimulando os salváis.",
  "GG EZ.",
  "El impostor os ha toreado como ha querido.",
  "El impostor se ha reído de todos. Literalmente.",
  "Qué shock… nadie lo vio venir, ¿verdad?",
  "Ha ganado sin despeinarse.",
  "Os ha hecho un speedrun.",
  "Habéis perdido. Pero el impostor os lo agradece.",
  "Os manda saludos y un ‘gracias por participar’."
];

const IMPOSTOR_DUO_WIN = [
  "Los dos impostores os han pasado por encima sin esfuerzo.",
  "Dúo maligno 1 — Ciudadanos 0. Fácil.",
  "Entre los dos os han mareado como han querido.",
  "Han ganado a pares. Y vosotros aportando al desastre.",
  "Los impostores han jugado en cooperativo… y aun así os han ganado.",
  "Dos impostores, cero oposición. Muy bien todo.",
  "El dúo impostor se está riendo todavía.",
  "Ni entre todos habéis podido con dos. Bravo.",
  "Os han hecho un combo de impostores y ni lo habéis visto venir.",
  "Dos impostores, dos sonrisas, cero ciudadanos inteligentes. Precioso.",
  "Victoria doble. Derrota colectiva. Buen equilibrio.",
  "Los impostores os han hecho un 2x1. Literalmente.",
  "El dúo maligno ha ganado. Y vosotros contribuyendo, como siempre.",
];

const CITIZEN_WIN = [
  "¡Milagro!",
  "Algo habrá salido bien por accidente.",
  "Ciudadanos: 1 — Gentuza: 0. Toma ya.",
  "Han ganado los inocentes. Era hora.",
  "No sé cómo, pero oye, bien.",
  "El impostor está llorando en una esquina.",
  "Qué raro se siente esto…",
  "Vais mejorando. Un poco. Muy poco.",
  "Victoria limpia. Casi parece que supierais jugar.",
  "Esto sí que no me lo esperaba."
];

const INTRO = [
  "Puede que haya uno… o dos impostores. Alguien miente. Vosotros intentad no hacer el ridículo.",
  "Hay impostor(es) entre vosotros. A ver si esta vez acertáis alguna, por estadística más que nada.",
  "Uno o dos serán impostores. El resto sois víctimas potenciales. ¡A jugar!",
  "Habrá impostor(es). Buena suerte adivinando quién… visto lo visto, os hará falta.",
  "Hay impostor(es) por ahí escondidos. Ya veréis cómo lo liáis en la primera ronda igualmente.",
  "Alguno(s) de vosotros va(n) a mentir mejor que los demás. Spoiler: normalmente no.",
  "Hay impostor(es). Sí, tú también podrías serlo. O no. O sí. Ya tal.",
  "Uno o dos quieren veros caer. Conociéndoos, tampoco hará falta mucho.",
  "Bienvenidos al juego. Que gane el menos inútil, sea quien sea.",
  "Hay impostor(es) ocultos. Vosotros estáis perdidos. Todo normal.",
  "Puede haber dos impostores… pero tranquilos: fallaréis igual.",
  "Uno o dos impostores están listos. Vosotros no tanto.",
  "Impostor(es) en la sala. Esperemos que no sean los listos, porque si no estáis fritos.",
  "Hay impostor(es). Y vosotros. Adivinad quién tiene ventaja.",
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

const IMPOSTOR_ASSIGNMENT_SOLO = [
  "😈 Eres el IMPOSTOR. Intenta no sonreír demasiado.",
  "😈 IMPOSTOR. Ya puedes activar tu modo rata.",
  "😈 Te ha tocado ser impostor. A ver si esta vez no te pillan al minuto.",
  "😈 Eres el impostor. Procura no celebrarlo en voz alta.",
  "😈 IMPOSTOR detectado. Tú sabrás qué haces con ese poder.",
  "😈 Eres el impostor. No lo digas en voz alta, por favor.",
  "😈 Te ha tocado mentir. Como en tu vida diaria, vamos.",
  "😈 Eres el impostor. Que no se te note la cara de culpable.",
  "😈 Impostor. Tu misión: no hacer el ridículo demasiado pronto.",
  "😈 IMPOSTOR MODE: ON. Mucha suerte, la vas a necesitar."
];

const IMPOSTOR_ASSIGNMENT_WITH_PARTNER = [
  "Sois dos impostores. Tu compi 😈 es {{other}}. Intentad no pelearos… mucho.",
  "😈 Eres impostor. Y para colmo te ha tocado {{other}} de compañero. Suerte con eso.",
  "😈 Formáis un dúo maligno tú y {{other}}. No lo celebréis tan fuerte.",
  "😈 Eres uno de los impostores. El otro es {{other}}. Haced como que no os conocéis.",
  "😈 Tú y {{other}} sois los impostores. Probad a no cantar a la primera, gracias.",
  "😈 Sois dos impostores: tú y {{other}}. A ver cuánto tardáis en liarla.",
  "😈 Impostor en pareja. Tu socio es {{other}}. No hagáis el ridículo… demasiado.",
  "😈 Trabajas con {{other}}. Sí, es tu compañero impostor. De nada.",
  "😈 Tú y {{other}} vais juntos en esto. Intentad no hundir el plan al minuto uno.",
  "😈 Sois equipo impostor: tú y {{other}}. El nivel de caos depende de vosotros.",
  "😈 Tu colega impostor es {{other}}. Sed discretos… o al menos fingidlo.",
  "😈 Eres impostor con {{other}}. No os delatéis mutuamente, por favor.",
  "😈 Tú y {{other}} sois los malos de la película. Actuad como si tuvierais cerebro.",
]

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
  "Roles listos. Mirad alrededor y elegid a quién odiar primero.",
  "Todo listo. Decid mentiras, desconfiad, acusad… lo normal entre amigos.",
  "Roles entregados. A partir de aquí: suerte, intuición… y puñaladas verbales.",
  "Ya podéis empezar la partida. O seguir discutiendo, que también es divertido.",
  "Cuando estéis listos para destruir amistades, empezad.",
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

export const HOW_MANY_IMPOSTORS = [
  "¿Cuánta traición queréis añadir hoy?",
  "¿Uno que mienta… o dos para el caos?",
  "¿Queréis una mentira o un dúo profesional del engaño?",
  "Elegid cuántos van a fastidiar la partida hoy.",
  "¿Qué nivel de traición estáis buscando?",
  "¿Queréis un impostor… o un pack familiar?",
  "¿Preferís una mentira o dos, por si acaso?",
  "¿Impostor individual o versión multipack?",
  "¿Cuánta maldad queréis ponerle a la receta?",
  "Seleccionad la cantidad de infiltrados recomendada por expertos (ninguno fiable).",
  "Decidid cuántos impostores queréis entre vosotros… y que empiece el drama.",
  "Elegid el nivel de caos antes de seguir.",
  "¿Partida tranquila o modo festival del engaño?",
  "Elegid cuántos impostores queréis para animar esto.",
  "Un impostor para calentar… o dos para montar espectáculos."
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
    killedImpostor: () => pickRandom(KILLED_IMPOSTOR),
    getWaitUntilReady: () => pickRandom(WAIT_PLAYERS),
    chooseWordset: () => pickRandom(WORDSETS),
    howManyImpostors: () => pickRandom(HOW_MANY_IMPOSTORS),
    passPhone: (playerName) =>
      replace(pickRandom(PASS_PHONE), { player: playerName }),
  },
  for(role) {
    return {
      assignment(otherName = null) {
        if (role === PlayerRole.CITIZEN) {
          return pickRandom(CITIZEN_ASSIGNMENT);
        }

        if (!otherName) {
          return pickRandom(IMPOSTOR_ASSIGNMENT_SOLO);
        }

        return replace(
          pickRandom(IMPOSTOR_ASSIGNMENT_WITH_PARTNER),
          { other: otherName }
        );
      },

      win(impostors = 1) {
        if (role === PlayerRole.CITIZEN)
          return pickRandom(CITIZEN_WIN)

        if (impostors === 1)
          return pickRandom(IMPOSTOR_SOLO_WIN)

        return pickRandom(IMPOSTOR_DUO_WIN)
      },
    };
  },
};

export default Messages;
