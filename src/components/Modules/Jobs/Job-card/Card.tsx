'use client'
import React, { useState, useEffect } from 'react';
import Button from "@/components/UI/Button/Button";
import styles from "./card.module.scss";
import Image from "next/image";
import ApiUrl from '@/app/api/values';
import Link from 'next/link';

interface Job {
  id: number;
  position: string;
  city: number;
  description: string;
}

interface JobListProps {
  searchTerm: string;
}

export default function JobList({ searchTerm }: JobListProps) {
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
  const response = await fetch(ApiUrl, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data: Job[] = await response.json();
  setJobs(data);
} catch (error) {
  console.error('Error fetching jobs:', error);
}
  };

  const filteredJobs = jobs.filter(job =>
    job.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.city.toString().includes(searchTerm)
  );

  return (
    <>
      {filteredJobs.map((job) => (
        <JobCard
          key={job.id}
          id={job.id}
          position={job.position}
          city={job.city}
          description={job.description}
        />
      ))}
    </>
  );
}

export type JobCardProps = {
  id: number
  position: string;
  city: string;
  title: string;
  description: string;
};

export function JobCard({ id, position, city, description }: Job) {
  return (
    <div className={styles.wrap}>
      <p className={styles.city}>
        <Image src="/jobsIcons/locationIcon.svg" alt="Location Icon" width="20" height="20" />
        <span className={styles.cityText}>г.{city}</span>
      </p>
      <div className={styles.contentWrap}>
        <h4 className={styles.title}>{position}</h4>
        <p className={styles.description}>{description}</p>
        <Link href={`/career/vacancies/item/${id}`}>
          <Button variant="more">Подробнее</Button>
        </Link>
      </div>
    </div>
  );
}