import './App.css'
import { ChaiCard } from './components/ChaiCard.tsx'
import { Counter } from './components/Counter.tsx'
import type { Chai } from './types.ts'
import ChaiList from './components/ChaiList.tsx'
import { OrderForm } from './components/OrderForm.tsx'
import Card from './components/Card.tsx'

const menu: Chai[] = [
    {id: 1, name: "Masala", price: 25},
    {id: 2, name: "Ginger", price: 50},
    {id: 3, name: "Lemon", price: 60},
]


function App() {

  return (
  <>
    <div>
      <ChaiCard name="Headphone" price={5000} />
      <ChaiCard name="Iphone" price={200000} />
    </div>
    <div>
      <Counter />
    </div>
    <div>
      <ChaiList items={menu}/>
    </div>
    <div>
      <OrderForm 
       onSubmit={(order)=>{
        console.log("Placed",order.name,order.cups)
       }}
      />
    </div>
    <div>
      <Card 
        title="Chai" footer={<button>OrderNow</button>}
      />
    </div>
  </>
  )
}

export default App
