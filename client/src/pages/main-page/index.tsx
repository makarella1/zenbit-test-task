import { FeedbackForm } from '@/modules/feedback-form';
import { Heading } from './components/heading';
import { Main } from './components/main-container';

import mapImage from '../../assets/map.jpg';

export const MainPage = () => (
  <Main>
    <Heading />
    <FeedbackForm />
    <img
      src={mapImage}
      alt="Map"
      style={{
        position: 'absolute',
        top: -20,
        right: 0,
        width: '700px',
        height: '700px',
      }}
    />
  </Main>
);
