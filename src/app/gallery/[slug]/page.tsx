import type { Metadata } from "next";
import React from "react";
import { getProjectBySlug, PROJECTS } from "@/data/projects";
import ProjectDetailClient from "./ProjectDetailClient";

export function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
      description: "VERTEK luxury marine teak decking project not found.",
    };
  }

  return {
    title: `${project.title} — ${project.subtitle}`,
    description: project.shortDescription,
    openGraph: {
      title: `${project.title} — ${project.subtitle} | VERTEK`,
      description: project.shortDescription,
      url: `https://vertek.com/gallery/${project.slug}`,
      images: [
        {
          url: project.image || "/images/hero/1.webp",
          width: 2560,
          height: 1265,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | VERTEK Marine Decking`,
      description: project.shortDescription,
      images: [project.image || "/images/hero/1.webp"],
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  return <ProjectDetailClient project={project} />;
}

