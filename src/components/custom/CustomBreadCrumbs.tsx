import { Link } from 'react-router';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '../ui/breadcrumb';

interface BreadCrumb {
  label: string;
  to: string;
}

interface Props {
  currentPage: string;
  breadcrumbs?: BreadCrumb[];
}

export const CustomBreadCrumbs = ({ currentPage, breadcrumbs = [] }: Props) => {
  return (
    <Breadcrumb className='my-5'>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink>
            <Link to='/'>inicio</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        {
          breadcrumbs.map(({ label, to }) => (
            <>
              <BreadcrumbItem>
                <BreadcrumbLink>
                  <Link to={to}>{label}</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
            </>
          ))
        }
        <BreadcrumbItem>
          <BreadcrumbPage>{currentPage}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}
