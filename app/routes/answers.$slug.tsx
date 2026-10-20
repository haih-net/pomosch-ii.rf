import type * as React from 'react'
import {
  useLoaderData,
  type LoaderFunctionArgs,
  type MetaFunction,
} from 'react-router'
import { AnswerPage } from 'app/Custom/pages/Answers'
import { helpAnswers, type HelpAnswer } from 'app/Custom/pages/Answers/data'
import { createSeoMeta, unavailableSeoMeta } from '../components/seo/SeoHeaders'

export const loader = ({ params }: LoaderFunctionArgs): HelpAnswer => {
  const answer = helpAnswers.find((item) => item.slug === params.slug)
  if (!answer) {
    throw new Response('Страница не найдена', { status: 404 })
  }
  return answer
}
export const meta: MetaFunction<typeof loader> = ({ loaderData: data }) =>
  data
    ? createSeoMeta({
        title: `${data.title} — Помощь ИИ`,
        description: data.description,
        path: `/answers/${data.slug}`,
        breadcrumbs: [
          { name: 'Главная', path: '/' },
          { name: 'Полезные ответы', path: '/answers' },
        ],
      })
    : unavailableSeoMeta()
const AnswerRoute: React.FC = () => (
  <AnswerPage answer={useLoaderData<typeof loader>()} />
)
export { AnswerRoute as default }
