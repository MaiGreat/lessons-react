import React from "react";
import Controls from "./Controls";
import './Counter.css'

export class Counter extends React.Component {
    // constructor() {
    //     super();

    //     this.state = {
    //         value: 0,
    //     };
    // }
    static defaultProps = {
        initialValue: 0,
    }

    //описуємо тут пропси static propTypes = {

    // }
// Об'явили публічне властивість
    state = {
    value: this.props.initialValue,
}

    handleIncrement = () => {
        // якщо потрібно оновити. Записати нове значення. Потрібно передавати лише те значення яко хочемо змінити
        // передаємо ОБ'ЄКТ {}
        // this.setState({})

        // Щоб змінити стана від попереднього (збільшити/зменшити) значення потрібно передвати ФУНЦІЮ
        // передасть в prevState актуальний стан на момент оновлення
        this.setState(prevState => {
            return {
                value: prevState.value + 1,
            }
        });
            // this.state.value = 56  !!!!!!!!!! так робити НЕ МОЖНА !!!!!!!!
        // console.log("Збільшити на 1");
        // setTimeout(() => {
        //     console.log(evt.target);
        // }, 1000);
    };

    handleDecrement = () => {
        this.setState(prevState => {
            return {
                value: prevState.value - 1,
            }
        });
    };

    render() {
        return (
        <div className="Counter">
            <span className="Counter_value">{this.state.value}</span>
                <Controls
                    onIncrement={this.handleIncrement}
                    onDecrement={this.handleDecrement}
                />
            {/* <div className="Counter_controls">
                <button type="button" onClick={this.handleIncrement}>
                    Збільшити на 1
                </button>
                <button type="button" onClick={this.handleDecrement}>
                    Зменшити на 1
                </button>
            </div> */}
        </div>
    );
    }
    
}

