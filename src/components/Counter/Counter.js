export const Counter = () => {
    const handleIncrement = () => {
        console.log("Збільшити на 1");
    };

    const handleDecrement = () => {
        console.log("Зменшити на 1");
    };

    return (
        <div className="Counter">
            <span className="Counter_value">0</span>

            <div className="Counter_controls">
                <button type="button" onClick={handleIncrement}>
                    Збільшити на 1
                </button>
                <button type="button" onClick={handleDecrement}>
                    Зменшити на 1
                </button>
            </div>
        </div>
    );
};
