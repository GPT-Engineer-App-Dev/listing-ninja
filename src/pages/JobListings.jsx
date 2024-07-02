import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const fetchJobs = async () => {
  // Replace with actual API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, title: "Job Listing 1", company: "Company 1", location: "Location 1" },
        { id: 2, title: "Job Listing 2", company: "Company 2", location: "Location 2" },
        { id: 3, title: "Job Listing 3", company: "Company 3", location: "Location 3" },
      ]);
    }, 1000);
  });
};

const JobListings = () => {
  const { data: jobs, isLoading, error } = useQuery({
    queryKey: ["jobs"],
    queryFn: fetchJobs,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading jobs</div>;
  

  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <h1 className="text-3xl font-bold">Job Listings</h1>
        <div className="flex space-x-2">
          <Input type="text" name="jobType" placeholder="Job type" />
          <Input type="text" name="location" placeholder="Location" />
          <Input type="text" name="salaryRange" placeholder="Salary range" />
          <Button>Filter</Button>
        </div>
      </section>
      <section className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {jobs.map((job) => (
            <div key={job.id} className="border p-4 rounded-lg">
              <h2 className="text-xl font-semibold">{job.title}</h2>
              <p className="text-muted-foreground">{job.company}</p>
              <p>{job.location}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="flex justify-center">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </section>
    </div>
  );
};

export default JobListings;