// Tailwind Design System inspired by IBM Carbon
import Layout from "@/components/Layout";
import { fetchResume, ResumeEntry } from "@/lib/api";

export default async function ResumePage() {
  let resume: ResumeEntry[] = [];
  let error: string | null = null;

  try {
    resume = await fetchResume();
  } catch (err) {
    console.error("Error fetching resume:", err);
    error = "Failed to load resume. Please try again later.";
  }

  return (
    <Layout>
      <h1 className="text-3xl font-semibold tracking-tight border-b border-gray-300 dark:border-gray-700 pb-2 mb-6">
        My Resume
      </h1>

      {error && <p className="text-sm text-red-600">{error}</p>}

      <div className="space-y-8">
        {resume.map((entry) => (
          <div key={entry.id} className="border-l border-gray-400 dark:border-gray-600 pl-6 relative">
            <div className="absolute top-1 left-0 w-3 h-3 bg-gray-700 dark:bg-gray-300 -ml-1.5" />
            <h2 className="text-xl font-medium leading-snug">
              {entry.title} @ {entry.company}
            </h2>
            <p className="text-xs text-gray-500 mt-1">
              {entry.start_date} - {entry.end_date ?? "Present"}
            </p>
            <p className="text-sm leading-relaxed mt-2">
              {entry.description}
            </p>
            <p className="text-xs text-gray-500 italic mt-1">
              {entry.role_type} | {entry.location}
            </p>
          </div>
        ))}
      </div>
    </Layout>
  );
}
