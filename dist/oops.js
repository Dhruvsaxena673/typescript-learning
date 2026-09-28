/* class Chai{
  flavour:string;
  price:number;

  constructor(flavour:string,price:number){
    this.flavour=flavour;
    this.price=price;
  }

  constructor(flavour:string){
    this.flavour=flavour;
    console.log(this);
  }
}

const masalaChai=new Chai("Ginger");
masalaChai.flavour="masala"

 */
// assess modifier
class Chai {
    flavor = "Masala";
    secretIngredients = "Cardamom";
    reveal() {
        return this.secretIngredients;
    }
}
class Shop {
    shopName = "Chai corner";
}
class Branch extends Shop {
    getName() {
        return this.shopName; //OK
    }
}
// # same as private
class Wallet {
    #balance = 100;
    getBalance() {
        return this.#balance;
    }
}
const w = new Wallet();
// readonly property
class Cup {
    capacity = 250;
    constructor(capacity) {
        this.capacity = capacity;
    }
}
// getter and setter
class ModernChai {
    _sugar = 2;
    get sugar() {
        return this._sugar;
    }
    set sugar(value) {
        if (value > 5)
            throw new Error("Too sweet");
        this._sugar = value;
    }
}
const c = new ModernChai();
c.sugar = 3;
class EkChai {
    flavour;
    static shopName = "Chaicode caffe";
    constructor(flavour) {
        this.flavour = flavour;
    }
}
console.log(EkChai.shopName);
class Drink {
}
class MyChai extends Drink {
    prepare() {
        console.log("making");
    }
}
class Heater {
    heat() { }
}
class ChaiMaker {
    heater;
    constructor(heater) {
        this.heater = heater;
    }
    make() {
        this.heater.heat;
    }
}
export {};
//# sourceMappingURL=oops.js.map