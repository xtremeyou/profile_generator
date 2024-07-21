const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(
  "What's your name? Nicknames are also acceptable :) ",
  (answer1) => {
    rl.question("What's an activity you like doing? ", (answer2) => {
      rl.question("What do you listen to while doing that? ", (answer3) => {
        rl.question(
          "Which meal is your favourite (eg: dinner, brunch, etc:) ",
          (answer4) => {
            rl.question(
              "What's your favourite thing to eat for that meal? ",
              (answer5) => {
                rl.question(
                  "Which sport is your absolute favourite? ",
                  (answer6) => {
                    rl.question(
                      "What is your superpower? In a few words, tell us what you are amazing at! ",
                      (answer7) => {
                        console.log(
                          `${answer1}, that's a pretty dope nick name. Apparently ${answer1} likes ${answer2}. I heard he also listens to ${answer3}, ${answer1} also likes ${answer4} the most, and his favourite meal is ${answer5}. For sports ${answer1} likes ${answer6} and his superpower is ${answer7}!    `
                        );
                        rl.close();
                      }
                    );
                  }
                );
              }
            );
          }
        );
      });
    });
  }
);
