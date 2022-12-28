import React, { useState } from 'react';
import styles from './styles.module.css';

export default function DeploySupertoken(props: any) {

  const { tokenAddress, name, symbol, setToken } = props

  console.log(tokenAddress, setToken);

  return (
    <form className={styles.form}>
      <h1
        style={{marginBottom: '2rem', textAlign: 'center'}}
      >Deploy Supertoken</h1>

      <div className={styles.input_container}>
        <label className={styles.label}>Token Contract Address</label>
        <input
          type="text"
          value={tokenAddress}
          onChange={(e) => setToken(e.target.value)}
          className={styles.input}
        />
      </div>
      <div className={styles.input_container}>
        <label className={styles.label}>Token Name</label>
        <input
          type="text" 
          value="supetoken"
          onChange={(e) => {console.log('e', e)}}
          className={styles.input}
        />
      </div>
      <div className={styles.input_container}>
        <label className={styles.label}>Token Symbol</label>
        <input
          type="text" 
          value="supetoken"
          onChange={(e) => {console.log('e', e)}}
          className={styles.input}
        />
      </div>

      <button className={styles.submit}>
        Deploy Supertoken
      </button>
    </form>
  )
}