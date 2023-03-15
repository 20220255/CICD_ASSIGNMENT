import React from 'react'
import { Badge } from 'react-bootstrap';


function Home() {
  return (
    <div>
      <h1
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <Badge bg='secondary' as='Button'>
          Welcome to your Homepage
        </Badge>
      </h1>
    </div>
  );
}

export default Home
