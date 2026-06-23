'use client';
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getBreadcrumbs } from "../data/breadcrumbMap";
import "../styles/breadcrumb.css";

const Breadcrumb = () => {
  const pathname = usePathname();
  const crumbs = getBreadcrumbs(pathname);

  if (!crumbs) return null;

  return (
    <div className="breadcrumb-wrap">
      <nav className="breadcrumb-container" aria-label="Breadcrumb">
        {crumbs.map((item, index) => (
          <React.Fragment key={index}>
            {item.link && item.link !== "#" && index !== crumbs.length - 1 ? (
              <Link href={item.link}>{item.name}</Link>
            ) : (
              <span className={index === crumbs.length - 1 ? "active" : ""}>
                {item.name}
              </span>
            )}

            {index !== crumbs.length - 1 && <span className="separator"> › </span>}
          </React.Fragment>
        ))}
      </nav>
    </div>
  );
};

export default Breadcrumb;
