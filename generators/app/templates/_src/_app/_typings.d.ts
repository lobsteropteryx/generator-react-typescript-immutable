declare module <%=name%> {
    export interface I<%=capName%> Props {
        someProperty: string
    }

    export interface I<%=capName%> State {

    }

    export class < %=capModel%> implements I < %= capName % > Props {
        constructor(public someProperty: string)
    }
}