import React from 'react';
import {  ConnectKitButton } from 'connectkit';

export function Layout({Component}: any) {
  return (
    <div>
      <header
        style={{
          padding: '1em',
          borderBottom: '3px solid #30303030',
          display: 'flex',
          justifyContent: 'right'
        }}
      >
        <ConnectKitButton />
      </header>

      <main>
        {Component}
      </main>
    </div>
  )
}