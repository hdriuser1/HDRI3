import React from 'react';
import { Users } from 'lucide-react';
import ProgramLayout from '../components/ProgramLayout';

const WomensHealthPage: React.FC = () => {
  return (
    <ProgramLayout
      title="Women's Health"
      icon={Users}
      gradient="from-pink-600 via-pink-700 to-pink-800"
    >
      <div className="prose prose-lg max-w-none">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Specialized Healthcare Services for Women's Health & Empowerment</h2>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            HDRI's Women's Health program addresses the unique healthcare needs and challenges faced by women in our communities, recognizing that women's health extends far beyond reproductive health to encompass physical, mental, social, and economic well-being. Our comprehensive approach acknowledges the multiple roles that women play in their families and communities, as well as the specific barriers they may face in accessing healthcare services. Through culturally sensitive programming and gender-responsive service delivery, we work to ensure that women of all ages and backgrounds have access to the information, resources, and support they need to achieve optimal health and well-being.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Reproductive health education forms a cornerstone of our women's health programming, providing comprehensive information about family planning, maternal health, pregnancy care, and reproductive rights. Our educational sessions cover topics such as contraceptive options, preconception health, prenatal care, safe delivery practices, and postpartum care. We work to dispel myths and misconceptions about reproductive health while providing accurate, evidence-based information that enables women to make informed decisions about their reproductive lives. Our approach is respectful of diverse cultural and religious beliefs while ensuring that all women have access to medically accurate information.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Our program places special emphasis on addressing the health needs of women who may face additional barriers to accessing healthcare services, including women from low-income families, migrant women, women with disabilities, and women experiencing domestic violence. We provide specialized support services that address the intersection of gender, poverty, and health, helping women navigate complex healthcare systems and access the services they need. Our staff receive specialized training in trauma-informed care and cultural competency to ensure that all women receive respectful, dignified care regardless of their circumstances.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Mental health support is an integral component of our women's health services, recognizing the high prevalence of depression, anxiety, and other mental health conditions among women, particularly those facing multiple stressors such as poverty, domestic violence, or social isolation. We provide individual counseling, support groups, and mental health education specifically designed to address women's mental health needs. Our approach recognizes the unique ways that mental health conditions may manifest in women and the importance of addressing both individual and systemic factors that contribute to women's mental health challenges.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Health education and empowerment activities help women develop the knowledge and skills they need to advocate for their own health and the health of their families. We conduct workshops on topics such as nutrition, hygiene, disease prevention, and health advocacy skills. Our empowerment-focused programming includes leadership development opportunities, income-generating activities, and advocacy training that helps women become effective voices for health policy change in their communities. We recognize that women's health is closely linked to their social and economic status, and our programming addresses these broader determinants of health.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Our women's health program also includes specialized services for women experiencing gender-based violence, recognizing the significant impact that violence has on women's physical and mental health. We provide confidential counseling services, safety planning, legal advocacy, and referrals to specialized services for women experiencing domestic violence, sexual assault, or other forms of gender-based violence. Our staff receive ongoing training in trauma-informed care and work closely with law enforcement, legal services, and other community partners to ensure that women receive comprehensive support.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            The success of our Women's Health program is measured not only by improvements in individual health outcomes but also by increased women's participation in healthcare decision-making, improved access to healthcare services, and strengthened women's leadership in health advocacy efforts. We maintain detailed program data and conduct regular evaluations to assess our impact and identify areas for improvement. Our commitment to women's health extends beyond service delivery to include advocacy for policies and practices that promote gender equity in healthcare and address the social determinants of women's health. Through our comprehensive approach, we work to create a future where all women have the opportunity to achieve their full health potential.
          </p>
        </div>

        <div className="bg-pink-50 border border-pink-200 rounded-xl p-8">
          <h3 className="text-2xl font-semibold text-pink-800 mb-4">Program Highlights</h3>
          <ul className="space-y-3 text-pink-700">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-pink-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Comprehensive reproductive health education and services
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-pink-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Maternal health and family planning support
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-pink-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Mental health counseling and support groups
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-pink-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Women's empowerment and leadership development
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-pink-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Gender-based violence support and advocacy services
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-pink-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Health education and advocacy training programs
            </li>
          </ul>
        </div>
      </div>
    </ProgramLayout>
  );
};

export default WomensHealthPage;