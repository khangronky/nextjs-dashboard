import Search from "@/app/ui/search";
import Table from "@/app/ui/customers/table";
import { lusitana } from "@/app/ui/fonts";
import { TableRowSkeleton } from "@/app/ui/skeletons";
import { Suspense } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customers",
};

export default function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {
  const query = searchParams?.query || "";
  return (
    <div className="w-full">
      <h1 className={`${lusitana.className} mb-8 text-xl md:text-2xl`}>
        Customers
      </h1>
      <Search placeholder="Search customers..." />
      <Suspense fallback={<TableRowSkeleton />}>
        <Table query={query} />
      </Suspense>
    </div>
  );
}
