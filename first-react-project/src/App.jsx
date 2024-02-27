import './App.css';
import TodoItem from './components/TodoItem/TodoItem';
import reactLogo from './assets/react.svg';

// En komponent i React måste starta med en stor bokstav i namnet
function App() {
  const title = 'Todo App';

  return (
    <main>
      <img src={ reactLogo } alt="" />
      <h1>{ title /** Allt inom måsvingar tolkas som JS */ }</h1>
      <ul className='todos'>
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </ul>
    </main>
  )
}

export default App
