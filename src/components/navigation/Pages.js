import '../../styles/navigation/Navigation.css';

function Pages({ baseUrl, category }) {
  return (
    <div className="navigation pages">
        {['hierarchy', 'tracker'].map(base => (
          <button
            key={base}
            className={`path${base === baseUrl ? ' selected-path' : ''}`}
            onClick={() => window.location.href = `/#/${base}/${category}`}
          >
            {base}
          </button>
        ))}
      </div>
  );
} export default Pages;