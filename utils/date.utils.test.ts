import { getHour } from "./date.utils"

test("true should be true", () => {
  expect(true).toBeTruthy()
})

test("getHour", () => {
  expect(getHour(new Date("2000-01-01T02:00:00+0100"))).toBe("02:00")
  expect(getHour(new Date("2000-01-01T12:00:00+0100"))).toBe("12:00")
  expect(getHour(new Date("2000-01-01T23:00:00+0100"))).toBe("23:00")
})