export interface ProjectItem {
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
}

export const introText = `Hello, I'm Yen. I build web applications, tools, and software to solve problems and make things easier to use. I enjoy working with new technologies, figuring out how things work, and turning ideas into working products. Most of my work is focused on the web, but I'm also interested in exploring different areas of software development and building things that are useful.`;

export const projects: ProjectItem[] = [
  {
    title: 'E-Commerce Platform',
    description:
      'A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment processing, and an admin dashboard.',
    tags: ['React', 'Node.js', 'MongoDB'],
  },
  {
    title: 'Drag & Drop Form Builder',
    description:
      'An interactive drag-and-drop form builder built with Next.js, @dnd-kit, and shadcn/ui. Features customizable form components, template library, and form sharing capabilities.',
    tags: ['Next.js', '@dnd-kit', 'shadcn/ui', 'TypeScript'],
    githubUrl: 'https://github.com/TranNhucYen/dnd-form',
  },
  {
    title: 'Task Manager App',
    description:
      'A lightweight task management application that helps users organize their daily activities with drag-and-drop functionality and progress tracking.',
    tags: ['TypeScript', 'Firebase', 'Zustand'],
  },
  {
    title: 'AI Chat Assistant',
    description:
      'An intelligent chat interface powered by OpenAI API. Allows seamless conversations, code highlighting, and history management.',
    tags: ['React', 'OpenAI', 'Next.js'],
  },
  {
    title: 'Weather Dashboard',
    description:
      'Real-time weather application showing current conditions and forecasts for multiple cities using standard weather APIs.',
    tags: ['React', 'API', 'Tailwind'],
  },
  {
    title: 'Blog Platform',
    description:
      'A content management system for writers to publish articles, manage comments, and track reading statistics.',
    tags: ['Next.js', 'PostgreSQL', 'Prisma'],
  },
];
