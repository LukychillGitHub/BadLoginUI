document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("loginForm");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
  
    form.addEventListener("submit", (e) => {
      e.preventDefault(); // 🚫 Evita que recargue la página automáticamente
  
      const username = usernameInput.value.trim();
      const password = passwordInput.value.trim();
  
      if (!username || !password) {
        alert("⚠️ Por favor completá todos los campos.");
        return;
      }
  
      // 🔥 Acá simularías el envío del login
      console.log("Login enviado:");
      console.log("Usuario:", username);
      console.log("Contraseña:", password);
  
      // 🔥 Podrías mostrar un spinner, redirigir, etc.
      alert(`¡Welcome, ${username}, you're a patience master!
Hope you had a good time trying this bad UI
        
From: LukyDev
To: You ^^`);
      
      // Ejemplo de redireccionamiento falso (lo descomentás si querés):
      // window.location.href = "dashboard.html";
    });
  });
  