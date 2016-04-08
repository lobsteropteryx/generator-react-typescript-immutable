/// <reference path="../../../typings/tsd.d.ts" />

import * as React from 'react';

export default class <%=capName%> extends React.Component<I<%=capName%>Props, I<%=capName%>State> {
    constructor(props:I<%=capName%>Props) {
        super(props);
    }

    public render() {
        return <div>
                {props.someProperty}
            </div>
    }
}