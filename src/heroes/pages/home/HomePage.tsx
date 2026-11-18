import { CustomJumbotron } from '@/components/custom/CustomJumbotron';
import { CustomPagination } from '@/components/custom/CustomPagination';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Heart
} from "lucide-react";
import { useState } from 'react';
import { HeroGrid } from '../../components/HeroGrid';
import { HeroStats } from '../../components/HeroStats';
import { CustomBreadCrumbs } from '@/components/custom/CustomBreadCrumbs';

export const HomePage = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'favorites' | 'heroes' | 'villains'>('all');
  return (
    <>
      <>
        {/* Header */}
        <CustomJumbotron title='Universo de SuperHéroes' description='Descubre, explora y administra tus superheroes y villanos favoritos' />

        <CustomBreadCrumbs currentPage='Super Héroes' />

        {/* Stats Dashboard */}
        <HeroStats />

        {/* Tabs */}
        <Tabs value={activeTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all" onClick={() => setActiveTab('all')}>All Characters (16)</TabsTrigger>
            <TabsTrigger value="favorites" onClick={() => setActiveTab('favorites')} className="flex items-center gap-2">
              <Heart className="h-4 w-4" />
              Favorites (3)
            </TabsTrigger>
            <TabsTrigger value="heroes" onClick={() => setActiveTab('heroes')}>Heroes (12)</TabsTrigger>
            <TabsTrigger value="villains" onClick={() => setActiveTab('villains')}>Villains (2)</TabsTrigger>
          </TabsList>

          <TabsContent value='all'>
            <HeroGrid />
          </TabsContent>
          <TabsContent value='favorites'>
            <HeroGrid />
          </TabsContent>
          <TabsContent value='heroes'>
            <HeroGrid />
          </TabsContent>
          <TabsContent value='villains'>
            <HeroGrid />
          </TabsContent>
        </Tabs>


        {/* Pagination */}
        <CustomPagination totalPages={4} />
      </>
    </>
  )
}