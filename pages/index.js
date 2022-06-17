import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import {
  faWhatsapp,
  faYoutube,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import Layout from '../components/Layout';
import Home from '../components/Home';

library.add(fas, faWhatsapp, faYoutube, faInstagram);

export default function Index() {
  return (
    <div className="container">
      <Layout htmlTitle="Personal Yoga Trainer in Gurgaon">
        {/* Home  page */}
        <Home />
      </Layout>
    </div>
  );
}
