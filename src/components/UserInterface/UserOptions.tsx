import { FC } from 'react'
import Button from '@mui/material/Button'
import AddIcon from '@mui/icons-material/Add'
import BookForum from '../common/BookForm'
import { useCreateBookMutation } from '../../hooks/mutations/useCreateBookMutation'
import useBookForm from '../../hooks/useBookForm'

const UserOptions: FC = () => {
  const { onCreateBook, isLoading } = useCreateBookMutation()
  const {
    open,
    book,
    handleOpen,
    handleClose,
    handleChange,
    handleDateChange,
    handleSubmit
  } = useBookForm(onCreateBook)

  return (
    <div>
      <Button variant="contained" startIcon={<AddIcon />} onClick={handleOpen}>
        Create
      </Button>
      <BookForum
      isLoading={isLoading}
        book={book}
        open={open}
        handleClose={handleClose}
        handleChange={handleChange}
        handleDateChange={handleDateChange}
        handleSubmit={handleSubmit}
      />
    </div>
  )
}

export default UserOptions
