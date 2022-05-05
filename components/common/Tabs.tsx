import { Badge } from "./Badge";

export type ITab = { label: string; number?: number; path?: string };

type ITabs = {
  tabs: ITab[];
  selected: ITab;
  setSelected: (selected: ITab) => void;
  classNames?: String;
  classNameForTab?: String;
  variant?: "default" | "button";
};

export const Tabs: React.FC<ITabs> = ({
  tabs,
  selected,
  classNames = "",
  setSelected,
  classNameForTab = "",
  variant = "default",
}) => {
  return (
    <div>
      <div className="hidden sm:block">
        {/* border-b border-gray-200 */}
        <div className={`${classNames}`}>
          <div className="-mb-px flex" aria-label="Tabs">
            {tabs.map((e) => (
              <a
                key={e.label}
                onClick={() => setSelected(e)}
                className={
                  `cursor-pointer ${
                    variant === "button" ? " px-3 py-1 my-3" : "py-4"
                  } mr-4 text-center border-b-2 ${classNameForTab} font-medium text-sm ` +
                  (e.label === selected.label
                    ? variant === "button"
                      ? "text-indigo-600 bg-indigo-50 rounded-md "
                      : "border-indigo-500 text-gray-500"
                    : `border-transparent ${
                        variant === "button"
                          ? "text-gray-600"
                          : "text-indigo-600"
                      } hover:opacity-80 hover:border-gray-300`)
                }
              >
                {e.label}
                {e.number && (
                  <Badge
                    variant={
                      e.label === selected.label
                        ? variant === "button"
                          ? "indigo"
                          : "gray"
                        : variant === "button"
                        ? "gray"
                        : "indigo"
                    }
                    className="ml-2"
                  >
                    {e.number}
                  </Badge>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
