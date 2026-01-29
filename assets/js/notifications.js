// Ajouter une notification citoyen
function notifyCitoyen(userEmail, message) {
    let data = JSON.parse(localStorage.getItem('notifications_citoyen')) || {};
    if (!data[userEmail]) data[userEmail] = [];
    data[userEmail].push({
      id: Date.now(),
      message,
      lu: false,
      date: new Date().toLocaleString()
    });
    localStorage.setItem('notifications_citoyen', JSON.stringify(data));
  }
  
  // Ajouter une notification admin
  function notifyAdmin(message) {
    let data = JSON.parse(localStorage.getItem('notifications_admin')) || [];
    data.push({
      id: Date.now(),
      message,
      lu: false,
      date: new Date().toLocaleString()
    });
    localStorage.setItem('notifications_admin', JSON.stringify(data));
  }
  