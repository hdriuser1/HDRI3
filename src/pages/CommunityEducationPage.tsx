import React from 'react';
import { GraduationCap } from 'lucide-react';
import ProgramLayout from '../components/ProgramLayout';

const CommunityEducationPage: React.FC = () => {
  return (
    <ProgramLayout
      title="Community Education"
      icon={GraduationCap}
      gradient="from-orange-600 via-orange-700 to-orange-800"
    >
      <div className="prose prose-lg max-w-none">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Empowering Communities Through Health Education & Awareness</h2>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            HDRI's Community Education program serves as the foundation of our preventive health approach, recognizing that informed communities are empowered communities capable of making healthier choices and supporting their most vulnerable members. Our comprehensive educational initiatives focus on health awareness, prevention strategies, and community empowerment, reaching thousands of individuals across diverse populations in Kolkata and surrounding areas. Through culturally sensitive and scientifically accurate educational programming, we work to build community capacity for addressing health challenges before they become crises, ultimately creating stronger, more resilient communities.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Our health awareness campaigns address a wide range of topics critical to community well-being, including substance abuse prevention, sexual and reproductive health, mental health awareness, infectious disease prevention, and general health promotion. We develop educational materials and programs that are tailored to the specific needs, cultural contexts, and literacy levels of the communities we serve. Our approach goes beyond simple information dissemination to include interactive workshops, peer-to-peer education models, and community-based participatory learning that encourages active engagement and knowledge retention.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Prevention education forms a core component of our community education efforts, with programs designed to help individuals and families recognize risk factors, understand prevention strategies, and access appropriate resources before problems escalate. Our prevention curricula cover topics such as early warning signs of substance abuse, strategies for maintaining mental health, practices for preventing sexually transmitted infections, and approaches for creating supportive family and community environments. We work closely with schools, community centers, religious organizations, and local leaders to ensure that prevention messages reach all segments of the community.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Community empowerment is central to our educational philosophy, as we believe that sustainable health improvements occur when communities have the knowledge, skills, and resources to address their own health challenges. Our empowerment-focused programs include leadership development training for community members, capacity building workshops for local organizations, and advocacy training that helps community members become effective voices for health policy change. We support the development of community health committees and peer educator networks that can continue health education efforts long after our formal programs conclude.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Our educational programs utilize diverse delivery methods to ensure accessibility and engagement across different learning styles and preferences. We conduct face-to-face workshops and seminars, develop print materials in multiple languages, create audio-visual resources for communities with limited literacy, and utilize digital platforms to reach younger demographics. Our peer education model has proven particularly effective, as community members who receive training from our professional staff become ongoing sources of health information and support within their own social networks.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Special attention is given to reaching marginalized and vulnerable populations who may face barriers to accessing traditional health education services. We conduct targeted outreach to migrant worker communities, women's groups, youth organizations, and other populations that may be at higher risk for health problems or have limited access to healthcare services. Our culturally competent approach ensures that educational messages are relevant, respectful, and actionable for all community members, regardless of their background or circumstances.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            The impact of our Community Education program extends far beyond individual knowledge gains to include measurable improvements in community health outcomes, increased utilization of preventive health services, and strengthened social networks that support healthy behaviors. We continuously evaluate our educational programs through pre- and post-training assessments, follow-up surveys, and community feedback sessions to ensure that our approaches remain effective and responsive to evolving community needs. Our commitment to evidence-based education and continuous improvement ensures that our community education efforts contribute to lasting positive change in the health and well-being of the communities we serve.
          </p>
        </div>

        <div className="bg-orange-50 border border-orange-200 rounded-xl p-8">
          <h3 className="text-2xl font-semibold text-orange-800 mb-4">Program Highlights</h3>
          <ul className="space-y-3 text-orange-700">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Comprehensive health awareness campaigns
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Interactive workshops and community seminars
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Peer-to-peer education and support networks
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Leadership development and capacity building training
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Culturally sensitive educational materials in multiple languages
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Targeted outreach to marginalized and vulnerable populations
            </li>
          </ul>
        </div>
      </div>
    </ProgramLayout>
  );
};

export default CommunityEducationPage;