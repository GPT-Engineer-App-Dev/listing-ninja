import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Index = () => {
  return (
    <div className="text-center space-y-8">
      <section className="space-y-4">
        <h1 className="text-4xl font-bold">Find Your Dream Job</h1>
        <p className="text-lg text-muted-foreground">Search for jobs by title, company, or location</p>
        <div className="flex justify-center space-x-2">
          <Input type="text" placeholder="Job title or company" className="w-1/3" />
          <Input type="text" placeholder="Location" className="w-1/3" />
          <Button>Search</Button>
        </div>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Featured Jobs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Placeholder for featured job listings */}
          <div className="border p-4 rounded-lg">Job Listing 1</div>
          <div className="border p-4 rounded-lg">Job Listing 2</div>
          <div className="border p-4 rounded-lg">Job Listing 3</div>
        </div>
      </section>
      <section className="space-y-4">
        <Button variant="primary" size="lg">Post a Job</Button>
        <Button variant="secondary" size="lg">Sign Up</Button>
      </section>
    </div>
  );
};

export default Index;