// callBackHell

const makeBurger = (nextStep) => {
  getBeef(function (beef) {
    cookBeef(function (cookbeef) {
      getBuns(function (buns) {
        putBeefBetweenBuns(
          (buns,
          beef,
          function (burger) {
            nextStep(burger);
          })
        );
      });
    });
  });
};
makeBurger(function (burger) {
  Service(burger);
});
