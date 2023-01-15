// let test1 = "test1 git hub";
// let haha = 'test 2 git hub';

// for (let i = 0; i < 9; i++) {
//     console.log(test1);
//     console.log(haha);
// }

class character{
    constructor(hp, mp, energy){
        this.hp = hp;
        this.mp = mp;
        this.energy = energy;
    }

    getPower(){
        return this.hp + this.mp;
    }

    getEnergyPersen(){
        return this.energy * 100;
    }
}

const kazuha = new character(80, 40, 100);

let hello = document.getElementById('konteks');
hello.innerText = `HP : ${kazuha.getPower()}`;


console.log(kazuha.getPower());
console.log(kazuha.getEnergyPersen());