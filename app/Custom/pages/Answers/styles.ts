import { styled } from '@linaria/react'

export const AnswersStyled = styled.div`
  max-width: 1056px;
  margin: 0 auto;
  padding: 40px 20px 80px;
  .back {
    display: inline-block;
    color: #2455ff;
    margin-bottom: 30px;
  }
  h1 {
    font-size: clamp(34px, 5vw, 56px);
    line-height: 1.12;
    letter-spacing: -0.04em;
  }
  .lead {
    margin: 22px 0 40px;
    font-size: 21px;
    color: #626b80;
  }
  h2 {
    font-size: 25px;
    line-height: 1.3;
    margin-bottom: 20px;
    letter-spacing: -0.025em;
  }
  .answer-list {
    display: grid;
    gap: 16px;
    margin-bottom: 64px;
  }
  .answer-list a {
    position: relative;
    border: 1px solid #e0e4eb;
    border-radius: 14px;
    padding: 24px 46px 24px 24px;
  }
  .answer-list h2 {
    font-size: 22px;
    margin-bottom: 12px;
  }
  .answer-list p {
    color: #626b80;
  }
  .answer-list svg {
    position: absolute;
    right: 18px;
    top: 26px;
    color: #2455ff;
  }
  .answer-list a:hover {
    border-color: #2455ff;
    text-decoration: none;
  }
  ol {
    padding-left: 26px;
    margin-bottom: 36px;
  }
  li {
    padding-left: 8px;
    margin: 18px 0;
    font-size: 19px;
    line-height: 1.6;
  }
  li::marker {
    color: #2455ff;
    font-weight: 600;
  }
  .example {
    background: #fff0e5;
    border-radius: 16px;
    padding: 28px;
    margin: 32px 0 48px;
  }
  .example p {
    font-size: 18px;
    line-height: 1.6;
  }
  .form-description {
    margin-bottom: 24px;
    color: #626b80;
  }
  .related {
    margin-top: 48px;
    display: grid;
    gap: 12px;
  }
  .related a {
    color: #2455ff;
  }
  @media (min-width: 800px) {
    padding: 60px 48px 90px;
    .answer-list {
      grid-template-columns: 1fr 1fr;
    }
  }
`
