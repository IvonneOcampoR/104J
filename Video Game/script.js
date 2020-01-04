class Character{
    constructor(name,energy,id){
    this.name=name;
    this.energy=energy;
    this.id=id;
    }
    display = function(){
    document.getElementById(this.id).innerHTML=`<p> Name: ${this.name}</p> <p> Energy: ${this.energy} </p> `;
    }
    attack = function(opponent){
    let newEnergy = opponent.energy - 20;
    opponent.energy = newEnergy;
    opponent.display();
    document.getElementById("console").innerHTML=`<p> ${this.name} is attacking ${opponent.name} ... </p>`;
    if(opponent.energy <= 0){
    document.getElementById(opponent.id).innerHTML="<p> You Die <p>"
    document.getElementById("console").innerHTML=`<p>Game Over</p>`;
    }
    }
    }
    
    const character1 = new Character("Yoshi",100,"c1");
    const character2 = new Character("Toad",100,"c2");
    
    character1.display();
    character2.display();
    