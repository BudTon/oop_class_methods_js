// class Character {
export default class Character {
    constructor(name, type, attack, health, level, defence) {
        this.name = name;
        this.type = type;
        this.health = health;
        this.level = level;
        this.attack = attack;
        this.defence = defence;
    }
    // Вариант 1
    levelUp() {
        if (this.health <= 0) {
            throw new Error(`Error Don't raise the level Unit ${this.name} is DEAD`);
        }
        this.level += 1
        this.health = 100;
        this.attack = Math.ceil(this.attack * 1.2);
        this.defence = Math.ceil(this.defence * 1.2);
    }
    // Вариант 2
    // levelUp(newLevel) {
    //     if (newLevel <= 0) {
    //         throw new Error(`Error недопустимое значение newLevel = ${newLevel}`);
    //     }
    //     this.level += newLevel
    //     this.health = 100;
    //     this.attack *= 1.2 * newLevel;
    //     this.defence *= 1.2 * newLevel;
    // }
    damage(points) {
        if (this.health >= 0) {
            this.health -= Math.ceil(points * (1 - this.defence / 100));
        } else {
            throw new Error(`Error Don't do damage Unit ${this.name} is DEAD`);
        }
    }
}

Character.typeList = [
    { 'Bowerman': { attack: 25, defence: 25 } },
    { 'Swordsman': { attack: 40, defence: 10 } },
    { 'Magician': { attack: 10, defence: 40 } },
    { 'Daemon': { attack: 25, defence: 25 } },
    { 'Undead': { attack: 40, defence: 10 } },
    { 'Zombie': { attack: 10, defence: 40 } },
]

// module.exports = {
//     Character
// }