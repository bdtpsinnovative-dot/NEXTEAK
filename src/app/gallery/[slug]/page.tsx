import React from "react";
import { getProjectBySlug, PROJECTS } from "@/data/projects";
import ProjectDetailClient from "./ProjectDetailClient";

export function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
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
