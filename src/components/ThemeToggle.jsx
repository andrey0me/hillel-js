import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.body.className = dark ? 'dark' : 'light';
  }, [dark]);

  return (
    <button className="btn btn-outline-light ms-auto" onClick={() => setDark(!dark)}>
      {dark ? 'Світла тема' : 'Темна тема'}
    </button>
  );
}
