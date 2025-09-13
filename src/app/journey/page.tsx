import dynamic from 'next/dynamic';

const JourneyClient = dynamic(() => import('./JourneyClient'), { 
  ssr: false 
});

const Journey = () => {
  return <JourneyClient />;
};

export default Journey;