import React from 'react'
import Layout from "@/app/Components/Layout";
import DashboardTable from '@/app/Components/DashboardTable';

export default async function Page() {

  return (
    <>
       <Layout>
            <DashboardTable/>
        </Layout> 
    </>
  )
}
