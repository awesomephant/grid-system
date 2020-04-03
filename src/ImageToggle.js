import React from 'react';

export default class ImageToggle extends React.Component {
    constructor() {
        super();
        this.state = {
            selected: 0
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        const setting = e.target.getAttribute('name');
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        this.props.updateSetting(setting, value)
    }
    render() {
        return (
            <div className='setting imageToggle'>
                <label>{this.props.title}</label>

                <div className='images' data-active={this.props.settings}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                        <path d="M91,9V91H9V9H91m9-9H0V100H100V0Z" /></svg>
                    <svg className="toggle-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                        <path d="M50,9A41,41,0,1,1,9,50,41.0464,41.0464,0,0,1,50,9m0-9a50,50,0,1,0,50,50A50,50,0,0,0,50,0Z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M58.5,9V30.3056A11.2071,11.2071,0,0,0,69.6945,41.5H91v17H69.6945A11.2071,11.2071,0,0,0,58.5,69.6945V91h-17V69.6945A11.2071,11.2071,0,0,0,30.3055,58.5H9v-17H30.3055A11.2071,11.2071,0,0,0,41.5,30.3056V9h17m6.8055-9H34.6945A2.1945,2.1945,0,0,0,32.5,2.1944V30.3056A2.1945,2.1945,0,0,1,30.3055,32.5H2.1945A2.1945,2.1945,0,0,0,0,34.6944V65.3055A2.1945,2.1945,0,0,0,2.1945,67.5h28.111A2.1945,2.1945,0,0,1,32.5,69.6945v28.111A2.1945,2.1945,0,0,0,34.6945,100h30.611A2.1945,2.1945,0,0,0,67.5,97.8055V69.6945A2.1945,2.1945,0,0,1,69.6945,67.5h28.111A2.1945,2.1945,0,0,0,100,65.3055V34.6944A2.1945,2.1945,0,0,0,97.8055,32.5H69.6945A2.1945,2.1945,0,0,1,67.5,30.3056V2.1944A2.1945,2.1945,0,0,0,65.3055,0Z" /></svg>
                </div>
            </div>
        )
    }
}