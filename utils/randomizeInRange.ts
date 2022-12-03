type range = [number, number]
export const randomizeInRange = ([min, max]: range) => {
  return Math.random() * (max - min) + min
}
