'use client'
import Link from 'next/link';
import { useParams } from 'next/navigation';

const JobDetailPage = () => {
  // const params = useParams();
  // const { jobId } = params;

  return (
    <div>
      <h1>Detailed Information for Job ID: </h1>
      <Link href={`/career/vacancies/j`}>click</Link>
    </div>
  );
};

export default JobDetailPage;
