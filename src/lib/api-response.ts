export type ApiSuccess<T = void> = { success: true; data?: T; message?: string }
export type ApiError = { success: false; error: string; code?: string }
export type ApiResponse<T = void> = ApiSuccess<T> | ApiError
