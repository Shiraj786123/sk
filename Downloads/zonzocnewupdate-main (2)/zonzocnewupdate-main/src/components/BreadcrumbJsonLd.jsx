import { getBreadcrumbs } from '../data/breadcrumbMap';
import { buildBreadcrumbSchema } from '../utils/breadcrumbSchema';

export default function BreadcrumbJsonLd({ pathname }) {
  const crumbs = getBreadcrumbs(pathname);
  const schema = buildBreadcrumbSchema(crumbs, pathname);

  if (!schema) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
