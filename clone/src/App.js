import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import { LeftPane } from './components/index';
import { RightPane } from './components/index';
import './App.scss';
import Home from './components/Home/Home';
import Explore from './components/Explore/Explore';
import Notice from './components/Notice/Notice';
import Messages from './components/Messages/Messages';
import Bookmarks from './components/Bookmarks/Bookmarks';
import Lists from './components/Lists/Lists';
import Profile from './components/Profile/Profile';
// default 값은 {} 없이 작성해야 한다

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <LeftPane />
        <div>
          <Routes>
            {/* 메인 카테고리 & 탐색 구성 요소 */}
            <Route path="/" element={<Home />}>Home</Route>
            <Route path="/explore" element={<Explore />}>explore</Route>
            <Route path="/notice" element={<Notice />}>Notice</Route>
            <Route path="/messages" element={<Messages />}>Messages</Route>
            <Route path="/bookmarks" element={<Bookmarks />}>Bookmarks</Route>
            <Route path="/lists" element={<Lists />}>Lists</Route>
            <Route path="/profile" element={<Profile />}>Profile</Route>
          </Routes>
      </div>
        <div className="right">
          <RightPane />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;