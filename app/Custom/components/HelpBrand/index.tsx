import type * as React from 'react'
import { Link } from 'react-router'
import { HelpBrandStyled, HelpNavigationStyled } from './styles'

export const HelpBrand: React.FC = () => (
  <HelpBrandStyled to="/" aria-label="Помощь ИИ — главная">
    <svg
      width="52"
      height="42"
      viewBox="0 0 52 42"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M32 18c0 9-7 16-16 16H9l-7 5 2-11A16 16 0 1 1 32 18Z"
        fill="#2455ff"
      />
      <path
        d="M50 24c0 7-6 13-13 13h-4l-6 4 1-8a13 13 0 1 1 22-9Z"
        fill="#cdd5e7"
        fillOpacity=".9"
      />
    </svg>
    <span>помощь-ии.рф</span>
  </HelpBrandStyled>
)

export const HelpHeader: React.FC = () => (
  <HelpNavigationStyled as="header">
    <HelpBrand />
    <nav aria-label="Основная навигация">
      <Link to="/answers">Полезные ответы</Link>
    </nav>
  </HelpNavigationStyled>
)

export const HelpFooter: React.FC = () => (
  <HelpNavigationStyled as="footer">
    <HelpBrand />
    <nav aria-label="Навигация в подвале">
      <Link to="/answers">Полезные ответы</Link>
    </nav>
  </HelpNavigationStyled>
)
