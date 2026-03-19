import dynamic from 'next/dynamic';

// Keep server component. Delegate all interactivity to the client dashboard.
const IntelDashboard = dynamic(() => import('@/components/IntelDashboard'), {
  ssr: false,
});

export default function Page() {
  return <IntelDashboard />;
}
