import { useState } from "react"
import { Star } from "lucide-react"
import PurePearlStudio from "../assets/pure_pearl_studio.png"
import AlbertFlores from "../assets/albert_flores.png"
import CodyFisher from "../assets/cody_fisher.png"
import BrooklynSimmons from "../assets/brooklyn_simmons.png"

type RatingFilter = "all" | 5 | 4 | 3 | 2 | 1

const ratingBreakdown = [
    {
        rating: 5,
        count: 720,
        percentage: 93,
    },
    {
        rating: 4,
        count: 120,
        percentage: 36,
    },
    {
        rating: 3,
        count: 21,
        percentage: 10,
    },
    {
        rating: 2,
        count: 12,
        percentage: 4,
    },
    {
        rating: 1,
        count: 16,
        percentage: 5,
    },
]

const reviews = [
    {
        id: 1,
        name: "PurePearl Studio",
        designation: "UI/UX Designer",
        rating: 5,
        date: "a year ago",
        avatar: PurePearlStudio,
        review:
            "The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!",
    },
    {
        id: 2,
        name: "Albert Flores",
        designation: "UI/UX Designer",
        rating: 4,
        date: "a year ago",
        avatar: AlbertFlores,
        review:
            "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience.",
    },
    {
        id: 3,
        name: "Cody Fisher",
        designation: "UI/UX Designer",
        rating: 5,
        date: "a year ago",
        avatar: CodyFisher,
        review:
            "The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills.",
    },
    {
        id: 4,
        name: "Brooklyn Simmons",
        designation: "UI/UX Designer",
        rating: 4,
        date: "a year ago",
        avatar: BrooklynSimmons,
        review:
            "The lessons on optimizing digital assets for various platforms were particularly insightful. The engaging content kept me motivated throughout.",
    },
]

const ReviewsTab = () => {
    const [ratingFilter, setRatingFilter] =
        useState<RatingFilter>("all")

    const filteredReviews =
        ratingFilter === "all"
            ? reviews
            : reviews.filter(
                (review) => review.rating === ratingFilter,
            )

    return (
        <div className="mt-10">
            <h2 className="text-[20px] font-semibold text-[#22242A]">
                What Learners Are Saying
            </h2>

            <p className="mt-5 max-w-162.5 text-[14px] leading-7 text-[#686B73]">
                Discover what our learners have to say about their experience
                with "Build Digital Assets: A Comprehensive Guide." Read reviews
                and ratings from individuals who have embarked on the
                transformative journey of mastering digital asset creation.
            </p>

            {/* Rating Summary */}
            <div className="mt-7 flex flex-col gap-6 rounded-2xl border border-[#E3E4E7] bg-white p-7 sm:flex-row sm:items-center">
                <div className="flex min-h-27.5 w-26.25 shrink-0 flex-col items-center justify-center rounded-lg bg-[#D7FF00]">
                    <span className="text-[11px]">
                        Ratings
                    </span>

                    <strong className="text-[30px] leading-none">
                        4.7
                    </strong>
                </div>

                <div className="flex-1 space-y-2.5">
                    {ratingBreakdown.map((item) => (
                        <div
                            key={item.rating}
                            className="flex items-center gap-4"
                        >
                            {/* Bar */}
                            <div className="h-2 flex-1 overflow-hidden rounded-full bg-[#E8E9EA]">
                                <div
                                    className="h-full rounded-full bg-[#D7FF00]"
                                    style={{
                                        width: `${item.percentage}%`,
                                    }}
                                />
                            </div>

                            {/* Stars */}
                            <div className="hidden min-w-26.25 items-center sm:flex">
                                {Array.from({ length: 5 }).map(
                                    (_, index) => (
                                        <Star
                                            key={index}
                                            className={`size-4 ${index < item.rating
                                                    ? "fill-[#404249] text-[#404249]"
                                                    : "text-[#D3D5D9]"
                                                }`}
                                        />
                                    ),
                                )}
                            </div>

                            <span className="w-8 text-right text-[11px] text-[#696C73]">
                                {item.count}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Filters */}
            <h3 className="mt-8 text-[18px] font-semibold text-[#22242A]">
                Individual Reviews:
            </h3>

            <div className="mt-5 flex flex-wrap gap-3">
                <button
                    type="button"
                    onClick={() => setRatingFilter("all")}
                    className={`h-10 rounded-full px-5 text-[13px] ${ratingFilter === "all"
                            ? "bg-[#D7FF00] text-[#111]"
                            : "bg-[#F2F2F4] text-[#555861]"
                        }`}
                >
                    All rating
                </button>

                {[5, 4, 3, 2, 1].map((rating) => (
                    <button
                        key={rating}
                        type="button"
                        onClick={() =>
                            setRatingFilter(
                                rating as RatingFilter,
                            )
                        }
                        className={`flex h-10 items-center gap-1 rounded-full px-4 text-[13px] ${ratingFilter === rating
                                ? "bg-[#D7FF00] text-[#111]"
                                : "bg-[#F2F2F4] text-[#555861]"
                            }`}
                    >
                        <Star className="size-4 fill-current" />

                        {rating}
                    </button>
                ))}
            </div>

            {/* Reviews */}
            <div className="mt-6 space-y-5">
                {filteredReviews.map((review) => (
                    <article
                        key={review.id}
                        className="rounded-[18px] border border-[#D9DBDF] p-7"
                    >
                        <div className="flex items-start justify-between gap-5">
                            <div className="flex items-center gap-3">
                                <div className="size-11 overflow-hidden rounded-full bg-[#ECEDEF]">
                                    <img src={review.avatar} alt={review.name} />
                                </div>

                                <div>
                                    <h4 className="text-[14px] font-semibold text-[#32343A]">
                                        {review.name}
                                    </h4>

                                    <p className="text-[11px] text-[#777A82]">
                                        {review.designation}
                                    </p>
                                </div>
                            </div>

                            <span className="text-[11px] text-[#8A8D94]">
                                {review.date}
                            </span>
                        </div>

                        <div className="mt-5 flex gap-1">
                            {Array.from({ length: 5 }).map(
                                (_, index) => (
                                    <Star
                                        key={index}
                                        className={`size-5 ${index < review.rating
                                                ? "fill-[#3F4147] text-[#3F4147]"
                                                : "text-[#D5D6DA]"
                                            }`}
                                    />
                                ),
                            )}
                        </div>

                        <p className="mt-5 text-[13px] leading-6 text-[#686B73]">
                            "{review.review}"
                        </p>
                    </article>
                ))}

                {filteredReviews.length === 0 && (
                    <div className="rounded-[18px] border border-[#E3E4E7] py-14 text-center text-sm text-[#777A82]">
                        No reviews found for this rating.
                    </div>
                )}
            </div>
        </div>
    )
}

export default ReviewsTab