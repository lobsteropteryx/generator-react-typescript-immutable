/// <reference path="../../../typings/tsd.d.ts" />

import <%=capModel%> from '../../app/models/<%=capModel%>';
//
describe("<%=capModel%>", () => {

    it("Can be instantiated", () => {
        var <%=model%> = new <%=capModel%>("some value");
        expect(<%=model%>).toEqual(jasmine.any(<%=capModel%>));
    });
});