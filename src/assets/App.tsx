import React from 'react'
import ThreeLayout from './components/ThreeLayout'

const App = () => {
  return (
    <div>
      <ThreeLayout
        left={<div style={{border:"2px solid #008c8c"}}>
          <h4>Left aside</h4>
        </div>}

      right={<div style={{border:"2px solid #008c8c"}}>
        <h4>right aside</h4>
      </div>}
      >
        <div style={{border:"2px solid #f40"}}>
          <h1>Content</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam veritatis rem officiis delectus itaque! Atque, earum quis iusto suscipit corrupti voluptate consectetur quo incidunt soluta, voluptas labore expedita dolore dolorem.</p>
        </div>
      </ThreeLayout> 
        
    </div>
  )
}

export default App