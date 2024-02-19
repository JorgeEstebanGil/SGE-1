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
    addList : function(component, event, helper) {
        var newList = component.get("v.lista");
        var lists = component.get("v.lists");
        lists.push(newList);
        component.set("v.lists", lists);
    },
    clearList: function(component, event, helper) {
        component.set("v.lista", []);
    },
    Grabar : function(component, event, helper) {
        component.set("v.lista", [])
        component.set("v.isRecording", true);
    },
    Stop : function(component, event, helper) {
        component.set("v.isRecording", false);
        var a = component.get('c.addList');
        $A.enqueueAction(a);
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