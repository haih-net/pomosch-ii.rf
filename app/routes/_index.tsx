import type { MetaFunction } from 'react-router'
import { createSeoMeta, unavailableSeoMeta } from '../components/seo/SeoHeaders'
import type { SeoHandle } from '../components/seo/SeoHeaders'
import { MainPage } from 'app/Custom/pages/MainPage'

export const handle = {
  seo: {
    title: 'Помощь ИИ — с чем вам нужна помощь?',
    description:
      'Опишите задачу своими словами. Поможем разобраться, подготовить результат и понять, что делать дальше. Можно и просто поговорить.',
    path: '/',
    image: undefined,
  },
} satisfies SeoHandle

export const meta: MetaFunction = ({ error }) =>
  error ? unavailableSeoMeta() : createSeoMeta(handle.seo)
export default MainPage
