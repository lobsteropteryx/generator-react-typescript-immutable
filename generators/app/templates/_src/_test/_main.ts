/// <reference path="../../typings/tsd.d.ts" />

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import <%= capModel %> from "./<%= model %>";
import <%= capName %> from "./<%= name %>";

(function () {
    const <%= model %> = new <%= capModel %>("Some property value");
    const renderApp = () => {
        ReactDOM.render(React.createElement(<%= capName =>, <%= model %>), document.getElementById('content'));
    };
    renderApp();
})();