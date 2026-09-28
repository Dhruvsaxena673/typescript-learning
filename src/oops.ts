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
    public flavor: string = "Masala"

    private secretIngredients = "Cardamom"

    reveal(){
      return this.secretIngredients;
    }

}

class Shop {
    protected shopName = "Chai corner"
}

class Branch extends Shop {
    getName(){
        return this.shopName //OK
    }
}

// # same as private

class Wallet{
    #balance = 100

    getBalance(){
        return this.#balance
    }
}

const w = new Wallet()

// readonly property

class Cup {
    readonly capacity: number = 250

    constructor(capacity: number){
        this.capacity = capacity
    }
}

// getter and setter
class ModernChai {
    private _sugar = 2

    get sugar(){
        return this._sugar
    }

    set sugar(value: number){
        if (value > 5) throw new Error("Too sweet");
        this._sugar = value
    }
}

const c=new ModernChai();
c.sugar=3

class EkChai {
    static shopName = "Chaicode caffe"

    constructor(public flavour: string){}
}

console.log(EkChai.shopName);

abstract class Drink {
    abstract prepare(): void
}

class MyChai extends Drink{
  prepare() {
    console.log("making")
  }
}

class Heater{
  heat(){}
}

class ChaiMaker{
  constructor(private heater: Heater){}

  make(){
    this.heater.heat
  }
}