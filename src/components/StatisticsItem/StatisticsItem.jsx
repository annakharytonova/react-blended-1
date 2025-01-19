import style from './StatisticsItem.module.css';

const StatisticsItem = ({ icon, total, title }) => {
  return (
    <>
      {icon}
      <span className={style.counter}>{total}</span>
      <p className={style.text}>{title}</p>
    </>
  );
};

export default StatisticsItem;
