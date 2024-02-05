import './App.css'
import Button from './components/button/Button'
import { MainTitle, SecondTitle } from './components/mainTitle/MainTitle'
import StudentList from './components/studentList/StudentList'
import SwitchTheme from './components/switchTheme/SwitchTheme'
import Parent from './pages/Parent'
import TodoList from './pages/todoList/TodoList'
// import Todo from './pages/Todo'
// import Login from './pages/login/Login'

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
      <SwitchTheme/>
      <StudentList/>
      {/* <Login/> */}
      <TodoList/>
    </div>
  )
}
export default App
