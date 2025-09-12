import '../../styles/navigation/Navigation.css';

function Categories({ baseUrl, category }) {
  return (
    <div className="navigation categories">
        {['routine', 'enjoyment', 'value'].map(cat => (
          <button
            key={cat}
            className={`path${cat === category ? ' selected-path' : ''}`}
            onClick={() => window.location.href = `/#/${baseUrl}/${cat}`}
          >
            {cat}
          </button>
        ))}
      </div>
  );
} export default Categories;