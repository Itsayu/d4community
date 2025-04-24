import { Button } from "@/components/ui/button";
import { RecentEventCardType } from "@/types/cards";
import Image from "next/image";
import Link from "next/link";
import { OrangeButton } from "./Buttons";

export function RecentEventCard({ eventName, date, image, link }: RecentEventCardType) {
    return (
        <div>
            <div className="flex flex-col gap-4">
                <div className="relative overflow-hidden bg-slate-500 w-[260px] h-[280px] rounded-xl shadow-md">
                    <Link href={link}>
                        <Image
                            src={image}
                            fill
                            quality={100}
                            alt={eventName}
                            objectFit="cover"
                        />
                    </Link>
                </div>
                <div className="text-left">
                    <p className="font-mono">{date}</p>
                    <h1 className="text-[22px] font-bold">{eventName}</h1>
                </div>
            </div>
        </div>
    )
}

export function UpcomingEventCard() {
    return (
        <div className="">
            <div className="flex gap-10">
                <div className="bg-white h-[250px] min-w-[350px] rounded-2xl relative overflow-hidden">
                    <Image
                        src=""
                        fill
                        objectFit="cover"
                        alt="upcoming event"
                    />
                </div>
                <div className="bg-[#091B32] flex gap-2 p-5">
                    <div className="flex flex-col">
                        <div className="p-2 border">25-july</div>
                        <h1 className="font-bold text-[32px]">Hack-N-Win 2.0</h1>
                        <p>Step into a world where creativity meets technology. Our events brings together designers, developers, and tech enthusiasts to collaborate, learn, and innovate. Don't miss out on this unique opportunity to connect with industry leaders, showcase your skills, and drive the future of design and development!</p>
                        <p>location</p>
                    </div>
                    {/* line */}
                    <div className="bg-white"></div>
                    <div>
                        <OrangeButton label={"Register"} />
                    </div>
                </div>
            </div>
        </div>
    )
}