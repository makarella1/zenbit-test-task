import { FeedbackForm } from '@/modules/feedback-form';
import { Heading } from './components/heading';
import { Main } from './components/main-container';

import mapImage from '../../assets/map.jpg';
import { Footer } from './components/footer';
import { MapImage } from './components/map-img';

export const MainPage = () => (
  <>
    <Main>
      <Heading />
      <FeedbackForm />
      <MapImage src={mapImage} alt="Map" />
    </Main>
    <Footer />
  </>
);
