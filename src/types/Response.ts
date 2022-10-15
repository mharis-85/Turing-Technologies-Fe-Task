export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<T>

export type Require<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>

export interface Response<T = any> {
  message?: string
  data?: T
  meta?: any
  error?: any
  response?: any
  status?: any
  statusCode?: any
}

export interface Pagination {
  page: number // 1
  limit: number // 10
  total: {
    pages: number // 1
    records: number // 2
  }
}
