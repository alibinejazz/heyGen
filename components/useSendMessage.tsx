import { useState } from "react";

interface ApiResponse {
  audio: string;
  text: string;
}

const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [response, setResponse] = useState<ApiResponse | null>(null);

  const sendMessage = async (userQuery: string): Promise<ApiResponse | null> => {
    setLoading(true);
    setError(null);
    setResponse(null);

    try {
      const res = await fetch("http://65.0.229.53:5005/send-message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userQuery }),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data: ApiResponse = await res.json();
      setResponse(data);
      console.log("Response Text:", data.text);
      return data;
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
        console.error("Error:", err.message);
      } else {
        console.error("Unknown error occurred.");
      }
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { sendMessage, loading, error, response };
};

export default useSendMessage;
