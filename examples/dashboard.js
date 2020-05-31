var testLayout = [
  {
    x: 0,
    y: 0,
    w: 8,
    h: 14,
    i: "Tank 1 Temperature",
    reading: "74.6",
    readingLabel: "Fahrenheit",
  },
  {
    x: 0,
    y: 14,
    w: 4,
    h: 5,
    i: "Current",
    reading: "4.5",
    readingLabel: "Amps",
  },
  {
    x: 4,
    y: 14,
    w: 4,
    h: 5,
    i: "Tank 1 Pressure",
    reading: "39.5",
    readingLabel: "PSI",
  },
  {
    x: 8,
    y: 14,
    w: 4,
    h: 5,
    i: "Spinner",
    reading: "1874.12",
    readingLabel: "RPMs",
  },
  {
    x: 8,
    y: 0,
    w: 4,
    h: 9,
    i: "Tank 1 to Tank 2 Flow",
    reading: "1.34",
    readingLabel: "GPM",
  },
  {
    x: 8,
    y: 9,
    w: 4,
    h: 5,
    i: "Tank 1 Level",
    reading: "39%",
    readingLabel: "Full",
  },
];

// var GridLayout = VueGridLayout.GridLayout;
// var GridItem = VueGridLayout.GridItem;

new Vue({
  el: "#app",
  // components: {
  //     "GridLayout": GridLayout,
  //     "GridItem": GridItem
  // },
  data: {
    layout: testLayout,
    draggable: true,
    resizable: true,
    responsive: true,
    index: 0,
  },
    /*
      mounted: function () {
          this.index = this.layout.length;
      },
      methods: {
          increaseWidth: function(item) {
              var width = document.getElementById("content").offsetWidth;
              width += 20;
              document.getElementById("content").style.width = width+"px";
          },
          decreaseWidth: function(item) {

              var width = document.getElementById("content").offsetWidth;
              width -= 20;
              document.getElementById("content").style.width = width+"px";
          },
          removeItem: function(item) {
              //console.log("### REMOVE " + item.i);
              this.layout.splice(this.layout.indexOf(item), 1);
          },
          addItem: function() {
              var self = this;
              //console.log("### LENGTH: " + this.layout.length);
              var item = {"x":0,"y":0,"w":2,"h":2,"i":this.index+"", whatever: "bbb"};
              this.index++;
              this.layout.push(item);
          }
      }
  
});

/*
function generateLayout() {
    return _.map(_.range(0, 25), function (item, i) {
        var y = Math.ceil(Math.random() * 4) + 1;
        return {
            x: _.random(0, 5) * 2 % 12,
            y: Math.floor(i / 6) * y,
            w: 2,
            h: y,
            i: i.toString(),
            static: Math.random() < 0.05
        };
    });
}*/
