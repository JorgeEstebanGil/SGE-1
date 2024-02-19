({
    myAction : function(component, event, helper) {

    },
    manejarEvento: function(cmp, event, helper){
        var pointsToAdd = event.getParam("molePoints");
        var marcador = componentget("v.marcador");
        if(pointsToAdd == 0){
            marcador = 0;
        }
        else{
            marcador += pointsToAdd;
        }
        cmp.set("v.marcador", marcador);
    }
})
