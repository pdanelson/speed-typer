define(['react', 'react-dom', './SpeedTyper.jsx'], (React, ReactDOM, SpeedTyper) => {
  const words = ['disturb', 'development', 'inexplosive', 'fashionably', 'laniferous', 'baseless',
  'tetartohedral', 'comprehensive', 'deflected', 'infectiousness', 'impenetrable', 'gyroscopic'];
  ReactDOM.render(<SpeedTyper words={words} />, document.getElementById('container'));
});
