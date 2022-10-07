import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import { LeftPane } from './components/index';
import './App.scss'

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <LeftPane />
        <Routes>
          {/* 메인 카테고리 & 탐색 구성 요소 */}
          <Route path="/" exact>Home</Route>
          <Route path="/explore" element>explore</Route>
          <Route path="/notice" element>Notice</Route>
          <Route path="/messages" element>Messages</Route>
          <Route path="/bookmarks" element>Bookmarks</Route>
          <Route path="/lists" element>Lists</Route>
          <Route path="/profile" element>Profile</Route>
        </Routes>
        <div>Right Pane</div>
      </div>
    </BrowserRouter>
  )
}

export default App;