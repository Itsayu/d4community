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
        <div className="relative overflow-hidden text-white">
            <div className="container z-10 relative">
                <EventHeroSection />
            </div>
            <EventSection />
            <div className="container z-10 relative">
                <UpcomingEventSection />
            </div>
            <Background />
        </div>
    )
}

function EventHeroSection() {
    return (
        <div className="">
            <HeroSection
                title={"All Events"}
                img={eventImg}
                description={"Step into a world where creativity meets technology. Our events brings together designers, developers, and tech enthusiasts to collaborate, learn, and innovate. Don't miss out on this unique opportunity to connect with industry leaders, showcase your skills, and drive the future of design and development!"}
            />
        </div>
    )
}


function EventSection() {
    const RecentEventInfo: RecentEventCardType[] = [{
        date: "1-July-2025",
        eventName: "Hackathon",
        image: "",
        link: ""
    }, {
        date: "1-July-2025",
        eventName: "Hackathon",
        image: "",
        link: ""
    }, {
        date: "1-July-2025",
        eventName: "Hackathon",
        image: "",
        link: ""
    }, {
        date: "1-July-2025",
        eventName: "Hackathon",
        image: "",
        link: ""
    }]

    return (
        <div className="bg-[#091B32] md:mt-[140px]">
            <div className="container z-10 relative flex flex-col gap-10 py-24">
                <div className="">
                    <Heading title={"Recent Events"} />
                </div>
                <div className="flex justify-center flex-wrap md:gap-24 gap-16 md:py-24 py-16">
                    {
                        RecentEventInfo.map((props, k) => {
                            return (
                                <RecentEventCard date={props.date} eventName={props.eventName} image={props.image} link={props.link} key={k} />
                            )
                        })
                    }
                </div>

                {/* Upcoming Event in recent event section */}
                <div className="relative overflow-hidden bg-slate-400 lg:h-[720px] h-[360px] w-[100%] max-w-[90%] self-center rounded-3xl shadow-md">
                    <Image
                        src=""
                        fill
                        objectFit="cover"
                        alt="Eventname"
                    />
                    <div className="relative z-20 bg-[linear-gradient(to_left,#A46FF2,#E49976)]">
                        <p className="text-center p-4">Upcoming Event</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


function UpcomingEventSection() {
    return (
        <div className="py-28">
            <Heading title={"Upcoming Events"} />
            <div className="py-12 flex">
                <UpcomingEventCard />
            </div>
        </div>
    )
}