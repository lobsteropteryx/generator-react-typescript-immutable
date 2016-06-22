import <%=capModel%> from '../../app/models/<%=model%>';

describe("<%=capModel%>", () => {

    it("Can be instantiated", () => {
        var <%=model%> = new <%=capModel%>("some value");
        expect(<%=model%>).toEqual(jasmine.any(<%=capModel%>));
    });
});