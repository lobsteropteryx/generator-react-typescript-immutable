/// <reference path="../../typings/index.d.ts" />

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import <%= capModel %> from "../app/models/<%= model %>";
import <%= capName %> from "../app/components/<%= name %>";

(function () {
    const <%= model %> = new <%= capModel %>("Some property value");
    const renderApp = () => {
        ReactDOM.render(React.createElement(<%= capName %>, <%= model %>), document.getElementById('content'));
    };
    renderApp();
})();