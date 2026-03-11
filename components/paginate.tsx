"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { PaginatedDocs } from "payload";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export function Paginate({
  hasNextPage,
  hasPrevPage,
  nextPage,
  prevPage,
  page = 1,
  totalPages,
}: Omit<PaginatedDocs<any>, "docs">) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  if (totalPages === 1) return null;

  const getHref = (targetPage: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", targetPage.toString());
    return `${pathname}?${params.toString()}`;
  };

  const pageWindow = 2;
  const start = Math.max(1, page - pageWindow);
  const end = Math.min(totalPages, page + pageWindow);
  const pages = Array.from({ length: end - start + 1 }, (_, i) => start + i);

  return (
    <Pagination>
      <PaginationContent>
        {hasPrevPage && prevPage && (
          <PaginationItem>
            <PaginationPrevious href={getHref(prevPage)} />
          </PaginationItem>
        )}

        {/* First page + ellipsis */}
        {start > 1 && (
          <>
            <PaginationItem>
              <PaginationLink
                href={getHref(1)}
                isActive={page === 1}
                aria-current={page === 1 ? "page" : undefined}
              >
                1
              </PaginationLink>
            </PaginationItem>
            {start > 2 && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}
          </>
        )}

        {/* Main page range */}
        {pages.map((p) => (
          <PaginationItem key={`page-${p}`}>
            <PaginationLink
              href={getHref(p)}
              isActive={p === page}
              aria-current={p === page ? "page" : undefined}
            >
              {p}
            </PaginationLink>
          </PaginationItem>
        ))}

        {/* Last page + ellipsis */}
        {end < totalPages && (
          <>
            {end < totalPages - 1 && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}
            <PaginationItem>
              <PaginationLink
                href={getHref(totalPages)}
                isActive={page === totalPages}
                aria-current={page === totalPages ? "page" : undefined}
              >
                {totalPages}
              </PaginationLink>
            </PaginationItem>
          </>
        )}

        {hasNextPage && nextPage && (
          <PaginationItem>
            <PaginationNext href={getHref(nextPage)} prefetch />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
}
