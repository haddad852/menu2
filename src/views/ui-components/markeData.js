import namor from 'namor'

const range = len => {
  const arr = []
  for (let i = 0; i < len; i++) {
    arr.push(i)
  }
  return arr
}

const newPerson = () => {
  const statusChance = Math.random()
  return {
    action_test: namor.generate({ words: 1, numbers: 0 }),
    action_vente: namor.generate({ words: 1, numbers: 0 }),
    prix: Math.floor(Math.random() * 30),
    actions_plus: Math.floor(Math.random() * 100),
    progress: Math.floor(Math.random() * 10),
    status:
      statusChance > 0.66
        ? 'AG: augmentation'
        : statusChance > 0.33
        ? 'DN:minimun'
        : 'ST: stable',
  }
}

export default function makeData(...lens) {
  const makeDataLevel = (depth = 0) => {
    const len = lens[depth]
    return range(len).map(d => {
      return {
        ...newPerson(),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
      }
    })
  }

  return makeDataLevel()
}
