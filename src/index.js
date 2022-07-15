import './scss/index.scss';
import './scss/calc.scss';
import './js/index';
const importAll = (r) => r.keys().map(r)
const images = importAll(
  require.context('./img/', true, /.(?:png|jpeg|jpg|svg)$/i)
)

