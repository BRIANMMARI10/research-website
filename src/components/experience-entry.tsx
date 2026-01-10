import { Experience } from "@/data/experience";

export function ExperienceEntry({ experience }: { experience: Experience }) {
  return (
    <div className="grid grid-cols-4 gap-x-2">
      <span className="text-xs text-zinc-500 mt-1">{experience.date}</span>
      <div className="col-span-3 flex flex-col">
        <h3 className="text-base font-serif">
          {experience.title} —{" "}
          {experience.companyUrl ? (
            <a
              href={experience.companyUrl}
              className="hover:text-zinc-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              {experience.company}
            </a>
          ) : (
            experience.company
          )}
        </h3>
        {experience.advisor && (
          <p className="text-sm text-zinc-600 leading-relaxed italic mt-2">
            Advisor: {experience.advisor}
          </p>
        )}
        {experience.manager && (
          <p className="text-sm text-zinc-600 leading-relaxed italic mt-2">
            Manager: {experience.manager}
          </p>
        )}
        {experience.description && (
          <p className="text-sm text-zinc-600 leading-relaxed mt-2">
            {experience.description}
          </p>
        )}
        {(experience.reports && experience.reports.length > 0) || 
         (experience.videos && experience.videos.length > 0) ? (
          <div className="mt-4 pt-4 border-t border-zinc-200">
            <h6 className="text-xs font-semibold text-zinc-700 mb-2 uppercase tracking-wide">
              Materials
            </h6>
            <div className="space-y-2">
              {experience.reports && experience.reports.length > 0 && (
                <div>
                  <span className="text-xs text-zinc-500">Reports: </span>
                  {experience.reports.map((report, index) => (
                    <span key={index}>
                      <a
                        href={report.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-zinc-700 hover:text-zinc-900 underline mr-2"
                      >
                        {report.title}
                      </a>
                      {index < experience.reports!.length - 1 && ", "}
                    </span>
                  ))}
                </div>
              )}
              {experience.videos && experience.videos.length > 0 && (
                <div>
                  <span className="text-xs text-zinc-500">Videos: </span>
                  {experience.videos.map((video, index) => (
                    <span key={index}>
                      <a
                        href={video.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-zinc-700 hover:text-zinc-900 underline mr-2"
                      >
                        {video.title}
                      </a>
                      {index < experience.videos!.length - 1 && ", "}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
