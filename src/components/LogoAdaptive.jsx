import { useEffect, useState } from 'react';

export default function LogoAdaptive({ className = "h-16 w-auto" }) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Detecta a preferência inicial
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDark(mediaQuery.matches);

    // Escuta mudanças na preferência
    const handleChange = (e) => setIsDark(e.matches);
    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <img 
      src={isDark ? "/novalogormacademy-fundoescuro.png" : "/logormacademy-estiloprivacy.png"}
      alt="RM Academy" 
      className={className}
    />
  );
}