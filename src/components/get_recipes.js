var api_url = "http://198.84.180.114:5500/api/get_recipes";

function getData(path, callback) {
  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType('application/json');
  xobj.open('GET', path, true);
  xobj.onreadystatechange = function() {
    if (xobj.readyState === 4 && xobj.status === 200) {
      callback(xobj.responseText);
    }
  }
  xobj.send(null);
};

export function loadMealData(query, mealType, cuisineType, calorieRange, healthLabels) {
  let args = [
    mealType,
    cuisineType,
    calorieRange,
    healthLabels
  ];

  let arg_vals = []

  for (let i = 0; i < args.length; i++) {
    if (args[i] == undefined || args[i] == null) {
      arg_vals[i] = '';
    } else {
      arg_vals[i] = args[i];
    }
  }

  var url = api_url + `?q=${query}&image_size=THUMBNAIL&meal_type=${arg_vals[0]}&cuisine_type=${arg_vals[1]}&calories=${arg_vals[2]}&health=${arg_vals[3]}`;
  console.log(url);
  getData(url, (data) => {
    let jsonData = JSON.parse(data);
    let recipes = [];

    for (let i = 0; i < jsonData.length; i++) {
      let x = jsonData[i];

      let name = x['name'];
      let servings = x['servings'];
      let thumbnail = x['thumbnail'];
      let dietsLabels = x['diet_labels'];
      let calories = x['calories'];
      let healthLabels = x['health_labels'];
      let ingredients = [];
      for (let j = 0; j < x['ingredients'].length; j++) {
        let y = x['ingredients'];
        ingredients.push({
          'name': y['name'],
          'image': y['image'],
          'grams': y['grams']
        });
      }

      recipes.push({
        'name': name,
        'servings': servings,
        'thumbnail': thumbnail,
        'dietsLabels': dietsLabels,
        'calories': calories,
        'healthLabels': healthLabels,
        'ingredients': ingredients 
      });
    }
    
    return recipes;
  });
};
