import React, { Component } from "react";
import { ArrowDown } from "../icons";
import styles from "./Accordion.module.css";
class Panel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      height: 0,
    };
    this.wrapper = React.createRef();
  }

  componentDidMount() {
    window.setTimeout(() => {
      const height = this.wrapper.current.children[1].scrollHeight;
      this.setState({
        height,
      });
    }, 333);
  }

  render() {
    const { title, content, activeTab, index, activateTab } = this.props;
    const { height } = this.state;
    const isActive = activeTab === index;
    const innerStyle = {
      height: `${isActive ? height : 0}px`,
    };

    return (
      <div className={styles.accordion_item} ref={this.wrapper} role="tabpanel">
        <h3
          className={`d-flex align-center ${
            !isActive ? styles.accordion_title : styles.accordion_title_active
          }`}
          role="tab"
          onClick={activateTab}
        >
          {title}
          <button
            className={`btn ml-auto d-flex align-center justify-center ${
              !isActive ? styles.accordion_btn : styles.accordion_btn_active
            }`}
          >
            <ArrowDown className={styles.arrow} />
          </button>
        </h3>
        <div
          className={`${styles.content} panel__inner`}
          style={innerStyle}
          aria-hidden={!isActive}
        >
          {content.map((item, idx) => {
            const paragraphs = item.type === 'p' && item.texts.map((txt, i) => <p key={`paragraph_${idx}_${i+1}`}>{txt}</p>);
            const lists = item.type === 'ul' && <ul>{item.texts.map((txt, i) => <li key={`list_${idx}_${i+1}`}>{txt}</li> )}</ul>;
            const codes = item.type === 'code' && item.texts.map((txt, i) => <code key={`code_${idx}_${i+1}`}>{txt}</code>);
            
            return [paragraphs, lists, codes];
          })}
        </div>
      </div>
    );
  }
}

class Accordion extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: 1,
    };

    this.activateTab = this.activateTab.bind(this);
  }

  activateTab(index) {
    this.setState((prev) => ({
      activeTab: prev.activeTab === index ? -1 : index,
    }));
  }

  render() {
    const { panels } = this.props;
    const { activeTab } = this.state;
    return (
      <div className="accordion" role="tablist">
        {panels.map((panel, index) => (
          <Panel
            key={`accordion_item_${index + 1}`}
            activeTab={activeTab}
            index={index}
            {...panel}
            activateTab={this.activateTab.bind(null, index)}
          />
        ))}
      </div>
    );
  }
}
export default Accordion;
