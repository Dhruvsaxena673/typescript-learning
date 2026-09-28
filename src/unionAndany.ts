let subs: number | string ='1M'

subs=1;

let apiRequestStatus: 'pending' | 'success' | 'error' ='pending'

let airlineseat: 'aisle' | 'window' | 'middle' ='aisle'

const orders = ['12' ,'20','28','42']

let currenorder: string | undefined;

for(let order of orders){
  if(order==='28'){
    currenorder=order;
    break;
  }

}

console.log(currenorder);