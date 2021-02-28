import React from 'react'


export default function ConfirmationData(props) {
    const {
        numberCreditCard,
        cvv,
        expirateDate
    } = props

    const date = () => {
        const dataSlipt = expirateDate.split("")
        dataSlipt.splice(2,0,'/')
        
        return dataSlipt.join("")
    }

    return (
      <div>
        <p>Number Credit Card : {numberCreditCard}</p>
        <p>CVV: {cvv}</p>
        <p>Expirate Date: {date()}</p>
      </div>
    )
  }

