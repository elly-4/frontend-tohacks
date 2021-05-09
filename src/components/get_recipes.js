var api_url = "http://198.84.180.114:5500/api/get_recipes";

async function getData(path) {
  var response = await fetch(path);
  var data = await response.json();
  console.log(data);
  return data;
};

export async function loadMealData(query, mealType, cuisineType, calorieRange, healthLabels) {
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
  var data = await getData(url);
  console.log(data);
  let jsonData = data;
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
  console.log(recipes);

  return recipes;
};
