

function generateNewPokemon() {
    return {
        "ID": Math.floor(Math.random() * 1000),
        "Name": randomNameGenerator(),
        "Type": randomTypeGenerator(),
        "HP": Math.floor(Math.random() * 100) + 1,
        "Attack": Math.floor(Math.random() * 100) + 1,
        "Defense": Math.floor(Math.random() * 100) + 1,
        "SpecialAttack": Math.floor(Math.random() * 100) + 1,
        "SpecialDefense": Math.floor(Math.random() * 100) + 1,
        "Speed": Math.floor(Math.random() * 100) + 1,
    }
}

function randomTypeGenerator() {
    let types = ["Normal", "Fire", "Water", "Electric", "Grass", "Ice", "Fighting", "Poison", "Ground", "Flying", "Psychic", "Bug", "Rock", "Ghost", "Dragon", "Dark", "Steel", "Fairy"];
    let type1 = types[Math.floor(Math.random() * types.length)];
    let type2 = types[Math.floor(Math.random() * types.length)];
    if (type1 === type2) {
        return type1;
    }
    else {
        return [type1, type2]
    }
}

function randomNameGenerator() {
    let first = ["Alba", "Bella", "Cora", "Dora", "Ella", "Fia", "Gia", "Hera", "Iris", "Juno", "Kora", "Luna", "Mia", "Nora", "Ora", "Pia", "Quinn", "Ria", "Sia", "Tia", "Uma", "Vera", "Willa", "Xia", "Yara", "Zia"];
    let second = ["bella", "cara", "dora", "ella", "fia", "gia", "hara", "ira", "juna", "kara", "luna", "mia", "nora", "ora", "pia", "quinn", "ria", "sia", "tia", "uma", "vera", "willa", "xia", "yara", "zia"];
    let last = ['saur', 'mon', 'dactyl', 'der', 'gon', 'cha', 'chu', 'inu', 'our', 'tiger', 'lion', 'cat', 'dog', 'fish', 'bird', 'bear', 'wolf', 'dragon', 's'];
    let name = "";
    name += first[Math.floor(Math.random() * first.length)];
    name += second[Math.floor(Math.random() * second.length)];
    name += last[Math.floor(Math.random() * last.length)];
    return name;
}

export function generatePokemons(n = 2000) {
    let pokemons = [];
    for (let i = 0; i < n; i++) {
        pokemons.push(generateNewPokemon());
    }
    dataTransformer(pokemons)
    return pokemons;
}

function dataTransformer(pokemons){
    pokemons.map((item) => {item.power = item.Attack +
        item.Defense +
        item.HP +
        item.SpecialAttack +
        item.SpecialDefense +
        item.Speed
        return item
    }
    )
}

console.log(generatePokemons());