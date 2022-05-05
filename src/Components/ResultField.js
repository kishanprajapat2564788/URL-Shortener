import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { CopyToClipboard } from "react-copy-to-clipboard";

const ResultField = ({ inputValues }) => {
  const [result, setResult] = useState("");
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  console.log({ inputValues });

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await axios(
        `https://api.shrtco.de/v2/shorten?url=${inputValues}`
      );
      setResult(res.data.result.full_short_link);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (inputValues.length) {
      fetchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValues]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopied(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [copied]);

  if (loading) {
    return <p className="loading">Loading...</p>;
  }
  if (error) {
    return <p className="loading">Something went wrong :(</p>;
  }

  return (
    <>
      {result && (
        <div className="result-field">
          <p>{result}</p>
          <CopyToClipboard
            text={result}
            onCopy={() => {
              setCopied(true);
            }}
          >
            <button className={copied ? "result-copied" : "resultBtn"}>
              <i class="fa-solid fa-copy"></i>
              <span className="copy-field">Copy</span>
            </button>
          </CopyToClipboard>
        </div>
      )}
    </>
  );
};

export default ResultField;
