const stock = {
    coffeeBeans: 250,
    water: 1000,
}
 
const checkStock = () => {
    return new Promise((resolve, reject) => {
        if (stock.coffeeBeans >= 16 && stock.water >= 250) {
            resolve("Stok cukup. Bisa membuat kopi");
        } else {
            reject("Stok tidak cukup");
        }
    });
};
 
const handleSuccess = resolvedValue => {
    console.log(resolvedValue);
}
 
const handleFailure = rejectionReason => {
    console.log(rejectionReason);
}
//  default handler, gabaik karena gamemenuhi sifat separation of concerns-> handler sukses dan gagal digabung jadi 1, solusinya pakek then
// checkStock().then(handleSuccess, handleFailure);


// not effective

// checkStock()
//   .then(handleSuccess)
//   .then(null, handleFailure);

// effective
checkStock()
    .then(handleSuccess)
    .catch(handleFailure)