import { CustomJumbotron } from '@/components/custom/CustomJumbotron';
import { HeroStats } from '../../components/HeroStats';
import { SearchControls } from './ui/SearchControls';
import { CustomBreadCrumbs } from '@/components/custom/CustomBreadCrumbs';

export const SearchPage = () => {
  return (
    <>
      <CustomJumbotron
        title='Busqueda de SuperHéroes' description='Descubre, explora y administra tus superhéroes y villanos favoritos' />

      <CustomBreadCrumbs
        currentPage='Buscador de Héroes'
        // breadcrumbs={[
        //   { label: 'Home 1', to: '/' }
        // ]}
      />

      <HeroStats />

      <SearchControls />
    </>
  )
}

export default SearchPage;