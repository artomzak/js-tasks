import './scss/index.scss'
import './scss/slider.scss'
const importAll = (r) => r.keys().map(r)
const images = importAll(
  require.context('./img/', true, /.(?:png|jpeg|jpg|svg)$/i)
)

