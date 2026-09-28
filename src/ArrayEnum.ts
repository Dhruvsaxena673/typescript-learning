const chaiFlavours:string[]=["masala","adrak"]

const chaiPrice:number[]=[20,15]

const rating: Array<number>=[4.5,5.0]

type Chai={
  name:string;
  price:number;
}

const menu:Chai[]=[{
  name:"masala",
  price:15
},
{
  name:"ginger",
  price:20
},]

const cities:readonly string[]=["delhi","jaipur"]

const table:number[][]=[
  [1,2,3],
  [4,5,6]
]

let chaiTuple:[string,number];
chaiTuple=["masala",15]
//chaiTuple=[20,"ginger"]

let userInfo: [string, number, boolean?]
userInfo = ["hitesh", 100]
userInfo = ["hitesh", 100, true]

const location: readonly [number, number] = [28.66,32.22]

const chaiItems: [name: string, price: number] = ["Masala", 25]

enum CupSize {
    SMALL,
    MEDIUM,
    LARGE
}

const size=CupSize.LARGE

enum Status {
    PENDING = 100,
    SERVED, // 101
    CANCELLED // 102
}

enum ChaiType {
    MASALA = "masala",
    GINGER = "ginger"
}

function makeChai(type: ChaiType){
    console.log(`Making: ${type}`);
}

makeChai(ChaiType.MASALA)
//makeChai("masala")

enum RandomEnum {
    ID = 1,
    NAME = "chai"
}

const enum Sugars {
    LOW=1,
    MEDIUM=2,
    HIGH=3
}

let t:[string,number]=["chai",10]

t.push("extra")
