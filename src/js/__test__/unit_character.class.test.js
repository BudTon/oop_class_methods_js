/* eslint-disable no-undef */
import UnitCharacter from "../unit_character.class";

test.each([
    [[
        { name: 'Tor', type: 'Bowerman' }
    ], [
        { "attack": 25, "defence": 25, "health": 100, "level": 1, "name": "Tor", "type": "Bowerman" }
    ]],
])('testing sortListUnit', (listUtit, expected) => {
    new UnitCharacter(listUtit[0].name, listUtit[0].type)
    const result = [new UnitCharacter(listUtit[0].name, listUtit[0].type)];
    expect(result).toEqual(expected);
});

test("Test description Name", () => {
    const listUtit = [{ name: 'T', type: 'Magician' }];
    const result = () => {
        new UnitCharacter(listUtit[0].name, listUtit[0].type);
    };
    expect(result).toThrow(Error);
});

test("Test description Type", () => {

    const listUtit = [{ name: 'Tor', type: 'Magic' }];
    const result = () => {
        new UnitCharacter(listUtit[0].name, listUtit[0].type);
    };
    expect(result).toThrow(Error);
});

test("Test method levelUp", () => {
    const tor = new UnitCharacter('Tor', 'Magician')
    const expected = { "attack": 12, "defence": 48, "health": 100, "level": 2, "name": "Tor", "type": "Magician" };
    tor.levelUp()
    const result = tor
    expect(result).toEqual(expected);
});

test("Test description Type", () => {
    const result = () => {
        const tor = new UnitCharacter('Tor', 'Magician')
        tor.health = -1
        tor.levelUp()
    };
    expect(result).toThrow(Error);
});

test("Test method levelUp", () => {
    const tor = new UnitCharacter('Tor', 'Magician')
    const expected = 40;
    const points = 100
    tor.damage(points)
    const result = tor.health
    expect(result).toBe(expected);
});

test("Test description Type", () => {
    const result = () => {
        const tor = new UnitCharacter('Tor', 'Magician')
        tor.health = -1
        const points = 100
        tor.damage(points)
    };
    expect(result).toThrow(Error);
});
