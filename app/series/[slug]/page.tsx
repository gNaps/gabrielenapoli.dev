import { allCourses } from "@/cms/courses";
import CourseDetail from "@/components/detail/course-detail";
import { courseChaptersApi, courseDetailApi } from "@/utils/api.utils";
import { Metadata } from "next";

export async function generateStaticParams() {
  return allCourses.map((course) => ({ slug: course.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const param = await params;
  const course = await courseDetailApi(param.slug, "");

  return {
    title: `${course.title} | Gabriele Napoli`,
    description: course.description.en,
    openGraph: {
      title: `${course.title} | Gabriele Napoli`,
      description: course.description.en,
      images: [{ url: `https://gabrielenapoli.dev${course.preview.url}` }],
    },
  };
}

const CoursePage = async ({ params }: any) => {
  const param = await params;
  const course = await courseDetailApi(param.slug, "");
  const chapters = courseChaptersApi(course);

  return <CourseDetail course={course} chapters={chapters} />;
};

export default CoursePage;
