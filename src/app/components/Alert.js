import React from 'react'

const Alert = ({message}) => {
  return (
    <div className="p-4 mb-4 text-sm text-quaternary rounded-lg bg-green-600 fixed bottom-6 right-0 md:w-1/2 w-3/4" style={{zIndex: 1000}} role="alert">
      <span className="font-bold">Success!</span> {message}
    </div>
  )
}

export default Alert