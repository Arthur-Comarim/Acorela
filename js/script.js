// ACORELA Landing Page - JavaScript

// Smooth scroll para links de âncora
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Manipuladores de clique em botões
document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', function (e) {
    // Efeito Ripple
    const ripple = document.createElement('span');
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');

    this.appendChild(ripple);

    setTimeout(() => ripple.remove(), 600);

    // Mapeamento mantido com a nomenclatura exata dos botões
    if (this.textContent.includes('QUERO FAZER PARTE')) {
      showAlert('Obrigado pelo interesse! Redirecionando para o nosso atendimento...');
      
      setTimeout(() => {
        window.location.href = 'https://wa.me/5564992588801';
      }, 1500);

    } else if (this.textContent.includes('QUERO ENTRAR NA COMUNIDADE')) {
      showAlert('Bem-vindo à comunidade ACORELA! Redirecionando...');
      
      setTimeout(() => {
        window.location.href = 'https://wa.me/5564992588801';
      }, 1500);
    }
  });
});

// Links de contato no Footer e Sessões
document.querySelectorAll('.contact-icon').forEach(icon => {
  icon.addEventListener('click', function () {
    const type = this.getAttribute('data-contact');
    
    switch(type) {
      case 'email':
        window.location.href = 'mailto:contato@acorela.com.br';
        break;
      case 'whatsapp':
        window.location.href = 'https://wa.me/5564992588801';
        break;
      case 'instagram':
        window.location.href = 'https://www.instagram.com/acorela.com.br/';
        break;
    }
  });
});

// Função de Alerta Customizado
function showAlert(message) {
  const alertDiv = document.createElement('div');
  alertDiv.className = 'alert';
  alertDiv.textContent = message;
  alertDiv.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background-color: #f28b24;
    color: white;
    padding: 1rem 1.5rem;
    border-radius: 0.5rem;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    z-index: 1000;
    animation: slideIn 0.3s ease;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
  `;

  document.body.appendChild(alertDiv);

  setTimeout(() => {
    alertDiv.style.animation = 'slideOut 0.3s ease';
    setTimeout(() => alertDiv.remove(), 300);
  }, 3000);
}

// Animações ao rolar a página
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
  section.style.opacity = '0';
  observer.observe(section);
});

// Injeção dinâmica de CSS para animações
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideIn {
    from {
      transform: translateX(400px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes slideOut {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(400px);
      opacity: 0;
    }
  }

  button .ripple {
    position: absolute;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.6);
    transform: scale(0);
    animation: ripple-animation 0.6s ease-out;
    pointer-events: none;
  }

  @keyframes ripple-animation {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

console.log('ACORELA Landing Page - JavaScript carregado com sucesso!');