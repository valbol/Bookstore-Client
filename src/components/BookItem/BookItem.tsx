import { FC } from 'react'
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Button,
  CardActions,
  Collapse,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  CircularProgress
} from '@mui/material'
import './BookItem.scss'
import { Book } from '../../types'

interface BookItemProps {
  book: Book
  expanded: boolean
  toggleExpanded: () => void
  onDelete: () => void
  deleteConfirmationOpen: boolean
  confirmDelete: () => void
  closeDeleteConfirmation: () => void
  isLoadingDelete: boolean
}

const BookItem: FC<BookItemProps> = ({
  book: { title, author, description, publicationDate, genre, price },
  expanded,
  toggleExpanded,
  onDelete,
  deleteConfirmationOpen,
  confirmDelete,
  closeDeleteConfirmation,
  isLoadingDelete
}) => {
  return (
    <Card className={'card'}>
      <CardHeader className={'cardHeader'} title={title} subheader={author} />
      <CardContent className={'cardContent'}>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <Typography variant="subtitle1" color="text.secondary">
            Description: {description}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Genre: {genre}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Price: {price}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Publication Date: {new Date(publicationDate).toDateString()}
          </Typography>
        </Collapse>
      </CardContent>
      <CardActions className={'cardActions'}>
        <Button size="small" onClick={toggleExpanded}>
          {expanded ? 'Hide Details' : 'Show Details'}
        </Button>
        <Button size="small" onClick={onDelete}>
          Delete
        </Button>
      </CardActions>
      <Dialog open={deleteConfirmationOpen} onClose={closeDeleteConfirmation}>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this book?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDeleteConfirmation}>Cancel</Button>
          <Button onClick={confirmDelete} autoFocus>
            Delete
          </Button>
          {isLoadingDelete && <CircularProgress />}
        </DialogActions>
      </Dialog>
    </Card>
  )
}

export default BookItem
