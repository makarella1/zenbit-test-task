import { SmallYellowSmile } from '@/ui/lib/small-yellow-smile';
import { PinkSmile } from '@/ui/lib/pink-smile';
import { YellowSmile } from '@/ui/lib/yellow-smile';
import { GreenSmile } from '@/ui/lib/green-smile';
import {
  StyledContainer,
  FirstSmallYellowSmile,
  SecondPinkSmile,
  BigYellowSmile,
  SecondSmallYellowSmile,
  StyledGreenSmile,
} from './container.styled';

export const Container = ({ children }: React.PropsWithChildren) => (
  <StyledContainer>
    <FirstSmallYellowSmile>
      <SmallYellowSmile />
    </FirstSmallYellowSmile>
    <SecondSmallYellowSmile>
      <SmallYellowSmile />
    </SecondSmallYellowSmile>
    <SecondPinkSmile>
      <PinkSmile />
    </SecondPinkSmile>
    <BigYellowSmile>
      <YellowSmile />
    </BigYellowSmile>
    <StyledGreenSmile>
      <GreenSmile />
    </StyledGreenSmile>
    {children}
  </StyledContainer>
);
