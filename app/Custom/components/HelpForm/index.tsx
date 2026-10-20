import type * as React from 'react'
import { useCallback, useRef, useState } from 'react'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { useChatContext } from '../Chat/ChatWidget/context'
import { HelpFormStyled } from './styles'

interface HelpFormProps {
  initialValue?: string
  placeholder?: string
  examples?: readonly { label: string; prompt: string }[]
  conversation?: boolean
}

export const HelpForm: React.FC<HelpFormProps> = ({
  initialValue = '',
  placeholder = 'Что хотите сделать и что не получается?',
  examples = [],
  conversation = false,
}) => {
  const [value, setValue] = useState(initialValue)
  const textarea = useRef<HTMLTextAreaElement>(null)
  const { setIsOpen, submitMessage, isLoading } = useChatContext()
  const submit = useCallback(
    (event: React.SubmitEvent<HTMLFormElement>): void => {
      event.preventDefault()
      if (!value.trim() || isLoading) {
        textarea.current?.focus()
        return
      }
      setIsOpen(true)
      void submitMessage(value.trim())
    },
    [value, isLoading, setIsOpen, submitMessage],
  )
  const change = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>): void =>
      setValue(event.target.value),
    [],
  )
  const openConversation = useCallback((): void => setIsOpen(true), [setIsOpen])
  const selectExample = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>): void => {
      if (isLoading) {
        return
      }
      setIsOpen(true)
      void submitMessage(event.currentTarget.value)
    },
    [isLoading, setIsOpen, submitMessage],
  )
  return (
    <HelpFormStyled>
      <form onSubmit={submit}>
        <label className="visually-hidden" htmlFor="help-task">
          С чем вам нужна помощь?
        </label>
        <textarea
          id="help-task"
          ref={textarea}
          value={value}
          onChange={change}
          placeholder={placeholder}
          required
          maxLength={16000}
          rows={4}
        />
        <div className="form-bottom">
          <span>Можно без специальных терминов</span>
          <button type="submit" disabled={isLoading}>
            Получить помощь <ArrowRight size={22} aria-hidden="true" />
          </button>
        </div>
      </form>
      {conversation && (
        <button
          type="button"
          className="conversation"
          onClick={openConversation}
        >
          <MessageCircle size={25} aria-hidden="true" />
          <span>Со мной можно и просто поговорить</span>
        </button>
      )}
      {examples.length > 0 && (
        <div className="examples">
          <p>Или начните с примера</p>
          <div>
            {examples.map((example) => (
              <button
                type="button"
                key={example.label}
                value={example.prompt}
                onClick={selectExample}
                disabled={isLoading}
              >
                {example.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </HelpFormStyled>
  )
}
