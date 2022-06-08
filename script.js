const planArray = {
  basic: {
    monthly: 19.99,
    annually: 199.99,
  },
  professional: {
    monthly: 24.99,
    annually: 249.99,
  },
  master: {
    monthly: 39.99,
    annually: 399.99,
  },
}

const priceToggle = document.getElementById('switch')
const priceElements = document.querySelectorAll('span[data-plan]')

priceToggle.addEventListener('change', togglePrices)

function togglePrices() {
  priceElements.forEach(priceEl => {
    const plan = priceEl.dataset.plan
    if (this.checked) {
      priceEl.textContent = formatPrice(planArray[plan].monthly)
      this.value = 'monthly'
    } else {
      priceEl.textContent = formatPrice(planArray[plan].annually)
      this.value = 'annually'
    }
  })
}

function formatPrice(amount) {
  return '$' + `${amount.toFixed(2)}`
}
