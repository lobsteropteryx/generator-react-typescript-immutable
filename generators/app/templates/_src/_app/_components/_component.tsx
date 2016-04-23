import * as React from 'react';
import <%=capModel%>, {I<%=capModel%>, I<%=capName%>State} from '../models/<%=model%>';

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