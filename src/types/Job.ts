

export type Job = {
  id: string;
  id_user: string;
  title_job: string;
  company_name: string;
  company_email: string;
  company_avatar: string;
  model: string;
  location: string;
  description: string;
  type: string;
  contract: string;
  status: string;
  benefits: string[];
  stacks: string[];
  blob: string;
  salary_range: string;
  candidates: string[];
  createdAt: Date;
  updatedAt: Date;
};
