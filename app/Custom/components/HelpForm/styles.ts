import { styled } from '@linaria/react'

export const HelpFormStyled = styled.div`
  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip-path: inset(50%);
  }
  form {
    border: 1px solid #aab4cb;
    border-radius: 16px;
    background: white;
    padding: 20px;
    transition:
      border-color 0.2s,
      box-shadow 0.2s;
  }
  form:focus-within {
    border-color: #2455ff;
    box-shadow: 0 0 0 3px #2455ff0c;
  }
  textarea {
    display: block;
    width: 100%;
    min-height: 128px;
    resize: vertical;
    border: 0;
    padding: 0;
    background: transparent;
    color: #151b2b;
    font-size: 18px;
    line-height: 1.55;
    outline: none;
  }
  textarea::placeholder {
    color: #81899c;
    opacity: 1;
  }
  textarea:focus-visible {
    outline: none;
  }
  .form-bottom {
    display: flex;
    flex-direction: column;
    gap: 18px;
    margin-top: 14px;
  }
  .form-bottom span {
    color: #7b8294;
    font-size: 12px;
  }
  .form-bottom button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    border: 0;
    border-radius: 13px;
    background: #2455ff;
    color: white;
    padding: 16px 23px;
    font-weight: 600;
    transition:
      background 0.2s,
      transform 0.2s;
  }
  .form-bottom button:hover {
    background: #1644e8;
    transform: translateY(-1px);
  }
  .conversation {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 0;
    margin-top: 22px;
    border: 0;
    background: none;
    color: #2455ff;
    font-size: 14px;
    text-align: left;
  }
  .conversation span {
    text-decoration: underline;
    text-decoration-color: #bccaff;
    text-underline-offset: 5px;
  }
  .examples {
    margin-top: 38px;
    font-size: 14px;
  }
  .examples p {
    margin-bottom: 10px;
  }
  .examples > div {
    display: flex;
    flex-wrap: wrap;
    gap: 9px;
  }
  .examples button {
    border: 1px solid #aab4cb;
    border-radius: 10px;
    padding: 11px 14px;
    background: transparent;
    color: #333c52;
    font-size: 13px;
  }
  .examples button:hover {
    border-color: #2455ff;
    color: #2455ff;
    background: #f3f6ff;
  }
  @media (min-width: 560px) {
    .form-bottom {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
  }
  @media (min-width: 1050px) {
    form {
      padding: 24px;
    }
    textarea {
      min-height: 152px;
      font-size: 21px;
    }
    .conversation {
      font-size: 16px;
    }
    .examples {
      margin-top: 48px;
      font-size: 16px;
    }
    .examples button {
      font-size: 15px;
    }
  }
`
