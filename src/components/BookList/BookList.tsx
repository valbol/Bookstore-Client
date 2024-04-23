import { FC } from 'react'
import { Grid } from '@mui/material'
import { Book } from '../../types'
import BookItemContainer from '../BookItem/BookItemContainer'

interface BookListProps {
  books: Book[]
}

const BookList: FC<BookListProps> = ({ books }) => {
  return (
    <Grid container spacing={1}>
      {books.map((book: Book) => (
        <Grid item xs={12} sm={6} md={3} key={book.idNumber}>
          <BookItemContainer book={book} />
        </Grid>
      ))}
    </Grid>
  )
}

export default BookList
