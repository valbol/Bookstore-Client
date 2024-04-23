import { FC, useState, useEffect } from 'react'
import BookList from './BookList'
import { Book } from '../../types'
import { useGetBooksQuery } from '../../hooks/queries/useGetBooksQuery'
import { Box, CircularProgress } from '@mui/material'

const BookListContainer: FC = () => {
  const {
    data: booksData,
    isLoading: isLoadingBooks,
    isError: isErrorBooks
  } = useGetBooksQuery()
  const [books, setBooks] = useState<Book[]>([])
 
  useEffect(() => {
    if (booksData && 'data' in booksData && booksData.success) {
      setBooks(booksData.data)

    }
  }, [booksData])

  if (isLoadingBooks) {
    return (
      <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
    )
  }

  if (isErrorBooks) {
    console.error('Error fetching books')
    return <div>Error fetching books</div>
  }

  return <BookList books={books} />
}

export default BookListContainer
