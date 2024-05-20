const createColoredLog = (color) => {
  return (...input) => {
    return chalk[color](...input)
  }
}

export const log = {
  white: createColoredLog('white'),
  orangeRed: createColoredLog('orangeRed'),
  fireBrick: createColoredLog('fireBrick'),
  lightGreen: createColoredLog('lightGreen'),
  gold: createColoredLog('gold'),
  hotPink: createColoredLog('hotPink'),
  pink: createColoredLog('pink'),
  deepSkyBlue: createColoredLog('deepSkyBlue')
}
