export class Favorites {
  public name: string;
  public ingredients: string;
  public glass: string;
  public imagePath: string;

  constructor(
    name: string,
    ingredients: string,
    glass: string,
    imagePath: string
  ) {
    this.name = name;
    this.ingredients = ingredients;
    this.glass = glass;
    this.imagePath = imagePath;
  }
}
