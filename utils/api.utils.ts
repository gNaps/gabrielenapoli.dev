import { allCourses } from "@/cms/courses";
import { allExperiences } from "@/cms/experiences";
import { allProjects } from "@/cms/projects";
import { allStacks } from "@/cms/stacks";
import { allStories } from "@/cms/stories";
import { Course } from "@/models/course.model";
import { Story } from "@/models/story.model";

export const projectsHomeApi = async (token: string) => {
  // const PROJECTS_QUERY = `{
  //       allProjects(first: ${4}, filter: { homepage: { eq: ${true} } }, orderBy: [order_ASC]) {
  //         homepage
  //         id
  //         title
  //         slug
  //         preview {
  //           url
  //           alt
  //         }
  //         skill {
  //           icon
  //           id
  //         }
  //       }
  //      }`;

  // const response = await fetch("https://graphql.datocms.com/", {
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  //   method: "POST",
  //   body: JSON.stringify({ query: PROJECTS_QUERY }),
  // });

  // const responseBody = await response.json();
  return allProjects.filter((p) => p.homepage).slice(0, 4);
};

export const storiesHomeApi = async (token: string) => {
  // const STORIES_QUERY = `{
  //       allStories(first: ${4}, filter: { homepage: { eq: ${true} } },  orderBy: [order_ASC]) {
  //         homepage
  //         id
  //         preview {
  //           url
  //           alt
  //         }
  //         slug
  //         title
  //         writtenAt
  //       }
  //      }`;

  // const response = await fetch("https://graphql.datocms.com/", {
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  //   method: "POST",
  //   body: JSON.stringify({ query: STORIES_QUERY }),
  // });

  // const responseBody = await response.json();
  // return responseBody as AllStoriesData;
  return allStories.filter((s) => s.homepage).slice(0, 4);
};

export const projectsListApi = async (token: string) => {
  // const PROJECTS_QUERY = `{
  //       allProjects(orderBy: [order_ASC]) {
  //         homepage
  //         id
  //         title
  //         slug
  //         preview {
  //           url
  //           alt
  //         }
  //         skill {
  //           icon
  //           id
  //         }
  //       }
  //      }`;

  // const response = await fetch("https://graphql.datocms.com/", {
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  //   method: "POST",
  //   body: JSON.stringify({ query: PROJECTS_QUERY }),
  // });

  // const responseBody = await response.json();
  // return responseBody as AllProjectsData;

  return allProjects;
};

export const storiesListApi = async (token: string) => {
  // const STORIES_QUERY = `{
  //       allStories(orderBy: [order_ASC]) {
  //         homepage
  //         id
  //         preview {
  //           url
  //           alt
  //         }
  //         slug
  //         title
  //         writtenAt
  //       }
  //      }`;

  // const response = await fetch("https://graphql.datocms.com/", {
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  //   method: "POST",
  //   body: JSON.stringify({ query: STORIES_QUERY }),
  // });

  // const responseBody = await response.json();
  // return responseBody as AllStoriesData;
  return allStories;
};

export const projectDetailApi = async (slug: string, token: string) => {
  // const PROJECT_QUERY = `{
  //   project(filter: { slug: { eq: "${slug}" } }) {
  //       id
  //       slug
  //       subtitle
  //       title
  //       urlGithub
  //       urlPreview
  //       gallery {
  //           title
  //           url
  //           alt
  //           id
  //       }
  //       skill {
  //           id
  //           name
  //           icon
  //       }
  //       preview {
  //           url
  //           title
  //           alt
  //       }
  //       content  {
  //           blocks
  //           links
  //           value
  //       }
  //   }
  //  }`;

  // const response = await fetch("https://graphql.datocms.com/", {
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  //   method: "POST",
  //   body: JSON.stringify({ query: PROJECT_QUERY }),
  // });

  // const responseBody = await response.json();
  // return responseBody as ProjectData;
  return allProjects.find((p) => p.slug === slug)!;
};

export const storyDetailApi = async (slug: string, token: string) => {
  // const STORY_QUERY = `{
  //   story(filter: { slug: { eq: "${slug}" } }) {
  //     writtenAt
  //     title
  //     slug
  //     id
  //     content {
  //       blocks
  //       links
  //       value
  //     }
  //     preview {
  //       url
  //       title
  //       id
  //       alt
  //     }
  //   }
  //  }`;

  // const response = await fetch("https://graphql.datocms.com/", {
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  //   method: "POST",
  //   body: JSON.stringify({ query: STORY_QUERY }),
  // });

  // const responseBody = await response.json();
  // return responseBody as StoryData;
  return allStories.find((p) => p.slug === slug)!;
};

