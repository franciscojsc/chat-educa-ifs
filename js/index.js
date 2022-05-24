(function () {
  window.onload = function () {
    new BlipChat()
      .withAppKey(
        'cm91dGVyZWR1Y2FpZnM6NDQ3MDI1YjAtZjIzOS00NTU3LWI1MWMtYWY0YmE2NTgwNjNk'
      )
      .withTarget('chat')
      .build();
  };
})();
