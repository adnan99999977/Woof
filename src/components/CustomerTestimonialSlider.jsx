import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

export default function App() {
  const jsonData = [
    {
      id: 1,
      name: "Arif Hossain",
      role: "Product Manager",
      avatar: "https://i.pravatar.cc/150?img=12",
      quote:
        "The team did an excellent job on our project — delivery was on time, communication was clear, and the work quality exceeded expectations.",
      short: "On-time delivery and professional service.",
      rating: 5,
      date: "2025-08-10",
      credit: "Image from Freepik",
    },
    {
      id: 2,
      name: "Mina Rahman",
      role: "UX Designer",
      avatar: "https://i.pravatar.cc/150?img=47",
      quote:
        "From design review to final implementation, their support was truly satisfying. They listened to feedback and made meaningful updates.",
      short: "User-focused and quick response.",
      rating: 4,
      date: "2025-06-21",
      credit: "Image from Freepik",
    },
    {
      id: 3,
      name: "Rafiq Karim",
      role: "Small Business Owner",
      avatar: "https://i.pravatar.cc/150?img=5",
      quote:
        "They created marketing content and campaigns for my online store which really increased conversions. Great value for money!",
      short: "Boosted conversions, reduced hassle.",
      rating: 5,
      date: "2025-04-03",
      credit: "Image from Freepik",
    },
    {
      id: 4,
      name: "Sadia Noor",
      role: "Freelance Photographer",
      avatar: "https://i.pravatar.cc/150?img=32",
      quote:
        "They handled my branding project with great care — every small detail was discussed. The final result looks professional and eye-catching.",
      short: "Careful branding work, professional result.",
      rating: 4,
      date: "2025-02-15",
      credit: "Image from Freepik",
    },
  ];

  return (
    <div className="hidden lg:block  w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 mb-20 min-h-[70vh] md:h-[500px] bg-gradient-to-br from-blue-200 via-blue-50 to-blue-200 bg-white/90 backdrop-blur-xl shadow-3xl rounded-xl flex items-center justify-center">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper w-full max-w-[1000px]"
      >
        {jsonData.map((data) => (
          <SwiperSlide key={data.id}>
            <div className="flex flex-col items-center justify-center text-center p-4 sm:p-6 md:p-8">
              <p className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center pb-10 md:pb-16 text-gray-800">
                Customer Review 
              </p>
              <img
                src={data.avatar}
                alt={data.name}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mb-4 border-4 border-white shadow-md object-cover"
              />
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                {data.name}
              </h3>
              <p className="text-sm sm:text-base text-gray-500 mb-3">
                {data.role}
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 italic max-w-2xl mb-4 px-2">
                “{data.quote}”
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
