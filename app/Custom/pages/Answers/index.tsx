import type * as React from 'react'
import { Link } from 'react-router'
import { ArrowRight } from 'lucide-react'
import { HelpForm } from '../../components/HelpForm'
import { helpAnswers, type HelpAnswer } from './data'
import { AnswersStyled } from './styles'

export const AnswersPage: React.FC = () => (
  <AnswersStyled>
    <Link className="back" to="/">
      ← На главную
    </Link>
    <h1 tabIndex={-1}>Полезные ответы</h1>
    <p className="lead">
      Разбираемся с техникой шаг за шагом. Выберите свою задачу или опишите её
      своими словами.
    </p>
    <div className="answer-list">
      {helpAnswers.map((answer) => (
        <Link key={answer.slug} to={`/answers/${answer.slug}`}>
          <h2>{answer.title}</h2>
          <p>{answer.description}</p>
          <ArrowRight size={22} aria-hidden="true" />
        </Link>
      ))}
    </div>
    <h2>У вас другая задача?</h2>
    <HelpForm />
  </AnswersStyled>
)

export const AnswerPage: React.FC<{ answer: HelpAnswer }> = ({ answer }) => (
  <AnswersStyled>
    <Link className="back" to="/answers">
      ← Все полезные ответы
    </Link>
    <article>
      <h1 tabIndex={-1}>{answer.title}</h1>
      <p className="lead">{answer.description}</p>
      <h2>С чего начать</h2>
      <ol>
        {answer.steps.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>
      <aside className="example">
        <h2>Например</h2>
        <p>{answer.example}</p>
      </aside>
    </article>
    <section aria-labelledby="personal-help">
      <h2 id="personal-help">Разберём вашу ситуацию</h2>
      <p className="form-description">
        Расскажите, что за устройство у вас, что произошло и что уже пробовали.
      </p>
      <HelpForm key={answer.slug} initialValue={answer.prompt} />
    </section>
    <nav className="related" aria-label="Другие технические вопросы">
      <h2>Может пригодиться</h2>
      {helpAnswers
        .filter((item) => item.slug !== answer.slug)
        .slice(0, 3)
        .map((item) => (
          <Link key={item.slug} to={`/answers/${item.slug}`}>
            {item.title} →
          </Link>
        ))}
    </nav>
  </AnswersStyled>
)
