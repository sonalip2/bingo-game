import s from './GridItem.module.scss';

const GridItem = ({item, index, isMiddle, onSelectItem}) => {
  const handleItemClick = () => {
    if(!isMiddle) {
      onSelectItem(index);
    }
  }
  return (
    <div
      className={[s.container, item.isSelected ? s.selected : '', isMiddle ? s.middle : ''].join(' ')}
      onClick={handleItemClick}
    >
      {isMiddle ? <div>{item.desc}</div> : item.desc}
    </div>
  )
};

export default GridItem;