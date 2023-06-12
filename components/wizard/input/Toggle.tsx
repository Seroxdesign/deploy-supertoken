import React from 'react'

export const InputField: React.FC<{
  label: string,
  value: string,
  placeholder: string,
}> = ({ label, value, placeholder }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: '20px'
      }}
    >
      <label>
        {label}
        <input type={'checkbow'} value={''} placeholder={placeholder} onChange={() => console.log()} />
        <span className="slider"></span>
      </label>
     
    </div>
  )
}
