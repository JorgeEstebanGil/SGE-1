({
    myAction : function(component, event, helper) {

    },
    addToList : function(component, event) {
        if (component.get("v.isRecording")) { // changed from "isRecording" to "v.isRecording"
            var lista = component.get("v.lista");
            var item = event.getParam("number");
            lista.push(item);
            component.set("v.lista", lista);
        }
    },
    clearList: function(component, event, helper) {
        component.set("v.lista", []);
    },
    Grabar : function(component, event, helper) {
        component.set("v.isRecording", true);
    },
    Stop : function(component, event, helper) {
        component.set("v.isRecording", false);
    }
})