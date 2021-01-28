import { useState } from 'react';
import Grid from '../Grid';
import gameData from '../../utils/gameData'; 
import s from './GameBoard.module.scss';

const middlePoint = Math.floor(gameData.length / 2);
const points = {
  0: {points: [0,1,2,3,4], isCelebrated: false},
  1: {points: [5,6,7,8,9], isCelebrated: false},
  2: {points: [10,11,12,13,14], isCelebrated: false},
  3: {points: [15,16,17,18,19], isCelebrated: false},
  4: {points: [20,21,22,23,24], isCelebrated: false},
  5: {points: [0,5,10,15,20], isCelebrated: false},
  6: {points: [1,6,11,16,21], isCelebrated: false},
  7: {points: [2,7,12,17,22], isCelebrated: false},
  8: {points: [3,8,13,18,23], isCelebrated: false},
  9: {points: [4,9,14,19,24], isCelebrated: false},
  10: {points: [0,6,12,18,24], isCelebrated: false},
  11: {points: [4,8,12,16,20], isCelebrated: false},
}

const checker = (arr, target) => target.every(v => arr.includes(v));

const GameBoard = () => {
  const [items, setItems] = useState(gameData)
  const [bingoPoints, setBingoPoints] = useState(points);
  const [celebrate, setCelebrate] = useState(false);

  const handleSelectItem = (index) => {
    const newItems = [...items];
    if(newItems[index] && newItems[index].isSelected) {
      newItems[index].isSelected = false;
    } else {
      newItems[index].isSelected = true;
    }
    
    setItems(newItems);
    checkForBingo(newItems);
  }

  const checkForBingo = (newItems) => {
    const selectedPoints = [middlePoint]
    newItems.forEach((item, i) => {
      if(item.isSelected) {
        selectedPoints.push(i);
      }
    });

    const newBingoPoints = {...bingoPoints};
    let isPlayCelebrate = false;
    Object.values(bingoPoints).forEach((bingoPoint, i) => {
        const isAllIncluded = checker(selectedPoints, bingoPoint.points);
        if(isAllIncluded && !newBingoPoints[i].isCelebrated) {
          isPlayCelebrate = true
        }
        newBingoPoints[i].isCelebrated = isAllIncluded;
    });

    if(isPlayCelebrate) {
      setCelebrate(true);
      setTimeout(() => {
        setCelebrate(false);
      }, 5000)
    }
    setBingoPoints(newBingoPoints);
  }

  return (
    <div className={s.container}>
      {celebrate && (<div className={s.pyro}>
        <div className={s.before}></div>
        <div className={s.after}></div>
      </div>)}
      <Grid items={items} onSelectItem={handleSelectItem} middlePoint={middlePoint} />
    </div>
  );
};

export default GameBoard;