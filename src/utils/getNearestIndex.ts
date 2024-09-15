export const getNearestIndex = (
  currentPosition: number,
  sections: HTMLElement[],
  startIndex: number,
  endIndex: number,
): number => {
  if (startIndex === endIndex) return startIndex
  else if (startIndex === endIndex - 1) {
    if (
      Math.abs(sections[startIndex].offsetTop - currentPosition) <
      Math.abs(sections[endIndex].offsetTop - currentPosition)
    )
      return startIndex
    else return endIndex
  } else {
    var nextNearest = ~~((startIndex + endIndex) / 2)
    var a = Math.abs(
      sections[nextNearest].offsetTop - currentPosition
    )
    var b = Math.abs(
      sections[nextNearest + 1].offsetTop - currentPosition
    )

    if (a < b) {
      return getNearestIndex(currentPosition, sections, startIndex, nextNearest)
    } else {
      return getNearestIndex(currentPosition, sections, nextNearest, endIndex)
    }
  }
}
