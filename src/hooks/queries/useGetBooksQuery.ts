import { useQuery } from 'react-query'
import { booksApi } from '../../network-utils/book/api/bookApi'

export const keyGetBooks = 'get-books-key'
export const keyGetBook = 'get-book-key'

export const useGetBooksQuery = () => {
  return useQuery([keyGetBooks], booksApi.fetchBooks, {
    cacheTime: 0,
    keepPreviousData: false
  })
}

export const useGetBookQuery = (idNumber: number) => {
  return useQuery([keyGetBook, idNumber], () => booksApi.fetchBook(idNumber), {
    cacheTime: 0,
    keepPreviousData: false
  })
}
