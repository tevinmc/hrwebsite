// (1) Make sure smtp.js exports Email. At the end of smtp.js add:
// export default Email;

import { useState, useCallback } from 'react';
import Email from '../lib/smtp';  // adjust the path as needed

/**
 * React hook for sending email via SmtpJS.com
 *
 * @returns {{
 *   sendEmail: (options: {
 *     SecureToken: string,
 *     To: string,
 *     From: string,
 *     Subject: string,
 *     Body: string,
 *     [key: string]: any
 *   }) => Promise<any>,
 *   loading: boolean,
 *   error: any,
 *   response: any
 * }}
 */
export function useEmail() {
  const [loading, setLoading] = useState(false);
  const [error,   setError]   = useState(null);
  const [response, setResponse] = useState(null);

  const sendEmail = useCallback(async (options) => {
    setLoading(true);
    setError(null);
    setResponse(null);

    try {
      // options should include at least:
      // { SecureToken, To, From, Subject, Body }
      const res = await Email.send(options);
      setResponse(res);
      return res;
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  return { sendEmail, loading, error, response };
}
