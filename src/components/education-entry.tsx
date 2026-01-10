import { Education } from "@/data/education";

export function EducationEntry({ education }: { education: Education }) {
  return (
    <div>
      <div className="grid grid-cols-4 gap-x-2 mb-2">
        <span className="text-xs text-zinc-500 mt-1">{education.year}</span>
        <div className="col-span-3">
          <h3 className="text-base mb-1 font-serif">{education.institution}</h3>
          <p className="text-sm text-zinc-600">{education.degree}</p>
          {education.advisor && (
            <p className="text-sm text-zinc-500 mt-2 italic">
              Advisor: {education.advisor}
            </p>
          )}
          {education.thesis && (
            <p className="text-sm text-zinc-500 mt-2 italic">
              Thesis:{" "}
              {education.thesisUrl ? (
                <a
                  href={education.thesisUrl}
                  className="hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {education.thesis}
                </a>
              ) : (
                education.thesis
              )}
            </p>
          )}
          {education.honors && education.honors.length > 0 && (
            <div className="mt-4 pt-4 border-t border-zinc-200">
              <h6 className="text-xs font-semibold text-zinc-700 mb-2 uppercase tracking-wide">
                Honors & Awards
              </h6>
              <ul className="space-y-2">
                {education.honors.map((honor, index) => (
                  <li
                    key={index}
                    className="text-sm text-zinc-600 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: honor }}
                  />
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
