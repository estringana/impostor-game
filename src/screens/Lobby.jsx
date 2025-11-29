function Lobby({createGame}) {
  return (
    <>
      <button onClick={() => createGame()}>Jugar nueva partida</button>
    </>
  )
}

export default Lobby
