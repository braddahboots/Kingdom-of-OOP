import LivingThing from './LivingThing';

export default class Eukaryota extends LivingThing {

  constructor( name, uniCellular, asexual, mobile, heterotroph ) {
    super( name, uniCellular, true, false, asexual, mobile );
    this._name = name;
    this._heterotroph = heterotroph;
  }

  get heterotroph() {
    return this._heterotroph;
  }

  set heterotroph ( hp ) {
    this._heterotroph = hp;
  }

  get autotroph() {
    return !this._heterotroph;
  }

  set autotroph( ap ) {
    this._heterotroph = !ap;
  }
}