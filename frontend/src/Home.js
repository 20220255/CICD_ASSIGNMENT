import React from 'react'
import { Badge } from 'react-bootstrap';


function Home() {
  return (
    <div>
      <h1
        id='homepage'
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        Welcome to your Homepage
      </h1>
    </div>
  );
}

export default Home
