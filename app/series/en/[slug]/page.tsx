import { allCourses } from "@/cms/courses";
import CourseDetail from "@/components/detail/course-detail";
import { courseChaptersApi, courseDetailApi } from "@/utils/api.utils";
import {
  courseLanguages,
  localizeCourse,
} from "@/utils/content-language.utils";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return allCourses.map((course) => ({ slug: course.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const original = await courseDetailApi(slug);
  if (!original) notFound();
  const course = localizeCourse(original, "en");
  const url = courseLanguages(slug).en;
  return {
    title: `${course.title} | Gabriele Napoli`,
    description: course.description.en,
    alternates: { canonical: url, languages: courseLanguages(slug) },
    openGraph: {
      url,
      title: course.title,
      description: course.description.en,
      locale: "en_US",
      alternateLocale: "it_IT",
      images: [{ url: course.preview.url || "/stories/opengraph-image" }],
    },
    twitter: {
      card: "summary_large_image",
      title: course.title,
      description: course.description.en,
      images: [course.preview.url || "/stories/opengraph-image"],
    },
  };
}

export default async function CoursePage({ params }: Props) {
  const { slug } = await params;
  const original = await courseDetailApi(slug);
  if (!original) notFound();
  const course = localizeCourse(original, "en");
  return <CourseDetail course={course} chapters={courseChaptersApi(course)} />;
}
