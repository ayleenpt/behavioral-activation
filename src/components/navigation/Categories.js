import Styles from '../../styles/Styles.module.css';
import '../../styles/navigation/Navigation.css';

function Categories({ baseUrl, category }) {
  return (
    <div className="navigation categories">
        {['routine', 'enjoyment', 'value'].map(cat => (
          <button
            key={cat}
            className={`path ${cat === category ? Styles.blueBackground : ''}`}
            onClick={() => window.location.href = `/#/${baseUrl}/${cat}`}
          >
            {cat}
          </button>
        ))}
      </div>
  );
} export default Categories;