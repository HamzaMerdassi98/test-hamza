export class Post {
  _id: string;
  titre: string;
  contenu: string;

  constructor(id: string, titre: string, contenu: string) {
    this._id = id;
    this.titre = titre;
    this.contenu = contenu;
  }
}
