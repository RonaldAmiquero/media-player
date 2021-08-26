interface Observer {
  update: (value: any) => void;
}

interface Subject {
  subscribe: (observer: Observer) => void;
  unsubscribe: (observer: Observer) => void;
}

class BitcoinPricer implements Subject {
  observers: Observer[] = [];
  constructor() {
    const elemtInput: HTMLInputElement = document.querySelector('#value');
    elemtInput.addEventListener('input', () => {
      this.notify(elemtInput.value);
    });
  }

  subscribe(observer: Observer) {
    this.observers.push(observer);
  }
  unsubscribe(observer: Observer) {
    const index = this.observers.findIndex((obs) => {
      return obs == observer;
    });
    this.observers.splice(index, 1);
  }
  notify(data: any) {
    this.observers.forEach((observer) => observer.update(data));
  }
}

class PriceDisplay implements Observer {
  elPrice: HTMLElement;
  constructor() {
    this.elPrice = document.querySelector('#price');
  }
  update(data: any) {
    this.elPrice.innerText = data;
  }
}

const value = new BitcoinPricer();
const display = new PriceDisplay();

value.subscribe(display);

setTimeout(() => {
  value.unsubscribe(display);
}, 45000);
