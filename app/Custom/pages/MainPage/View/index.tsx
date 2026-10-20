import type * as React from 'react'
import { Link } from 'react-router'
import { ArrowRight, ArrowUpRight, Printer, Gauge } from 'lucide-react'
import { HelpForm } from '../../../components/HelpForm'
import { useOpenChatWithMessage } from '../../../components/Chat/hooks/useOpenChatWithMessage'
import laptop from '../assets/laptop.jpg'
import { MainPageViewStyled } from './styles'

const examples: readonly { label: string; prompt: string }[] = [
  'Придумать ужин',
  'Как сделать скриншот?',
  'Почему тормозит ноутбук?',
].map((prompt) => ({ label: prompt, prompt }))

export const MainPageView: React.FC = () => {
  const openChat = useOpenChatWithMessage()
  return (
    <MainPageViewStyled>
      <section className="hero" aria-labelledby="help-heading">
        <div className="intro">
          <h1 id="help-heading" tabIndex={-1}>
            С чем вам нужна помощь?
          </h1>
          <p className="lead">
            Опишите задачу своими словами. Поможем разобраться, подготовить
            результат и понять, что делать дальше.
          </p>
          <HelpForm examples={examples} conversation />
        </div>
        <aside className="example" aria-labelledby="example-heading">
          <p className="eyebrow">Пример помощи</p>
          <h2 id="example-heading">
            Как перенести встречу и никого не обидеть?
          </h2>
          <blockquote>
            Здравствуйте!
            <br />
            Сможем встретиться в четверг в 15:00 вместо среды? Если вам
            неудобно, предложите другое время.
          </blockquote>
          <button
            type="button"
            onClick={openChat}
            value="Помоги подобрать слова, чтобы перенести встречу. Спроси о моей ситуации."
          >
            Подобрать слова для моей ситуации{' '}
            <ArrowUpRight size={20} aria-hidden="true" />
          </button>
        </aside>
      </section>
      <section className="answers" aria-labelledby="answers-heading">
        <div className="section-heading">
          <h2 id="answers-heading">Обычные вопросы. Понятные ответы.</h2>
          <p>Можно начать с готового примера — и уточнить его под себя.</p>
        </div>
        <div className="answer-grid">
          <article className="featured-answer">
            <div className="featured-copy">
              {/* <Link className="topic" to="/answers/wifi">
                Разобраться с подключением
              </Link> */}
              <h3>
                <Link to="/answers/wifi">
                  Ноутбук не видит Wi-Fi. Что проверить?
                </Link>
              </h3>
              <p>
                Убедитесь, что Wi-Fi включён, а режим полёта выключен.
                Посмотрите, видит ли эту сеть телефон: так проще понять, дело в
                ноутбуке или в роутере.
              </p>
              <Link className="answer-link" to="/answers/wifi">
                Разобраться шаг за шагом{' '}
                <ArrowRight size={22} aria-hidden="true" />
              </Link>
            </div>
            <Link
              className="featured-image"
              to="/answers/wifi"
              tabIndex={-1}
              aria-hidden="true"
            >
              <img
                src={laptop}
                alt=""
                width="1000"
                height="667"
                loading="lazy"
              />
            </Link>
          </article>
          <div className="side-answers">
            <article>
              <Link to="/answers/slow-computer">
                <div className="technical-image speed">
                  <Gauge size={64} strokeWidth={1.2} aria-hidden="true" />
                  <span aria-hidden="true">Быстрее к делу</span>
                </div>
                <div className="side-title">
                  <h3>Компьютер стал тормозить</h3>
                  <ArrowRight size={22} aria-hidden="true" />
                </div>
                <p>Как найти причину и с чего начать</p>
              </Link>
            </article>
            <article>
              <Link to="/answers/printer">
                <div className="technical-image printer">
                  <Printer size={58} strokeWidth={1.2} aria-hidden="true" />
                  <span aria-hidden="true">Есть подключение</span>
                </div>
                <div className="side-title">
                  <h3>Принтер не печатает</h3>
                  <ArrowRight size={22} aria-hidden="true" />
                </div>
                <p>Проверяем соединение и очередь печати</p>
              </Link>
            </article>
          </div>
        </div>
        {/* <Link className="all-answers" to="/answers">
          Все полезные ответы <ArrowRight size={20} aria-hidden="true" />
        </Link> */}
      </section>
    </MainPageViewStyled>
  )
}
