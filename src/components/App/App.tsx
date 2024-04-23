import { FC } from 'react'
import BookListContainer from '../BookList/BookListContainer'
import UserOptions from '../UserInterface/UserOptions'
import './App.scss'

const App: FC = () => {
  return (
    <div className="app-wrapper">
      <h1>Welcome to the Book Store</h1>
      <div className="options-wrapper">
        <UserOptions />
      </div>
      <div className="content-wrapper">
        <BookListContainer />
      </div>
    </div>
  )
}

export default App
