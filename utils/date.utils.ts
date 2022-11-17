export function getHour(date: Date) {
  return new Date(date).toLocaleTimeString("fr-FR", {
    timeStyle: "short",
  })
}