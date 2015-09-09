import Eukaryota from './Eukaryota';

export default class Plan extends Eukaryota {

  constructor( name ) {
    super( name, false, true, false, false);
    this._name = name;

  }
}