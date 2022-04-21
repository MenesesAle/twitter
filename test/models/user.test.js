const User = require('./../../app/models/user')

describe("Prueba de jest", () => {
  test("Prueba 1", () => {
    const user = new User(1, "Alessandro", "Sandro", "Bio", "dateCreated", "lastUpdate")
    expect(user.id).toBe(1)
  })
})