class Publisher {
    constructor() {
      this.subscribers = [];
    }
  
    subscribe(fn) {
      this.subscribers.push(fn);
    }
  
    unsubscribe(fn) {
      this.subscribers = this.subscribers.filter((sub) => sub !== fn);
    }
  
    notifySubscribers(payload) {
      this.subscribers.forEach((sub) => sub(payload));
    }
  }
  
  const user = {
    name: "Martin",
    password: 1111111,
  };
  
  const userPublisher = new Publisher();
  
  const emailSubscriber = (user) => {
    console.log(`Email for ${user.name}`);
  };
  
  const socialMediaSubscriber = (user) => {
    console.log(`Message for ${user.name}`);
  };
  

  userPublisher.subscribe(emailSubscriber);
  userPublisher.subscribe(socialMediaSubscriber);
  
  
  userPublisher.notifySubscribers(user);
  