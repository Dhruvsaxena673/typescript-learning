type ChaiOrder = {
    type: string;
    sugar: number;
    strong: boolean;
};

function makeChai(order: ChaiOrder) {
    console.log(order);
}

function serveChai(order: ChaiOrder) {
    console.log(order);
}

type TeaRecipe = {
    water: number;
    milk: number;
}
/*
class MasalaChai implements TeaRecipe {
  water = 100;
  milk = 50;
}
  */

interface CupSize{
 size: "small" | "large"
}

class chai implements CupSize{
  size: "small" | "large"="large";
}
//use interface for class related implementation

// type Response = {ok: true} | {ok: false}
// class myRes implements Response{
//     ok: boolean = true;
// }

type TeaType = "masala"|"ginger"|"lemon"

function orderChai(t: TeaType){
  console.log(t)
}

type BaseChai = {teaLeaves: number}
type Extra = {masala: number}

type MasalaChai = BaseChai & Extra

const cup: MasalaChai = {
    teaLeaves: 2,
    masala: 1
}

type User={
  username:string;
  bio?: string
}

const u1:User ={username:"dhruv"}
const u2:User={username:"dhruvsaxena",bio:"buddy"}

type config={
  //readonly can't be change once declare
  readonly appName:string 
  version: number
}

const cfg:config={
  appName:"dhruvMaster",
  version:1
}