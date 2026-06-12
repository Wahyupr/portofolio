"use client";

import { useEffect, useState } from "react";

type SectionId = "about" | "experience" | "projects";

type Experience = {
  period: string;
  title: string;
  company: string;
  location: string;
  href?: string;
  summary: string;
  tech: string[];
};

type Project = {
  period: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
};

const profile = {
  name: "Wahyu Pratama",
  role: "Full-Stack Developer",
  location: "Yogyakarta, Indonesia",
  email: "whypratamaaa@gmail.com",
  phone: "+62 822-8571-8485",
  github: "",
  linkedin: "https://linkedin.com/in/wahyu-pratama-397021221",
  summary:
    "I build scalable enterprise web applications across frontend, backend, databases, APIs, and DevOps workflows.",
};

const sections: { id: SectionId; label: string }[] = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
];

const highlights = ["TypeScript", "Golang", "Python", "Angular", "Vue.js", "Adonis.js", "Next.js", "PostgreSQL"];

const experience: Experience[] = [
  {
    period: "Nov 2023 - Present",
    title: "Full-Stack Developer",
    company: "PT. Orang Informasi Teknologi",
    location: "Based on PT. Asahimas Flat Glass Tbk.",
    href: "https://amfg.co.id",
    summary:
      "Design, develop, and maintain enterprise web applications for budgeting, procurement, inventory, approval, and claim management. Built GitLab CI/CD pipelines and migrated legacy .NET applications to Angular and Python services with FastAPI and Flask.",
    tech: ["Angular JS", "Python", "FastAPI", "Flask", "SQL Server", "GitLab CI/CD", "IIS"],
  },
  {
    period: "Sep 2021 - Jul 2023",
    title: "Full-Stack Developer",
    company: "PT. Aino Indonesia",
    location: "Yogyakarta, Indonesia",
    href: "https://ainosi.co.id",
    summary:
      "Developed responsive transportation and fleet management applications, including fare and ticket management, driver assignment, operational reporting, PostgreSQL database design, RESTful APIs with Golang, and integrations through Kong API Gateway.",
    tech: ["Vue.js", "Golang", "AdonisJS", "PostgreSQL", "Kong API Gateway", "Docker", "JWT", "RabbitMQ", "Kafka"],
  },
  {
    period: "Aug 2019 - Oct 2019",
    title: "Full-Stack Developer Intern",
    company: "STMIK Akakom Yogyakarta (UTDI)",
    location: "Yogyakarta, Indonesia",
    href: "https://utdi.ac.id",
    summary:
      "Built a student orientation attendance and task submission information system for attendance tracking, assignment collection, and violation reporting. Mentored vocational school interns on databases, programming fundamentals, and Android basics.",
    tech: ["PHP", "MySQL", "Android", "Databases", "Mentoring"],
  },
  {
    period: "Oct 2021",
    title: "Bachelor of Information Systems",
    company: "Universitas Teknologi Digital Indonesia",
    location: "GPA 3.33 / 4.0",
    href: "https://utdi.ac.id",
    summary:
      "Completed a Bachelor of Information Systems degree in Yogyakarta, building a foundation in information systems, software development, and applied database-backed applications.",
    tech: ["Information Systems", "Software Development", "Databases"],
  },
];

const projects: Project[] = [
  {
    period: "Mar 2026 - Present",
    title: "Tracking Cashflow App",
    category: "Finance AI",
    description:
      "Personal finance app with voice-based cashflow entry, AI feedback, spending insights, trend analysis, and monthly/category reporting.",
    tech: ["Flutter", "Next JS", "PostgreSQL", "AI/LLM Integration"],
  },
  {
    period: "Nov 2025 - Dec 2025",
    title: "Point of Sale System",
    category: "Retail Ops",
    description:
      "Retail and wholesale POS with product management, customer records, stock tracking, pricing tiers, debt management, repayments, barcode scanning, and sales reports.",
    tech: ["Flutter", "Golang", "PostgreSQL"],
  },
  {
    period: "Aug 2023 - Nov 2023",
    title: "Car Washer Information System",
    category: "Service Booking",
    description:
      "Service booking and customer transaction platform for car wash operations, built with Vue.js, AdonisJS, and PostgreSQL.",
    tech: ["Vue.js", "AdonisJS", "PostgreSQL"],
  },
  {
    period: "May 2023",
    title: "QR Code Attendance - SDN 009 Harapan Makmur",
    category: "Attendance",
    description:
      "QR scanning attendance system for teachers and staff at SDN 009 Harapan Makmur in Riau.",
    tech: ["Codeigniter 3", "Android Studio", "Java", "PHP", "MySQL"],
  },
  {
    period: "Jul 2022 - Oct 2022",
    title: "Fruit Online Store",
    category: "E-commerce",
    description:
      "Fruit ordering platform with inventory and stock management capabilities.",
    tech: ["Codeigniter 3", "PHP", "MySQL"],
  },
  {
    period: "Jul 2020 - Feb 2021",
    title: "QR Code Attendance for Vocational Internship",
    category: "Thesis System",
    description:
      "Android-based QR attendance system with Device ID binding and dynamically refreshing QR codes to reduce proxy attendance fraud.",
    tech: ["Codeigniter 3", "PHP", "Java", "Android Studio", "MySQL"],
  },
  {
    period: "Jan 2018 - Feb 2018",
    title: "Car Rent Information System",
    category: "Rental Platform",
    description:
      "Car rental platform connecting car owners and customers to simplify the rental process.",
    tech: ["PHP", "MySQL"],
  },
];

