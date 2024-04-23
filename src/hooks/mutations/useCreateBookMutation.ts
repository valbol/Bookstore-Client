import { useMutation, useQueryClient } from 'react-query'
import { booksApi } from '../../network-utils/book/api/bookApi'
import { useState } from 'react'
import { keyGetBooks } from '../queries/useGetBooksQuery'
import { GENERAL_ERROR } from '../../utils/constants'
import { Book } from '../../types'
import { APIResponse } from '../../network-utils/book/types/bookApiType'

export const useCreateBookMutation = () => {
  const queryClient = useQueryClient()
  const [errorMsg, setErrorMsg] = useState<string>()

  const submitCreateBook = async (book: Book) => {
    const response = await booksApi.createBook(book)

    return response as APIResponse<Book>
  }

  const { mutate, isLoading } = useMutation(submitCreateBook, {
    onSuccess: () => {
      queryClient.invalidateQueries(keyGetBooks)
      queryClient.refetchQueries(keyGetBooks)
    },
    onError: () => {
      setErrorMsg(GENERAL_ERROR)
    }
  })
  // const { mutate, isLoading } = useMutation(submitCreateBook, {
  //   onSuccess: (response: APIResponse<Book>) => {
  //     console.log('in  const { mutate, isLoading } = useMutation(submitCreateBook, {')
  //     if ('error' in response) {
  //       console.log('response.error', response.error);
  //       throw new Error('API error occurred'); 
  //     } else {
  //       console.log('submitCreateBook');
  //       queryClient.invalidateQueries(keyGetBooks);
  //       queryClient.refetchQueries(keyGetBooks);
  //     }
  //   },
  //   onError: () => {
  //     setErrorMsg(GENERAL_ERROR);
  //   }
  // });


  // const { mutate, isLoading } = useMutation(submitCreateBook, {
  //   onSuccess: (response: APIResponse<Book>) => {
  //     console.log('in onSuccess:', response);
  //     // Check if the response indicates success
  //     if (response.success) {
  //       // Invalidate and refetch queries
  //       queryClient.invalidateQueries(keyGetBooks);
  //       queryClient.refetchQueries(keyGetBooks);
  //     } else {
  //       // Handle API errors
  //       console.error('API error occurred:', response.error);
  //       // Set an error message or perform other error handling actions
  //     }
  //   },
  //   onError: (error: Error) => {
  //     console.error('onError:', error);
  //     // Set an error message or perform other error handling actions
  //     setErrorMsg(GENERAL_ERROR);
  //   }
  // });

  const onCreateBook = (book: Book) => {
    mutate(book)
  }

  return {
    onCreateBook,
    isLoading,
    errorMsg
  }
}
