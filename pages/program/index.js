import Link from 'next/link';
import Layout from '../../components/Layout';
import Program from '../../components/Program';

function ProgramPage() {
  return (
    <div className='container'>
      <Layout htmlTitle='Program | Personal Yoga Trainer in Gurgaon'>
        {/* Program  page */}
        <Program />
        <Link href='/program/insert_program'>
          <a>Insert New Program</a>
        </Link>
      </Layout>
    </div>
  );
}

export default ProgramPage;
