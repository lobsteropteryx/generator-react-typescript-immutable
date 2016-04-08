export interface I<%=capName%>Props {
    someProperty: string
}

export interface I<%=capName%>State {

}

export default class <%=capModel%> implements I<%=capName%>Props {
    constructor(public someProperty: string) {
        Object.freeze(this); // Raise an exception if we mutate
    }
};