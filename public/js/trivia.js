$(function(){
    let finalTriviaFactsArray = [];

    finalTriviaFactsArray = initialTriviaFacts.sort(() => Math.random() - 0.5);

    finalTriviaFactsArray.forEach(function (item, index) {
    if (index === 0) {
      let activeSide = `
      <div class="active side">
        <div class="ui card">
            <div class="image">
                <img src="../images/other/${item.image}">
            </div>
            <div class="content">
                <div class="header">${item.name}</div>
                <div class="description">
                    ${item.narration}
                </div>
            </div>
        </div>
      </div>`;
      $(activeSide).appendTo('#shape2');
    } else {
      let otherSides = `
        <div class="side">
          <div class="ui card">
            <div class="image">
                <img src="../images/other/${item.image}">
            </div>
            <div class="content">
                <a class="header">${item.name}</a>
                <div class="description">
                    ${item.narration}
                </div>
            </div>
            </div>
        </div>`;
      $(otherSides).appendTo('#shape2');
    }
  });

});

