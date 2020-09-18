import React from 'react';
import { useTransition } from 'react-spring';

import Toast from './Toast';

import { ToastMessage } from '../../hooks/toast';
import { Container } from './styles';

interface ToastContainerProps {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  const messagesWithTransitions = useTransition(
    messages,
    message => message.id,
    {
      from: { right: '-120%', transform: 'rotateY(180deg)' },
      enter: { right: '0%', transform: 'rotateY(0deg)' },
      leave: { right: '-120%', transform: 'rotateY(180deg)' },
    },
  );

  return (
    <Container>
      {messagesWithTransitions.map(({ key, props, item }) => (
        <Toast key={key} style={props} message={item} />
      ))}
    </Container>
  );
};

export default ToastContainer;
