import '../../styles/history/History.css';
import Pages from '../navigation/Pages';
import Categories from '../navigation/Categories';

function History({ category }) {
  return (
    <div className="history">
      <Pages baseUrl="history" category={category} />
      <Categories baseUrl="history" category={category} />
      <h1>TODO: tracking history</h1>
    </div>
  )
} export default History;