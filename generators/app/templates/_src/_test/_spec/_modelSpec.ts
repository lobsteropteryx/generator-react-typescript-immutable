/// <reference path="../../typings/tsd.d.ts" />

import <%=capModel%> from '../../app/models/<%=capModelName%>';
//
describe("<%=capModelName%>", () => {

    it("Can be instantiated", () => {
        var <%=model%> = new <%=capModel%>(store);
        expect(<%=model%>).toEqual(jasmine.any(<%=capModel%>));
    });
});