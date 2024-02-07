import React, { useEffect } from 'react'
import styles from '../styles.module.css'
import dynamic from 'next/dynamic'

dynamic(() => Promise.resolve(NoSsr), {
  ssr: false
})

export default function Home() {
  const ref = React.useRef(null);



  useEffect(() => {
    if (ref.current) {
      console.log('added')
      ref.current.addEventListener('offer-state-change', (e) => {
        console.log(e.detail.quote);
        console.log(e.detail.selectedState);
      })
    }
  }, [])

  return (
    <div className={styles.hello}>
      <script src="https://unpkg.com/@vertical-insure/web-components@4.2.0/index.bundle.js"></script>
      <tuition-insurance
        ref={ref}
        client-id="test_RGMDV4FV4BNK4TSPT7DOQVC3P9HKEXTQ"
        semester-start-date={new Date(new Date().getTime() + 86400000).toISOString().substring(0, 10)}
        semester-end-date={new Date(new Date().getTime() + 86400000).toISOString().substring(0, 10)}
        tuition-amount="500000"
        university-name="The University of Phoenix"
        institution-type="FOR_PROFIT"
        student-name="John Doe"
        student-email="test01@verticalinsure.com"
        student-birth-date="1990-09-03"
        student-zip-code="55401"
        student-state="MN"
        student-country="US"
        include-payment-element
    ></tuition-insurance>
    </div>
  )
}
