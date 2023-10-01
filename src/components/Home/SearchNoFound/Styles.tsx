import styled from 'styled-components';

type ErrorMessageWrapperProps = {
  isVisible: boolean;
};

export const ErrorMessageWrapper = styled.div<ErrorMessageWrapperProps>`
  display: ${(props) => (props.isVisible ? 'block' : 'none')};
`;

export const ErrorMessageText = styled.p``;
