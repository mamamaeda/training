import React, { ErrorInfo } from "react"
import { awsRum } from "./_app";

type ErrorBoundaryProps = {
    children?: React.ReactNode;
  };
class ErrorBoundary extends React.Component<ErrorBoundaryProps, { hasError: boolean }> {
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
      awsRum?.recordError(new Error("This is test error message."));
    }
  
    render() {
      if (this.state.hasError) {
        return <div>エラーが発生しました</div>;
      }
      return <>{this.props.children}</>;
    }
  }
  
  export default ErrorBoundary;