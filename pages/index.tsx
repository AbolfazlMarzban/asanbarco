import Loading from "@/components/loading";
import { useState, useLayoutEffect } from "react";
import Login from "@/components/login";
import "tw-elements-react/dist/css/tw-elements-react.min.css";


export default function Home() {
  const [loading, setLoading] = useState(true);

  useLayoutEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  if (loading) {
    return <Loading />;
  } else {
    return (
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24`}
      >
        <Login></Login>
  
      </main>
    );
  }
}
