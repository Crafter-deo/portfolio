type Testimonial = {
  name: string;
  comment: string;
  business: string;
};

type Project = {
  title: string;
  description?: string;
  image?: string;
  link: string;
  btnMessage: string;
};

export default interface DB {
  name: string;
  phone: string;
  email: string;
  address: string;
  about: string[];
  socials: {
    instagram: string;
    twitter: string;
    linkedIn: string;
    discord: string;
    github: string;
  };
  testimonials: Testimonial[];
  yearsOfExperience: number;
  projects: {
    first_column: Project[];
    second_column: Project[];
  };
}
