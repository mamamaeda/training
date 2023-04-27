import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { AwsRum, AwsRumConfig } from 'aws-rum-web';
import ErrorBoundary from './ErrorBoundary';

export let awsRum: AwsRum | null = null;

try {
  const config: AwsRumConfig = {
    sessionSampleRate: 1,
    guestRoleArn: "arn:aws:iam::280868744238:role/RUM-Monitor-ap-northeast-1-280868744238-7811441552861-Unauth",
    identityPoolId: "ap-northeast-1:a3681d6c-3b15-44ed-a305-f24d4f410f83",
    endpoint: "https://dataplane.rum.ap-northeast-1.amazonaws.com",
    telemetries: ["performance","errors","http"],
    allowCookies: true,
    enableXRay: false
  };

  const APPLICATION_ID: string = '6e184169-a630-4aa3-a869-a6c88c4da8f6';
  const APPLICATION_VERSION: string = '1.0.0';
  const APPLICATION_REGION: string = 'ap-northeast-1';

  awsRum = new AwsRum(
    APPLICATION_ID,
    APPLICATION_VERSION,
    APPLICATION_REGION,
    config
  );
} catch (error) {
  // Ignore errors thrown during CloudWatch RUM web client initialization
}

export default function App({ Component, pageProps }: AppProps) {
  return <ErrorBoundary>
           <Component {...pageProps} />
        </ErrorBoundary>
}
