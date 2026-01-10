import { Talk } from "@/data/talks";
import { ArrowUpRight } from "lucide-react";

export function TalkEntry({ talk }: { talk: Talk }) {
  return (
    <div className="grid grid-cols-4 gap-x-2">
      <span className="text-xs text-zinc-500 mt-1">{talk.date}</span>
      <div className="col-span-3 flex flex-col">
        <h3 className="text-base font-serif mb-1">
          {talk.slidesUrl || talk.videoUrl ? (
            <a
              href={talk.slidesUrl || talk.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 hover:text-zinc-600 transition-colors duration-300"
            >
              {talk.title}
              <ArrowUpRight
                size={16}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
            </a>
          ) : (
            talk.title
          )}
        </h3>
        <p className="text-sm text-zinc-600 mb-1">{talk.venue}</p>
        {talk.authors && (
          <p className="text-sm text-zinc-500 italic">{talk.authors}</p>
        )}
        {talk.description && (
          <p className="text-sm text-zinc-600 leading-relaxed mt-2">
            {talk.description}
          </p>
        )}
        {(talk.reports && talk.reports.length > 0) || 
         (talk.videos && talk.videos.length > 0) ? (
          <div className="mt-4 pt-4 border-t border-zinc-200">
            <h6 className="text-xs font-semibold text-zinc-700 mb-2 uppercase tracking-wide">
              Materials
            </h6>
            <div className="space-y-2">
              {talk.reports && talk.reports.length > 0 && (
                <div>
                  <span className="text-xs text-zinc-500">Reports: </span>
                  {talk.reports.map((report, index) => (
                    <span key={index}>
                      <a
                        href={report.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-zinc-700 hover:text-zinc-900 underline mr-2"
                      >
                        {report.title}
                      </a>
                      {index < talk.reports!.length - 1 && ", "}
                    </span>
                  ))}
                </div>
              )}
              {talk.videos && talk.videos.length > 0 && (
                <div>
                  <span className="text-xs text-zinc-500">Videos: </span>
                  {talk.videos.map((video, index) => (
                    <span key={index}>
                      <a
                        href={video.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-zinc-700 hover:text-zinc-900 underline mr-2"
                      >
                        {video.title}
                      </a>
                      {index < talk.videos!.length - 1 && ", "}
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
