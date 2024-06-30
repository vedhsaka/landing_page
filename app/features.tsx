// File: components/FeaturesSection.tsx (or wherever your FeaturesSection is located)

import React from 'react';
import { BentoGrid, BentoCard } from "../components/magicui/bentogrid";
import { 
  TestTubeIcon, 
  BrainCircuitIcon, 
  UsersIcon, 
  GaugeIcon, 
  PlayIcon, 
  GitBranchIcon, 
  SettingsIcon 
} from 'lucide-react';

const FeaturesSection: React.FC = () => {
  return (
    <div className="bg-black w-full min-h-screen py-16 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-white text-center mb-12">
          Our Features
        </h2>
        <BentoGrid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[18rem]">
          <BentoCard
            name="Test with built-in test cases"
            className="col-span-1 lg:col-span-3 row-span-1"
            background={<TestCaseAnimation />}
            Icon={TestTubeIcon}
            description="Evaluate your API with diverse voice samples, testing for hallucinations, accents, pauses, and more. Includes both human and synthetic voices."
          />
           <BentoCard
            name="Evaluate output with different LLMs"
            className="col-span-1"
            background={<BrainAnimation />}
            Icon={BrainCircuitIcon}
            description="Compare results across multiple language models."
          />
          <BentoCard
            name="Share with team"
            className="col-span-1"
            background={<ShareAnimation />}
            Icon={UsersIcon}
            description="Collaborate seamlessly with your team members."
          />
          <BentoCard
            name="Check latency"
            className="col-span-1"
            background={<LatencyAnimation />}
            Icon={GaugeIcon}
            description="Monitor and optimize your system's performance."
            href="#latency-check"
          />
          <BentoCard
            name="Run manually or sequentially"
            className="col-span-1"
            background={<SequenceAnimation />}
            Icon={PlayIcon}
            description="Flexible execution options for your workflows."
            href="#execution-options"
          />
          <BentoCard
            name="Run in CI/CD pipelines"
            className="col-span-1"
            background={<PipelineAnimation />}
            Icon={GitBranchIcon}
            description="Seamlessly integrate with your CI/CD processes."
            href="#cicd-integration"
          />
          <BentoCard
            name="Easy integration and configuration"
            className="col-span-1"
            background={<ConfigAnimation />}
            Icon={SettingsIcon}
            description="Quick setup with intuitive configuration options."
            href="#easy-setup"
          />
        </BentoGrid>
      </div>
    </div>
  );
};


// Animation components
const TestCaseAnimation = () => (
  <div className="absolute inset-0 flex items-center justify-center overflow-hidden opacity-50">
  </div>
);

const BrainAnimation = () => (
  <div className="absolute inset-0 flex items-center justify-center overflow-hidden opacity-50">
  </div>
);

const ShareAnimation = () => (
  <div className="absolute inset-0 flex items-center justify-center overflow-hidden opacity-50">
  </div>
);

const LatencyAnimation = () => (
  <div className="absolute inset-0 flex items-center justify-center overflow-hidden opacity-50">
  </div>
);

const SequenceAnimation = () => (
  <div className="absolute inset-0 flex items-center justify-center overflow-hidden opacity-50">
  </div>
);

const PipelineAnimation = () => (
  <div className="absolute inset-0 flex items-center justify-center overflow-hidden opacity-50">
  </div>
);

const ConfigAnimation = () => (
  <div className="absolute inset-0 flex items-center justify-center overflow-hidden opacity-50">
  </div>
);


export default FeaturesSection;