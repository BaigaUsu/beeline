'use client';
import React, { useState, useEffect } from 'react';
import Button from "@/components/UI/Button/Button";
import styles from "./card.module.scss";
import Image from "next/image";
import ApiUrl from '@/app/api/apiList';
import Link from 'next/link';

interface Job {
  id: number;
  position: string;
  city: number;
  description: string;
  status: boolean;
  category: number;
}

interface JobListProps {
  searchTerm: string;
  showAllJobs: boolean;
  category: number | null;
}

export default function JobList({ searchTerm, showAllJobs, category }: JobListProps) {
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    fetchJobs();
  }, [category]);

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
    job.status && 
    (!category || job.category === category) && 
    (job.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.city.toString().includes(searchTerm))
  );

  const jobsToDisplay = showAllJobs ? filteredJobs : filteredJobs.slice(0, 4);

  return (
    <>
      {jobsToDisplay.map((job) => (
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
  id: number;
  position: string;
  city: number;
  description: string;
};

export function JobCard({ id, position, city, description }: JobCardProps) {
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