import GlobalStyle from "./component/globalstyle/GlobalStyle"
import Todo from "./pages/main/Todo"
import LogoName from "./component/header/LogoName"








const App = () => {
  return (
    <div>
      <GlobalStyle />
      <LogoName>TO-DO APP</LogoName>
      <Todo />      
    </div>
  )
}

export default App