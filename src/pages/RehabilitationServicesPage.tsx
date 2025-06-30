import React from 'react';
import { UserCheck } from 'lucide-react';
import ProgramLayout from '../components/ProgramLayout';

const RehabilitationServicesPage: React.FC = () => {
  return (
    <ProgramLayout
      title="Rehabilitation Services"
      icon={UserCheck}
      gradient="from-green-600 via-green-700 to-green-800"
    >
      <div className="prose prose-lg max-w-none">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">IRCA - Integrated Rehabilitation Centre for Addicts</h2>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            The Integrated Rehabilitation Centre for Addicts (IRCA) represents HDRI's flagship rehabilitation program, offering comprehensive de-addiction and mental health services to individuals struggling with substance abuse and related psychological challenges. Established as a response to the growing need for specialized addiction treatment services in Kolkata, IRCA provides a holistic approach to recovery that addresses not only the physical aspects of addiction but also the psychological, social, and spiritual dimensions of healing. Our center serves as a beacon of hope for individuals and families affected by addiction, offering evidence-based treatment modalities in a supportive, non-judgmental environment.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            IRCA's treatment philosophy is grounded in the understanding that addiction is a complex medical condition that requires comprehensive, individualized care. Our multidisciplinary team includes addiction specialists, psychiatrists, psychologists, social workers, and peer counselors who work collaboratively to develop personalized treatment plans for each client. We recognize that no two individuals experience addiction in the same way, and therefore, our treatment approaches are tailored to address the unique needs, circumstances, and goals of each person who enters our program.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            The de-addiction component of our program includes medically supervised detoxification services for individuals who require assistance managing withdrawal symptoms safely. Our medical team provides 24-hour monitoring and support during the detoxification process, using evidence-based protocols to minimize discomfort and reduce the risk of complications. Following detoxification, clients participate in intensive therapeutic programming that includes individual counseling, group therapy, family therapy, and specialized treatment modalities such as cognitive-behavioral therapy, motivational interviewing, and trauma-informed care approaches.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Mental health services at IRCA address the high prevalence of co-occurring mental health disorders among individuals with substance use disorders. Our psychiatric team provides comprehensive mental health assessments, medication management, and ongoing psychiatric care for conditions such as depression, anxiety, bipolar disorder, and post-traumatic stress disorder. We understand that successful addiction recovery often requires simultaneous treatment of underlying mental health conditions, and our integrated approach ensures that clients receive coordinated care for all aspects of their health and well-being.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            The rehabilitation process at IRCA extends beyond clinical treatment to include life skills training, vocational rehabilitation, and social reintegration support. We provide educational workshops on topics such as financial management, job search skills, healthy relationship building, and stress management. Our vocational rehabilitation program helps clients identify their strengths and interests, develop job-ready skills, and connect with employment opportunities that support their recovery goals. We maintain partnerships with local employers who are committed to providing second chances to individuals in recovery.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Family involvement is a crucial component of our rehabilitation services, as we recognize that addiction affects entire family systems and that family support is essential for long-term recovery success. We offer family education programs, family therapy sessions, and support groups for family members who have been impacted by their loved one's addiction. Our family services help repair damaged relationships, improve communication patterns, and create supportive home environments that facilitate sustained recovery.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            IRCA's commitment to long-term recovery extends beyond the completion of formal treatment through our comprehensive aftercare and relapse prevention services. We provide ongoing counseling, support groups, and case management services to help individuals maintain their recovery and navigate the challenges of returning to their communities. Our alumni program connects graduates of our program with ongoing peer support and provides opportunities for them to give back to others who are beginning their recovery journey. Through continuous follow-up and support, we help ensure that the progress made during treatment translates into lasting recovery and improved quality of life.
          </p>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-xl p-8">
          <h3 className="text-2xl font-semibold text-green-800 mb-4">Program Highlights</h3>
          <ul className="space-y-3 text-green-700">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Medically supervised detoxification services
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Individual and group therapy sessions
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Integrated mental health and psychiatric care
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Life skills training and vocational rehabilitation
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Family therapy and support services
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Comprehensive aftercare and relapse prevention programs
            </li>
          </ul>
        </div>
      </div>
    </ProgramLayout>
  );
};

export default RehabilitationServicesPage;