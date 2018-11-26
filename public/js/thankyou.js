$(function(){
    let finalThankYouArray = [];

  finalThankYouArray = initialThankYouArray.sort(() => Math.random() - 0.5);

  finalThankYouArray.forEach(function (item, index) {
    if (index === 0) {
      let activeSide = `
      <div class="active side">
        <div class="ui card">
            <div class="image">
                <img src="../images/thankyou/${item.image}">
            </div>
            <div class="content">
                <div class="header">
                <a href="https://www.eccentrictoad.com" target="_blank">${item.name}</a>
                </div>
                <div class="description">
                    ${item.narration}
                </div>
            </div>
        </div>
      </div>`;
      $(activeSide).appendTo('#shape1');
    } else {
      let otherSides = `
        <div class="side">
          <div class="ui card">
            <div class="image">
                <img src="../images/thankyou/${item.image}">
            </div>
            <div class="content">
                <a class="header" href="https://www.eccentrictoad.com" target="_blank">${item.name}</a>
                <div class="description">
                    ${item.narration}
                </div>
            </div>
            </div>
        </div>`;
      $(otherSides).appendTo('#shape1');
    }
  });

});

