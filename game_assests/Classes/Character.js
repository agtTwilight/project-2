class Character {
    constructor(obj) {
        const {id,character_name,race,alignment,magic,health,resistance,defense,accuracy,luck,constitution,exp,level,spell_point,gold,createdAt,updatedAt,UserId,Inventory,Spellbook} = obj
        this.id = id;
        this.character_name = character_name;
        this.race = race;
        this.alignment = alignment;
        this.health = health;
        this.magic = magic;
        this.resistance = resistance;
        this.defense = defense;
        this.accuracy = accuracy;
        this.luck = luck;
        this.constitution = constitution;
        this.exp = exp;
        this.level = level;
        this.spell_point = spell_point;
        this.gold = gold;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.UserId = UserId;
        this.Inventory = Inventory;
        this.Spellbook = Spellbook;
    } 
    
    displayEnemy(){

    }
    
    defeatEnemy(){

    }
    
    displayLoot(){

    }
    
    displayInventory(){

    }
    
    equipItem(){

    }
    
    displaySpells(){

    }
    
    createSpell(){

    }
    
    updateSpell(){

    }
    
    gameOver(){

    }


}

module.exports = Character;