export const experiencesApi = async (token: string) => {
  // const EXPERIENCES_QUERY = `{
  //   allExperiences(orderBy: [order_ASC]) {
  //       company
  //       description {
  //         blocks
  //         links
  //         value
  //       }
  //       id
  //       jobTitle
  //       order
  //       skill {
  //           id
  //           icon
  //           name
  //       }
  //       yearEnd
  //       yearStart
  //   }
  // }`;

  // const response = await fetch("https://graphql.datocms.com/", {
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  //   method: "POST",
  //   body: JSON.stringify({ query: EXPERIENCES_QUERY }),
  // });

  // const responseBody = await response.json();
  // return responseBody as AllExperiencesData;

  return allExperiences.sort((a, b) => a.order - b.order);
};

export const coursesApi = async (token: string) => {
  return allCourses;
};

export const courseDetailApi = async (slug: string, token: string) => {
  return allCourses.find((c) => c.slug === slug)!;
};

/* Chapters of a course, as Story entries in course order. */
export const courseChaptersApi = (course: Course): Story[] => {
  return course.chapterSlugs
    .map((slug) => allStories.find((s) => s.slug === slug))
    .filter((s): s is Story => !!s);
};

/* Course membership of a story, with its position, null if standalone. */
export const courseForStoryApi = (storySlug: string) => {
  for (const course of allCourses) {
    const index = course.chapterSlugs.indexOf(storySlug);
    if (index !== -1) return { course, index };
  }
  return null;
};

/* Stories that are not chapters of any course. */
export const standaloneStoriesApi = async (token: string) => {
  return allStories.filter(
    (s) => !allCourses.some((c) => c.chapterSlugs.includes(s.slug))
  );
};

export const stacksApi = async (token: string) => {
  //   const STACKS_QUERY = `{
  //     allStacks(orderBy: [end_DESC]) {
  //         id
  //         learning
  //         end
  //         skill {
  //             id
  //             icon
  //             name
  //         }
  //     }
  // }`;

  //   const response = await fetch("https://graphql.datocms.com/", {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //     method: "POST",
  //     body: JSON.stringify({ query: STACKS_QUERY }),
  //   });

  //   const responseBody = await response.json();
  //   return responseBody as AllStacksData;

  return allStacks;
};

// export const projectsSlugsApi = async (token: string) => {
//   const PROJECTS_QUERY = `{
//         allProjects {
//           slug
//         }
//        }`;

//   const response = await fetch("https://graphql.datocms.com/", {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//     method: "POST",
//     body: JSON.stringify({ query: PROJECTS_QUERY }),
//   });

//   const responseBody = await response.json();
//   return responseBody as AllProjectsData;
// };

// export const storiesSlugsApi = async (token: string) => {
//   const STORIES_QUERY = `{
//         allStories {
//           slug
//         }
//        }`;

//   const response = await fetch("https://graphql.datocms.com/", {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//     method: "POST",
//     body: JSON.stringify({ query: STORIES_QUERY }),
//   });

//   const responseBody = await response.json();
//   return responseBody as AllStoriesData;
// };

export async function getPostBySlug(slug: string) {
  const { default: Content } = await import(
    `@/cms/contents/projects/${slug}.mdx`
  );

  return Content();
}

export async function getStoriesBySlug(slug: string) {
  // const postsDirectory = path.join(process.cwd(), "cms/contents/stories");
  // console.log("postsDirectory", postsDirectory);
  // console.log("slug", slug);
  // const fullPath = path.join(postsDirectory, `${slug.join("/")}.mdx`);
  // console.log("fullPath", fullPath);
  // const fileContents = fs.readFileSync(fullPath, "utf8");
  // const { data, content } = matter(fileContents);
  // const mdxSource = await serialize(content);

  // return {
  //   frontMatter: data,
  //   mdxSource,
  // };
  const { default: Content } = await import(
    `@/cms/contents/stories/${slug}.mdx`
  );

  return Content();
}

export async function getExperienceBySlug(slug: string) {
  const { default: Content } = await import(
    `@/cms/contents/experiences/${slug}.mdx`
  );

  return Content();
}
