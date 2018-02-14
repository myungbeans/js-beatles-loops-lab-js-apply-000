function theBeatlesPlay(musicians, instruments) {
  let playList = []

  for (let i = 0; i < musicians.length; i++) {
    playList.push(`${musicians[i]} plays ${instruments[i]}`);
  }

  return playList
}

function johnLennonFacts(facts) {

  for (let i = 0; i < facts.length; i++) {
    facts[i] = `${i}!!!`
  }
  return facts
}
