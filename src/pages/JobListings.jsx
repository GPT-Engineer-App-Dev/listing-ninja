import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Pagination } from "@/components/ui/pagination";

const JobListings = () => {
  const [filters, setFilters] = useState({
    jobType: "",
    location: "",
    salaryRange: "",
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <h1 className="text-3xl font-bold">Job Listings</h1>
        <div className="flex space-x-2">
          <Input
            type="text"
            name="jobType"
            placeholder="Job type"
            value={filters.jobType}
            onChange={handleFilterChange}
          />
          <Input
            type="text"
            name="location"
            placeholder="Location"
            value={filters.location}
            onChange={handleFilterChange}
          />
          <Input
            type="text"
            name="salaryRange"
            placeholder="Salary range"
            value={filters.salaryRange}
            onChange={handleFilterChange}
          />
          <Button>Filter</Button>
        </div>
      </section>
      <section className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Placeholder for job listings */}
          <div className="border p-4 rounded-lg">Job Listing 1</div>
          <div className="border p-4 rounded-lg">Job Listing 2</div>
          <div className="border p-4 rounded-lg">Job Listing 3</div>
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