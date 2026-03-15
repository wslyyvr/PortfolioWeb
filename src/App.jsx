import PageHeader from "./components/PageHeader/PageHeader.jsx"
import TopBorder from "./components/TopBorder/TopBorder.jsx"
import PersonalInfo from "./components/PersonalInfo/PersonalInfo.jsx"
import MainContainer from "./components/MainContainer/MainContainer.jsx"
import ContactInfo from "./components/ContactInfo/ContactInfo.jsx"
import './App.css'

function App() {


  return (
    <>
    <PageHeader></PageHeader>
    <div className="main-part">
      <TopBorder></TopBorder>
      <PersonalInfo></PersonalInfo>
      <MainContainer></MainContainer>
      <ContactInfo></ContactInfo>
    </div>
    </>
  )
}

export default App
