/// <reference path="../../../typings/tsd.d.ts" />

import * as React from 'react';
import {<%=capModel%>, I<%=capModel%>Props,I<%=capModel%>State} from '../models/<%=capModel%>';

export default class <%=capName%> extends React.Component<I<%=capName%>Props, I<%=capName%>State> {
    constructor(props:I<%=capName%>Props) {
        super(props);
    }

    public render() {
        return <div>
                {this.props.someProperty}
            </div>
    }
}