import Image from "next/image";
import { fetchTeamData } from "@/lib/graphql-client";
import { TeamMemberRaw } from "@/type/type";

export default async function TeamSection() {
  const data: TeamMemberRaw[] = (await fetchTeamData()) || [];
  const teamMembers = data;

  return (
    <section className="w-full px-4 sm:px-6 md:px-12 lg:px-20 pt-10 md:pt-16 pb-10 md:pb-20 bg-gray-900/60 rounded-3xl my-16">
      <div className="max-w-6xl mx-auto text-center space-y-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
          OUR TEAM
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          It Starts With Our People. Our team of people is what makes our
          mission and values possible. They are the driving force behind all
          that we do.
        </p>
      </div>

      <div className="mt-14 grid gap-6 sm:gap-8 md:gap-10 grid-cols-1 md:max-w-5xl mx-auto">
        {teamMembers.map((member: TeamMemberRaw, idx: number) => (
          <div
            key={idx}
            className="group flex flex-col md:flex-row items-center justify-center gap-4 bg-gray-800/40 hover:bg-gray-800/70 backdrop-blur-md border border-yellow-800/10 shadow-md hover:shadow-yellow-600/30 text-white rounded-2xl px-4  py-10 transition-all duration-300 ease-in-out hover:animate-zoom-bounce"
          >
            {member.featuredImage?.node?.sourceUrl ? (
              <Image
                src={member.featuredImage.node.sourceUrl}
                alt={member.title}
                width={200} // 24 * 4 (Tailwind unit to px)
                height={200}
                className="rounded-full object-cover border-2 border-yellow-800 shadow-md hover:scale-105 transition-transform duration-300"
              />
            ) : (
              <div className="w-24 h-24 rounded-full bg-yellow-400 flex items-left justify-center text-gray-900 font-bold text-xl">
                {member.title.charAt(0)}
              </div>
            )}
            <div className="text-yellow-800 text-xl font-semibold text-left">
              <p className="text-gray-100 text-sm sm:text-base text-left">
                {member.title || "Name Of Team"}
              </p>
              <p className="text-gray-100/50 font-normal text-sm sm:text-base text-left">
                {member?.teamMemberInfo?.jobTitle || "Job Title"}
              </p>
            </div>

            <p className="text-gray-100/60 tracking-wide text-sm sm:text-base text-justify md:text-left md:max-w-xl md:p-5">
              {member?.teamMemberInfo?.description || "Description"}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
