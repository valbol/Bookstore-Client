export enum Genre {
  ScienceFiction = 'Science Fiction',
  Satire = 'Satire',
  Drama = 'Drama',
  Action = 'Action',
  Romance = 'Romance',
  Mystery = 'Mystery',
  Horror = 'Horror'
}

export interface Book {
  title: string
  idNumber: number
  description: string
  author: string
  publicationDate: string
  genre: Genre
  price: number
}
