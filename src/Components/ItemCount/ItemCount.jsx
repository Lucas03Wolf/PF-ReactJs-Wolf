import './styles.css';

const ItemCount = ({ stock, setCount, count }) => {
    const onAdd = () => {
        if (count === stock) return;
        setCount(count + 1);
    };

    const onSubstract = () => {
        if (count === 0) return;
        setCount(count - 1)
    };

    return (
        <div className='counter'>
            <button onClick={onSubstract}>-</button>
            <span>{count}</span>
            <button onClick={onAdd}>+</button>
        </div>
    );
};

export default ItemCount;