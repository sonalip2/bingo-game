import GridItem from '../GridItem';
import s from './Grid.module.scss';

const Grid = ({items, onSelectItem, middlePoint}) => {
  return (
    <div className={s.container}>
      {items.map((item, i) => (
        <GridItem key={item.desc} item={item} index={i} isMiddle={middlePoint === i} onSelectItem={onSelectItem} />
      ))}
    </div>
  )
};

export default Grid;