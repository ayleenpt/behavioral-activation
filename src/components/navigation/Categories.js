import '../../styles/navigation/Categories.css';

function Categories({ baseUrl, category }) {
  return (
    <div className="categories">
        {['routine', 'enjoyment', 'value'].map(cat => (
          <button
            key={cat}
            className={`category${cat === category ? ' selected-category' : ''}`}
            onClick={() => window.location.href = `/#/${baseUrl}/${cat}`}
          >
            {cat}
          </button>
        ))}
      </div>
  );
} export default Categories;