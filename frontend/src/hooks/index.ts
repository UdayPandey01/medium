import { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";

export interface Blog {
  title: string;
  content: string;
  id: string;
  author: {
    name: string;
  };
}

export const useBlog = ({ id }: { id: string }) => {
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState<Blog | undefined>();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true; 
    setLoading(true);

    axios
      .get(`${BACKEND_URL}/api/v1/blog/blog/${id}`, {
        headers: {
          Authorization: localStorage.getItem("token") || "",
        },
      })
      .then((response) => {
        if (isMounted) {
          setBlog(response.data.post);
          setLoading(false);
        }
      })
      .catch((error) => {
        if (isMounted) {
          setError(error.response?.data?.message || "An error occurred");
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [id]);

  return {
    loading,
    blog,
    error,
  };
};

export const useBlogs = () => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    axios
      .get(`${BACKEND_URL}/api/v1/blog/bulk`, {
        headers: {
          Authorization: localStorage.getItem("token") || "",
        },
      })
      .then((response) => {
        if (isMounted) {
          setBlogs(response.data.post);
          setLoading(false);
        }
      })
      .catch((error) => {
        if (isMounted) {
          setError(error.response?.data?.message || "An error occurred");
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return {
    loading,
    blogs,
    error,
  };
};
