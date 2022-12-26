import React, { useState } from 'react';

export default function DeploySupertoken() {
  return (
    <form
      style={{
        padding: '1em',
        backgroundColor: '#303030',
        height: '50vh'
      }}
    >
      <h3>Deploy Supertoken</h3>

      <div>
        <label>Token Contract Address</label>
        <input type="text" value="supetoken" onChange={(e) => {console.log('e', e)}}/>
      </div>
      <div>
        <label>Token Name</label>
        <input type="text" value="supetoken" onChange={(e) => {console.log('e', e)}}/>
      </div>
      <div>
        <label>Token Symbol</label>
        <input type="text" value="supetoken" onChange={(e) => {console.log('e', e)}}/>
      </div>

      <input type="submit"/>
    </form>
  )
}