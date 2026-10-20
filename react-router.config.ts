import type { Config } from '@react-router/dev/config'
// import { helpAnswers } from './app/Custom/pages/Answers/data'
export default {
  ssr: true,
  prerender: [
    '/',
    // '/answers',
    // ...helpAnswers.map((answer) => `/answers/${answer.slug}`),
  ],
  routeDiscovery: { mode: 'initial' },
} satisfies Config
