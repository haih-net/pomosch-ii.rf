import { styled } from '@linaria/react'
import { Link } from 'react-router'

export const HelpBrandStyled = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: clamp(18px, 2.5vw, 29px);
  font-weight: 800;
  letter-spacing: -1px;
  color: #111727;
  white-space: nowrap;
  svg {
    width: 40px;
    height: 34px;
    flex-shrink: 0;
  }
  &:hover {
    text-decoration: none;
  }
  @media (min-width: 800px) {
    svg {
      width: 52px;
      height: 42px;
    }
  }
`
export const HelpNavigationStyled = styled.div`
  width: min(100%, 1280px);
  margin: 0 auto;
  padding: 24px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  nav {
    font-size: 13px;
    text-align: right;
  }
  nav a {
    color: #2455ff;
    text-decoration: underline;
    text-decoration-color: #bccaff;
    text-underline-offset: 5px;
  }
  @media (min-width: 800px) {
    padding: 28px 48px;
    nav {
      font-size: 16px;
    }
  }
`
