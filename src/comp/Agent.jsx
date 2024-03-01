import React from 'react';
import Agentbox from './Agentbox';
import agentimage1 from '../images/s1.png';
import agentimage2 from '../images/s2.png';
import agentimage3 from '../images/s3.png';
import agentimage4 from '../images/s3.png';

function Agent() {
  return (
    <div className='agent'>
        <div className='a-heading'>
            <h1>Team</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, eveniet.</p>
        </div>
         <div className='b-container'>
          <Agentbox image={agentimage1} name="Hemdan"/>
          <Agentbox image={agentimage2} name="George"/>
          <Agentbox image={agentimage3} name="Jerin"/>
          <Agentbox image={agentimage4} name="Kamil"/>
         </div>
    </div>
  )
}

export default Agent;