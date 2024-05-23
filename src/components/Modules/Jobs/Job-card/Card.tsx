'use client'
import React, { useState, useEffect } from 'react';
import Button from "@/components/UI/Button/Button";
import styles from "./card.module.scss";
import Image from "next/image";
import ApiUrl from '@/app/api/values';

interface Job {
  name: string;
  city: number;
  description: string;

}

export default function JobList() {
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

  return (
    <>
      {jobs.map((job, index) => (
        <JobCard
          key={index}
          name={job.name}
          city={job.city}
          description={job.description}
        />
      ))}
    </>
  );
}

export type JobCardProps = {
  name: string;
  city: string;
  title: string;
  description: string;
};

export function JobCard({ name, city, description }: Job) {
  return (
    <div className={styles.wrap}>
      <p className={styles.city}>
        <Image src="/jobsIcons/locationIcon.svg" alt="Location Icon" width="20" height="20" />
        <span className={styles.cityText}>г.{city}</span>
      </p>
      <div className={styles.contentWrap}>
        <h4 className={styles.title}>{name}</h4>
        <p className={styles.description}>{description}</p>
        <Button variant="more">Подробнее</Button>
      </div>
    </div>
  );
}