/** English editorial metadata. Original slugs and Italian metadata stay stable. */
export const storyTranslations: Record<
  number,
  { title: string; description: string }
> = {
  39: {
    title: "How does an LLM choose its words?",
    description:
      "How an LLM generates text: tokens, embeddings, probabilities and cosine similarity explained through simple examples.",
  },
  38: {
    title: "LLMs, chatbots, agents: who does what",
    description:
      "Understand the differences between LLMs, chatbots and AI agents: models, interfaces, tools and autonomy, with practical examples.",
  },
  37: {
    title: "Vibe coding vs spec-driven development",
    description:
      "When to use AI for prototyping and how specifications, acceptance criteria and reviews help build understandable, verifiable software.",
  },
  36: {
    title: "How to keep learning",
    description:
      "Continue learning web development through practice, official documentation, personal projects and a path beyond the basics.",
  },
  35: {
    title: "Version control with Git",
    description:
      "Track code changes with Git: repositories, commits, branches, pull requests and a practical workflow for keeping project history.",
  },
  34: {
    title: "Organizing a web project",
    description:
      "Organize a web project with clear responsibilities, focused modules, consistent names and a maintainable folder structure.",
  },
  33: {
    title: "The complete flow: from click to pixel",
    description:
      "Complete a web app by reading backend data, rendering it in the browser and connecting a form to persistent database storage.",
  },
  32: {
    title: "How frontend and backend communicate",
    description:
      "Connect frontend and backend with fetch: requests, Response objects, async/await and handling HTTP and network errors.",
  },
  31: {
    title: "Connecting an app to a database",
    description:
      "Connect Fastify to SQLite using a driver and parameterized queries, persist application data and explore ORM fundamentals.",
  },
  30: {
    title: "Basic SQL queries",
    description:
      "Write your first SQL queries: SELECT, INSERT, UPDATE, DELETE, filters and JOINs, and understand how SQL injection happens.",
  },
  29: {
    title: "Relational database fundamentals",
    description:
      "Learn tables, rows, columns, primary keys, foreign keys and referential integrity through a practical data model.",
  },
  28: {
    title: "What is a database and why does it matter?",
    description:
      "Why web apps need databases: persistence, concurrent access, constraints and the differences between relational and non-relational models.",
  },
  27: {
    title: "Essential security: trust no one",
    description:
      "Protect a backend with input validation, password hashing, route authentication, HTTPS and environment variables for secrets.",
  },
  26: {
    title: "Your first real backend: the Night’s Watch API",
    description:
      "Build a CRUD API with Fastify and connect an HTML form to the backend using async/await, CORS and browser requests.",
  },
  25: {
    title: "Node.js: JavaScript outside the browser",
    description:
      "Run JavaScript on the server with Node.js: set up a project, manage dependencies and create your first Fastify server.",
  },
  24: {
    title: "HTTP and the client-server protocol",
    description:
      "Understand HTTP and APIs through practical examples of requests, responses, methods, headers, bodies and status codes.",
  },
  23: {
    title: "Understanding CRUD",
    description:
      "What CRUD means and how to create, read, update and delete data using HTTP methods and resource-based API routes.",
  },
  22: {
    title: "What is the backend and what does it do?",
    description:
      "Explore the backend: servers, application logic, data, authentication, authorization and the parts of a web app the browser cannot see.",
  },
  21: {
    title: "Frameworks and libraries: why they exist and how to choose",
    description:
      "Why frontend frameworks and libraries exist, how they synchronize data and interfaces, and how to choose Angular, React or Vue.",
  },
  20: {
    title: "JavaScript: logic in the browser",
    description:
      "Learn JavaScript variables, functions, events, DOM manipulation and form handling to make an HTML page interactive.",
  },
  19: {
    title: "CSS: styling the interface",
    description:
      "Apply CSS fundamentals to a form: selectors, colors, spacing, the box model, Flexbox and responsive layouts.",
  },
  18: {
    title: "HTML: the structure of the page",
    description:
      "Learn HTML structure, tags, semantics, links and forms by building a practical recruitment page with native validation.",
  },
  17: {
    title: "The browser: our interpreter",
    description:
      "How browsers interpret HTML, CSS and JavaScript, build the DOM and turn code into an interactive page, with DevTools essentials.",
  },
  16: {
    title: "What is the frontend and what does it do?",
    description:
      "Explore the frontend’s role in web development: interfaces, rendering, user experience and building accessible interactions.",
  },
  15: {
    title: "Tools of the trade",
    description:
      "Meet the tools for web development: code editors, terminals, Git, browser DevTools, languages, libraries and frameworks.",
  },
  14: {
    title: "How a modern web app works",
    description:
      "Understand client-server architecture, HTTP requests and responses, and the journey data takes from browser to server and back.",
  },
  13: {
    title: "What is web development?",
    description:
      "An introduction to web development: websites and applications, frontend and backend roles, and your first steps toward learning.",
  },
  12: {
    title: "From theory to practice: a video game library",
    description:
      "Build GameShelf with Angular: video game search, a personal collection, status filters, reactive state and local persistence.",
  },
  11: {
    title: "Interceptors and pipes: the finishing tools",
    description:
      "Use Angular interceptors for tokens, HTTP calls and logging, and pipes to format values cleanly in templates.",
  },
  10: {
    title: "Shared state: services as a single source of truth",
    description:
      "Share state between Angular components using services as a single source of truth and signals to keep the interface updated.",
  },
  9: {
    title: "HTTP requests: from services to the Resource API",
    description:
      "Connect Angular to a backend with services, dependency injection, HttpClient and the Resource API for remote data.",
  },
  8: {
    title: "Forms: collecting data without losing your mind",
    description:
      "Manage Angular forms with template-driven and reactive approaches, validators, dynamic fields and accessible submission feedback.",
  },
  7: {
    title: "Signals: readable reactivity",
    description:
      "Learn Angular reactivity with signals, computed values, linked signals and effects, alongside modern template control flow.",
  },
  6: {
    title: "The Router: from components to pages",
    description:
      "Configure Angular routes, navigation, lazy loading, parameters, guards and resolvers without reloading the browser.",
  },
  5: {
    title: "Components: Angular’s building blocks",
    description:
      "Create standalone Angular components with templates, styles and data binding, organizing your interface into reusable pieces.",
  },
  4: {
    title: "Installation and setup",
    description:
      "Prepare an Angular development environment on macOS or Windows with Node.js, Angular CLI, VS Code and Git.",
  },
  3: {
    title: "Angular: what it is and why it matters",
    description:
      "What Angular is, how it works and when to use it: an introduction to components and modern frontend application development.",
  },
  2: {
    title: "Sign in with Twitch using Next.js and Auth.js",
    description:
      "Implement Twitch login in Next.js with Auth.js: OAuth, access tokens and API calls to display followed channels and live streams.",
  },
  1: {
    title: "RxJS: zip vs combineLatest vs withLatestFrom vs forkJoin",
    description:
      "When to use zip, combineLatest, withLatestFrom and forkJoin in RxJS: emission timing, common pitfalls and practical Angular examples.",
  },
};
