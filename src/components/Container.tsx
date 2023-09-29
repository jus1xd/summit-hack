import React from 'react'

type TProps = {
  children: React.ReactNode
}

const Container: React.FC<TProps> = ({children}) => {
  return (
    <div className='w-full h-full max-w-[1172px] mx-auto px-7'>{children}</div>
  )
}

export default Container