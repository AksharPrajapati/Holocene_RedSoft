import Router from "next/router";

interface Props {
  className?: string;
  breadCrumbs: {
    path: string;
    text: string;
  }[];
}

const BreadCrumbs: React.FC<Props> = ({ breadCrumbs, className = "" }) => {
  return (
    <nav className={"flex " + className} aria-label="Breadcrumb">
      <ol role="list" className="flex items-center space-x-3">
        {breadCrumbs.length &&
          breadCrumbs.map((e, i) =>
            i === 0 ? (
              <li key={i}>
                <div>
                  <a
                    className="text-gray-400 cursor-pointer hover:text-gray-500"
                    onClick={() => Router.push(e.path)}
                  >
                    <svg
                      className="flex-shrink-0 h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                    </svg>
                    <span className="sr-only">{e.text}</span>
                  </a>
                </div>
              </li>
            ) : (
              <li key={i}>
                <div className="flex items-center">
                  <svg
                    className="flex-shrink-0 h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <a
                    className="ml-3 cursor-pointer text-sm font-medium text-gray-500 hover:text-gray-700"
                    onClick={() => Router.push(e.path)}
                  >
                    {e.text}
                  </a>
                </div>
              </li>
            )
          )}
      </ol>
    </nav>
  );
};

export default BreadCrumbs;
