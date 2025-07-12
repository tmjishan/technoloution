export const revalidate = 60;
import { fetchTeamData } from "@/lib/graphql-client";

export default async function TeamSection() {
  const data = await fetchTeamData();

  const teamMembers = data || [];

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

      <div className="mt-14 grid gap-6 sm:gap-8 md:gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member: any, idx: number) => (
          <div
            key={idx}
            className="group bg-gray-800/40 hover:bg-gray-800/70 backdrop-blur-md border border-yellow-800/10 shadow-md hover:shadow-yellow-600/30 text-white rounded-2xl p-6 flex flex-col items-center gap-4 transition-all duration-300 ease-in-out hover:animate-zoom-bounce"
          >
            {member.featuredImage?.node?.sourceUrl ? (
              <img
                src={member.featuredImage.node.sourceUrl}
                alt={member.title}
                className="w-24 h-24 rounded-full object-cover border-2 border-yellow-800 shadow-md hover:scale-105 transition-transform duration-300"
              />
            ) : (
              <div className="w-24 h-24 rounded-full bg-yellow-400 flex items-center justify-center text-gray-900 font-bold text-xl">
                {member.title.charAt(0)}
              </div>
            )}
            <div className="text-yellow-800 text-xl font-semibold text-center">
              {member.title}
            </div>
            <p className="text-gray-100 text-sm sm:text-base text-center">
              {member.teamInfo?.jobTitle || ""}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
