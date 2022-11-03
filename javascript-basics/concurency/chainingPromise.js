const state = {
    stock: {
        coffeeBeans: 250,
        water: 1000,
    },
    isCoffeeMachineBusy: false,
}
 
const checkAvailability = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!state.isCoffeeMachineBusy) {
                resolve("Mesin kopi siap digunakan.");
            } else {
                reject("Maaf, mesin sedang sibuk.");
            }
        }, 1000);
    });
};
 
const checkStock = () => {
    return new Promise((resolve, reject) => {
        state.isCoffeeMachineBusy = true;
        setTimeout(() => {
            if (state.stock.coffeeBeans >= 16 && state.stock.water >= 250) {
                resolve("Stok cukup. Bisa membuat kopi.");
            } else {
                reject("Stok tidak cukup!");
            }
        }, 1500);
    });
};
 
const brewCoffee = () => {
    console.log("Membuatkan kopi Anda...")
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Kopi sudah siap!")
        }, 2000);
    });
};
 
function makeEspresso() {
    checkAvailability()
        .then((value) => {
            console.log(value);
            return checkStock();
        })
        .then((value) => {
            console.log(value)
            return brewCoffee();
        })
        .then(value => {
            console.log(value);
            state.isCoffeeMachineBusy = false;
        })
        .catch(rejectedReason => {
            console.log(rejectedReason);
            state.isCoffeeMachineBusy = false;
        });
}
 
// makeEspresso();



const boilWater = () => {
    return new Promise((resolve, reject) => {
      console.log('Memanaskan air...');
      setTimeout(() => {
        resolve('Air panas sudah siap!');
      }, 2000);
    });
  };
   
  const grindCoffeeBeans = () => {
    return new Promise((resolve, reject) => {
      console.log('Menggiling biji kopi...');
      setTimeout(() => {
        resolve('Bubuk kopi sudah siap!');
      }, 1000);
    });
  };

  function makeEspressoo() {
    checkAvailability()
      .then((value) => {
        console.log(value);
        return checkStock();
      })
      .then((value) => {
        console.log(value);
        const promises = [boilWater(), grindCoffeeBeans()];
   
        return Promise.all(promises);
      })
      .then((value) => {
        console.log(value)
        return brewCoffee();
      })
      .then((value) => {
        console.log(value);
        state.isCoffeeMachineBusy = false;
      })
      .catch((rejectedReason) => {
        console.log(rejectedReason);
        state.isCoffeeMachineBusy = false;
      });
  }
   
//   makeEspressoo();


//   asyncronus using synchronus style

async function makeEspressooo() {
    try {
        const promiseCheckAvaibility = await checkAvailability();
        console.log(promiseCheckAvaibility)
        const promiseCheckStock = await checkStock();
        console.log(promiseCheckStock)
        const promiseDariPromiseAll = await Promise.all([boilWater(), grindCoffeeBeans()]);
        console.log(promiseDariPromiseAll)
        const coffee = await brewCoffee();
        console.log(coffee);
    } catch (rejectedReason) {
        console.log(rejectedReason);
    }
}

makeEspressooo()