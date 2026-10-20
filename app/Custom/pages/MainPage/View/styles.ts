import { styled } from '@linaria/react'

export const MainPageViewStyled = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 36px 20px 48px;
  .hero {
    display: grid;
    gap: 36px;
    align-items: start;
  }
  h1 {
    max-width: 760px;
    font-size: clamp(40px, 6vw, 74px);
    line-height: 1.04;
    letter-spacing: -0.055em;
    font-weight: 800;
    color: #101624;
  }
  .lead {
    margin: 24px 0 32px;
    color: #626b80;
    font-size: 18px;
    line-height: 1.5;
  }
  .example {
    padding: 28px;
    border-radius: 22px;
    background: #ffeadc;
  }
  .eyebrow {
    font-size: 15px;
    color: #625752;
    margin-bottom: 18px;
  }
  .example h2 {
    font-size: 27px;
    line-height: 1.25;
    letter-spacing: -0.04em;
    font-weight: 600;
  }
  blockquote {
    margin: 28px 0 32px;
    padding: 28px;
    border-radius: 17px;
    background: #fff;
    font-size: 21px;
    line-height: 1.5;
    color: #424b60;
  }
  .example button {
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 0;
    border: 0;
    background: none;
    color: #2455ff;
    text-align: left;
    font-size: 16px;
    font-weight: 500;
  }
  .example button svg {
    flex-shrink: 0;
  }
  .example button:hover {
    text-decoration: underline;
    text-underline-offset: 4px;
  }
  .answers {
    margin-top: 72px;
  }
  .section-heading h2 {
    color: #15171d;
    font-size: clamp(29px, 3.6vw, 43px);
    line-height: 1.15;
    letter-spacing: -0.045em;
    font-weight: 700;
  }
  .section-heading > p {
    color: #6b7386;
    font-size: 18px;
    margin-top: 12px;
  }
  .answer-grid {
    margin-top: 36px;
    display: grid;
    gap: 30px;
  }
  .featured-answer {
    display: flex;
    flex-direction: column-reverse;
    gap: 24px;
  }
  .featured-image {
    overflow: hidden;
    border-radius: 15px;
    display: block;
  }
  .featured-image img {
    width: 100%;
    height: 250px;
    display: block;
    object-fit: cover;
  }
  .featured-copy {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .topic {
    color: #2455ff;
    text-decoration: underline;
    text-underline-offset: 5px;
    text-decoration-color: #ccd6ff;
    font-size: 15px;
  }
  .featured-copy h3 {
    margin: 18px 0 22px;
    font-size: 29px;
    line-height: 1.25;
    letter-spacing: -0.04em;
  }
  .featured-copy > p {
    font-size: 18px;
    line-height: 1.55;
    color: #626b80;
  }
  .answer-link {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    margin-top: 30px;
    font-size: 16px;
    color: #2455ff;
    text-decoration: underline;
    text-decoration-color: #ccd6ff;
    text-underline-offset: 5px;
  }
  .answer-link svg {
    flex-shrink: 0;
  }
  .side-answers {
    display: grid;
    gap: 22px;
  }
  .side-answers article + article {
    border-top: 1px solid #e0e4eb;
    padding-top: 22px;
  }
  .side-answers a:hover {
    text-decoration: none;
  }
  .side-answers a:hover h3 {
    color: #2455ff;
  }
  .technical-image {
    height: 116px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    overflow: hidden;
  }
  .technical-image span {
    max-width: 100px;
    font-size: 14px;
  }
  .speed {
    color: #476682;
    background: linear-gradient(115deg, #e5eef6, #f4f7fa);
  }
  .printer {
    color: #7e6b59;
    background: linear-gradient(115deg, #f3e9de, #faf5ef);
  }
  .side-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    margin-top: 14px;
  }
  .side-title h3 {
    font-size: 22px;
    line-height: 1.25;
    letter-spacing: -0.04em;
    font-weight: 600;
  }
  .side-title svg {
    flex-shrink: 0;
    color: #2455ff;
  }
  .side-answers p {
    margin-top: 7px;
    color: #626b80;
    font-size: 16px;
  }
  .all-answers {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    color: #2455ff;
    margin-top: 32px;
    font-size: 15px;
  }
  @media (min-width: 560px) {
    .side-answers {
      grid-template-columns: 1fr 1fr;
    }
    .side-answers article + article {
      border: 0;
      padding: 0;
    }
  }
  @media (min-width: 800px) {
    padding: 62px 48px 48px;
    .hero {
      grid-template-columns: minmax(0, 1.62fr) minmax(0, 1fr);
      gap: 32px;
    }
    .example {
      padding: 30px;
    }
    .example h2 {
      font-size: 28px;
    }
    blockquote {
      padding: 25px;
      font-size: 20px;
    }
    .answers {
      margin-top: 112px;
    }
    .featured-answer {
      flex-direction: row;
      align-items: stretch;
      gap: 24px;
    }
    .featured-copy {
      flex: 1.2;
      padding: 28px 0;
    }
    .featured-image {
      flex: 1;
    }
    .featured-image img {
      height: 100%;
      min-height: 370px;
    }
    .answer-link {
      margin-top: auto;
      padding-top: 30px;
    }
  }
  @media (min-width: 1050px) {
    .lead {
      font-size: 22px;
      margin-bottom: 38px;
    }
    .example {
      padding: 40px 34px;
    }
    .example h2 {
      font-size: 32px;
    }
    blockquote {
      margin: 40px 0 48px;
      font-size: 24px;
      padding: 30px;
    }
    .example button {
      font-size: 18px;
    }
    .section-heading > p {
      font-size: 22px;
    }
    .answer-grid {
      grid-template-columns: minmax(0, 2fr) minmax(0, 1fr);
      gap: 36px;
    }
    .side-answers {
      grid-template-columns: 1fr;
      border-left: 1px solid #e0e4eb;
      padding-left: 24px;
    }
    .side-answers article + article {
      border-top: 1px solid #e0e4eb;
      padding-top: 20px;
    }
    .featured-copy h3 {
      font-size: 32px;
    }
    .featured-copy > p {
      font-size: 20px;
    }
    .featured-image img {
      min-height: 440px;
    }
  }
`
