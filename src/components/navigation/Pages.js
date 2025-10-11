import Styles from '../../styles/Styles.module.css'
import '../../styles/navigation/Navigation.css';

function Pages({ baseUrl, category }) {
  return (
    <div className="navigation pages">
        {['hierarchy', 'tracker', 'history'].map(base => (
          <button
            key={base}
            className={`path ${base === baseUrl ? Styles.blueSelectedPage : ''}`}
            onClick={() => window.location.href = `/#/${base}/${category}`}
          >
            {base}
          </button>
        ))}
      </div>
  );
} export default Pages;