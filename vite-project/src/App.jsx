import './App.css'
import Button from './components/button/Button'
import { MainTitle, SecondTitle } from './components/mainTitle/MainTitle'
import Parent from './pages/Parent'

function App() {

  return (
    <div>
      {/* <MainTitle title="Title1"/> */}
      {/* <MainTitle title="titel1" /> */}
      {/* <MainTitle title="Title2" />
      <MainTitle title="Title3"/> */}
      <SecondTitle/>
      <MainTitle/>
      <Button/>
      <Parent/>
    </div>
  )
}
export default App
