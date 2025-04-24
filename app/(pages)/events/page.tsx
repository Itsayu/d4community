import Background from "@/app/components/Background";
import Footer from "@/app/components/Footer";
import HeroSection from "@/app/components/HeroSection";

import eventImg from "@/app/assets/images/eventsHeroImg.png"
import { Heading } from "@/app/components/Headings";
import { RecentEventCard, UpcomingEventCard } from "@/app/components/EventCard";
import { RecentEventCardType } from "@/types/cards";
import Image from "next/image";

export default function EventPage() {
    return (
        <div className="relative overflow-hidden text-foreground bg-background transition-colors duration-300">
            <div className="container z-10 relative">
                <EventHeroSection />
            </div>
            <EventSection />
            <div className="container z-10 relative">
                <UpcomingEventSection />
            </div>
            <Background />
            <Footer />
        </div>
    )
}

function EventHeroSection() {
    return (
        <div className="">
            <HeroSection
                title={"All Events"}
                img={eventImg}
                description={"Step into a world where creativity meets technology. Our events bring together designers, developers, and tech enthusiasts to collaborate, learn, and innovate. Don't miss out on this unique opportunity to connect with industry leaders, showcase your skills, and drive the future of design and development!"}
            />
        </div>
    )
}

function EventSection() {
    const RecentEventInfo: RecentEventCardType[] = [
        {
            date: "1-July-2025",
            eventName: "Hackathon",
            image: "/placeholder-event.jpg",
            link: "/events/hackathon-2025"
        }, 
        {
            date: "15-June-2025",
            eventName: "Design Workshop",
            image: "/placeholder-event.jpg",
            link: "/events/design-workshop"
        }, 
        {
            date: "30-May-2025",
            eventName: "Tech Conference",
            image: "/placeholder-event.jpg",
            link: "/events/tech-conference"
        }, 
        {
            date: "10-May-2025",
            eventName: "Coding Bootcamp",
            image: "/placeholder-event.jpg",
            link: "/events/coding-bootcamp"
        }
    ]

    return (
        <div className="bg-secondary/50 dark:bg-[#091B32] md:mt-[140px] mt-[80px] transition-colors duration-300">
            <div className="container z-10 relative flex flex-col gap-10 py-16 md:py-24">
                <div className="px-4 md:px-0">
                    <Heading title={"Recent Events"} />
                </div>
                <div className="flex justify-center flex-wrap gap-8 md:gap-12 lg:gap-24 py-12 md:py-16 lg:py-24">
                    {RecentEventInfo.map((props, k) => (
                        <RecentEventCard 
                            date={props.date} 
                            eventName={props.eventName} 
                            image={props.image} 
                            link={props.link} 
                            key={k} 
                        />
                    ))}
                </div>

                {/* Upcoming Event in recent event section */}
                <div className="relative overflow-hidden bg-muted lg:h-[720px] h-[360px] w-full max-w-[95%] md:max-w-[90%] self-center rounded-2xl md:rounded-3xl shadow-lg">
                    <Image
                        src="/upcoming-event-placeholder.jpg"
                        fill
                        className="object-cover"
                        alt="Upcoming Event"
                        priority
                    />
                    <div className="absolute z-20 top-0 left-0 right-0 bg-gradient-to-r from-primary to-accent">
                        <p className="text-center p-3 md:p-4 text-white font-medium">Upcoming Event</p>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 flex items-end p-6 md:p-10">
                        <div className="text-white">
                            <h3 className="text-2xl md:text-4xl font-bold mb-2">Annual Tech Summit</h3>
                            <p className="text-sm md:text-base mb-4">Join us for the biggest tech event of the year featuring industry leaders and cutting-edge innovations.</p>
                            <button className="bg-white text-primary px-6 py-2 rounded-full font-medium hover:bg-white/90 transition-colors">
                                Register Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function UpcomingEventSection() {
    const upcomingEvents = [
        {
            id: 1,
            title: "Web Development Workshop",
            date: "15-August-2025",
            description: "Learn modern web development techniques from industry experts.",
            location: "Virtual",
            image: "/workshop-placeholder.jpg"
        },
        {
            id: 2,
            title: "UX Design Conference",
            date: "22-September-2025",
            description: "Explore the latest trends in user experience design.",
            location: "Quark City, Mohali",
            image: "/conference-placeholder.jpg"
        }
    ];

    return (
        <div className="py-16 md:py-28">
            <div className="px-4 md:px-0">
                <Heading title={"Upcoming Events"} />
            </div>
            <div className="py-8 md:py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                {upcomingEvents.map(event => (
                    <UpcomingEventCard 
                        key={event.id}
                        title={event.title}
                        date={event.date}
                        description={event.description}
                        location={event.location}
                        image={event.image}
                    />
                ))}
            </div>
            <div className="text-center mt-8">
                <button className="px-8 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors shadow-md">
                    View All Upcoming Events
                </button>
            </div>
        </div>
    )
}