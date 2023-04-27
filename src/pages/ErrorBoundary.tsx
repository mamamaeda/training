import React, { ErrorInfo } from "react"
import { awsRum } from "./_app";

class ErrorBoundary extends React.Component<{}, { hasError: boolean }> {
    constructor(props: {}) {
      super(props);
      this.state = {
        hasError: false,
      };
    }
    static getDerivedStateFromError(): { hasError: boolean } {
      console.log("getDerivedStatefromErrorがよばれました。");
      return { hasError: true };
    }
  
    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
      console.log(error);
      console.log(errorInfo);
      awsRum?.recordError(error);
    }
  
    render() {
      if (this.state.hasError) {
        return <div>エラーが発生しました</div>;
      }
      return <></>;
    }
  }
  
  export default ErrorBoundary;