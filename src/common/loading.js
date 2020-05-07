import React from 'react';
import "../style/loading.less";

class Loading extends React.Component {
    render () {
        return (<div id="outer">
            <div id="middle">

                <div id="inner" />
            </div>
        </div>
        );
    }
}
export default Loading;
