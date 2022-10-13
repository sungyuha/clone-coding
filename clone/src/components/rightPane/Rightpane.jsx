import React from 'react-router-dom'
import { Timeline } from 'react-twitter-widgets';
import { searchicon } from './icons';
import './rightpane.scss';

const Rightpane = () => {
    return (
        <aside className="right-pane">
            <div className="container">
                <span>{searchicon}</span>
                <input type="text" placeholder="Search Twitter" className="txt"/>
            </div>
            <div className="time-line">
                <Timeline
                    dataSource={{
                        sourceType: "profile",
                        screenName: "YouTube"
                    }}
                    options={{
                        height: "1000"
                    }}
                />
            </div>
        </aside>
    )
}

export default Rightpane;