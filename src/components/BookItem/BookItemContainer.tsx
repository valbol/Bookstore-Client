import { FC } from 'react'
import BookItem from './BookItem'
import useExpandState from '../../hooks/useExpandState'
import useDeleteConfirmation from '../../hooks/useDeleteConfirmation'
import { Book } from '../../types'
import { useDeleteBookMutation } from '../../hooks/mutations/useDeleteBookMutation'

interface Props {
  book: Book
}

const BookItemContainer: FC<Props> = ({ book }) => {
  const { expanded, toggleExpanded } = useExpandState(false)
  const { open, handleOpen, handleClose } = useDeleteConfirmation()
  const { onDeleteBook, isLoading, errorMsg } = useDeleteBookMutation()

  const handleDelete = () => {
    handleOpen()
  }

  const handleConfirmDelete = () => {
    try {
      onDeleteBook(book?.idNumber)
      handleClose()
    } catch (e) {
      console.error(errorMsg)
    }
  }

  return (
    <BookItem
      isLoadingDelete={isLoading}
      book={book}
      expanded={expanded}
      toggleExpanded={toggleExpanded}
      onDelete={handleDelete}
      deleteConfirmationOpen={open}
      confirmDelete={handleConfirmDelete}
      closeDeleteConfirmation={handleClose}
    />
  )
}

export default BookItemContainer
