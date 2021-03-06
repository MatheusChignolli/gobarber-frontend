import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  span {
    width: 160px;
    background: #ff9000;
    padding: 8px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500px;
    opacity: 0;
    transition: opacity 0.25s;
    visibility: hidden;

    position: absolute;
    bottom: calc(100% + 12px);
    left: 50%;
    transform: translateX(-50%);

    color: #312e38;

    &::before {
      content: '';
      border-style: solid;
      border-color: #ff9000 transparent;
      border-width: 6px 6px 0 6px;
      top: 100%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);

      /* Mine trinagle */
      /*
      background: #ff9000;
      display: block;
      width: 10px;
      height: 10px;
      position: absolute;
      bottom: -5px;
      left: 50%;
      transform: translateX(-50%) rotate(135deg); */
    }
  }

  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;
