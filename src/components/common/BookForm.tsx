import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import { Genre, Book } from '../../types'
import { FC } from 'react'
import { Box, CircularProgress } from '@mui/material'

type BookForumProps = {
  book: Book
  open: boolean
  handleClose: () => void
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  handleDateChange: (date: Date) => void
  handleSubmit: () => void
  isLoading: boolean
}

const BookForum: FC<BookForumProps> = ({
  book: { title, description, author, publicationDate, genre, price, idNumber },
  open,
  handleClose,
  handleChange,
  handleDateChange,
  handleSubmit,
  isLoading
}) => {
  return (
    <>
     {isLoading && ( <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>)}
      <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Create New Book</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Title"
            name="title"
            value={title}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Description"
            name="description"
            value={description}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Author"
            name="author"
            value={author}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Publication Date"
            type="date"
            name="publicationDate"
            value={publicationDate.split('T')[0]}
            onChange={(e) => handleDateChange(new Date(e.target.value))}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Id Number"
            name="idNumber"
            type="number"
            value={idNumber}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            select
            label="Genre"
            name="genre"
            value={genre}
            onChange={handleChange}
            fullWidth
            margin="normal"
          >
          {Object.values(Genre).map((genreValue) => (
    <MenuItem key={genreValue} value={genreValue}>
      {genreValue}
    </MenuItem>
  ))}
          </TextField>
          <TextField
            label="Price"
            type="number"
            name="price"
            value={price}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <Button type="submit">Submit</Button>
        </form>
      </DialogContent>
    </Dialog>
    </>
   
  )
}

export default BookForum
