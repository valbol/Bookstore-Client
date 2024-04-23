export interface ErrorResponse {
  success: false
  error: string | Error
}

export interface SuccessResponse<T> {
  success: boolean
  data: T
}

export type APIResponse<T> = ErrorResponse | SuccessResponse<T>
