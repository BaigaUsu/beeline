'use client'

import VacancyList from '@/app/career/vacancies/[list]/ListUI/VacancyList';
import Link from 'next/link';
// import { useParams } from 'next/navigation';

export default function ListPage () {
//   const params = useParams();
//   const { jobId } = params;

  return (
    <VacancyList/>
  );
};
