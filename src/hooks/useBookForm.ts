import { useState } from 'react'
import { Book, Genre } from '../types'

const useBookForm = (handleCreate: (book: Book) => void) => {
  const [open, setOpen] = useState(false)
  const [book, setBook] = useState<Book>({
    title: '',
    idNumber: 0,
    description: '',
    author: '',
    publicationDate: '2024-04-20',
    genre: Genre.ScienceFiction,
    price: 0
  })

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setBook((prevBook) => ({
      ...prevBook,
      [name]: value
    }))
  }

  const handleDateChange = (date: Date) => {
    setBook((prevBook) => ({
      ...prevBook,
      publicationDate: date.toISOString().split('T')[0]
    }))
  }

  const handleSubmit = () => {
    handleCreate(book)
    setOpen(false)
  }

  return {
    open,
    book,
    handleOpen,
    handleClose,
    handleChange,
    handleDateChange,
    handleSubmit
  }
}

export default useBookForm
