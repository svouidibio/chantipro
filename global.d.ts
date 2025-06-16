/// <reference types="react" />
/// <reference types="react-dom" />

declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production' | 'test'
    readonly NEXT_PUBLIC_API_URL?: string
    readonly NEXT_PUBLIC_ENVIRONMENT?: string
  }
}

declare module '*.css' {
  const content: { [className: string]: string }
  export default content
}