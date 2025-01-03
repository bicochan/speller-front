import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

const DEFAULT_TIMEOUT = 10000

const defaultConfig: AxiosRequestConfig = {
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  timeout: DEFAULT_TIMEOUT,
  headers: {
    'x-api-key': process.env.NEXT_PUBLIC_API_KEY,
  },
}

const defaultAxiosInstance = axios.create(defaultConfig)

export class Client {
  readonly #axiosInstance: AxiosInstance
  static #instance: Client

  constructor(config?: AxiosRequestConfig) {
    if (config) {
      config = { ...defaultConfig, ...config }
      config.headers = { ...defaultConfig.headers, ...(config.headers || {}) }
      this.#axiosInstance = axios.create(config)
    } else {
      this.#axiosInstance = defaultAxiosInstance
    }
  }

  static get Instance() {
    if (!this.#instance) {
      this.#instance = new Client()
    }
    return this.#instance
  }

  async get<T = unknown, R = unknown>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<R> {
    const response = await this.#axiosInstance.get<T, R>(url, config)
    return response
  }

  async post<T = unknown, R = unknown, D = unknown>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig<D>,
  ): Promise<R> {
    const response = await this.#axiosInstance.post<T, R, D>(url, data, config)
    return response
  }
}
