({
    myAction : function(component, event, helper) {

    },
    doInit : function(component, event, helper) {
        var action = component.get("c.getSavedLists");
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.savedLists", response.getReturnValue());
            } else {
                // Manejar el error
            }
        });
        $A.enqueueAction(action);
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
        component.set("v.Lista", [])
        component.set("v.isRecording", true);
    },
    Stop : function(component, event, helper) {
        component.set("v.isRecording", false);
    },
    Guardar : function(component, event, helper) {
        var action = component.get("c.saveList");
        var lista = component.get("v.lista");
        action.setParams({
            "numbers" : lista
        });
        component.set("v.Lista", [])
        $A.enqueueAction(action);
    }
    
})