const Skeleton = ({ className = "" }: { className?: string }) => {
  return (
    <div
      className={`animate-pulse rounded-md bg-[#E8EEF9] ${className}`}
    />
  );
};

const EpicCardSkeleton = () => {
  return (
    <div className="rounded-xl border border-[#E9EDF5] bg-white p-5 shadow-sm">
      {/* title */}
      <div className="flex justify-between items-center">
        <Skeleton className="h-5 w-28" />
        <Skeleton className="h-8 w-8 rounded-full" />
      </div>

      {/* avatar + owner */}
      <div className="mt-5 flex items-center gap-3">
        <Skeleton className="h-10 w-10 rounded-full" />
        <Skeleton className="h-4 w-40" />
      </div>

      {/* progress */}
      <div className="mt-5">
        <Skeleton className="h-2 w-full rounded-full" />
      </div>

      {/* footer */}
      <div className="mt-4 flex justify-between">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-4 w-12" />
      </div>
    </div>
  );
};

const loadingEpic = () => {
  return (
    <div className="px-6 md:px-0">

      {/* Breadcrumb */}
      <div className="hidden md:flex gap-3 mb-4">
        <Skeleton className="h-3 w-20" />
        <Skeleton className="h-3 w-24" />
        <Skeleton className="h-3 w-14" />
      </div>

      {/* Header */}
      <div className="hidden md:flex justify-between items-center mb-8">
        <Skeleton className="h-9 w-64" />

        <div className="flex gap-4">
          <Skeleton className="h-12 w-72" />
          <Skeleton className="h-12 w-32 rounded-lg" />
        </div>
      </div>

      {/* Mobile Search */}
      <div className="md:hidden mb-6">
        <Skeleton className="h-12 w-full rounded-lg" />
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Array.from({ length: 6 }).map((_, index) => (
          <EpicCardSkeleton key={index} />
        ))}
      </div>

      {/* Pagination */}
      <div className="hidden md:flex justify-between items-center mt-10">
        <Skeleton className="h-4 w-40" />

        <div className="flex gap-2">
          <Skeleton className="h-9 w-9 rounded-md" />
          <Skeleton className="h-9 w-9 rounded-md" />
          <Skeleton className="h-9 w-9 rounded-md" />
          <Skeleton className="h-9 w-9 rounded-md" />
        </div>
      </div>

    </div>
  );
};

export default loadingEpic;