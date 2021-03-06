import Eukaryota from './Eukaryota';

export default class Animal extends Eukaryota {

  constructor( name, symmetry ) {
    super( name, false, false, true, true);
    this._name = name;
    this._symmetry = symmetry;
  }

  get symmetry() {
    return this._symmetry;
  }

  set symmetry ( sym ) {
    this._symmetry = sym;
  }
}