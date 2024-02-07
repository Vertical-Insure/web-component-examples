import React, { useEffect } from 'react'
import styles from '../styles.module.css'
import dynamic from 'next/dynamic'


export default function Home() {

  const [quote, setQuote] = React.useState();

  useEffect(() => {
    fetch('https://api.verticalinsure.com/v1/quote/tuition', {
      method: 'POST',
      headers: {
        'X-Api-Client-Id': 'test_RGMDV4FV4BNK4TSPT7DOQVC3P9HKEXTQ',
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        "customer": {},
        "policy_attributes": {
          "university_name": "The University of Phoenix",
          "institution_type": "FOR_PROFIT",
          "semester_start_date": new Date(new Date().getTime() + 86400000).toISOString().substring(0, 10),
          "semester_end_date": new Date(new Date().getTime() + 86400000).toISOString().substring(0, 10),
          "tuition_amount": 500000,
          "student": {
            "name": "John Doe",
            "email": "test01@verticalinsure.com",
            "birth_date": "1990-09-03",
            "zip_code": "55401",
            "state": "MN",
            "country": "US"
          }
        },
        "metadata": {}
      })}).then((response) => response.json()).then((data) => {
        setQuote(data);
      });
  }, [])

  return (
    <div className={styles.hello}>
      {quote && 
        <>
          <h1>{quote.product.promotional_header || quote.product.friendly_name}</h1>
          <div dangerouslySetInnerHTML={{__html: quote.product.promotional_description}}></div>
          <label><input type="checkbox" style={{marginRight: 10}}></input><strong>{quote.product.accept_action_text || `Accept Tuition Insurance for $${(quote.total / 100).toFixed(2)}`}</strong></label>
          <div dangerouslySetInnerHTML={{__html: quote.product.legal_disclaimer}} style={{fontSize: '0.8rem', fontStyle: 'italic'}}></div>
        </>
      }
    </div>
  )
}