const socialLinks = [
  { label: "Email", href: `mailto:${profile.email}`, icon: "email" },
  { label: "GitHub", href: profile.github, icon: "github" },
  { label: "LinkedIn", href: profile.linkedin, icon: "linkedin" },
] as const;

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState<SectionId>("about");

  useEffect(() => {
    const observers = sections.map(({ id }) => {
      const element = document.getElementById(id);
      if (!element) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
      );

      observer.observe(element);
      return observer;
    });

    return () => observers.forEach((observer) => observer?.disconnect());
  }, []);

  return (
    <main className="min-h-dvh bg-[#0f172a] text-slate-400 selection:bg-[#64ffda]/20 selection:text-[#ccd6f6]">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(600px_circle_at_50%_0%,rgba(29,78,216,0.15),transparent_80%)]" />
      <div className="mx-auto grid min-h-dvh max-w-6xl gap-4 px-6 py-12 md:px-12 md:py-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24 lg:px-16 lg:py-0">
        <aside className="lg:sticky lg:top-0 lg:flex lg:h-dvh lg:flex-col lg:justify-between lg:py-24">
          <div>
            <a href="#about" className="group inline-block">
              <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                {profile.name}
              </h1>
              <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
                {profile.role}
              </h2>
            </a>
            <p className="mt-4 max-w-xs leading-7 text-slate-400">
              {profile.summary}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {highlights.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium text-teal-300"
                >
                  {item}
                </span>
              ))}
            </div>

            <nav className="mt-12 hidden lg:block" aria-label="In-page navigation">
              <ol className="space-y-4">
                {sections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className={`group flex items-center py-1 text-xs font-bold uppercase tracking-[0.18em] transition ${
                        activeSection === section.id ? "text-slate-200" : "text-slate-500 hover:text-slate-200"
                      }`}
                    >
                      <span
                        className={`mr-4 h-px transition-all ${
                          activeSection === section.id
                            ? "w-16 bg-slate-200"
                            : "w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-200"
                        }`}
                      />
                      {section.label}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </div>

          <div className="mt-10 flex items-center gap-6 text-slate-400 lg:mt-0">
            {socialLinks.map((link) => (
              <SocialIconLink
                key={link.label}
                href={link.href}
                icon={link.icon}
                label={link.label}
              />
            ))}
          </div>
        </aside>

        <div className="pt-8 lg:py-24">
          <section id="about" className="scroll-mt-24" aria-label="About">
            <SectionLabel>About</SectionLabel>
            <div className="space-y-4 leading-7">
              <p>
                I am a dedicated full-stack developer with hands-on experience building
                scalable, user-friendly web applications across enterprise systems,
                transportation platforms, and internal operational tools.
              </p>
              <p>
                My work spans frontend interfaces, backend APIs, database design, CI/CD
                pipelines, and deployment workflows. I have shipped systems for budgeting,
                procurement, inventory, approvals, claims, fare and ticket management,
                driver fleet assignment, and operational reporting.
              </p>
              <p>
                I am comfortable bridging design and functionality with{" "}
                <Highlight>JavaScript</Highlight>, <Highlight>TypeScript</Highlight>,{" "}
                <Highlight>Golang</Highlight>, <Highlight>Python</Highlight>,{" "}
                <Highlight>Angular</Highlight>, <Highlight>Vue.js</Highlight>, <Highlight>Adonis.js</Highlight>, <Highlight>Next.js</Highlight>, and
                production database and messaging infrastructure.
              </p>
            </div>
          </section>

          <section id="experience" className="scroll-mt-24 pt-24" aria-label="Experience">
            <SectionLabel>Experience</SectionLabel>
            <ol className="group/list">
              {experience.map((item) => (
                <li key={`${item.period}-${item.title}`} className="mb-12">
                  <ExperienceCard item={item} />
                </li>
              ))}
            </ol>
          </section>

          <section id="projects" className="scroll-mt-24 pt-16" aria-label="Projects">
            <SectionLabel>Projects</SectionLabel>
            <ol className="group/list">
              {projects.map((project) => (
                <li key={project.title} className="mb-10">
                  <ProjectCard project={project} />
                </li>
              ))}
            </ol>
          </section>

          <footer className="max-w-md pb-10 text-sm leading-6 text-slate-500">
            Loosely inspired by{" "}
            <a
              className="font-medium text-slate-400 transition hover:text-teal-300"
              href="https://brittanychiang.com"
              rel="noreferrer"
              target="_blank"
            >
              Brittany Chiang&apos;s portfolio
            </a>
            . Built with Next.js and Tailwind CSS.
          </footer>
        </div>
      </div>
    </main>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="sticky top-0 z-20 -mx-6 mb-6 bg-[#0f172a]/85 px-6 py-5 text-sm font-bold uppercase tracking-[0.18em] text-slate-200 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:m-0 lg:h-0 lg:p-0">
      {children}
    </div>
  );
}

