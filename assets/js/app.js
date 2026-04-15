const revealElements = document.querySelectorAll(".reveal");
const form = document.querySelector("#lead-form");
const feedback = document.querySelector("#form-feedback");
const submitButton = document.querySelector("#submit-button");
const phoneInput = document.querySelector("#phone");
const defaultButtonText = submitButton?.textContent || "Enviar";

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}

const applyPhoneMask = (value) => {
  const digits = value.replace(/\D/g, "").slice(0, 11);

  if (digits.length <= 10) {
    return digits
      .replace(/(\d{0,2})(\d{0,4})(\d{0,4})/, (_, ddd, first, last) => {
        const part1 = ddd ? `(${ddd}` : "";
        const part2 = ddd.length === 2 ? ") " : "";
        const part3 = first || "";
        const part4 = last ? `-${last}` : "";
        return `${part1}${part2}${part3}${part4}`;
      })
      .trim();
  }

  return digits
    .replace(/(\d{2})(\d{5})(\d{0,4})/, (_, ddd, first, last) => `(${ddd}) ${first}${last ? `-${last}` : ""}`)
    .trim();
};

phoneInput?.addEventListener("input", (event) => {
  event.target.value = applyPhoneMask(event.target.value);
});

const setFeedback = (message, type) => {
  if (!feedback) {
    return;
  }

  feedback.textContent = message;
  feedback.className = "form-feedback";

  if (type) {
    feedback.classList.add(type);
  }
};

const validateForm = () => {
  if (!form) {
    return "Formulario indisponivel no momento.";
  }

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const phone = form.phone.value.replace(/\D/g, "");
  const message = form.message.value.trim();
  const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!name || !email || !phone || !message) {
    return "Preencha todos os campos obrigatorios.";
  }

  if (!emailIsValid) {
    return "Informe um e-mail valido.";
  }

  if (phone.length < 10) {
    return "Informe um telefone valido com DDD.";
  }

  return "";
};

if (form && submitButton) {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const validationError = validateForm();
    if (validationError) {
      setFeedback(validationError, "is-error");
      return;
    }

    setFeedback("Enviando...", "");
    submitButton.disabled = true;
    submitButton.textContent = "Enviando...";

    const formData = new FormData(form);

    try {
      const response = await fetch("api/submit.php", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Nao foi possivel enviar o formulario.");
      }

      setFeedback(result.message, "is-success");
      form.reset();
    } catch (error) {
      setFeedback(error.message, "is-error");
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = defaultButtonText;
    }
  });
}
