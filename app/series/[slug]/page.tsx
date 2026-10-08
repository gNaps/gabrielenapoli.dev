import { allCourses } from "@/cms/courses";
import CourseDetail from "@/components/detail/course-detail";
import { courseChaptersApi, courseDetailApi } from "@/utils/api.utils";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  courseLanguages,
  localizeCourse,
} from "@/utils/content-language.utils";

export async function generateStaticParams() {
  return allCourses.map((course) => ({ slug: course.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const param = await params;
  const course = await courseDetailApi(param.slug);
  if (!course) notFound();

  return {
    alternates: {
      canonical: `/series/${param.slug}`,
      languages: courseLanguages(param.slug),
    },
    title: `${course.title} | Gabriele Napoli`,
    description: course.description.it,
    twitter: {
      card: "summary_large_image",
      title: course.title,
      description: course.description.it,
      images: [course.preview.url || "/stories/opengraph-image"],
    },
    openGraph: {
      url: `/series/${param.slug}`,
      title: `${course.title} | Gabriele Napoli`,
      description: course.description.it,
      locale: "it_IT",
      alternateLocale: "en_US",
      images: [{ url: course.preview.url || "/stories/opengraph-image" }],
    },
  };
}

const CoursePage = async ({ params }: any) => {
  const param = await params;
  const course = await courseDetailApi(param.slug);
  if (!course) notFound();
  const localized = localizeCourse(course, "it");
  const chapters = courseChaptersApi(localized);

  return <CourseDetail course={localized} chapters={chapters} />;
};

export default CoursePage;
