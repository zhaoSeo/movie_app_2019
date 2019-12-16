import React from 'react';

function Food({ name }) {
  return <h1>i love { name }</h1>
}

const foodILike = [{
  id:1,
  name: "kimchi"
},
{
  id:2,
  name: "Samgyeopsal"  
},
{
  id:3,
  name: "bibimbab"
}]

function App() {
  return (
    <div>
      <h1>Hello!</h1>
      {foodILike.map(dish => <Food key={dish.id} name={dish.name} />)}
    </div>
  );
}

export default App;
