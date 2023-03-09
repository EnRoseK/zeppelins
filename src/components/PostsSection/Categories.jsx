import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export const Categories = () => {
  const [categories, setCategories] = useState([
    { title: "All", link: "/" },
    { title: "UI Design", link: "/?category=uiDesign" },
    { title: "UX Design", link: "/?category=uxDesign" },
    { title: "Product Design", link: "/?category=productDesign" },
    { title: "Articles", link: "/?category=articles" },
    { title: "Tutorials", link: "/?category=tutorials" },
    { title: "News", link: "/?category=news" },
  ]);

  const location = useLocation();

  return (
    <ul>
      {categories.map((category) => {
        return (
          <li
            className={
              location.pathname + location.search === category.link && "active"
            }
          >
            <Link
              to={category.link}
              className={`categLink ${
                location.pathname + location.search === category.link &&
                "active"
              }`}
            >
              {category.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
