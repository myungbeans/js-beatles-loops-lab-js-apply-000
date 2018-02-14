function theBeatlesPlay(musicians, instruments) {
  let playList = []

  for (let i; i < musicians.length; i++) {
    playList.push(`${musicians[i]} plays ${instruments[i]}`);
  }

  return playList
}
