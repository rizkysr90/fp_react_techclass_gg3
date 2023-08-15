import { useEffect, useState } from "react";

export function useCommentList(is_success, video_id, is_comment) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (is_success) {
      // Fetch comment list
      fetching();
    } else if (!is_success && !is_comment) {
      // load data for the first time
      fetching();
    }
    async function fetching() {
      try {
        setLoading(true);
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/api/v1/comments/${video_id}`
        ).then((res) => res.json());
        setData(response);
      } catch (error) {
        setLoading(false);
        setError(error);
      } finally {
        setLoading(false);
      }
    }
  }, [is_success, video_id, is_comment]);
  return { data, error, loading };
}
