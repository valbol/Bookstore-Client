import axios, { AxiosResponse } from 'axios'
import { APIResponse } from '../types/bookApiType'
import { Book } from '../../../types'
import { BASE_URL, API_VERSION } from '../../../utils/constants'

export const booksApi = {
  fetchBooks: async (): Promise<APIResponse<Book[]>> => {
    try {
      const { data } = await axios.get(`${BASE_URL}${API_VERSION}/books`)
      return data
    } catch (error) {
      throw new Error('Failed to fetch books')
    }
  },

  fetchBook: async (idNumber: number): Promise<APIResponse<Book>> => {
    try {
      const response: APIResponse<Book> = await axios.get(
        `${BASE_URL}${API_VERSION}/books/${idNumber}`
      )

      return response
    } catch (error) {
      throw new Error('Failed to fetch book')
    }
  },

  createBook: async (book: Book): Promise<APIResponse<Book>> => {
    try {
      console.log('book')
      const response: AxiosResponse<APIResponse<Book>>= await axios.post(
        `${BASE_URL}${API_VERSION}/books`,
        book
      )

      return response.data
    } catch (error) {
      throw new Error('Failed to create book')
    }
  },

  deleteBook: async (idNumber: number): Promise<APIResponse<Book>> => {
    try {
      const response: APIResponse<Book> = await axios.delete(
        `${BASE_URL}${API_VERSION}/books/${idNumber}`
      )
      return response
    } catch (error) {
      throw new Error('Failed to delete book')
    }
  }
}
