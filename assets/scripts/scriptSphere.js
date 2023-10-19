// Text sphere stuff
const myTags = [
    "HTML",
    "CSS",
    "JavaScript",
    "MongoDB",
    "Express.js",
    "React.js",
    "Node.js",
    "MySQL",
    "Sequelize",
    "Jquery",
    "ES6",
    "Python",
    "Flask",
    "SQLalchemy",
    "Git",
    "GitHub",
    "MataGrub",
    "C++",
    "Developer"
  ];
  
  var tagCloud = TagCloud(".content", myTags, {
    // radius in px
    radius: 200,
  
    // animation speed
    // slow, normal, fast
    maxSpeed: "fast",
    initSpeed: "normal",
  
    // 0 = top
    // 90 = left
    // 135 = right-bottom
    direction: 135,
  
    // interact with cursor move on mouse out
    keep: true,
  });