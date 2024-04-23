import { useMutation, useQueryClient } from 'react-query'
import { booksApi } from '../../network-utils/book/api/bookApi'
import { useState } from 'react'
import { keyGetBooks } from '../queries/useGetBooksQuery'
import { GENERAL_ERROR } from '../../utils/constants'

export const useDeleteBookMutation = () => {
  const queryClient = useQueryClient()
  const [errorMsg, setErrorMsg] = useState<string>()

  const submitDeleteBook = async (idNumber: number) => {
    const response = await booksApi.deleteBook(idNumber)

    return response
  }

  const { mutate, isLoading } = useMutation(submitDeleteBook, {
    onSuccess: () => {
      queryClient.invalidateQueries(keyGetBooks)
      queryClient.refetchQueries(keyGetBooks)
    },
    onError: () => {
      setErrorMsg(GENERAL_ERROR)
    }
  })

  const onDeleteBook = (idNumber: number) => {
    mutate(idNumber)
  }

  return {
    onDeleteBook,
    isLoading,
    errorMsg
  }
}
