import { CustomBreadCrumbs } from '@/components/custom/CustomBreadCrumbs';
import { CustomJumbotron } from '@/components/custom/CustomJumbotron';
import { CustomPagination } from '@/components/custom/CustomPagination';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useHeroesSummary } from '@/heroes/hooks/useHeroesSummary';
import { usePaginatedHero } from '@/heroes/hooks/usePaginatedHero';
import {
  Heart
} from "lucide-react";
import { useMemo } from 'react';
import { useSearchParams } from 'react-router';
import { HeroGrid } from '../../components/HeroGrid';
import { HeroStats } from '../../components/HeroStats';

export const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const activeTab = searchParams.get('tab') ?? 'all';
  const page = searchParams.get('page') ?? '1';
  const limit = searchParams.get('limit') ?? '6';
  const category = searchParams.get('category') ?? 'all';

  const selectedTab = useMemo(() => {
    const validTabs = ['all', 'favorites', 'heroes', 'villains'];
    return validTabs.includes(activeTab) ? activeTab : 'all';
  }, [activeTab]);

  // const [activeTab, setActiveTab] = useState<'all' | 'favorites' | 'heroes' | 'villains'>('all');

  const { data: heroesResponse } = usePaginatedHero(+page, +limit, category);

  const { data: summaryData } = useHeroesSummary();

  // useEffect(() => {
  //   getHeroesByPage().then();
  // }, []);

  return (
    <>
      <>
        {/* Header */}
        <CustomJumbotron title='Universo de SuperHéroes' description='Descubre, explora y administra tus superheroes y villanos favoritos' />

        <CustomBreadCrumbs currentPage='Super Héroes' />

        {/* Stats Dashboard */}
        <HeroStats />

        {/* Tabs */}
        <Tabs value={selectedTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger
              value="all"
              onClick={() => setSearchParams(prev => {
                prev.set('tab', 'all');
                prev.set('category', 'all');
                prev.set('page', '1');
                return prev
              })}>All Characters ({summaryData?.totalHeroes ?? 0})</TabsTrigger>
            <TabsTrigger
              value="favorites"
              onClick={() => setSearchParams(prev => {
                prev.set('tab', 'favorites');
                return prev
              })} className="flex items-center gap-2">
              <Heart className="h-4 w-4" />
              Favorites (3)
            </TabsTrigger>
            <TabsTrigger
              value="heroes"
              onClick={() => setSearchParams(prev => {
                prev.set('tab', 'heroes');
                prev.set('category', 'hero');
                prev.set('page', '1');
                return prev
              })}>Heroes ({summaryData?.heroCount ?? 0})</TabsTrigger>
            <TabsTrigger
              value="villains"
              onClick={() => setSearchParams(prev => {
                prev.set('tab', 'villains');
                prev.set('category', 'villain');
                prev.set('page', '1');
                return prev
              })}>Villains ({summaryData?.villainCount ?? 0})</TabsTrigger>
          </TabsList>

          <TabsContent value='all'>
            <HeroGrid heroes={heroesResponse?.heroes ?? []} />
          </TabsContent>
          <TabsContent value='favorites'>
            <HeroGrid heroes={[]} />
          </TabsContent>
          <TabsContent value='heroes'>
            <HeroGrid heroes={heroesResponse?.heroes ?? []} />
          </TabsContent>
          <TabsContent value='villains'>
            <HeroGrid heroes={heroesResponse?.heroes ?? []} />
          </TabsContent>
        </Tabs>


        {/* Pagination */}
        <CustomPagination totalPages={heroesResponse?.pages ?? 1} />
      </>
    </>
  )
}