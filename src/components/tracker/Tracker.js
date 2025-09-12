import TrackerHeader from './TrackerHeader';
import Pages from '../navigation/Pages';
import Categories from '../navigation/Categories';
import '../../styles/tracker/Tracker.css';

function Tracker({ category }) {
  return (
    <div className="tracker">
      <Pages baseUrl="tracker" category={category} />
      <Categories baseUrl="tracker" category={category} />
      <div className="tracker-grid">
        <TrackerHeader />
      </div>
    </div>
  )
} export default Tracker