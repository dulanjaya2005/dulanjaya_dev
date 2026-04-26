export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  description: string;
  content: string;
  category: string;
  tags: string[];
  readingTime: number;
  publishedAt: string;
  image: string;
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "getting-started-with-nextjs-14",
    title: "Getting Started with Next.js 14 App Router",
    description:
      "A comprehensive guide to building production-ready applications with Next.js 14's new App Router, Server Components, and more.",
    category: "Next.js",
    tags: ["Next.js", "React", "TypeScript", "Web Development"],
    readingTime: 8,
    publishedAt: "2024-03-15",
    image: "/blog/nextjs.png",
    featured: true,
    content: `
## Introduction

Next.js 14 introduces a powerful new paradigm for building React applications. With the App Router, you can now build full-stack applications with server-side rendering, client-side navigation, and much more.

## What's New in Next.js 14

The App Router in Next.js 14 brings several key improvements:

- **Server Components by default**: All components are server components unless marked with 'use client'
- **Nested Layouts**: Create complex UI with shared layouts
- **Server Actions**: Run server-side code directly from client components
- **Partial Prerendering**: Combine static and dynamic content

## Getting Started

First, create a new Next.js 14 application:

\`\`\`bash
npx create-next-app@latest my-app --typescript --tailwind --eslint
\`\`\`

## File Structure

The new App Router uses a file-based routing system:

\`\`\`
app/
  layout.tsx       # Root layout
  page.tsx         # Home page
  about/
    page.tsx       # About page
  blog/
    page.tsx       # Blog list
    [slug]/
      page.tsx     # Individual blog post
\`\`\`

## Server vs Client Components

Understanding when to use Server vs Client Components is crucial:

**Server Components** (default):
- No useState or useEffect
- Direct database access
- Secure (no exposure of secrets)

**Client Components** ('use client'):
- Interactive UIs
- Browser APIs
- State and side effects

## Conclusion

Next.js 14 App Router represents a significant shift in how we build React applications. By embracing Server Components and the new routing paradigm, you can build faster, more maintainable applications.
    `,
  },
  {
    id: "2",
    slug: "mastering-typescript-advanced-patterns",
    title: "Mastering TypeScript: Advanced Patterns for React",
    description:
      "Deep dive into advanced TypeScript patterns that will level up your React development — generics, utility types, and discriminated unions.",
    category: "TypeScript",
    tags: ["TypeScript", "React", "JavaScript", "Programming"],
    readingTime: 12,
    publishedAt: "2024-02-28",
    image: "/blog/typescript.png",
    featured: true,
    content: `
## Why TypeScript Matters

TypeScript has become the standard for large-scale React applications. It catches errors at compile time, improves IDE support, and makes your code self-documenting.

## Advanced Generics

Generic types allow you to create reusable components and functions:

\`\`\`typescript
// Generic API hook
function useApi<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then((data: T) => {
        setData(data);
        setLoading(false);
      });
  }, [url]);
  
  return { data, loading };
}
\`\`\`

## Discriminated Unions

Perfect for managing complex state:

\`\`\`typescript
type RequestState<T> =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: T }
  | { status: 'error'; error: Error };
\`\`\`

## Utility Types

TypeScript provides powerful built-in utility types:

- \`Partial<T>\` — Make all properties optional
- \`Required<T>\` — Make all properties required
- \`Readonly<T>\` — Make all properties readonly
- \`Pick<T, K>\` — Pick subset of properties
- \`Omit<T, K>\` — Omit subset of properties

## Conclusion

Mastering these TypeScript patterns will significantly improve your code quality and developer experience.
    `,
  },
  {
    id: "3",
    slug: "building-accessible-ui-with-tailwind",
    title: "Building Accessible UIs with Tailwind CSS",
    description:
      "How to build beautiful, accessible user interfaces using Tailwind CSS and modern accessibility best practices.",
    category: "UI/UX",
    tags: ["Tailwind CSS", "Accessibility", "UI/UX", "CSS"],
    readingTime: 6,
    publishedAt: "2024-02-10",
    image: "/blog/tailwind.png",
    content: `
## Introduction to Accessible Design

Accessibility isn't just a checkbox — it's about ensuring your application works for everyone, regardless of their abilities or the tools they use.

## Tailwind Accessibility Classes

Tailwind CSS provides several accessibility-focused utilities:

\`\`\`html
<!-- Screen reader only text -->
<span class="sr-only">Close menu</span>

<!-- Focus visible -->
<button class="focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
  Click me
</button>

<!-- Skip to main content -->
<a href="#main" class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-white p-4">
  Skip to main content
</a>
\`\`\`

## Color Contrast

Always ensure sufficient color contrast ratios:
- Normal text: 4.5:1 minimum
- Large text: 3:1 minimum

## Keyboard Navigation

Make sure all interactive elements are keyboard accessible using proper semantic HTML and focus management.

## ARIA Labels

Use ARIA attributes when semantic HTML isn't enough to convey meaning.

## Conclusion

Building accessible UIs is not just good practice — it's a responsibility. Tailwind CSS makes it easier with built-in accessibility utilities.
    `,
  },
  {
    id: "4",
    slug: "react-performance-optimization",
    title: "React Performance Optimization Techniques",
    description:
      "Practical techniques to optimize your React application performance — memoization, code splitting, lazy loading, and more.",
    category: "React",
    tags: ["React", "Performance", "Optimization", "JavaScript"],
    readingTime: 10,
    publishedAt: "2024-01-25",
    image: "/blog/react.png",
    content: `
## Why Performance Matters

Slow applications lead to poor user experience, lower engagement, and worse SEO rankings. Let's explore key optimization techniques.

## React.memo and useMemo

Prevent unnecessary re-renders with memoization:

\`\`\`typescript
// Memoize component
const ExpensiveComponent = React.memo(({ data }: { data: DataType }) => {
  return <div>{/* render */}</div>;
});

// Memoize expensive calculations
const sortedData = useMemo(() => {
  return data.sort((a, b) => a.name.localeCompare(b.name));
}, [data]);
\`\`\`

## Code Splitting

Split your bundle to load only what's needed:

\`\`\`typescript
const HeavyComponent = React.lazy(() => import('./HeavyComponent'));

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <HeavyComponent />
    </Suspense>
  );
}
\`\`\`

## Virtual Lists

For long lists, use virtualization to render only visible items.

## Image Optimization

Use Next.js Image component for automatic optimization, lazy loading, and modern formats like WebP.

## Conclusion

Performance optimization is an ongoing process. Measure first with tools like React DevTools Profiler and Lighthouse, then optimize the biggest bottlenecks.
    `,
  },
  {
    id: "5",
    slug: "modern-javascript-es2024",
    title: "Modern JavaScript: ES2024 Features You Should Know",
    description:
      "Explore the latest JavaScript features from ES2024 — temporal API, Array grouping, decorators, and more.",
    category: "JavaScript",
    tags: ["JavaScript", "ES2024", "Web Development", "Programming"],
    readingTime: 7,
    publishedAt: "2024-01-10",
    image: "/blog/javascript.png",
    content: `
## JavaScript Keeps Evolving

Every year brings new features to JavaScript. ES2024 is no exception — let's look at the most impactful additions.

## Array Grouping

Group array items by a criteria:

\`\`\`javascript
const products = [
  { name: 'Apple', category: 'fruit' },
  { name: 'Carrot', category: 'vegetable' },
  { name: 'Banana', category: 'fruit' },
];

const grouped = Object.groupBy(products, p => p.category);
// { fruit: [...], vegetable: [...] }
\`\`\`

## Promise.withResolvers

Cleaner promise control:

\`\`\`javascript
const { promise, resolve, reject } = Promise.withResolvers();

// resolve or reject from anywhere
setTimeout(() => resolve('done'), 1000);

await promise; // 'done'
\`\`\`

## Temporal API

Better date handling without external libraries:

\`\`\`javascript
const now = Temporal.Now.plainDateISO();
const tomorrow = now.add({ days: 1 });
\`\`\`

## Conclusion

Staying up-to-date with modern JavaScript features helps you write cleaner, more expressive code. Many of these features reduce the need for utility libraries.
    `,
  },
  {
    id: "6",
    slug: "web-development-career-guide",
    title: "Web Development Career Guide for 2024",
    description:
      "A practical roadmap for aspiring web developers — technologies to learn, skills to build, and career paths to explore.",
    category: "Web Development",
    tags: ["Career", "Web Development", "Learning", "Programming"],
    readingTime: 15,
    publishedAt: "2023-12-20",
    image: "/blog/career.png",
    content: `
## Starting Your Web Development Journey

Web development is one of the most accessible and in-demand fields in tech. Here's how to navigate it effectively.

## The Learning Path

### Frontend Basics
1. HTML — Structure
2. CSS — Styling
3. JavaScript — Interactivity

### Modern Frontend
- React or Vue.js framework
- TypeScript for type safety
- Tailwind CSS for styling
- Next.js for full-stack capabilities

### Backend Basics
- Node.js with Express
- Or Python with Django/FastAPI
- Databases: PostgreSQL, MongoDB

## Building Your Portfolio

Projects matter more than certificates:
- Build real projects
- Contribute to open source
- Write about what you learn

## Getting Your First Job

- Apply broadly to junior roles
- Network in developer communities
- Contribute to open source
- Build a strong GitHub profile

## Continuous Learning

Tech moves fast. Stay current with:
- Following tech blogs and newsletters
- Building side projects
- Attending meetups and conferences

## Conclusion

Web development is a rewarding career. Focus on fundamentals, build consistently, and never stop learning.
    `,
  },
];

export const categories = [
  "All",
  ...Array.from(new Set(blogPosts.map((p) => p.category))),
];
