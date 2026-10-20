import type { MetaFunction } from 'react-router'
import { AnswersPage } from 'app/Custom/pages/Answers'
import { helpAnswers } from 'app/Custom/pages/Answers/data'
import { createSeoMeta } from '../components/seo/SeoHeaders'

export const meta: MetaFunction = () =>
  createSeoMeta({
    title: 'Полезные ответы: помощь с техникой — Помощь ИИ',
    description:
      'Wi-Fi, компьютер, принтер и другие технические вопросы. Понятные шаги и помощь с вашей ситуацией.',
    path: '/answers',
    collection: {
      name: 'Помощь с техникой',
      items: helpAnswers.map((answer) => ({
        name: answer.title,
        path: `/answers/${answer.slug}`,
        description: answer.description,
      })),
    },
  })
export { AnswersPage as default }
