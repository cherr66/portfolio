const Breadcrumbs = ({ items }) => {
  if (!items || items.length === 0) return null;

  return (
    <div className="max-w-5xl mx-auto px-4 md:px-0">
      <nav className="text-gray-500 text-sm mb-8" aria-label="Breadcrumb">
        <ol className="list-reset flex items-center">
          <li>
            <span className="text-gray-700"> &gt;&nbsp; </span>
          </li>
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={index} className="flex items-center">
                {index !== 0 && <span className="mx-2">/</span>}
                {isLast ? (
                  <span className="text-gray-700 font-semibold">
                    {item.title}
                  </span>
                ) : (
                  <a href={item.link} className="hover:text-gray-700">
                    {item.title}
                  </a>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumbs;
