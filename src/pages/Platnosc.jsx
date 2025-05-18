import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import paymentConfig from '../config-platnosc.json';

const Platnosc = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Natychmiastowe przekierowanie do linku z konfiguracji
    window.location.href = paymentConfig.paymentUrl;
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <p className="text-lg">Przekierowywanie do strony płatności...</p>
    </div>
  );
};

export default Platnosc; 