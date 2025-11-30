export const PlayerRole = {
  CITIZEN: 'CITIZEN',
  IMPOSTOR: 'IMPOSTOR'
}

export const PlayerState = {
  ALIVE: 'ALIVE',
  DEATH: 'DEATH'
}

export const getNewPlayer = (name) => {
  return { name: name, role: PlayerRole.CITIZEN, state: PlayerState.ALIVE }
}
