import '../../styles/hierarchy/HierarchyHeader.css';

function HierarchyHeader() {
  return (
    <div className="hierarchy-header">
      <div className="header-box difficulty-header">difficulty</div>
      <div className="header-box task-header">task</div>
      <div className="header-box sort-header">
        <span>sort by</span>
        <span>▼</span>
      </div>
    </div>
  );
} export default HierarchyHeader;