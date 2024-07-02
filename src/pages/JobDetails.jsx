import { Button } from "@/components/ui/button";

const JobDetails = () => {
  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <h1 className="text-3xl font-bold">Job Title</h1>
        <p className="text-lg text-muted-foreground">Company Name</p>
        <p className="text-lg">Location</p>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Job Description</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          scelerisque leo nec sem feugiat, a tincidunt nisi fermentum. Sed
          vehicula, lorem a tincidunt facilisis, justo erat tincidunt libero,
          non tincidunt libero erat a justo.
        </p>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Requirements</h2>
        <ul className="list-disc list-inside">
          <li>Requirement 1</li>
          <li>Requirement 2</li>
          <li>Requirement 3</li>
        </ul>
      </section>
      <section className="space-y-4">
        <Button variant="primary" size="lg">Apply Now</Button>
      </section>
    </div>
  );
};

export default JobDetails;