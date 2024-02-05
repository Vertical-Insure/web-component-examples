import logo from './logo.svg';
import './App.css';
import { TuitionInsuranceComponent } from "@vertical-insure/web-components/react"

function App() {
  return (
    <div className="App">
      <TuitionInsuranceComponent clientId="test_RGMDV4FV4BNK4TSPT7DOQVC3P9HKEXTQ" 
      debug
        tuitionAmount={50000}
        institutionType='FOUR_YEAR'
        semesterStartDate={new Date(new Date().getTime() + 86400000).toISOString().substring(0, 10)}
        semesterEndDate={new Date(new Date().getTime() + 86400000).toISOString().substring(0, 10)}
        universityName='Test'
        studentEmail='dalton.conley@verticalinsure.com'
        studentBirthDate='1990-09-03'
        studentZipCode='55432'
        studentState='MN'
        studentName="John Doe" 
      />
    </div>
  );
}

export default App;
