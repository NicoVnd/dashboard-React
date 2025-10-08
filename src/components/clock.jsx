import React, { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(new Date()); // état local : l’heure actuelle

  // useEffect = exécute une action après le rendu du composant
  useEffect(() => {
    // Met à jour l’heure toutes les secondes
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Nettoyage : quand le composant est démonté
    return () => clearInterval(timer);
  }, []); // [] = exécuter une seule fois au montage du composant

  return (
    <div className="bg-gray-100 rounded-2xl p-4 shadow text-center">
      <p className="text-2xl font-mono">{time.toLocaleTimeString()}</p>
      <p className="text-sm text-gray-500">Heure locale</p>
      <p className="text-xl font-mono pt-2"> {time.toLocaleDateString()}</p>
      <p className="text-sm text-gray-500">Date locale</p>
    </div>
  );
}

export default Clock;
