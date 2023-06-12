import React from 'react'
import { InputField } from '../components/wizard/input/Input'

export default function Wizard() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100vw',
        height: '100vh',
      }}
    >
      <div
        style={{
          display: 'flex',
          height: '10vh',
          width: '20vw',
          padding: '1em',
          justifyContent: 'space-between'
        }}
      >
        <button
          style={{
            paddingLeft: '1em',
            paddingRight: '1em'
          }}
        >
          Copy
        </button>
        <button
          style={{
            paddingLeft: '1em',
            paddingRight: '1em'
          }}
        >
          Download
        </button>
        <button
          style={{
            paddingLeft: '1em',
            paddingRight: '1em'
          }}
        >
          Remix
        </button>
      </div>
      <div
        style={{
          display: 'flex',
          height: '90vh',
          width: '100vw',
          flexDirection: 'row'
        }}
      >
        <div
          style={{
            display: 'flex',
            height: '90vh',
            width: '20vw',
            padding: '1em',
            flexDirection: 'column',
            backgroundColor: '#303030'
          }}
        >
          <h4>Settings</h4>
          <InputField
            label={'name'}
            value={'name'}
            placeholder='name here'
          />
           <InputField
            label={'symbol'}
            value={'symbol'}
            placeholder='token symbol here (ex: dai)'
          />
          <InputField
            label={'premint'}
            value={'name'}
            placeholder='premint amount (ex: 1234)'
          />
        </div>
        <div
          style={{
            display: 'flex',
            height: '90vh',
            width: '80vw',
            padding: '1em',
            flexDirection: 'column',
            backgroundColor: '#1b1b1b'
          }}
        >
         
        </div>
      </div>
    </div>
  )
}
