import React from 'react';
import { Heart } from 'lucide-react';
import ProgramLayout from '../components/ProgramLayout';

const CommunityOutreachPage: React.FC = () => {
  return (
    <ProgramLayout
      title="Community Outreach"
      icon={Heart}
      gradient="from-purple-600 via-purple-700 to-purple-800"
    >
      <div className="prose prose-lg max-w-none">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Direct Community Engagement & Support Services</h2>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            HDRI's Community Outreach program represents our commitment to meeting people where they are, bringing essential health and social services directly to the communities that need them most. This comprehensive program serves as the bridge between our organization and the diverse populations we serve, ensuring that geographic, economic, and social barriers do not prevent individuals and families from accessing life-saving resources and support. Through sustained community engagement, we build trust, foster relationships, and create pathways for vulnerable populations to access the full range of services available through HDRI and our partner organizations.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Our outreach efforts are strategically designed to reach populations that are often underserved by traditional healthcare and social service systems, including migrant workers, street-connected individuals, sex workers, people who use drugs, and other marginalized communities. Our outreach teams consist of trained social workers, peer educators, and community health workers who have deep knowledge of the communities they serve and the cultural competency necessary to build meaningful relationships with community members. These teams conduct regular visits to areas where vulnerable populations live and work, providing immediate assistance while also connecting individuals to longer-term support services.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Direct service provision through our outreach program includes immediate health interventions such as wound care, basic medical treatment, health screenings, and distribution of essential supplies including clean needles, condoms, and hygiene materials. Our mobile health units bring medical services directly to communities that lack access to traditional healthcare facilities, providing services such as HIV testing, tuberculosis screening, treatment for sexually transmitted infections, and basic primary care. These services are provided without judgment and with respect for the dignity and autonomy of all individuals, regardless of their circumstances or lifestyle choices.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Resource connection and advocacy form crucial components of our outreach work, as we help individuals navigate complex systems to access housing, healthcare, legal services, employment opportunities, and other essential resources. Our outreach workers serve as advocates and liaisons, helping community members overcome bureaucratic barriers and discrimination that might otherwise prevent them from accessing services. We maintain extensive networks of partnerships with other organizations and agencies, enabling us to provide comprehensive referrals and ensure continuity of care for the individuals we serve.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Crisis intervention and emergency response capabilities are integral to our outreach program, as our teams are often the first point of contact for individuals experiencing health emergencies, mental health crises, or other urgent situations. Our outreach workers are trained in crisis de-escalation, basic first aid, and emergency response protocols, enabling them to provide immediate assistance while coordinating with emergency services when necessary. We maintain 24-hour crisis response capabilities and work closely with local hospitals, police, and emergency services to ensure that individuals in crisis receive appropriate care.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Community capacity building is a long-term focus of our outreach efforts, as we work to strengthen the ability of communities to address their own health and social challenges. We provide training and support to community leaders, help establish peer support networks, and facilitate the development of community-based organizations that can continue advocacy and service provision efforts. Our approach recognizes that sustainable change occurs when communities have the resources and capacity to address their own needs, and we work to build these capacities while providing ongoing support and technical assistance.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            The impact of our Community Outreach program extends far beyond the immediate services provided to include measurable improvements in health outcomes, increased access to services, and strengthened community networks that support vulnerable populations. We maintain detailed records of our outreach activities and regularly evaluate our approaches to ensure that we are effectively reaching the populations most in need of our services. Our commitment to community-driven programming means that our outreach efforts are continuously adapted based on community feedback and changing needs, ensuring that our services remain relevant and effective in addressing the evolving challenges faced by the communities we serve.
          </p>
        </div>

        <div className="bg-purple-50 border border-purple-200 rounded-xl p-8">
          <h3 className="text-2xl font-semibold text-purple-800 mb-4">Program Highlights</h3>
          <ul className="space-y-3 text-purple-700">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Mobile health units providing direct medical services
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Targeted outreach to marginalized and vulnerable populations
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Crisis intervention and emergency response services
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Resource connection and advocacy support
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Community capacity building and leadership development
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              24/7 support and peer educator networks
            </li>
          </ul>
        </div>
      </div>
    </ProgramLayout>
  );
};

export default CommunityOutreachPage;