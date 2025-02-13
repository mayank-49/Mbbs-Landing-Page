import React from 'react'
import {
    GraduationCap,
    Globe2,
    Award,
    Users,
    Target,
    Building2,
    Wallet,
    BookOpenCheck,
    Stethoscope,
    GraduationCap as GraduationIcon,
    Languages,
    HeartPulse,
    Clock,
    Building,
  } from 'lucide-react';

const Benifits = () => {
  return (
    <div id='benifits' className="space-y-4 md:p-10 p-5 bg-gray-100 w-full">
        <div className='flex justify-center'>
            <h1 className='text-md font-semibold text-slate-400'>Benifits</h1>
        </div>
        <div className='flex justify-center p-2'>
            <h1 className='text-4xl md:text-5xl font-bold text-center text-green-500'>Why Study MBBS Abroad?</h1>
        </div>
      {/* Main Benefits */}
      <div className="bg-gray-100 py-16 w-full">
        <div className="w-full px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div data-aos="zoom-in" className="bg-white p-6 rounded-lg shadow-md w-full">
              <GraduationCap className="w-12 h-12 text-green-500 mb-4" />
              <h4 className="text-xl font-semibold mb-3">Global Recognition</h4>
              <p className="text-gray-600">Degrees recognized worldwide, including WHO and MCI approval</p>
            </div>
            <div data-aos="zoom-in" className="bg-white p-6 rounded-lg shadow-md">
              <Globe2 className="w-12 h-12 text-green-500 mb-4" />
              <h4 className="text-xl font-semibold mb-3">Cultural Exposure</h4>
              <p className="text-gray-600">Experience diverse healthcare systems and cultural perspectives</p>
            </div>
            <div data-aos="zoom-in" className="bg-white p-6 rounded-lg shadow-md">
              <Wallet className="w-12 h-12 text-green-500 mb-4" />
              <h4 className="text-xl font-semibold mb-3">Affordable Education</h4>
              <p className="text-gray-600">Cost-effective medical education without compromising quality</p>
            </div>
          </div>
        </div>
      </div>

      {/* Academic Benefits */}
      <div className=" py-16">
        <div className="px-4">
          <h3 className="text-2xl font-bold text-center mb-12 text-slate-600">Academic Excellence</h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <BookOpenCheck className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Modern Curriculum</h4>
              <p className="text-gray-600">Updated medical curriculum aligned with international standards</p>
            </div>
            <div className="text-center">
              <Stethoscope className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Clinical Experience</h4>
              <p className="text-gray-600">Extensive practical training in affiliated hospitals</p>
            </div>
            <div className="text-center">
              <GraduationIcon className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Research Opportunities</h4>
              <p className="text-gray-600">Access to advanced research facilities and projects</p>
            </div>
            <div className="text-center">
              <Languages className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h4 className="font-semibold mb-2">English Medium</h4>
              <p className="text-gray-600">Programs conducted in English for international students</p>
            </div>
          </div>
        </div>
      </div>

      {/* Career Benefits */}
      <div className="bg-gray-100 py-16">
        <div className="px-4">
          <h3 className="text-2xl font-bold text-center mb-12 text-slate-600">Career Advantages</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div data-aos="zoom-in" className="bg-white p-6 rounded-lg shadow-md">
              <HeartPulse className="w-12 h-12 text-green-500 mb-4" />
              <h4 className="text-xl font-semibold mb-3">Global Healthcare Exposure</h4>
              <p className="text-gray-600">Experience different healthcare systems and medical practices</p>
            </div>
            <div data-aos="zoom-in" className="bg-white p-6 rounded-lg shadow-md">
              <Globe2 className="w-12 h-12 text-green-500 mb-4" />
              <h4 className="text-xl font-semibold mb-3">International Network</h4>
              <p className="text-gray-600">Build connections with medical professionals worldwide</p>
            </div>
            <div data-aos="zoom-in" className="bg-white p-6 rounded-lg shadow-md">
              <Target className="w-12 h-12 text-green-500 mb-4" />
              <h4 className="text-xl font-semibold mb-3">Career Flexibility</h4>
              <p className="text-gray-600">Opportunities to practice medicine globally</p>
            </div>
          </div>
        </div>
      </div>

      {/* Lifestyle and Cultural Benefits */}
      <div className="py-16">
        <div className="px-4">
          <h3 className="text-2xl font-bold text-center mb-12 text-slate-600">Student Life & Cultural Benefits</h3>
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <Building className="w-8 h-8 text-green-500 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-2">Modern Campus Facilities</h4>
                  <p className="text-gray-600">State-of-the-art laboratories, libraries, and recreational facilities</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Users className="w-8 h-8 text-green-500 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-2">Diverse Student Community</h4>
                  <p className="text-gray-600">Interact with students from various cultural backgrounds</p>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <Clock className="w-8 h-8 text-green-500 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-2">Structured Learning Environment</h4>
                  <p className="text-gray-600">Well-organized academic schedule with balanced extracurricular activities</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Award className="w-8 h-8 text-green-500 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-2">Personal Growth</h4>
                  <p className="text-gray-600">Develop independence, adaptability, and cross-cultural communication skills</p>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <Globe2 className="w-8 h-8 text-green-500 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-2">Cultural Immersion</h4>
                  <p className="text-gray-600">Experience new cultures, traditions, and ways of life</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Building2 className="w-8 h-8 text-green-500 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-2">Safe Accommodation</h4>
                  <p className="text-gray-600">Comfortable and secure housing facilities for international students</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Benifits
