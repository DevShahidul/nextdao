
import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { ArrowDown } from '../icons';
import styles from './Accordion.module.css';
class Panel extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			height: 0
		};
	}

	componentDidMount() {
		window.setTimeout(() => {
			const el = ReactDOM.findDOMNode(this);
            // console.log('Elements:', el);
			const height = el.querySelector('.panel__inner').scrollHeight;
			this.setState({
				height
			});
		}, 333);
	}

	render () {
		const { title, content, activeTab, index, activateTab } = this.props;
		const { height } = this.state;
		const isActive = activeTab === index;
		const innerStyle = {
			height:  `${isActive ? height : 0}px`
		}

		return (
			<div className={styles.accordion_item}
				role='tabpanel'
				aria-expanded={ isActive }>
                <h3 className={`d-flex align-center ${ !isActive ? styles.accordion_title : styles.accordion_title_active}`} role='tab' onClick={ activateTab }>
                    { title }
                    <button className={`btn ml-auto d-flex align-center justify-center ${ !isActive ? styles.accordion_btn : styles.accordion_btn_active }`}>
                        <ArrowDown className={styles.arrow} />
                    </button>
                </h3>
				<div className={`${styles.content} panel__inner`}
					style={ innerStyle }
					aria-hidden={ !isActive }>
                    {Object.entries(content).map((key, value, index) => 
                    {
                        const renderContent = (param)=> {
                            const createElement = (el) => {
                                // const checkLink = (tx) => {
                                //     txt.slice
                                // }
                               const para =  el[0] === 'p' && el[1].map(txt => React.createElement('p', {}, `${txt}`));
                               const list = el[0] === 'ul' && el[1].map(liTxt => React.createElement('li', {}, liTxt));
                               return (
                                   <>
                                   {para && para}
                                   {list && <ul>{list}</ul>}
                                   </>
                               );
                            }
                            return createElement(param);
                        }
                        return renderContent(key);
                    } 
                    )}
				</div>
			</div>
		);
	}
}

class Accordion extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			activeTab: 1
		};
		
		this.activateTab = this.activateTab.bind(this);
	}
	
	activateTab(index) {
		this.setState(prev => ({
			activeTab: prev.activeTab === index ? -1 : index
		}));
	}
	
	render() {
		const { panels } = this.props;
		const { activeTab } = this.state;
		return (
			<div className='accordion' role='tablist'>
				{panels.map((panel, index) =>
					<Panel
						key={ index }
						activeTab={ activeTab }
						index={ index }
						{ ...panel } 
						activateTab={ this.activateTab.bind(null, index) }
					/>
				)}
			</div>
		);
	}
}
export default Accordion;