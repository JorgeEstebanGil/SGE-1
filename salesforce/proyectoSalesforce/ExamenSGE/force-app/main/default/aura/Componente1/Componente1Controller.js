({
    myAction : function(component, event, helper) {

    },
    addNumber1 : function(component, event, helper) {
        var evt = $A.get("e.c:evtData");
        var obj ={
            "number" : "1"
        }
        evt.setParams(obj);
        evt.fire();
    },
    addNumber0 : function(component, event, helper) {
        var evt = $A.get("e.c:evtData");
        var obj ={
            "number" : "0"
        }
        evt.setParams(obj);
        evt.fire();
    },
})