function ExperienceCard({ item }: { item: Experience }) {
  const Title = item.href ? "a" : "div";

  return (
    <article className="group relative grid gap-4 rounded-md transition-all sm:grid-cols-8 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
      <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
        {item.period}
      </header>
      <div className="z-10 sm:col-span-6">
        <h3 className="font-medium leading-snug text-slate-200">
          <Title
            {...(item.href ? { href: item.href, target: "_blank", rel: "noreferrer" } : {})}
            className="inline-flex items-baseline text-base font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
          >
            <span>
              {item.title} · <span className="inline-block">{item.company}</span>
            </span>
          </Title>
        </h3>
        <p className="mt-1 text-sm text-slate-500">{item.location}</p>
        <p className="mt-3 text-sm leading-6">{item.summary}</p>
        <TechList items={item.tech} />
      </div>
    </article>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative grid gap-4 rounded-md transition-all sm:grid-cols-8 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
      <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
        {project.period}
      </header>
      <div className="z-10 sm:col-span-6">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-300">
          {project.category}
        </p>
        <h3 className="mt-2 text-base font-medium tracking-tight text-slate-200 group-hover:text-teal-300">
          {project.title}
        </h3>
        <p className="mt-3 text-sm leading-6">{project.description}</p>
        <TechList items={project.tech} />
      </div>
    </article>
  );
}

function TechList({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies used">
      {items.map((item) => (
        <li key={item}>
          <span className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

function Highlight({ children }: { children: React.ReactNode }) {
  return <span className="font-medium text-slate-200">{children}</span>;
}

function SocialIconLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: (typeof socialLinks)[number]["icon"];
  label: string;
}) {
  const className =
    "inline-flex size-8 items-center justify-center text-slate-400 transition hover:-translate-y-0.5 hover:text-teal-300 focus-visible:text-teal-300";

  if (!href) {
    return (
      <span
        aria-label={`${label} link belum tersedia`}
        className={`${className} cursor-not-allowed opacity-50`}
        title={label}
      >
        <SocialIcon name={icon} />
      </span>
    );
  }

  return (
    <a
      aria-label={label}
      className={className}
      href={href}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      target={href.startsWith("http") ? "_blank" : undefined}
      title={label}
    >
      <SocialIcon name={icon} />
    </a>
  );
}

function SocialIcon({ name }: { name: (typeof socialLinks)[number]["icon"] }) {
  if (name === "email") {
    return (
      <svg aria-hidden="true" className="size-6" fill="none" viewBox="0 0 24 24">
        <path
          d="M4.75 6.75h14.5v10.5H4.75z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
        />
        <path
          d="m5.25 7.25 6.75 5 6.75-5"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
        />
      </svg>
    );
  }

  if (name === "github") {
    return (
      <svg aria-hidden="true" className="size-6" fill="currentColor" viewBox="0 0 24 24">
        <path
          clipRule="evenodd"
          d="M12 2.75a9.25 9.25 0 0 0-2.93 18.03c.46.08.63-.2.63-.44l-.01-1.58c-2.56.56-3.1-1.1-3.1-1.1-.42-1.06-1.02-1.34-1.02-1.34-.84-.57.06-.56.06-.56.93.07 1.42.96 1.42.96.82 1.41 2.16 1 2.68.77.08-.6.32-1 .58-1.23-2.04-.23-4.19-1.02-4.19-4.55 0-1 .36-1.82.95-2.46-.1-.23-.41-1.17.09-2.43 0 0 .78-.25 2.54.94A8.8 8.8 0 0 1 12 6.47c.78 0 1.56.1 2.3.31 1.76-1.19 2.53-.94 2.53-.94.51 1.26.19 2.2.1 2.43.6.64.95 1.46.95 2.46 0 3.54-2.15 4.31-4.2 4.54.33.29.62.85.62 1.72l-.01 2.55c0 .25.17.53.64.44A9.25 9.25 0 0 0 12 2.75Z"
          fillRule="evenodd"
        />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" className="size-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M6.4 8.6H3.6v11h2.8v-11ZM5 4.4a1.62 1.62 0 1 0 0 3.24A1.62 1.62 0 0 0 5 4.4ZM20.4 13.4c0-3-1.6-4.95-4.2-4.95a3.6 3.6 0 0 0-3.1 1.7V8.6h-2.7v11h2.8v-5.45c0-1.44.27-2.84 2.06-2.84 1.76 0 1.78 1.65 1.78 2.93v5.36h2.8v-6.2h.56Z" />
    </svg>
  );
}
