'use client'

import Link from 'next/link';
import VacancyList from './ListUI/VacancyList';
// import { useParams } from 'next/navigation';

export default function ListPage () {
//   const params = useParams();
//   const { jobId } = params;

  return (
    <VacancyList/>
  );
};
