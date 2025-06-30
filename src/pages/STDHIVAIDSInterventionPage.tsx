import React from 'react';
import { Stethoscope } from 'lucide-react';
import ProgramLayout from '../components/ProgramLayout';

const STDHIVAIDSInterventionPage: React.FC = () => {
  return (
    <ProgramLayout
      title="STD/HIV/AIDS Intervention"
      icon={Stethoscope}
      gradient="from-blue-600 via-blue-700 to-blue-800"
    >
      <div className="prose prose-lg max-w-none">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Comprehensive Healthcare Services for STD/HIV/AIDS Prevention & Treatment</h2>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Since 1997, HDRI's STD/HIV/AIDS Intervention program has been at the forefront of combating sexually transmitted infections and HIV/AIDS in West Bengal, with a particular focus on serving migrant workers and other vulnerable populations. This program emerged from our recognition that migrant workers, who often live in challenging conditions with limited access to healthcare, face disproportionately high risks of contracting and spreading sexually transmitted infections. Our comprehensive approach combines prevention education, regular health screenings, immediate treatment services, and ongoing support to create a robust healthcare safety net for these underserved communities.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Our intervention program specifically targets migrant workers who come to Kolkata and surrounding areas seeking employment opportunities. These individuals often face multiple challenges including language barriers, social isolation, limited financial resources, and lack of awareness about available healthcare services. Our team of trained healthcare professionals, social workers, and peer educators work directly within migrant communities, establishing trust and providing culturally sensitive healthcare services that respect the diverse backgrounds of the populations we serve.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            The prevention component of our program focuses on comprehensive health education that goes beyond basic awareness to provide practical knowledge about risk reduction, safe practices, and the importance of regular health screenings. We conduct regular educational sessions in multiple languages, using culturally appropriate materials and methods to ensure that our messages are understood and retained. Our peer education model has proven particularly effective, as community members who have been trained by our staff serve as ongoing sources of information and support within their own communities.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Our treatment services include regular health screenings, diagnostic testing, and immediate treatment for sexually transmitted infections. We have established partnerships with local healthcare facilities and laboratories to ensure that our clients receive timely and accurate diagnostic services. For individuals diagnosed with HIV/AIDS, we provide comprehensive care coordination, including linkage to antiretroviral therapy, ongoing monitoring, and psychosocial support services. Our approach recognizes that effective HIV/AIDS treatment requires not just medical intervention but also addressing the social, economic, and psychological factors that can impact treatment adherence and overall health outcomes.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Understanding that stigma and discrimination remain significant barriers to accessing HIV/AIDS services, our program places strong emphasis on creating safe, non-judgmental environments where individuals can seek care without fear of discrimination. We provide confidential counseling services, support groups, and advocacy services to help individuals navigate the healthcare system and access the resources they need. Our staff receive ongoing training in cultural competency and anti-discrimination practices to ensure that all clients receive respectful, dignified care regardless of their background or health status.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            The program also includes a strong focus on partner notification and contact tracing, conducted in a sensitive and confidential manner to prevent further transmission while respecting individual privacy rights. We work with clients to identify and reach out to sexual partners who may have been exposed to infections, providing them with testing, counseling, and treatment services as needed. This approach helps break the chain of transmission while ensuring that all affected individuals receive appropriate care.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            Our STD/HIV/AIDS Intervention program has evolved over more than two decades to incorporate the latest evidence-based practices and respond to emerging challenges in the field. We maintain detailed program data and conduct regular evaluations to measure our impact and identify areas for improvement. The success of our program is reflected not only in the thousands of individuals who have received testing and treatment services but also in the reduced rates of HIV transmission in the communities we serve and the increased awareness and knowledge about HIV/AIDS prevention among vulnerable populations throughout the region.
          </p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-8">
          <h3 className="text-2xl font-semibold text-blue-800 mb-4">Program Highlights</h3>
          <ul className="space-y-3 text-blue-700">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Comprehensive healthcare services for migrant workers since 1997
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Regular health screenings and diagnostic testing
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Immediate treatment for sexually transmitted infections
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              HIV/AIDS care coordination and antiretroviral therapy linkage
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Multilingual health education and peer support programs
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Confidential counseling and psychosocial support services
            </li>
          </ul>
        </div>
      </div>
    </ProgramLayout>
  );
};

export default STDHIVAIDSInterventionPage;