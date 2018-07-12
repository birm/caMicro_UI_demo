// for use without database
// SEED
var slide1 = [{
  id: "cmu1"
  name: "TEST1",
  location: "/data_dzi/CMU-1-Small-Region/CMU-1-Small-Region.dzi",
  mpp: 0.499,
  checksum: "NA"
}]

var slide2 = [{
  id: "duomo"
  name: "TEST2",
  location: "/data_dzi/duomo/duomo.dzi",
  mpp: 0.499,
  checksum: "NA"
}];

var mt1 = [{
  id: "Square"
  slide: "cmu1",
  type: "human",
  name: "cmutest"
}]
var mt2 = [{
  id: "Triangle"
  slide: "duomo",
  type: "human",
  name: "duzomotest"
}]

var data1 = []
for (var i=0; i<100; i++){
  data1.push([Math.floor(Math.random()*100), Math.floor(Math.random()*100),Math.floor(Math.random()*1000)])
}

var data2 = []
for (var i=0; i<100; i++){
  data2.push([Math.floor(Math.random()*100), Math.floor(Math.random()*100),Math.floor(Math.random()*1000)])
}

var hm1 = [{
  slide: "cmu1",
  name: "cmu1heatmap",
  width: 100,
  height: 100,
  key: "count",
  values: data1
}]
var hm2 = [{
  slide: "duzomo",
  name: "duzomoheatmap",
  width: 100,
  height: 100,
  key: "count",
  values: data2
}]

var mark1 = [{
  properties: {marktype: "Square"},
  type: "Feature",
  geometry: [
    {
      type: "Polygon",
      coordinates: [[0.1, 0.1],[0.3, 0.1],[0.3, 0.3],[0.1, 0.3]]
    }
  ]
}]
var mark2 = [{
  properties: {marktype: "Triangle"},
  type: "Feature",
  geometry: [
    {
      type: "Polygon",
      coordinates: [[0.25,0.5], [0.75, 0.5], [0.5, 0.25]]
    }
  ]
}
]

// data

class Store{
  constructor(config){
    this.config = config;
  }
  setId(id){
    this.slideId = id;
  }

  getSlide(){
    if (this.slideId == "duomo"){
      return slide2;
    } else {
      return slide1;
    }
  }

  getMarktypes(){
    if (this.slideId == "duomo"){
      return mt2;
    } else {
      return mt1;
    }
  }

  getHeatmaps(){
    if (this.slideId == "duomo"){
      return hm2;
    } else {
      return hm1;
    }
  }

  getMarks(marktypes){
    if (this.slideId == "duomo"){
      return mark1;
    } else {
      return mark2;
    }
  }
  getMarkById(markId){
    if (markId == "triangle"){
      return mark1;
    } else {
      return slide2;
    }
  }
}
