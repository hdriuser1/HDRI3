import React from 'react';
import { Shield } from 'lucide-react';
import ProgramLayout from '../components/ProgramLayout';

const SubstanceAbuseInterventionPage: React.FC = () => {
  return (
    <ProgramLayout
      title="Substance Abuse Intervention"
      icon={Shield}
      gradient="from-teal-600 via-teal-700 to-teal-800"
    >
      <div className="prose prose-lg max-w-none">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Comprehensive Substance Abuse Prevention & Intervention</h2>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            HDRI's Substance Abuse Intervention program represents one of our most critical initiatives, addressing the growing concern of drug and alcohol abuse among youth and vulnerable populations in Kolkata and surrounding areas. Since our establishment in 1985, we have witnessed firsthand the devastating impact that substance abuse can have on individuals, families, and entire communities. Our comprehensive approach combines prevention education, early intervention, and ongoing support to create a robust defense against the cycle of addiction.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Our program specifically targets students and young adults, recognizing that early intervention is crucial in preventing the progression from experimentation to dependency. We work closely with educational institutions, community centers, and local organizations to deliver evidence-based prevention programs that educate young people about the risks associated with substance use. Our trained counselors and social workers conduct interactive workshops, seminars, and peer-to-peer education sessions that go beyond simple awareness campaigns to provide practical life skills and coping mechanisms.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            The intervention component of our program focuses on identifying at-risk individuals and providing immediate support before substance use escalates into addiction. Our team conducts regular outreach activities in schools, colleges, and community spaces, creating safe environments where young people can seek help without fear of judgment or stigma. We provide confidential counseling services, family therapy sessions, and referral services to specialized treatment facilities when necessary.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Understanding that substance abuse often stems from underlying social, economic, and psychological factors, our program takes a holistic approach to intervention. We address issues such as peer pressure, academic stress, family dysfunction, unemployment, and mental health challenges that may contribute to substance use. Our counselors work with individuals to develop personalized recovery plans that include skill-building activities, vocational training opportunities, and ongoing psychological support.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Family involvement is a cornerstone of our intervention strategy, as we recognize that addiction affects not just the individual but their entire support network. We provide family counseling services, support groups for parents and siblings, and educational resources to help families understand addiction as a medical condition rather than a moral failing. Our family-centered approach helps create supportive home environments that facilitate recovery and prevent relapse.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Our substance abuse intervention program also includes community-wide initiatives designed to create environments that discourage substance use and promote healthy lifestyle choices. We work with local authorities, business owners, and community leaders to implement policies and practices that reduce access to drugs and alcohol among minors. Additionally, we organize community events, sports programs, and cultural activities that provide positive alternatives to substance use.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            The success of our Substance Abuse Intervention program is measured not only by the number of individuals who avoid or overcome addiction but also by the strengthened communities and families that result from our comprehensive approach. Through continuous evaluation and adaptation of our methods, we ensure that our interventions remain effective and relevant to the evolving challenges faced by our community. Our commitment extends beyond immediate intervention to long-term support, helping individuals maintain their recovery and become advocates for substance abuse prevention in their own communities.
          </p>
        </div>

        <div className="bg-teal-50 border border-teal-200 rounded-xl p-8">
          <h3 className="text-2xl font-semibold text-teal-800 mb-4">Program Highlights</h3>
          <ul className="space-y-3 text-teal-700">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Prevention education programs in schools and colleges
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Early intervention and counseling services
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Family therapy and support groups
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Community outreach and awareness campaigns
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Peer-to-peer education and support networks
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Referral services to specialized treatment facilities
            </li>
          </ul>
        </div>
      </div>
    </ProgramLayout>
  );
};

export default SubstanceAbuseInterventionPage;