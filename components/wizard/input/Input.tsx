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
      </label>
      <input value={''} placeholder={placeholder} onChange={() => console.log()} />
    </div>
  )
}
