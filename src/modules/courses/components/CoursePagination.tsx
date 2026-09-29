import { ChevronLeft, ChevronRight } from "lucide-react"

type Props = {
    currentPage: number
    totalPages: number
    onPageChange: (page: number) => void
}

const getVisiblePages = (
    currentPage: number,
    totalPages: number,
) => {
    const maxVisible = 5

    if (totalPages <= maxVisible) {
        return Array.from(
            { length: totalPages },
            (_, index) => index + 1,
        )
    }

    let start = currentPage - 2
    let end = currentPage + 2

    if (start < 1) {
        start = 1
        end = maxVisible
    }

    if (end > totalPages) {
        end = totalPages
        start = totalPages - maxVisible + 1
    }

    return Array.from(
        { length: end - start + 1 },
        (_, index) => start + index,
    )
}

const CoursePagination = ({
    currentPage,
    totalPages,
    onPageChange,
}: Props) => {
    if (totalPages <= 1) {
        return null
    }

    const visiblePages = getVisiblePages(
        currentPage,
        totalPages,
    )

    return (
        <div className="flex items-center justify-center gap-5">
            {/* Previous */}
            <button
                type="button"
                disabled={currentPage === 1}
                onClick={() => onPageChange(currentPage - 1)}
                className="flex size-12 items-center justify-center rounded-full border border-[#D7D9DD] bg-white text-[#24262B] transition-colors hover:bg-[#F5F5F7] disabled:cursor-not-allowed disabled:opacity-40"
                aria-label="Previous page"
            >
                <ChevronLeft className="size-6" strokeWidth={1.8} />
            </button>

            {/* Page numbers */}
            {visiblePages.map((page) => (
                <button
                    key={page}
                    type="button"
                    onClick={() => onPageChange(page)}
                    className={`min-w-5 text-[17px] font-semibold transition-colors ${currentPage === page
                            ? "text-[#003BE2]"
                            : "text-[#A0A2A8] hover:text-[#25262A]"
                        }`}
                >
                    {page}
                </button>
            ))}

            {/* Next */}
            <button
                type="button"
                disabled={currentPage === totalPages}
                onClick={() => onPageChange(currentPage + 1)}
                className="flex size-12 items-center justify-center rounded-full border border-[#D7D9DD] bg-white text-[#24262B] transition-colors hover:bg-[#F5F5F7] disabled:cursor-not-allowed disabled:opacity-40"
                aria-label="Next page"
            >
                <ChevronRight className="size-6" strokeWidth={1.8} />
            </button>
        </div>
    )
}

export default CoursePagination