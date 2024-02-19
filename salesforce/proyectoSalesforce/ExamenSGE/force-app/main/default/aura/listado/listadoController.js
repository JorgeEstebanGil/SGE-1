({
    myAction : function(component, event, helper) {

    },
    addToList : function(component) {
        var lista = component.get("v.lista");
        var item = component.getParam("number");
        lista.push(item);
        component.set("v.lista", lista);
    },
    clearList: function(component, event, helper) {
        component.set("v.lista", []);
    }
})
