export const Progressbar = ({ progress = 0, total = 8 }) => {
    const percentage = (progress / total) * 100;
    const { borderColor, bgColor } =
      percentage > 75
        ? { borderColor: "border-green-500", bgColor: "bg-green-500" }
        : percentage > 50
        ? { borderColor: "border-sky-500", bgColor: "bg-sky-500" }
        : percentage > 25
        ? { borderColor: "border-orange-400", bgColor: "bg-orange-400" }
        : { borderColor: "border-red-500", bgColor: "bg-red-500" };
  
    return (
      <div className="flex items-center">
        <label>
          {progress}/{total}
        </label>
        <div
          className={
            "w-full ml-3 h-2.5 rounded-xl border border-solid " + borderColor
          }
        >
          <div
            className={"h-full rounded-xl " + bgColor}
            style={{ width: `${(progress / total) * 100}%` }}
          ></div>
        </div>
      </div>
    );
  };
  