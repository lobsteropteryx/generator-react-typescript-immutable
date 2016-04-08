interface I<%=capName%>Props {
    someProperty: string
}

interface I<%=capName%>State {

}

export default class <%=capModel%>Props implements I<%=capName%>Props {
    constructor(public someProperty: string) {
        Object.freeze(); // Raise an exception if we mutate
    }
};