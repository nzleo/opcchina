import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Detail } from "@/components/detail";
import { site, steps } from "@/lib/content";

type Props = {
  params: Promise<{ slug: string }>;
};

function findStep(slug: string) {
  return steps.find((step) => step.href === `/${slug}`);
}

export function generateStaticParams() {
  return steps.map((step) => ({ slug: step.href.slice(1) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const step = findStep(slug);
  if (!step) return {};
  return {
    title: `${step.index} ${step.nav} · ${site.domain}`,
    description: step.lead,
  };
}

export default async function StepPage({ params }: Props) {
  const { slug } = await params;
  const step = findStep(slug);
  if (!step) notFound();
  return <Detail step={step} />;
}
