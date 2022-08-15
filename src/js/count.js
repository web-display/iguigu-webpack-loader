export default function count(...num) {
  return num.reduce((c, n) => c + n, 0)
}