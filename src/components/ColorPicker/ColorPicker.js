import React, {Component} from "react";
import './ColorPicker.css';

class ColorPicker extends Component {
    state = {
        activeOptionInx: 0,
    }
    
    makeOptionClassName = index => {
        const optionClass = ['ColorPicker_option'];

        if (index === this.state.activeOptionInx) {
            optionClass.push('ColorPicker_option-active');
        }
        return optionClass.join(' ');
    }

    render() {
        return (
            <div className="ColorPicker">
                <h2 className="ColorPicker_title">
                    Color Picker
                </h2>
                <div>
                    {this.props.options.map(({ label, color }, index) => (
                        <button
                            key={label}
                            className={this.makeOptionClassName(IDBIndex)}
                            style={{ backgroundColor: color }}>
                        </button>
                    ))}
                </div>
            </div>
        );
    }
};

export default ColorPicker;
