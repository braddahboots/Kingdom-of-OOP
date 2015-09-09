export default class LivingThing {

  constructor(name, uniCellular, trueNucleus, anaerobic, asexual, mobile) {
    this._name = name;
    this._uniCellular = uniCellular;
    this._trueNucleus = trueNucleus;
    this._anaerobic = anaerobic;
    this._asexual = asexual;
    this._mobile = mobile;
  }

  get name() {
    return this._name;
  }

  set name( n ) {
    this._name = n;
  }

  get uniCellular() {
    return this._uniCellular;
  }

  set uniCellular( uc ) {
    this._uniCellular = uc;
  }

  get multiCellular() {
    return !this._uniCellular;
  }

  set multiCellular( mc ) {
    this._uniCellular = !mc;
  }

  get eukaryote() {
    return this._trueNucleus;
  }

  set eukaryote( eu ) {
    this._trueNucleus = eu;
  }

  get prokaryote() {
    return !this._trueNucleus;
  }

  set prokaryote( pro ) {
    this._trueNucleus = !pro;
  }

  get anaerobic() {
    return this._anaerobic;
  }

  set anaerobic( ac ) {
    this._anaerobic = ac;
  }

  get aerobic() {
    return !this._anaerobic;
  }

  set aerobic ( ac ) {
    this._anaerobic = !ac;
  }

  get asexual() {
    return this._asexual;
  }

  set asexual( ax ) {
    this._asexual = ax;
  }

  get sexual() {
    return !this._asexual;
  }

  set sexual( al ) {
    this._asexual = !al;
  }

  get mobile() {
    return this._mobile;
  }

  set mobile( mo ) {
    this._mobile = mo;
  }

  get immobile() {
    return !this._mobile;
  }

  set immobile( im ) {
    this._mobile = !im;
  }

}


