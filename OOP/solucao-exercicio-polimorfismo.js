class Character {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }
    attack() {
        return 'atack with ' + this.weapon
    }
}

class Queen extends Character {
    constructor(name, weapon, type) {
        super(name, weapon)
        this.type = type
    }
    attack() {
        console.log(super.attack()) //super.attack() chama o metodo attack no primeiro nivel acima da cadeia de herança!
        return "I am " + this.name + " of " + this.type + ", now bow down to me"
    }
}
const victoria = new Queen('Victoria', 'army', 'hearts');
console.log(victoria.attack())

// PERGUNTA: e se criarmos uma subclasse de queen mas quisermos acessar apenas o metodo attack de Character? (acredito que há 2 formas de resolver - aguarde os próximos episódios (;)
