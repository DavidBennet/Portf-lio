import { MainContent } from './components/MainContent'
import { Sidebar } from './components/Sidebar'
import './styles/componets/App.sass'

export function App() {

  return (
    <div id='portfolio'>
      <h1>David Bennet</h1>
      <Sidebar/>
      <MainContent/>
    </div>
  )
}



