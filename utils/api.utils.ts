import { AllExperiencesData } from "@/models/experience.model";
import { AllProjectsData, ProjectData } from "@/models/project.model";
import { AllStacksData } from "@/models/stack.model";
import { AllStoriesData, StoryData } from "@/models/story.model";

export const projectsHomeApi = async (token: string) => {
  const PROJECTS_QUERY = `{
        allProjects(first: ${4}, filter: { homepage: { eq: ${true} } }, orderBy: [order_ASC]) {
          homepage
          id
          title
          slug
          preview {
            url
            alt
          }
          skill {
            icon
            id
          }
        }
       }`;

  const response = await fetch("https://graphql.datocms.com/", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: "POST",
    body: JSON.stringify({ query: PROJECTS_QUERY }),
  });

  const responseBody = await response.json();
  return responseBody as AllProjectsData;
};

export const storiesHomeApi = async (token: string) => {
  const STORIES_QUERY = `{
        allStories(first: ${4}, filter: { homepage: { eq: ${true} } },  orderBy: [order_ASC]) {
          homepage
          id
          preview {
            url
            alt
          }
          slug
          title
          writtenAt
        }
       }`;

  const response = await fetch("https://graphql.datocms.com/", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: "POST",
    body: JSON.stringify({ query: STORIES_QUERY }),
  });

  const responseBody = await response.json();
  return responseBody as AllStoriesData;
};

export const projectsListApi = async (token: string) => {
  const PROJECTS_QUERY = `{
        allProjects(orderBy: [order_ASC]) {
          homepage
          id
          title
          slug
          preview {
            url
            alt
          }
          skill {
            icon
            id
          }
        }
       }`;

  const response = await fetch("https://graphql.datocms.com/", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: "POST",
    body: JSON.stringify({ query: PROJECTS_QUERY }),
  });

  const responseBody = await response.json();
  return responseBody as AllProjectsData;
};

export const storiesListApi = async (token: string) => {
  const STORIES_QUERY = `{
        allStories(orderBy: [order_ASC]) {
          homepage
          id
          preview {
            url
            alt
          }
          slug
          title
          writtenAt
        }
       }`;

  const response = await fetch("https://graphql.datocms.com/", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: "POST",
    body: JSON.stringify({ query: STORIES_QUERY }),
  });

  const responseBody = await response.json();
  return responseBody as AllStoriesData;
};

export const projectDetailApi = async (slug: string, token: string) => {
  const PROJECT_QUERY = `{
    project(filter: { slug: { eq: "${slug}" } }) {
        id
        slug
        subtitle
        title
        urlGithub
        urlPreview
        gallery {
            title
            url
            alt
            id
        }
        skill {
            id
            name
            icon
        }
        preview {
            url
            title
            alt
        }
        content  {
            blocks
            links
            value
        }
    }
   }`;

  const response = await fetch("https://graphql.datocms.com/", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: "POST",
    body: JSON.stringify({ query: PROJECT_QUERY }),
  });

  const responseBody = await response.json();
  return responseBody as ProjectData;
};

export const storyDetailApi = async (slug: string, token: string) => {
  const STORY_QUERY = `{
    story(filter: { slug: { eq: "${slug}" } }) {
      writtenAt
      title
      slug
      id
      content {
        blocks
        links
        value
      }
      preview {
        url
        title
        id
        alt
      }
    }
   }`;

  const response = await fetch("https://graphql.datocms.com/", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: "POST",
    body: JSON.stringify({ query: STORY_QUERY }),
  });

  const responseBody = await response.json();
  return responseBody as StoryData;
};

export const experiencesApi = async (token: string) => {
  const EXPERIENCES_QUERY = `{
    allExperiences(orderBy: [order_ASC]) {
        company
        description {
          blocks
          links
          value
        }
        id
        jobTitle
        order
        skill {
            id
            icon
            name
        }
        yearEnd
        yearStart
    }
  }`;

  const response = await fetch("https://graphql.datocms.com/", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: "POST",
    body: JSON.stringify({ query: EXPERIENCES_QUERY }),
  });

  const responseBody = await response.json();
  return responseBody as AllExperiencesData;
};

export const stacksApi = async (token: string) => {
  const STACKS_QUERY = `{
    allStacks(orderBy: [end_DESC]) {
        id
        learning
        end
        skill {
            id
            icon
            name
        }
    }
}`;

  const response = await fetch("https://graphql.datocms.com/", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: "POST",
    body: JSON.stringify({ query: STACKS_QUERY }),
  });

  const responseBody = await response.json();
  return responseBody as AllStacksData;
};

export const projectsSlugsApi = async (token: string) => {
  const PROJECTS_QUERY = `{
        allProjects {
          slug
        }
       }`;

  const response = await fetch("https://graphql.datocms.com/", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: "POST",
    body: JSON.stringify({ query: PROJECTS_QUERY }),
  });

  const responseBody = await response.json();
  return responseBody as AllProjectsData;
};

export const storiesSlugsApi = async (token: string) => {
  const STORIES_QUERY = `{
        allStories {
          slug
        }
       }`;

  const response = await fetch("https://graphql.datocms.com/", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: "POST",
    body: JSON.stringify({ query: STORIES_QUERY }),
  });

  const responseBody = await response.json();
  return responseBody as AllStoriesData;
};
