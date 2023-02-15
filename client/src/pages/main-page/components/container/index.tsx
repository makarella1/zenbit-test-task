import { StyledContainer } from './container.styled';

export const Container = ({ children }: React.PropsWithChildren) => (
  <StyledContainer>{children}</StyledContainer>
);
